import './OrderManagement.css';
import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

const OrderManagement = () => {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showFailModal, setShowFailModal] = useState(false);
    const [serviceTypes, setServiceTypes] = useState([]);
    const [invoicings, setInvoicings] = useState([]);
    const [serviceObjects, setServiceObjects] = useState([]);
    const [initiators, setInitiators] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [installation, setinstallation] = useState([]);


    const [Order, setOrder] = useState({
        orderNumber: '',
        serviceObject: '',
        companyName: '',
        initiatorName: '',
        initiatorContact: '',
        serviceType: '',
        invoicing: '',
        message: '',
        address: '',
        contactPerson: '',
        location: ''
    });

    const fetchData = async () => {
        try {
            const [invoicingResponse, serviceObjectsResponse, serviceTypesResponse, initiatorsResponse, companiesResponse, installationResponse] = await Promise.all([
                axios.get('https://localhost:7141/api/Invoicing'),
                axios.get('https://localhost:7141/api/ServiceObject'),
                axios.get('https://localhost:7141/api/ServiceType'),
                axios.get('https://localhost:7141/ServiceField.Server/User'),
                axios.get('https://localhost:7141/api/MasterDataCompanies'),
                axios.get('https://localhost:7141/ServiceField/Installation'),
            ]);

            setInvoicings(invoicingResponse.data);
            setServiceObjects(serviceObjectsResponse.data);
            setServiceTypes(serviceTypesResponse.data);
            setInitiators(initiatorsResponse.data);
            setCompanies(companiesResponse.data);
            setinstallation(installationResponse.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder(prevOrder => ({
            ...prevOrder,
            [name]: value
        }));

        if (name === 'companyName') {
            const selectedCompany = companies.find(company => company.name === value);
            if (selectedCompany) {
                setOrder(prevOrder => ({
                    ...prevOrder,
                    idCompany: selectedCompany.id,
                    location: selectedCompany.position || '', 
                    address: selectedCompany.parentCopmany || '', 
                    contactPerson: selectedCompany.responsableUser || ''
                }));
                console.log('Selected Company Data:', selectedCompany);
            }
        }

        if (name === 'initiatorName') {
            const selected = initiators.find(initiator => `${initiator.firstName} ${initiator.lastName}` === value);
            setOrder(prevOrder => ({
                ...prevOrder,

                idInitiator: selected ? selected.id : '',
                initiatorContact: selected ? `${selected.email}, ${selected.phoneNumber}` : ''
            }));
        }
    



        if (name === 'installationName') {
            // Find the installation using the correct backend property
            const selectedInstallation = installation.find(install => install.installationType === value);

            if (selectedInstallation) {
                setOrder(prevOrder => ({
                    ...prevOrder,
                    idInstallation: Number(selectedInstallation.installationNumber) // Use installationNumber here
                }));
                console.log('Selected Installation Data:', selectedInstallation);
            } else {
                // Handle case where no installation was found
                setOrder(prevOrder => ({
                    ...prevOrder,
                    idInstallation: '' // Reset or clear the ID if no match found
                }));
            }
        }




};


    const handleSubmit = async (e) => {
        e.preventDefault();



        const orderData = {
            ...Order,
            orderNumber: parseInt(Order.orderNumber),
            idCompany: parseInt(Order.idCompany),
           idInstallation: parseInt(Order.idInstallation), 
            idInitiator: parseInt(Order.idInitiator),
            initiatorName: Order.initiatorName,
            initiatorContact: Order.initiatorContact,
            
            location: Order.location,
            address: Order.address,
            contactPerson: Order.contactPerson,
            companyName: Order.companyName
        };

        console.log('Order Data:', orderData);

        try {
            const response = await axios.post('https://localhost:7141/api/ServiceOrders', orderData);
            console.log(response.data);
            setShowSuccessModal(true);
            setTimeout(() => setShowSuccessModal(false), 3000);
        } catch (error) {
            console.error('There was an error adding the Order!', error);

            if (error.response) {
                console.error('Error response data:', error.response.data);
                console.error('Error response status:', error.response.status);
                console.error('Error response headers:', error.response.headers);
            } else if (error.request) {
                console.error('Error request:', error.request);
            } else {
                console.error('Error message:', error.message);
            }

            setShowFailModal(true);
            setTimeout(() => setShowFailModal(false), 3000);
        }
    };

    return (
        <div className="flex">
            <SideBar />
            <div className="flex-1">
                <ShowNavBar />
                <div className="p-4">
                    <form onSubmit={handleSubmit}>
                        <h2 className="h2">Service Order Form</h2>
                        <h3 className="h3">Order Information</h3>
                        <div className="all">
                            <Form.Label className="custom-label">Order Number</Form.Label>
                            <Form.Control
                                placeholder="Enter Order Number"
                                className="custom-input"
                                name="orderNumber"
                                value={Order.orderNumber}
                                onChange={handleChange}
                            />

                            <div className="form-row">
                                <div className="form-column">
                                    <Form.Label className="custom-label">Service Object</Form.Label>
                                    <Form.Select
                                        className="custom-input"
                                        aria-label="Select Service Object"
                                        name="serviceObject"
                                        value={Order.serviceObject}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Service Object</option>
                                        {serviceObjects.map(obj => (
                                            <option key={obj.serviceObjectId} value={obj.serviceObjectName}>
                                                {obj.serviceObjectName}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </div>

                               
                            

                  

                                <div className="form-column">
                                    <Form.Label className="custom-label">Installation Name</Form.Label>
                                    <Form.Select
                                        className="custom-input"
                                        aria-label="Select Installation Name"
                                        name="installationName"
                                        value={Order.installationName}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Installation Name</option>
                                        {installation.map(install => (
                                            <option key={install.installationNumber} value={install.name}>
                                                {install.name} {install.installationType}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </div>
                            </div>



                            <div className="form-row">
                                <div className="form-column">
                                    <Form.Label className="custom-label">Initiator Name</Form.Label>
                                    <Form.Select
                                        className="custom-input"
                                        aria-label="Select Initiator Name"
                                        name="initiatorName"
                                        value={Order.initiatorName}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Initiator Name</option>
                                        {initiators.map(initiator => (
                                            <option key={initiator.id} value={`${initiator.firstName} ${initiator.lastName}`}>
                                                {`${initiator.firstName} ${initiator.lastName}`}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </div>

                                <div className="form-column">
                                    <Form.Group controlId="initiatorContact">
                                        <Form.Label className="custom-label">Initiator Contact</Form.Label>
                                        <Form.Control
                                            placeholder="Initiator Contact"
                                            className="custom-input"
                                            name="initiatorContact"
                                            value={Order.initiatorContact}
                                            onChange={handleChange}
                                            readOnly
                                        />
                                    </Form.Group>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-column">
                                    <Form.Label className="custom-label">Service Type</Form.Label>
                                    <Form.Select
                                        className="custom-input"
                                        aria-label="Select Service Type"
                                        name="serviceType"
                                        value={Order.serviceType}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Service Type</option>
                                        {serviceTypes.map(type => (
                                            <option key={type.serviceTypeId} value={type.serviceTypeName}>
                                                {type.serviceTypeName}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </div>

                                <div className="form-column">
                                      <Form.Label className="custom-label">Invoicing Type</Form.Label>
                                    <Form.Select
                                        className="custom-input"
                                        aria-label="Select Invoicing Type"
                                        name="invoicing"
                                        value={Order.invoicing}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Invoicing Type</option>
                                        {invoicings.map(inv => (
                                            <option key={inv.invoicingId} value={inv.invoicingType}>
                                                {inv.invoicingType}
                                            </option>
                                        ))}

                                    </Form.Select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-column">
                                    <Form.Label className="custom-label">Company Name</Form.Label>
                                    <Form.Select
                                        className="custom-input"
                                        aria-label="Select Company Name"
                                        name="companyName"
                                        value={Order.companyName}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Company Name</option>
                                        {companies.map(company => (
                                            <option key={company.id} value={company.name}>
                                                {company.name}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </div>


                            </div>
                            <h3 className="h3">Dispatch Location</h3>

                            <div className="form-row">
                                <div className="form-column">
                                    <Form.Label className="custom-label">Address</Form.Label>
                                    <Form.Control
                                        placeholder="Address"
                                        className="custom-input"
                                        name="address"
                                        value={Order.address}
                                        onChange={handleChange}
                                        readOnly
                                    />
                                </div>
                                <div className="form-column">
                                    <Form.Label className="custom-label">Contact Person</Form.Label>
                                    <Form.Control
                                        placeholder="Contact Person"
                                        className="custom-input"
                                        name="contactPerson"
                                        value={Order.contactPerson}
                                        onChange={handleChange}
                                        readOnly
                                    />
                                </div>

                                <div className="form-column">
                                    <Form.Label className="custom-label">Location</Form.Label>
                                    <Form.Control
                                        placeholder="Location"
                                        className="custom-input"
                                        name="location"
                                        value={Order.location}
                                        onChange={handleChange}
                                        readOnly
                                    />
                                </div>
                            </div>
                                <Form.Group controlId="message">

                                    <div className="form-column">
                                        <Form.Label className="custom-label">Message</Form.Label>
                                        <Form.Control
                                            placeholder="Enter Message"
                                            className="custom-input"
                                            name="message"
                                            as="textarea"
                                            rows={3}
                                            style={{ resize: 'both' }}
                                            value={Order.message}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </Form.Group>
                          
                        </div>

                        <button type="submit" className="sub" onSubmit={handleSubmit}>Submit</button>
                    </form>

                    <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} className="modal-success">

                        <Modal.Body>Order has been successfully submitted!</Modal.Body>
                    </Modal>

                    <Modal show={showFailModal} onHide={() => setShowFailModal(false)} className="modal-fail">
                        <Modal.Body>Adding failed!</Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default OrderManagement;

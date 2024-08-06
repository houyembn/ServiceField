
import './OrderManagement.css';
import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
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

    const [Order, setOrder] = useState({
        orderNumber: '',
        serviceObject: '',
        idCompany: '',
        companyName: '',
        idInstallation: '',
        installationName: '',
        idInitiator: '',
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
            const [invoicingResponse, serviceObjectsResponse, serviceTypesResponse] = await Promise.all([
                axios.get('https://localhost:7141/api/Invoicing'),
                axios.get('https://localhost:7141/api/ServiceObject'),
                axios.get('https://localhost:7141/api/ServiceType')
            ]);

            setInvoicings(invoicingResponse.data);
            setServiceObjects(serviceObjectsResponse.data);
            setServiceTypes(serviceTypesResponse.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder({ ...Order, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Ensure correct data types
        const orderData = {
            ...Order,
 
            orderNumber: parseInt(Order.orderNumber),
            idCompany: parseInt(Order.idCompany),
            idInstallation: parseInt(Order.idInstallation),
            idInitiator: parseInt(Order.idInitiator),
           
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
                                    <Form.Label className="custom-label">ID Company</Form.Label>
                                    <Form.Control
                                        id="idCompany"
                                        placeholder="Enter ID Company"
                                        className="custom-input"
                                        name="idCompany"
                                        value={Order.idCompany}
                                        onChange={handleChange}
                                    />
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
                                        <option value="1">Company 1</option>
                                        <option value="2">Company 2</option>
                                        <option value="3">Company 3</option>
                                    </Form.Select>
                                </div>

                                <div className="form-column">
                                    <Form.Label className="custom-label">ID Installation</Form.Label>
                                    <Form.Control
                                        placeholder="Enter ID Installation"
                                        className="custom-input"
                                        name="idInstallation"
                                        value={Order.idInstallation}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
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
                                        <option value="1">Installation 1</option>
                                        <option value="2">Installation 2</option>
                                        <option value="3">Installation 3</option>
                                    </Form.Select>
                                </div>

                                <div className="form-column">
                                    <Form.Label className="custom-label">ID Initiator</Form.Label>
                                    <Form.Control
                                        placeholder="Enter ID Initiator"
                                        className="custom-input"
                                        name="idInitiator"
                                        value={Order.idInitiator}
                                        onChange={handleChange}
                                    />
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
                                        <option value="1">Initiator 1</option>
                                        <option value="2">Initiator 2</option>
                                        <option value="3">Initiator 3</option>
                                    </Form.Select>
                                </div>

                                <div className="form-column">
                                    <Form.Label className="custom-label">Initiator Contact</Form.Label>
                                    <Form.Select
                                        className="custom-input"
                                        aria-label="Select Initiator Contact"
                                        name="initiatorContact"
                                        value={Order.initiatorContact}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Initiator Contact</option>
                                        <option value="1">Contact 1</option>
                                        <option value="2">Contact 2</option>
                                        <option value="3">Contact 3</option>
                                    </Form.Select>
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

                            <h3 className="h3">Dispatch Location</h3>
                            <div className="form-row">
                                <div className="form-column">
                                    <Form.Label className="custom-label">Address</Form.Label>
                                    <Form.Select
                                        className="custom-input"
                                        aria-label="Select Address"
                                        name="address"
                                        value={Order.address}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Address</option>
                                        <option value="1">Address 1</option>
                                        <option value="2">Address 2</option>
                                        <option value="3">Address 3</option>
                                    </Form.Select>
                                </div>

                                <div className="form-column">
                                    <Form.Label className="custom-label">Contact Person</Form.Label>
                                    <Form.Select
                                        className="custom-input"
                                        aria-label="Select Contact Person"
                                        name="contactPerson"
                                        value={Order.contactPerson}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Contact Person</option>
                                        <option value="1">Contact 1</option>
                                        <option value="2">Contact 2</option>
                                        <option value="3">Contact 3</option>
                                    </Form.Select>
                                </div>

                                <div className="form-column">
                                    <Form.Label className="custom-label">Location</Form.Label>
                                    <Form.Select
                                        className="custom-input"
                                        aria-label="Select Location"
                                        name="location"
                                        value={Order.location}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Location</option>
                                        <option value="1">Location 1</option>
                                        <option value="2">Location 2</option>
                                        <option value="3">Location 3</option>
                                    </Form.Select>
                                </div>
                            </div>

                            <Form.Group controlId="message">
                                <Form.Label className="custom-label">Message</Form.Label>
                                <Form.Control
                                    className="custom-input"
                                    as="textarea"
                                    rows={3}
                                    style={{ resize: 'both' }}
                                    name="message"
                                    value={Order.message}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Button className="sub" type="submit">Submit</Button>
                        </div>
                    </form>

                    {/* Success Modal */}
                    <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} className="modal-success">
                        <Modal.Body>Service Order added successfully!</Modal.Body>
                    </Modal>

                    {/* Fail Modal */}
                    <Modal show={showFailModal} onHide={() => setShowFailModal(false)} className="modal-fail">
                        <Modal.Body>Adding failed!</Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default OrderManagement;

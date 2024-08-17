import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faTrash } from '@fortawesome/free-solid-svg-icons';
import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import './OrderDetails.css';
import { useNavigate } from 'react-router-dom';



function OrderDetails() {
    const navigate = useNavigate();
    const { idOrder } = useParams();
    const [order, setOrder] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [updatedOrder, setUpdatedOrder] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showFailModal, setShowFailModal] = useState(false);
    const [serviceTypes, setServiceTypes] = useState([]);
    const [invoicings, setInvoicings] = useState([]);
    const [serviceObjects, setServiceObjects] = useState([]);
    const [initiators, setInitiators] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [installation, setinstallation] = useState([]);

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

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await axios.get(`https://localhost:7141/api/ServiceOrders/${idOrder}`);
                setOrder(response.data);
                setUpdatedOrder(response.data);
            } catch (error) {
                console.error('Error fetching order:', error);
            }
        };

        fetchOrder();
    }, [idOrder]);

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = async () => {
        try {
            await axios.put(`https://localhost:7141/api/ServiceOrders/${idOrder}`, updatedOrder);
            setEditMode(false);
            setShowSuccessModal(true);
            setTimeout(() => {
                setShowSuccessModal(false);
                window.location.reload();
            }, 3000);

        } catch (error) {
            console.error('Error saving changes:', error);
            setShowFailModal(true); 
            setTimeout(() => setShowFailModal(false), 3000);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'initiatorName') {
            const selectedInitiator = initiators.find(initiator => `${initiator.firstName} ${initiator.lastName}` === value);
            const initiatorContact = selectedInitiator ? `${selectedInitiator.email}, ${selectedInitiator.phoneNumber}` : '';
            setUpdatedOrder(prevOrder => ({ ...prevOrder, [name]: value, initiatorContact }));

        } else if (name === 'companyName') {
            const selectedCompany = companies.find(company => company.name === value);
            if (selectedCompany) {
                setUpdatedOrder(prevOrder => ({
                    ...prevOrder,
                    [name]: value,
                    idCompany: selectedCompany.id,
                    location: selectedCompany.position || '',
                    address: selectedCompany.parentCopmany || '',
                    contactPerson: selectedCompany.responsableUser || ''
                }));
                console.log('Selected Company Data:', selectedCompany);
            }
        } else {
            setUpdatedOrder(prevOrder => ({ ...prevOrder, [name]: value }));
        }
    };

    const handleDeleteClick = async () => {
        try {
            await axios.delete(`https://localhost:7141/api/ServiceOrders/${idOrder}`);
            setShowDeleteModal(false);
            navigate('/OrderDisplay');
        } catch (error) {
            console.error('Error deleting order:', error);
        }
    };

    if (!order) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex">
            <SideBar />
            <div className="flex-1">
                <ShowNavBar />
                <div className="p-4">
                    <Container fluid>
                        <Row className="justify-content">
                            <Col md={8}>
                                <h1 className="display" style={{ marginBottom: 40 }} >Service Orders Details:</h1>

                                <Card style={{ width: '151%', boxShadow: '0 4px 8px rgba(0.1, 0.1, 0.1, 0.1)', padding: '20px 30px 40px 50px' }}>
                                    <Card.Body>
                                        <Card.Title className="title">Order Information:</Card.Title><br />

                                        {/* <Card.Subtitle className="mb-2 text-muted">Detai:</Card.Subtitle>*/}
                                        <Row className="mb-3">
                                            <Card.Text as={Col}>
                                                <span className="custom-label">Order Number:</span> {editMode ? (
                                                    <input
                                                        type="text"
                                                        name="orderNumber"
                                                        value={updatedOrder.orderNumber}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                    />
                                                ) : (
                                                    <span>{order.orderNumber}</span>
                                                )}
                                            </Card.Text>


                                        </Row>
                                        <Row className="mb-3">
                                            <Card.Text as={Col}>
                                                <span className="custom-label">Service Object:</span> {editMode ? (

                                                    <Form.Select className="custom-input" aria-label="Default select example" id="serviceObject" name="serviceObject" value={updatedOrder.serviceObject} onChange={handleInputChange}>

                                                        <option value="">Select Service Object</option>
                                                        {serviceObjects.map(obj => (
                                                            <option key={obj.serviceObjectId} value={obj.serviceObjectName}>
                                                                {obj.serviceObjectName}
                                                            </option>
                                                        ))}
                                                    </Form.Select>
                                                ) : (
                                                    <span>{order.serviceObject}</span>
                                                )}
                                            </Card.Text>


                                                <Card.Text as={Col}>
                                                    <span className="custom-label">Installation:</span> {editMode ? (
                                                        <Form.Select className="custom-input" aria-label="Select affected installation" id="installationName" name="installationName" value={updatedOrder.installationName} onChange={handleInputChange}>
                                                            <option value="">Select Installation Name</option>
                                                            {installation.map(install => (
                                                                <option key={install.installationNumber} value={install.name}>
                                                                    {install.name} {install.installationType}
                                                                </option>
                                                            ))}
                                                        </Form.Select>
                                                    ) : (
                                                        <span>{order.installationName}</span>
                                                    )}
                                                </Card.Text>
                                            </Row>


                                        <Row className="mb-3">


                                            <Card.Text as={Col}>
                                                <span className="custom-label">Initiator:</span> {editMode ? (
                                                    <Form.Select aria-label="Select affected installation" className="custom-input" id="initiatorName" name="initiatorName" value={updatedOrder.initiatorName} onChange={handleInputChange}>

                                                        <option value="">Select Initiator Name</option>
                                                        {initiators.map(initiator => (
                                                            <option key={initiator.id} value={`${initiator.firstName} ${initiator.lastName}`}>
                                                                {`${initiator.firstName} ${initiator.lastName}`}
                                                            </option>
                                                        ))}
                                                    </Form.Select>
                                                ) : (
                                                    <span>{order.initiatorName}</span>
                                                )}
                                            </Card.Text>

                                            <Card.Text as={Col}>
                                                <span className="custom-label">Contact person of Initiator:</span> {editMode ? (
                                                    <input
                                                        type="text"
                                                        name="initiatorContact"
                                                        value={updatedOrder.initiatorContact}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                        readOnly
                                                    />
                                                ) : (
                                                    <span>{order.initiatorContact}</span>
                                                )}
                                            </Card.Text>
                                        </Row>

                                        <Row className="mb-3">
                                            <Card.Text as={Col}>
                                                <span className="custom-label">Service Type:</span> {editMode ? (
                                                    <Form.Select aria-label="Select service type" className="custom-input" id="serviceType" name="serviceType" value={updatedOrder.serviceType} onChange={handleInputChange}>
                                                        <option value="">Select Service Type</option>
                                                        {serviceTypes.map(type => (
                                                            <option key={type.serviceTypeId} value={type.serviceTypeName}>
                                                                {type.serviceTypeName}
                                                            </option>
                                                        ))}
                                                    </Form.Select>
                                                ) : (
                                                    <span>{order.serviceType}</span>
                                                )}
                                            </Card.Text>



                                            <Card.Text as={Col}>
                                                <span className="custom-label">Invoicing Type:</span> {editMode ? (
                                                    <Form.Select aria-label="Select invoicing type" className="custom-input" id="invoicing" name="invoicing" value={updatedOrder.invoicing} onChange={handleInputChange}>

                                                        <option value="">Select Invoicing Type</option>
                                                        {invoicings.map(inv => (
                                                            <option key={inv.invoicingId} value={inv.invoicingType}>
                                                                {inv.invoicingType}
                                                            </option>
                                                        ))}
                                                    </Form.Select>
                                                ) : (
                                                    <span>{order.invoicing}</span>
                                                )}
                                            </Card.Text>
                                        </Row>

                                        <Row className="mb-3">

                                            <Card.Text as={Col}>
                                                <span className="custom-label">Customer:</span> {editMode ? (
                                                    <Form.Select className="custom-input" aria-label="Default select example" id="companyName" name="companyName" value={updatedOrder.companyName} onChange={handleInputChange}>

                                                        <option value="">Select Company Name</option>
                                                        {companies.map(company => (
                                                            <option key={company.id} value={company.name}>
                                                                {company.name}
                                                            </option>
                                                        ))}
                                                    </Form.Select>
                                                ) : (
                                                    <span>{order.companyName}</span>
                                                )}
                                            </Card.Text>
                                        </Row>

                                        <Card.Title className="title">Dispatch Location:</Card.Title>

                                        <Row className="mb-3">

                                            <Card.Text as={Col}>
                                                <span className="custom-label">Custom Address:</span> {editMode ? (
                                                    <input
                                                        type="text"
                                                        name="address"
                                                        value={updatedOrder.address}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                        readOnly
                                                    />
                                                ) : (
                                                        <span>{order.address}</span>
                                                )}
                                            </Card.Text>
                                            <Card.Text as={Col}>
                                                <span className="custom-label">Contact at service location:</span> {editMode ? (
                                                    <input
                                                        type="text"
                                                        name="contactPerson"
                                                        value={updatedOrder.contactPerson}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                        readOnly
                                                    />
                                                ) : (
                                                    <span>{order.contactPerson}</span>
                                                )}
                                            </Card.Text>

                                            <Card.Text as={Col}>
                                                <span className="custom-label">Location:</span> {editMode ? (


                                                        <input
                                                            type="text"
                                                            name="location"
                                                            value={updatedOrder.location}
                                                            onChange={handleInputChange}
                                                            className="form-control"
                                                            readOnly
                                                        />

                                                ) : (
                                                    <span>{order.location}</span>
                                                )}
                                            </Card.Text>

                                        </Row>

                                        <Row className="mb-3">
                                            <Card.Text as={Col}>
                                                <span className="custom-label">Message:</span> {editMode ? (

                                                    <Form.Control className="custom-input" as="textarea" rows={3} style={{ resize: 'both' }} id="message" name="message" value={updatedOrder.message} onChange={handleInputChange} />

                                                ) : (
                                                    <span>{order.message}</span>
                                                )}
                                            </Card.Text>


                                        </Row>


                                        <div className="mt-4">
                                            {editMode ? (

                                                <Button className="sub" as="input" type="submit" value="Save Changes" onClick={handleSaveClick} />

                                            ) : (
                                                <button onClick={handleEditClick} className="updateBtn"><i className="material-icons">edit</i></button>

                                            )}

                                            <button onClick={() => setShowDeleteModal(true)} className="deleteBtn"><i className="material-icons">delete</i></button>

                                        </div>
                                    </Card.Body>
                                </Card>

                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this order?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDeleteClick}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} className="modal-success">
                <Modal.Body>Order details updated successfully!</Modal.Body>
            </Modal>

            <Modal show={showFailModal} onHide={() => setShowFailModal(false)} className="modal-fail">
                <Modal.Body>Updating failed!</Modal.Body>
            </Modal>
        </div>
    );
}

export default OrderDetails;

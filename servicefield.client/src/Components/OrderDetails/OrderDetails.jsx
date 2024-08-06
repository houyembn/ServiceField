import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faTrash } from '@fortawesome/free-solid-svg-icons';
import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import './OrderDetails.css';


function OrderDetails() {
    const { idOrder } = useParams();
    const [order, setOrder] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [updatedOrder, setUpdatedOrder] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showFailModal, setShowFailModal] = useState(false);

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
            setTimeout(() => setShowSuccessModal(false), 3000);
        } catch (error) {
            console.error('Error saving changes:', error);
            setShowFailModal(true); // Show fail modal
            setTimeout(() => setShowFailModal(false), 3000);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedOrder({ ...updatedOrder, [name]: value });
    };

    const handleDeleteClick = async () => {
        try {
            await axios.delete(`https://localhost:7141/api/ServiceOrders/${idOrder}`);
            setShowDeleteModal(false);
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

                                                        <option value="1">Object 1</option>
                                                        <option value="2">Object 2</option>
                                                        <option value="3">Object 3</option>
                                                    </Form.Select>
                                                ) : (
                                                    <span>{order.serviceObject}</span>
                                                )}
                                            </Card.Text>

                                            <Card.Text as={Col}>
                                                <span className="custom-label">Service Type:</span> {editMode ? (
                                                    <Form.Select aria-label="Select service type" className="custom-input" id="serviceType" name="serviceType" value={updatedOrder.serviceType} onChange={handleInputChange}>
                                                        <option>Service Type</option>
                                                        <option value="1">Type 1</option>
                                                        <option value="2">Type 2</option>
                                                        <option value="3">Type 3</option>
                                                    </Form.Select>
                                                ) : (
                                                    <span>{order.serviceType}</span>
                                                )}
                                            </Card.Text>
                                        </Row>

                                            <Row className="mb-3">
                                            <Card.Text as={Col}>
                                                    <span className="custom-label">idCustomer:</span> {editMode ? (
                                                    <Form.Control
                                                      
                                                        name="idCompany"
                                                        value={updatedOrder.idCompany}
                                                        onChange={handleInputChange}
                                                        className="custom-input"
                                                    >
                                                    </Form.Control>
                                                ) : (
                                                    <span>{order.idCompany}</span>
                                                )}
                                            </Card.Text>

                                            <Card.Text as={Col}>
                                                <span className="custom-label">Customer:</span> {editMode ? (
                                                    <Form.Select className="custom-input" aria-label="Default select example" id="companyName" name="companyName" value={updatedOrder.companyName} onChange={handleInputChange}>
                                               
                                                        <option value="1">Customer 1</option>
                                                        <option value="2">Customer 2</option>
                                                        <option value="3">Customer 3</option>
                                                    </Form.Select>
                                                ) : (
                                                    <span>{order.companyName}</span>
                                                )}
                                            </Card.Text>
                                        </Row>

                                            <Row className="mb-3">
                                            <Card.Text as={Col}>
                                                    <span className="custom-label">idInstallation:</span> {editMode ? (
                                                    <Form.Control
                                                        
                                                        name="idInstallation"
                                                        value={updatedOrder.idInstallation}
                                                        onChange={handleInputChange}
                                                        className="custom-input"
                                                    >
                                                        
                                                    </Form.Control>
                                                ) : (
                                                    <span>{order.idInstallation}</span>
                                                )}
                                            </Card.Text>

                                            <Card.Text as={Col}>
                                                <span className="custom-label">Installation:</span> {editMode ? (
                                                    <Form.Select className="custom-input" aria-label="Select affected installation" id="installationName" name="installationName" value={updatedOrder.Installation} onChange={handleInputChange}>
                                                        <option value="1">Installation 1</option>
                                                        <option value="2">Installation 2</option>
                                                        <option value="3">Installation 3</option>
                                                    </Form.Select>
                                                ) : (
                                                    <span>{order.Installation}</span>
                                                )}
                                            </Card.Text>
                                        </Row>

                                            <Row className="mb-3">
                                            <Card.Text as={Col}>
                                                    <span className="custom-label">idInitiator:</span> {editMode ? (
                                                    <Form.Control
                                                        name="idInitiator"
                                                        value={updatedOrder.idInitiator}
                                                        onChange={handleInputChange}
                                                        className="custom-input"
                                                    >
                                                       
                                                    </Form.Control>
                                                ) : (
                                                    <span>{order.idInitiator}</span>
                                                )}
                                            </Card.Text>

                                            <Card.Text as={Col}>
                                                <span className="custom-label">Initiator:</span> {editMode ? (
                                                    <Form.Select aria-label="Select affected installation" className="custom-input" id="initiatorName" name="initiatorName" value={updatedOrder.initiatorName} onChange={handleInputChange}>
                         
                                                        <option value="1">Initiator 1</option>
                                                        <option value="2">Initiator 2</option>
                                                        <option value="3">Initiator 3</option>
                                                    </Form.Select>
                                                ) : (
                                                    <span>{order.initiatorName}</span>
                                                )}
                                            </Card.Text>
                                        </Row>

                                            <Row className="mb-3">
                                            <Card.Text as={Col}>
                                                <span className="custom-label">Contact person of Initiator:</span> {editMode ? (
                                                    <Form.Select aria-label="Select skills" className="custom-input" id="initiatorContact" name="initiatorContact" value={updatedOrder.initiatorContact} onChange={handleInputChange}>
            
                                                       
                                                        <option value="1">Contact 1</option>
                                                        <option value="2">Contact 2</option>
                                                        <option value="3">Contact 3</option>
                                                    </Form.Select>
                                                ) : (
                                                    <span>{order.initiatorContact}</span>
                                                )}
                                            </Card.Text>

                                            <Card.Text as={Col}>
                                                <span className="custom-label">Invoicing Type:</span> {editMode ? (
                                                    <Form.Select aria-label="Select invoicing type" className="custom-input" id="invoicing" name="invoicing" value={updatedOrder.invoicing} onChange={handleInputChange}>
                                                        
                                                        <option value="1">Type 1</option>
                                                        <option value="2">Type 2</option>
                                                        <option value="3">Type 3</option>
                                                    </Form.Select>
                                                ) : (
                                                    <span>{order.invoicing}</span>
                                                )}
                                            </Card.Text>
                                            </Row>

                                            <Card.Title className="title">Dispatch Location:</Card.Title>
                                            
                                            <Row className="mb-3">

                                                <Card.Text as={Col}>
                                                <span className="custom-label">Custom Address:</span> {editMode ? (
                                                    <Form.Select aria-label="Select Custom Address" className="custom-input" id="address" name="address" value={updatedOrder.address} onChange={handleInputChange}>
                                                       
                                                          
                                                            <option value="1">Address 1</option>
                                                            <option value="2">Address 2</option>
                                                            <option value="3">Address 3</option>
                                                        </Form.Select>
                                                    ) : (
                                                        <span>{order.address}</span>
                                                    )}
                                                </Card.Text>
                                            <Card.Text as={Col}>
                                                <span className="custom-label">Contact at service location:</span> {editMode ? (
                                                    <Form.Select aria-label="Select Contact" className="custom-input" id="contactPerson" name="contactPerson" value={updatedOrder.contactPerson} onChange={handleInputChange}>
                                                   
                                                        <option value="1">Contact 1</option>
                                                        <option value="2">Contact 2</option>
                                                        <option value="3">Contact 3</option>
                                                    </Form.Select>
                                                ) : (
                                                    <span>{order.contactPerson}</span>
                                                )}
                                            </Card.Text>

                                            <Card.Text as={Col}>
                                                <span className="custom-label">Location:</span> {editMode ? (
                                                    <Form.Select aria-label="Select location" className="custom-input" id="location" name="location" value={updatedOrder.location} onChange={handleInputChange }>
                                                     
                                                        <option value="1">Location 1</option>
                                                        <option value="2">Location 2</option>
                                                        <option value="3">Location 3</option>
                                                    </Form.Select>
                                                ) : (
                                                    <span>{order.location}</span>
                                                )}
                                            </Card.Text>

                                            </Row>

                                            <Row className="mb-3">
                                                <Card.Text as={Col}>
                                                <span className="custom-label">Message:</span> {editMode ? (

                                                    <Form.Control className="custom-input" as="textarea" rows={3} style={{ resize: 'both' }} id="message" name="message" value={updatedOrder.message } onChange={handleInputChange} /> 
                                                       
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
                                            {/*<Button*/}
                                            {/*    variant="danger"*/}
                                            {/*    className="ml-2"*/}
                                            {/*    onClick={() => setShowDeleteModal(true)}*/}
                                            {/*>*/}
                                            {/*    <FontAwesomeIcon icon={faTrash} /> Delete*/}
                                            {/*</Button>*/}
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

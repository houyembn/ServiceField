import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import '../OrderDetails/OrderDetails.css';


function UserDetails() {
    const { UserId } = useParams();
    const [User, setUser] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [updatedUser, setUpdatedUser] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showFailModal, setShowFailModal] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`https://localhost:7141/api/User/${UserId}`);
                setUser(response.data);
                setUpdatedUser(response.data);
            } catch (error) {
                console.error('Error fetching User:', error);
            }
        };

        fetchUser();
    }, [UserId]);

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = async () => {
        try {
            await axios.put(`https://localhost:7141/api/User/${UserId}`, updatedUser);
            setEditMode(false);
            setShowSuccessModal(true);
            setTimeout(() => setShowSuccessModal(false), 3000);
        } catch (error) {
            console.error('Error saving changes:', error);
            setShowFailModal(true);
            setTimeout(() => setShowFailModal(false), 3000);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser({ ...updatedUser, [name]: value });
    };

    const handleDeleteClick = async () => {
        try {
            await axios.delete(`https://localhost:7141/api/User/${UserId}`);
            setShowDeleteModal(false);
        } catch (error) {
            console.error('Error deleting User:', error);
        }
    };

    if (!User) {
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
                                <h1 className="display" style={{ marginBottom: 40 }} >Service Users Details:</h1>

                                <Card style={{ width: '151%', boxShadow: '0 4px 8px rgba(0.1, 0.1, 0.1, 0.1)', padding: '20px 30px 40px 50px' }}>
                                    <Card.Body>
                                        <Card.Title className="title">User Information:</Card.Title><br />

                                        {/* <Card.Subtitle className="mb-2 text-muted">Detai:</Card.Subtitle>*/}
                                        <Row className="mb-3">
                                            <Card.Text as={Col}>
                                                <span className="custom-label">User Type:</span> {editMode ? (
                                                    <input
                                                        type="text"
                                                        name="UserType"
                                                        value={updatedUser.UserType}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                    />
                                                ) : (
                                                    <span>{User.UserType}</span>
                                                )}
                                            </Card.Text>


                                        </Row>
                                        <Row className="mb-3">
                                            <Card.Text as={Col}>
                                                <span className="custom-label">Payment Method:</span> {editMode ? (

                                                    <input
                                                        type="text"
                                                        name="paymentMethod"
                                                        value={updatedUser.paymentMethod}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                    />
                                                ) : (
                                                    <span>{User.paymentMethod}</span>
                                                )}
                                            </Card.Text>

                                            <Card.Text as={Col}>
                                                <span className="custom-label">Recurring Period:</span> {editMode ? (
                                                    <input
                                                        type="text"
                                                        name="recurringPeriod"
                                                        value={updatedUser.recurringPeriod}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                    />
                                                ) : (
                                                    <span>{User.recurringPeriod}</span>
                                                )}
                                            </Card.Text>
                                        </Row>



                                        <Row className="mb-3">
                                            <Card.Text as={Col}>
                                                <span className="custom-label">Terms And Conditions:</span> {editMode ? (

                                                    <Form.Control className="custom-input" as="textarea" rows={3} style={{ resize: 'both' }} id="termsAndConditions" name="termsAndConditions" value={updatedUser.termsAndConditions} onChange={handleInputChange} />

                                                ) : (
                                                    <span>{User.termsAndConditions}</span>
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

export default UserDetails;

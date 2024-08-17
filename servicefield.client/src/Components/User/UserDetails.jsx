import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
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
                const response = await axios.get(`https://localhost:7141/ServiceField.Server/User/${UserId}`);
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
            await axios.put(`https://localhost:7141/ServiceField.Server/User/${UserId}`, updatedUser);
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
            await axios.delete(`https://localhost:7141/ServiceField.Server/User/${UserId}`);
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
                                                <span className="custom-label">First Name:</span> {editMode ? (
                                                    <input
                                                        type="text"
                                                        name="firstName"
                                                        value={updatedUser.firstName}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                    />
                                                ) : (
                                                    <span>{User.firstName}</span>
                                                )}
                                            </Card.Text>

                                            <Card.Text as={Col}>
                                                <span className="custom-label">LastName:</span> {editMode ? (

                                                    <input
                                                        type="text"
                                                        name="lastName"
                                                        value={updatedUser.lastName}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                    />
                                                ) : (
                                                    <span>{User.lastName}</span>
                                                )}
                                            </Card.Text>
                                        </Row>

                                        <Row className="mb-3">
                                            <Card.Text as={Col}>
                                                <span className="custom-label">Email:</span> {editMode ? (
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        value={updatedUser.email}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                    />
                                                ) : (
                                                    <span>{User.email}</span>
                                                )}
                                            </Card.Text>

                                            <Card.Text as={Col}>
                                                <span className="custom-label">Password:</span> {editMode ? (
                                                    <input
                                                        type="text"
                                                        name="password"
                                                        value={updatedUser.password}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                    />
                                                ) : (
                                                    <span>{User.password ? User.password.replace(/./g, '*') : ''}</span>
                                                )}
                                            </Card.Text>

                                        </Row>

                                        <Row className="mb-3">
                                            <Card.Text as={Col}>
                                                <span className="custom-label">CIN:</span> {editMode ? (
                                                    <input
                                                        type="text"
                                                        name="cin"
                                                        value={updatedUser.cin}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                        pattern="\d{8}"
                                                        maxLength="8"
                                                    />
                                                ) : (
                                                    <span>{User.cin}</span>
                                                )}
                                            </Card.Text>

                                            <Card.Text as={Col}>
                                                <span className="custom-label">Phone Number:</span> {editMode ? (
                                                    <input
                                                        type="text"
                                                        name="phoneNumber"
                                                        value={updatedUser.phoneNumber}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                        pattern="\d{8}"
                                                        maxLength="8"
                                                    />
                                                ) : (
                                                    <span>{User.phoneNumber}</span>
                                                )}
                                            </Card.Text>
                                        </Row>

                                        <Row className="mb-3">
                                            <Card.Text as={Col}>
                                                <span className="custom-label">Age:</span> {editMode ? (
                                                    <input
                                                        type="number"
                                                        name="age"
                                                        value={updatedUser.age}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                    />
                                                ) : (
                                                    <span>{User.age}</span>
                                                )}
                                            </Card.Text>

                                            <Card.Text as={Col}>
                                                <span className="custom-label">Address:</span> {editMode ? (
                                                    <input
                                                        type="text"
                                                        name="address"
                                                        value={updatedUser.address}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                    />
                                                ) : (
                                                    <span>{User.address}</span>
                                                )}
                                            </Card.Text>
                                        </Row>



                                        <Card.Title className="title">Professional Information:</Card.Title>

                                        <Row className="mb-3">
                                            <Card.Text as={Col}>
                                                <span className="custom-label">Diploma:</span> {editMode ? (
                                                    <input
                                                        type="text"
                                                        name="diploma"
                                                        value={updatedUser.diploma}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                    />
                                                ) : (
                                                    <span>{User.diploma}</span>
                                                )}
                                            </Card.Text>

                                            <Card.Text as={Col}>
                                                <span className="custom-label">Field:</span> {editMode ? (
                                                    <input
                                                        type="text"
                                                        name="field"
                                                        value={updatedUser.field}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                    />
                                                ) : (
                                                    <span>{User.field}</span>
                                                )}
                                            </Card.Text>
                                        </Row>

                                        <Row className="mb-3">
                                            <Card.Text as={Col}>
                                                <span className="custom-label">Skills:</span> {editMode ? (
                                                    <input
                                                        type="text"
                                                        name="skills"
                                                        value={updatedUser.skills}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                    />
                                                ) : (
                                                    <span>{User.skills}</span>
                                                )}
                                            </Card.Text>

                                            <Card.Text as={Col}>
                                                <span className="custom-label">Grade:</span> {editMode ? (
                                                    <input
                                                        type="text"
                                                        name="grade"
                                                        value={updatedUser.grade}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                    />
                                                ) : (
                                                    <span>{User.grade}</span>
                                                )}
                                            </Card.Text>
                                        </Row>

                                        <Card.Text as={Col}>
                                            <span className="custom-label">User Role:</span>
                                            {editMode ? (
                                                <>
                                                    <Form.Check
                                                        type="radio"
                                                        label="Service Manager"
                                                        name="role"
                                                        value="Service Manager"
                                                        checked={User.role === 'Service Manager'}
                                                        onChange={handleInputChange}

                                                    />
                                                    <Form.Check
                                                        type="radio"
                                                        label="Technician"
                                                        name="role"
                                                        value="Technician"
                                                        checked={User.role === 'Technician'}
                                                        onChange={handleInputChange}

                                                    />
                                                </>
                                            ) : (
                                                <span>{User.role}</span>
                                            )}
                                        </Card.Text>




                                        <div className="mt-4">
                                            {!editMode && User.role !== 'Service Manager' && (
                                                <>

                                                <Button className="sub" as="input" type="submit" value="Save Changes" onClick={handleSaveClick} />

                                         
                                                <button onClick={handleEditClick} className="updateBtn"><i className="material-icons">edit</i></button>
                                            
                                          

                                            <button onClick={() => setShowDeleteModal(true)} className="deleteBtn"><i className="material-icons">delete</i></button>
                                            </>
                                              )}
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

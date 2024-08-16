import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import '../OrderDetails/OrderDetails.css';

function UserDetails() {
    const navigate = useNavigate();
    const { UserId } = useParams();
    const [userRole, setUserRole] = useState('');
    const [User, setUser] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [updatedUser, setUpdatedUser] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showFailModal, setShowFailModal] = useState(false);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUserRole(storedUser.role);
        }

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
        setUpdatedUser({ ...updatedUser, [name]: value });
    };

    const handleDeleteClick = async () => {
        try {
            await axios.delete(`https://localhost:7141/ServiceField.Server/User/${UserId}`);
            setShowDeleteModal(false);
            navigate('/UserDisplay');
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
                                <h1 className="display" style={{ marginBottom: 40 }}>Service Users Details:</h1>

                                <Card style={{ width: '151%', boxShadow: '0 4px 8px rgba(0.1, 0.1, 0.1, 0.1)', padding: '20px 30px 40px 50px' }}>
                                    <Card.Body>
                                        <Card.Title className="title">User Information:</Card.Title><br />

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
                                                <span className="custom-label">Last Name:</span> {editMode ? (
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
                                            <span className="custom-label">Role:</span> {User.role}
                                        </Card.Text>

                                        {!editMode && userRole !== 'Service Manager' && (
                                            <Row>
                                                <Col>
                                                    <Button variant="primary" onClick={handleEditClick}>Edit</Button>
                                                </Col>
                                                <Col>
                                                    <Button variant="danger" onClick={() => setShowDeleteModal(true)}>Delete</Button>
                                                </Col>
                                            </Row>
                                        )}

                                        {editMode && (
                                            <Row>
                                                <Col>
                                                    <Button variant="primary" onClick={handleSaveClick}>Save</Button>
                                                </Col>
                                                <Col>
                                                    <Button variant="secondary" onClick={() => setEditMode(false)}>Cancel</Button>
                                                </Col>
                                            </Row>
                                        )}
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>

                {/* Success Modal */}
                <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
                    <Modal.Body style={{ backgroundColor: 'green', color: 'white' }}>
                        <h5>Success!</h5>
                        <p>User details updated successfully.</p>
                    </Modal.Body>
                </Modal>

                {/* Failure Modal */}
                <Modal show={showFailModal} onHide={() => setShowFailModal(false)}>
                    <Modal.Body style={{ backgroundColor: 'red', color: 'white' }}>
                        <h5>Error!</h5>
                        <p>Failed to update user details.</p>
                    </Modal.Body>
                </Modal>

                {/* Delete Confirmation Modal */}
                <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                    <Modal.Body>
                        <h5>Confirm Delete</h5>
                        <p>Are you sure you want to delete this user?</p>
                        <Button variant="danger" onClick={handleDeleteClick}>Delete</Button>
                        <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
}

export default UserDetails;

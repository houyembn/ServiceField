//import { useEffect, useState } from 'react';
//import axios from 'axios';
//import { useParams } from 'react-router-dom';
//import ShowNavBar from '../NavBar/NavBar';
//import SideBar from '../SideBar/SideBar';
//import Card from 'react-bootstrap/Card';
//import { Button, Modal } from 'react-bootstrap';

//import { useNavigate } from 'react-router-dom';

//function ServiceCaseDetails() {
//    const { id } = useParams();
//    const [serviceCase, setServiceCase] = useState(null);
//    const [checklistMap, setCheckListMap] = useState({});
//    const [objectMap, setObjectMap] = useState({});
//    const [elementMap, setElementMap] = useState({});
//    const [skillsMap, setSkillsMap] = useState({});
//    const [categoryMap, setCategoryMap] = useState({});
//    const [error, setError] = useState(null);
//    const [showDeleteModal, setShowDeleteModal] = useState(false);
//    const navigate = useNavigate();

//    useEffect(() => {
//        const fetchData = async () => {
//            try {
//                const [
//                    checklistResponse,
//                    objectResponse,
//                    elementResponse,
//                    skillsResponse,
//                    categoryResponse,
//                    serviceCaseResponse
//                ] = await Promise.all([
//                    axios.get('https://localhost:7141/ServiceField/CheckList'),
//                    axios.get('https://localhost:7141/ServiceField/Object'),
//                    axios.get('https://localhost:7141/ServiceField/Element'),
//                    axios.get('https://localhost:7141/ServiceField/Skills'),
//                    axios.get('https://localhost:7141/ServiceField/Category'),
//                    axios.get(`https://localhost:7141/ServiceField/Case/${id}`)
//                ]);

//                const mapData = (data) => {
//                    const map = {};
//                    data.forEach(item => {
//                        map[item.id] = item.type;
//                    });
//                    return map;
//                };

//                setCheckListMap(mapData(checklistResponse.data));
//                setObjectMap(mapData(objectResponse.data));
//                setElementMap(mapData(elementResponse.data));
//                setSkillsMap(mapData(skillsResponse.data));
//                setCategoryMap(mapData(categoryResponse.data));
//                setServiceCase(serviceCaseResponse.data);
//            } catch (error) {
//                console.error('There was an error fetching the data!', error);
//                setError('Failed to fetch service case details.');
//            }
//        };

//        fetchData();
//    }, [id]);

//    if (error) return <p>{error}</p>;
//    if (!serviceCase) return <p>Loading...</p>;

//    const getTypeById = (map, id) => map[id] || 'Unknown';

//    const handleDeleteClick = async () => {
//        try {
//            await axios.delete(`https://localhost:7141/ServiceField/Case/${id}`);
//            navigate('/DetailsFormCase');
//        } catch (error) {
//            console.error('There was an error deleting the data!', error);
//            setError('Failed to delete data.');
//        }
//    };

//    return (
//        <div className="flex">
//            <SideBar />
//            <div className="flex-1">
//                <ShowNavBar />
//                <div className="p-4">
//                    <div className="h5">Service Case Details</div>
//                    <div style={{ marginTop: '15px' }}>
//                        <Card>
//                            <Card.Header as="h5">
//                                Service Case Number: {serviceCase.productSerialNumber}
//                            </Card.Header>
//                            <Card.Body>
//                                <Card.Text>
//                                    <strong>Affected Company:</strong> {serviceCase.affectedCompany}<br />
//                                    <strong>Object:</strong> {getTypeById(objectMap, serviceCase.objectFK)}<br />
//                                    <strong>Contact Person:</strong> {serviceCase.contactPerson}<br />
//                                    <strong>Affected Installation:</strong> {serviceCase.affectedInstallation}<br />
//                                    <strong>Responsible User:</strong> {serviceCase.responsableUser}<br />
//                                    <strong>Originating Service Order:</strong> {serviceCase.originatingSOrder}<br />
//                                    <strong>Category:</strong> {getTypeById(categoryMap, serviceCase.categoryFK)}<br />
//                                    <strong>Skills:</strong> {getTypeById(skillsMap, serviceCase.skillsFK)}<br />
//                                    <strong>Checklist:</strong> {getTypeById(checklistMap, serviceCase.checkListFK)}<br />
//                                    <strong>Element:</strong> {getTypeById(elementMap, serviceCase.elementFK)}<br />
//                                    <strong>Status:</strong> {serviceCase.serviceCaseStatus}<br />
//                                    <strong>Priority:</strong> {serviceCase.priority}<br />
//                                    <strong>Message:</strong> {serviceCase.message}<br />
//                                    <strong>Created on:</strong> {new Date(serviceCase.creationDate).toLocaleString()}<br />
//                                </Card.Text>
//                            </Card.Body>
//                        </Card>
//                        <div className="mt-4">
//                            <button  className="updateBtn"><i className="material-icons">edit</i></button>
//                            <button onClick={() => setShowDeleteModal(true)} className="deleteBtn">
//                                <i className="material-icons">delete</i>
//                            </button>
//                        </div>
//                    </div>
//                </div>
//            </div>

//            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
//                <Modal.Header closeButton>
//                    Confirm Delete
//                </Modal.Header>
//                <Modal.Body>Are you sure you want to delete this service case?</Modal.Body>
//                <Modal.Footer>
//                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
//                        Cancel
//                    </Button>
//                    <Button variant="danger" onClick={handleDeleteClick}>
//                        Delete
//                    </Button>
//                </Modal.Footer>
//            </Modal>
//        </div>
//    );
//}

//export default ServiceCaseDetails;

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import '../OrderDetails/OrderDetails.css';

function ServiceCaseDetails() {
    const { id } = useParams();
    const [serviceCase, setServiceCase] = useState(null);
    const [checklistMap, setCheckListMap] = useState({});
    const [objectMap, setObjectMap] = useState({});
    const [elementMap, setElementMap] = useState({});
    const [skillsMap, setSkillsMap] = useState({});
    const [categoryMap, setCategoryMap] = useState({});
    const [error, setError] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [
                    checklistResponse,
                    objectResponse,
                    elementResponse,
                    skillsResponse,
                    categoryResponse,
                    serviceCaseResponse
                ] = await Promise.all([
                    axios.get('https://localhost:7141/ServiceField/CheckList'),
                    axios.get('https://localhost:7141/ServiceField/Object'),
                    axios.get('https://localhost:7141/ServiceField/Element'),
                    axios.get('https://localhost:7141/ServiceField/Skills'),
                    axios.get('https://localhost:7141/ServiceField/Category'),
                    axios.get(`https://localhost:7141/ServiceField/Case/${id}`)
                ]);

                const mapData = (data) => {
                    const map = {};
                    data.forEach(item => {
                        map[item.id] = item.type;
                    });
                    return map;
                };

                setCheckListMap(mapData(checklistResponse.data));
                setObjectMap(mapData(objectResponse.data));
                setElementMap(mapData(elementResponse.data));
                setSkillsMap(mapData(skillsResponse.data));
                setCategoryMap(mapData(categoryResponse.data));
                setServiceCase(serviceCaseResponse.data);
            } catch (error) {
                console.error('There was an error fetching the data!', error);
                setError('Failed to fetch service case details.');
            }
        };

        fetchData();
    }, [id]);

    if (error) return <p>{error}</p>;
    if (!serviceCase) return <p>Loading...</p>;

    const getTypeById = (map, id) => map[id] || 'Unknown';

    const handleDeleteClick = async () => {
        try {
            await axios.delete(`https://localhost:7141/ServiceField/Case/${id}`);
            navigate('/DetailsFormCase');
        } catch (error) {
            console.error('There was an error deleting the data!', error);
            setError('Failed to delete data.');
        }
    };

    return (
        <div className="flex">
            <SideBar />
            <div className="flex-1">
                <ShowNavBar />
                <div className="p-4">
                    <Container fluid>
                        <Row className="justify-content">
                            <Col md={8}>
                                <h1 className="display" style={{ marginBottom: 40 }}>Service Case Details</h1>
                                <Card style={{ width: '151%', boxShadow: '0 4px 8px rgba(0.1, 0.1, 0.1, 0.1)', padding: '20px 30px 40px 50px' }}>
                                    <Card.Body>
                                        <Card.Title className="title">Service Case Information</Card.Title><br />

                                        <Row className="mb-3">
                                            <Card.Text as={Col}>
                                                <span className="custom-label">Service Case Number:</span> {serviceCase.productSerialNumber}
                                            </Card.Text>
                                        </Row>

                                        <Row className="mb-3">
                                            <Card.Text as={Col}>
                                                <span className="custom-label">Affected Company:</span> {serviceCase.affectedCompany}
                                            </Card.Text>
                                            <Card.Text as={Col}>
                                                <span className="custom-label">Object:</span> {getTypeById(objectMap, serviceCase.objectFK)}
                                            </Card.Text>
                                        </Row>

                                        <Row className="mb-3">
                                            <Card.Text as={Col}>
                                                <span className="custom-label">Contact Person:</span> {serviceCase.contactPerson}
                                            </Card.Text>
                                            <Card.Text as={Col}>
                                                <span className="custom-label">Affected Installation:</span> {serviceCase.affectedInstallation}
                                            </Card.Text>
                                        </Row>

                                        <Row className="mb-3">
                                            <Card.Text as={Col}>
                                                <span className="custom-label">Responsible User:</span> {serviceCase.responsableUser}
                                            </Card.Text>
                                            <Card.Text as={Col}>
                                                <span className="custom-label">Originating Service Order:</span> {serviceCase.originatingSOrder}
                                            </Card.Text>
                                        </Row>

                                        <Row className="mb-3">
                                            <Card.Text as={Col}>
                                                <span className="custom-label">Category:</span> {getTypeById(categoryMap, serviceCase.categoryFK)}
                                            </Card.Text>
                                            <Card.Text as={Col}>
                                                <span className="custom-label">Skills:</span> {getTypeById(skillsMap, serviceCase.skillsFK)}
                                            </Card.Text>
                                        </Row>

                                        <Row className="mb-3">
                                            <Card.Text as={Col}>
                                                <span className="custom-label">Checklist:</span> {getTypeById(checklistMap, serviceCase.checkListFK)}
                                            </Card.Text>
                                            <Card.Text as={Col}>
                                                <span className="custom-label">Element:</span> {getTypeById(elementMap, serviceCase.elementFK)}
                                            </Card.Text>
                                        </Row>

                                        <Row className="mb-3">
                                            <Card.Text as={Col}>
                                                <span className="custom-label">Status:</span> {serviceCase.serviceCaseStatus}
                                            </Card.Text>
                                            <Card.Text as={Col}>
                                                <span className="custom-label">Priority:</span> {serviceCase.priority}
                                            </Card.Text>
                                        </Row>

                                        <Row className="mb-3">
                                            <Card.Text as={Col}>
                                                <span className="custom-label">Message:</span> {serviceCase.message}
                                            </Card.Text>
                                            <Card.Text as={Col}>
                                                <span className="custom-label">Created on:</span> {new Date(serviceCase.creationDate).toLocaleString()}
                                            </Card.Text>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <div className="mt-4">
                                    <button className="updateBtn"><i className="material-icons">edit</i></button>
                                    <button onClick={() => setShowDeleteModal(true)} className="deleteBtn">
                                        <i className="material-icons">delete</i>
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                    <Modal.Header closeButton>
                        Confirm Delete
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete this service case?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                            Cancel
                        </Button>
                        <Button variant="danger" onClick={handleDeleteClick}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

export default ServiceCaseDetails;
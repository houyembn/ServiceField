import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import '../OrderDetails/OrderDetails.css';
import { useNavigate } from 'react-router-dom';

function InstallationDetails() {
    const [installations, setInstallations] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleCreateButtonClick = () => {
        navigate('/FormInstall');
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7141/ServiceField/Installation');
                setInstallations(response.data);
            } catch (error) {
                console.error('There was an error fetching the data!', error);
                setError('Failed to fetch data.');
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex">
            <SideBar />
            <div className="flex-1">
                <ShowNavBar />
                <div className="p-4">
                    <Container fluid>
                        <Row className="justify-content">
                            {error && <p>{error}</p>}
                            <Col md={8}>
                                <h1 className="display" style={{ marginBottom: 40 }}>Installation Details:</h1>

                                {installations.length > 0 ? (
                                    installations.map((installation) => (
                                        <Card key={installation.installationNumber} style={{ width: '151%', boxShadow: '0 4px 8px rgba(0.1, 0.1, 0.1, 0.1)', padding: '20px 30px 40px 50px' }}>
                                            <Card.Body>
                                                <Card.Title className="title">Installation Information:</Card.Title><br />

                                                <Row className="mb-3">
                                                    <Card.Text as={Col}>
                                                        <span className="custom-label">Installation Number:</span> {installation.installationNumber}
                                                    </Card.Text>
                                                </Row>

                                                <Row className="mb-3">
                                                    <Card.Text as={Col}>
                                                        <span className="custom-label">Installation Name:</span> {installation.installationName}
                                                    </Card.Text>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Card.Text as={Col}>
                                                        <span className="custom-label">Description:</span> {installation.description}
                                                    </Card.Text>
                                                    <Card.Text as={Col}>
                                                        <span className="custom-label">Installation Type:</span> {installation.installationType}
                                                    </Card.Text>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Card.Text as={Col}>
                                                        <span className="custom-label">Owner:</span> {installation.owner}
                                                    </Card.Text>
                                                    <Card.Text as={Col}>
                                                        <span className="custom-label">Installation Location:</span> {installation.installationLocation}
                                                    </Card.Text>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Card.Text as={Col}>
                                                        <span className="custom-label">Manufacture Date:</span> {new Date(installation.manufactureDate).toLocaleDateString()}
                                                    </Card.Text>
                                                    <Card.Text as={Col}>
                                                        <span className="custom-label">Installation Status:</span> {installation.installationStatus}
                                                    </Card.Text>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    ))
                                ) : (
                                    <p>No installations found.</p>
                                )}
                            </Col>
                        </Row>
                    </Container>
                </div>
              
                <button onClick={handleCreateButtonClick} className="addBtn">
                    <i className="material-icons">add</i>
                </button>
            </div>
        </div>
    );
}

export default InstallationDetails;

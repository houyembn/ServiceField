import Card from 'react-bootstrap/Card';
import ShowNavBar from '../../NavBar/NavBar';
import SideBar from '../../SideBar/SideBar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../OrderDisplay/OrderDisplay.css';


function ObjectDisplay() {
    const [objectDisplay, setObjectDisplay] = useState([]);
    const navigate = useNavigate();

    const handleCreateButtonClick = () => {
        navigate('/ServiceObject');
    };

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('https://localhost:7141/api/ServiceObject');
                setObjectDisplay(response.data);
            } catch (error) {
                console.error('Error fetching the items:', error);
            }
        };

        fetchItems();
    }, []);

    const handleCardClick = (serviceObjectId) => {
        navigate(`/ObjectDetails/${serviceObjectId}`);
    };

    return (
        <div className="flex">
            <SideBar />
            <div className="flex-1">
                <ShowNavBar />
                <div className="p-4">
                    <h1 className="display">Object Display :</h1>
                    <Row>
                        {objectDisplay.map((object) => (
                            <Col key={Object.serviceObjectId} md={4} className="mb-4">
                                <Card className="fixed-card" onClick={() => handleCardClick(object.serviceObjectId)}>
                                    <Card.Body>
                                        <Card.Title>Object Name: {object.serviceObjectName}</Card.Title>
                                        <Card.Text>
                                            Object Description: {object.serviceObjectDescription}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <button onClick={handleCreateButtonClick} className="addBtn"><i className="material-icons">add</i></button>
                </div>
            </div>
        </div>
    );
}

export default ObjectDisplay;

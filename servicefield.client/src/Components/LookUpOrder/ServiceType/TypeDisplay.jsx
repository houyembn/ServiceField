import Card from 'react-bootstrap/Card';
import ShowNavBar from '../../NavBar/NavBar';
import SideBar from '../../SideBar/SideBar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../OrderDisplay/OrderDisplay.css';


function TypeDisplay() {
    const [typeDisplay, setTypeDisplay] = useState([]);
    const navigate = useNavigate();

    const handleCreateButtonClick = () => {
        navigate('/ServiceType');
    };

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('https://localhost:7141/api/ServiceType');
                setTypeDisplay(response.data);
            } catch (error) {
                console.error('Error fetching the items:', error);
            }
        };

        fetchItems();
    }, []);

    const handleCardClick = (serviceTypeId) => {
        navigate(`/TypeDetails/${serviceTypeId}`);
    };

    return (
        <div className="flex">
            <SideBar />
            <div className="flex-1">
                <ShowNavBar />
                <div className="p-4">
                    <h1 className="display">Service Type:</h1>
                    <Row>
                        {typeDisplay.map((type) => (
                            <Col key={type.serviceTypeId} md={4} className="mb-4">
                                <Card className="fixed-card" onClick={() => handleCardClick(type.serviceTypeId)}>
                                    <Card.Body>
                                        <Card.Title>Type Name: {type.serviceTypeName}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Type Category: {type.category}</Card.Subtitle>
                                        <Card.Text>
                                            <span
                                                style={{
                                                    display: 'inline-block',
                                                    width: '9px',
                                                    height: '9px',
                                                    borderRadius: '50%',
                                                    backgroundColor: type.isActive ? 'green' : 'red',
                                                    marginRight: '10px',
                                                }}
                                            ></span>
                                            This type is {type.isActive ? 'Active' : 'Inactive'}
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

export default TypeDisplay;

import Card from 'react-bootstrap/Card';
import ShowNavBar from '../../NavBar/NavBar';
import SideBar from '../../SideBar/SideBar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../OrderDisplay/OrderDisplay.css';


function InvoicingDisplay() {
    const [invoicingDisplay, setInvoicingDisplay] = useState([]);
    const navigate = useNavigate();

    const handleCreateButtonClick = () => {
        navigate('/Invoicing');
    };

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('https://localhost:7141/api/Invoicing');
                setInvoicingDisplay(response.data);
            } catch (error) {
                console.error('Error fetching the items:', error);
            }
        };

        fetchItems();
    }, []);

    const handleCardClick = (serviceInvoicingId) => {
        navigate(`/InvoicingDetails/${serviceInvoicingId}`);
    };

    return (
        <div className="flex">
            <SideBar />
            <div className="flex-1">
                <ShowNavBar />
                <div className="p-4">
                    <h1 className="display">Invoicing:</h1>
                    <Row>
                        {invoicingDisplay.map((invoicing) => (
                            <Col key={invoicing.invoicingId} md={4} className="mb-4">
                                <Card className="fixed-card" onClick={() => handleCardClick(invoicing.invoicingId)}>
                                    <Card.Body>
                                        <Card.Title>invoicing Type: {invoicing.invoicingType}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Payment Method: {invoicing.paymentMethod}</Card.Subtitle>
                                        <Card.Text>
                                            Recurring Period : {invoicing.recurringPeriod}
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

export default InvoicingDisplay;

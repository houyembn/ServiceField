import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Card, } from 'react-bootstrap';
import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import './OrderDisplay.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faTrash } from '@fortawesome/free-solid-svg-icons';

function OrderDisplay() {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const handleCreateButtonClick = () => {
        navigate('/OrderManagement');
    };

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('https://localhost:7141/api/ServiceOrders');
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching the items:', error);
            }
        };

        fetchItems();
    }, []);

    const handleCardClick = (idOrder) => {
        navigate(`/orderdetails/${idOrder}`);
    };

    const customerMapping = {
        1: 'Customer 1',
        2: 'Customer 2',
        3: 'Customer 3'
    };



    return (
        <div className="flex">
            <SideBar />
            <div className="flex-1">
                <ShowNavBar />
                <div className="p-4">
                    <h1 className="display">Service Orders:</h1>
                    {orders.map((order) => (
                        <Card key={order.idOrder} className="mb-4" onClick={() => handleCardClick(order.idOrder)}>
                            <Card.Header as="h5">
                                Order Number: {order.orderNumber}
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>Service Object: {order.serviceObject}</Card.Title>
                                <Card.Text>
                                    <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
                                        <span>
                                            <strong>Customer Name:</strong> {customerMapping[order.companyName]}
                                        </span>
                                        <span><strong>Initiator Name:</strong> {order.initiatorName}</span>
                                    </div>
                                    <div style={{ display: 'flex', gap: '85px', flexWrap: 'wrap' }}>
                                        <span><strong>Service Type:</strong> {order.serviceType}</span>
                                        <span><strong>Location:</strong> {order.location}</span>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    ))}
                   
                    <button onClick={handleCreateButtonClick} className="addBtn"><i className="material-icons">add</i></button>
                </div>
            </div>
        </div>
    );
}
export default OrderDisplay;

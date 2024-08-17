import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Modal, } from 'react-bootstrap';
import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import './OrderDisplay.css';

function OrderDisplay() {
    const [orders, setOrders] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [id, setId] = useState('');
    const [searchResultMessage, setSearchResultMessage] = useState('');
    const [caseData, setCaseData] = useState(null);
    const navigate = useNavigate();


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

    const handleCreateButtonClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleIdChange = (event) => {
        setId(event.target.value);
    };

    const handleSearch = async () => {
        if (!id.trim()) {
            setSearchResultMessage('Please enter a Case ID');
            return;
        }

        try {
            const response = await axios.get(`https://localhost:7141/ServiceField/Case/CheckClientCase?id=${id}`);
            console.log('Response from API:', response.data);

            if (response.data && response.data.id) {
                setSearchResultMessage('Service Case found');
                setCaseData(response.data);
            } else {
                setSearchResultMessage('Service Case not found');
                setCaseData(null);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setSearchResultMessage('Error fetching data');
        }
    };

    const handleButtonCaseClick = () => {
        if (caseData) {
            navigate('/CheckCase', { state: { caseData } });
        }
    };

    const handleButtonOrderClick = () => {
        if (!caseData) {
            navigate('/OrderManagement', { state: { caseData } });
        }
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
                                            <strong>Customer Name:</strong> {order.companyName}
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

                    <Modal
                        show={isModalOpen}
                        onHide={handleModalClose}
                        aria-labelledby="modal-title"
                        aria-describedby="modal-description"
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="modal-title">Has this ever been a service case?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="input-container" style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    type="text"
                                    value={id}
                                    onChange={handleIdChange}
                                    placeholder="Enter Case ID"
                                    className="form-control"
                                    style={{ flexGrow: 1, marginRight: '10px' }} // Adjust spacing as needed
                                />
                                <Button
                                    variant="primary"
                                    onClick={handleSearch}
                                    style={{ backgroundColor: '#204fea', borderColor: '#204fea' }}
                                >
                                    Search
                                </Button>

                            </div>
                            <div className="search-result mt-2" style={{
                                display: 'flex',          
                                justifyContent: 'center', 
                                alignItems: 'center',
                             
                            }}>
                                <span>{searchResultMessage}</span>
                            </div>
                        </Modal.Body>
                        <Modal.Footer style={{ display: 'flex', justifyContent: 'center', border: 'none' }}>
                            <Button
                                variant="outline-secondary"
                                onClick={handleButtonCaseClick}
                                style={{
                                    backgroundColor: 'white',
                                    borderColor: 'purple',
                                    color: 'purple',
                                    border: '1px solid purple'
                                }}
                                className="me-2 custom-button"
                            >
                                Check the service case
                            </Button>
                            <Button
                                variant="outline-secondary"
                                onClick={handleButtonOrderClick}
                                style={{
                                    backgroundColor: 'white',
                                    borderColor: 'purple',
                                    color: 'purple',
                                    border: '1px solid purple'
                                }}
                                className="custom-button"
                            >
                                Create a service order
                            </Button>
                        </Modal.Footer>

                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default OrderDisplay;

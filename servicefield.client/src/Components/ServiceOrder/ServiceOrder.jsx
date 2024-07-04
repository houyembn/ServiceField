import  { useState } from 'react';
import axios from 'axios';
import './ServiceOrder.css';

function ServiceOrder() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [clientId, setClientId] = useState('');
    const [serviceOrders, setServiceOrders] = useState([]);
    const [hasServiceOrders, setHasServiceOrders] = useState(false);
    const [searchResultMessage, setSearchResultMessage] = useState('');

    const openPopup = () => {
        setIsPopupOpen(true);
        resetState();
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const resetState = () => {
        setServiceOrders([]);
        setHasServiceOrders(false);
        setSearchResultMessage('');
    };

    const handleClientIdChange = (event) => {
        setClientId(event.target.value);
    };

    const handleSearch = async () => {
        if (!clientId.trim()) {
            setSearchResultMessage('Please enter a Client ID');
            return;
        }

        try {
            const response = await axios.get(`http://localhost:5297/api/ServiceCases/CheckClientCase?idClient=${clientId}`);
            const data = response.data;
            setServiceOrders(data);
            const hasOrders = data.length > 0;
            setHasServiceOrders(hasOrders);
            setSearchResultMessage(hasOrders ? 'Service Case found' : 'Service Case not found');
        } catch (error) {
            console.error('Error fetching service orders:', error);
            setSearchResultMessage('Error fetching service orders');
        }
    };

    const handleYesButtonClick = () => {
        console.log('Yes button clicked');
    };

    const handleNoButtonClick = () => {
        console.log('No button clicked');
        closePopup();
    };

    return (
        <div>
            <button id="openPopupBtn" onClick={openPopup}>Open Popup</button>

            {isPopupOpen && (
                <div id="popup" className="popup" onClick={closePopup}>
                    <div className="popup-content" onClick={e => e.stopPropagation()}>
                        <span className="close-btn" onClick={closePopup}>&times;</span>
                        <h2>Has this client made service orders before?</h2>
                        <div className="input-container">
                            <label htmlFor="clientId">Enter Client ID:</label>
                            <input type="text" id="clientId" value={clientId} onChange={handleClientIdChange} />
                            <button className="search-btn" onClick={handleSearch}>Search</button>
                        </div>
                        <div className="button-container">
                            <button className="yes-btn" onClick={handleYesButtonClick}>Yes</button>
                            <button className="no-btn" onClick={handleNoButtonClick}>No</button>
                        </div>
                        <div className="search-result">
                            <p>{searchResultMessage}</p>
                        </div>
                        {hasServiceOrders && (
                            <div className="service-orders">
                                <h3>Service Orders:</h3>
                                <ul>
                                    {serviceOrders.map(order => (
                                        <li key={order.idCase}>
                                            {order.descriptionOfCase}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ServiceOrder;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ServiceOrder.css';

function ServiceOrder() {
    const [idCase, setIdCase] = useState('');
    const [searchResultMessage, setSearchResultMessage] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [caseData, setCaseData] = useState(null);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleIdCaseChange = (event) => {
        setIdCase(event.target.value);
    };

    const handleSearch = async () => {
        if (!idCase.trim()) {
            setSearchResultMessage('Please enter a Case ID');
            return;
        }

        try {
            const response = await axios.get(`https://localhost:7141/api/ServiceCases/CheckClientCase?idCase=${idCase}`);
            console.log('Response from API:', response.data); // Log the response data

            // Evaluate the response to determine the message to display
            if (response.data && response.data.idCase) {
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

    const navigate = useNavigate();
    const handleButtonOrderClick = () => {
        if (!caseData ) {
            navigate('/OrderManagement', { state: { caseData } });
        }
    };

    return (
        <div>
            <button id="openPopupBtn" onClick={openPopup}>Open Popup</button>

            {isPopupOpen && (
                <div id="popup" className="popup" onClick={closePopup}>
                    <div className="popup-content" onClick={e => e.stopPropagation()}>
                        <span className="close-btn" onClick={closePopup}>&times;</span>
                        <h2>Has this ever been a service case?</h2>
                        <div className="input-container">
                            <label htmlFor="idCase">Enter Case ID:</label>
                            <input type="text" id="idCase" value={idCase} onChange={handleIdCaseChange} />
                            <button className="search-btn" onClick={handleSearch}>Search</button>
                        </div>
                        <div className="search-result">
                            <p>{searchResultMessage}</p>
                        </div>

                        <div className="button-container">
                            <button className="popup-btn" onClick={handleButtonCaseClick}>Check the service case</button>
                            <button className="popup-btn" onClick={handleButtonOrderClick}>Create a service order</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ServiceOrder;

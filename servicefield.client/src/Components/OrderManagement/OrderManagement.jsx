import './OrderManagement.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SideBar from '../SideBar/SideBar';


function OrderManagement() {
  
    const handleSubmit = () => {
       
    };

    return (
        <div className="order-management">
            <SideBar />
            <div className="section">
                <h2>Service Order Form</h2>
                <div className="input-row">
                    <div className="input-group">
                        <label>Company Name: </label>
                        <select>
                            <option value="">Select...</option>
                            <option value="type1">L-mobile </option>
                            <option value="type2">ITBS</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label>Description of the Order: </label>
                        <input type="text"  placeholder="Enter the Description" />
                    </div>
                    <div className="input-group">
                        <label>Service Type: </label>
                        <select>
                            <option value="">Select...</option>
                            <option value="type1">Techincal support </option>
                            <option value="type2">Maintenance</option>
                            <option value="type3">Installation</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label>Date Opened: </label>
                        <DatePicker
                            selected={null} // Set your state for selected date here
                            onChange={(date) => console.log(date)} // Handle date change
                            placeholderText="Enter opening date"
                            dateFormat="dd/MM/yyyy" // Format of displayed date
                        />
                    </div>
                    <div className="input-group">
                        <label>Assigned To: </label>
                        <select>
                            <option value="">Select...</option>
                            <option value="type1">Sami</option>
                            <option value="type2">Sarah</option>
                            <option value="type3">Selim</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label>Status: </label>
                        <select>
                            <option value="">Select...</option>
                            <option value="type1">open</option>
                            <option value="type2">in progress</option>
                            <option value="type3">closed</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label>Resolution Summary: </label>
                        <input type="text" placeholder="Enter the Summary" />
                    </div>
                    <div className="input-group">
                        <label>Date Closed: </label>
                        <DatePicker
                            selected={null} // Set your state for selected date here
                            onChange={(date) => console.log(date)} // Handle date change
                            placeholderText="Enter closing date"
                            dateFormat="dd/MM/yyyy" // Format of displayed date
                        />
                    </div>
                    <div className="input-group">
                        <label>Customer Satisfaction: </label>
                        <input type="text" placeholder="Enter Customer Satisfaction" />
                    </div>
                    
                </div>
                <div className="button-container">
                    <button onClick={handleSubmit}>Submit Service Order</button>
                </div>
            </div>
        </div>
    );
}

export default OrderManagement;

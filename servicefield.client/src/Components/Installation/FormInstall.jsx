
import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import { useState } from 'react';
import './FormInstall.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

function FormInstall() {
    const [formData, setFormData] = useState({
        id: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const navigate = useNavigate();
    const handleGetButtonClick = () => {
        navigate('/DetailsFormInstall');
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:7141/ServiceField/Installation', formData);
            console.log(response.data);
            setMessage('Form submitted successfully!');
            navigate('/DetailsFormInstall'); 
        } catch (error) {
            console.error('There was an error adding the item!', error);
            setMessage('Failed to submit form.');
        }
    };


    return (






        <div className="flex">
            <SideBar />
            <div className="flex-1">
                <ShowNavBar />

                <div className="p-4">

                    <div className="body">

                      
                        {message && <p>{message}</p>}
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="installationNumber">Installation Number</label>
                                <input type="text" id="installationNumber" name="installationNumber" value={formData.installationNumber} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="installationType">Installation Type</label>
                                <select id="installationType" name="installationType" value={formData.installationType} onChange={handleChange}>
                                    <option value="">Select Type</option>
                                    <option value="Electrical">Electrical</option>
                                    <option value="Mechanical">Mechanical</option>
                                    <option value="Software">Software</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="owner">Owner</label>
                                <select id="owner" name="owner" value={formData.owner} onChange={handleChange}>
                                    <option value="">Select Owner</option>
                                    <option value="Owner1">Owner1</option>
                                    <option value="Owner2">Owner2</option>
                                    <option value="Owner3">Owner3</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="installationLocation">Installation Location</label>
                                <select id="installationLocation" name="installationLocation" value={formData.installationLocation} onChange={handleChange}>
                                    <option value="">Select Location</option>
                                    <option value="Location1">Location1</option>
                                    <option value="Location2">Location2</option>
                                    <option value="Location3">Location3</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="manufactureDate">Manufacture Date</label>
                                <input type="date" id="manufactureDate" name="manufactureDate" value={formData.manufactureDate} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="installationStatus">Installation Status</label>
                                <select id="installationStatus" name="installationStatus" value={formData.installationStatus} onChange={handleChange}>
                                    <option value="">Select Status</option>
                                    <option value="Pending">Pending</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </div>
                            <button type="submit" className="sub" onSubmit={handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default FormInstall;

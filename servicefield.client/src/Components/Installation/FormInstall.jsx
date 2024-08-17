
import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import { useState } from 'react';
import './FormInstall.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormInstall() {
    const [formData, setFormData] = useState({
        id: '',
        installationName: '',
        description: '',

        installationType: '',
        owner: '',
        installationLocation: '',
        manufactureDate: '',
        installationStatus: '',
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
                            <Form.Label className="custom-label">Installation Name</Form.Label>
                            <Form.Control
                                id="installationName"
                                placeholder="Enter installationName"
                                className="custom-input"
                                name="installationName"
                                value={formData.installationName}
                                onChange={handleChange}
                            />
                            <Form.Label className="custom-label">Description</Form.Label>
                            <Form.Control
                                id="description"
                                placeholder="Enter description"
                                className="custom-input"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                            />
                            <div className="form-row">
                                <div className="form-column">
                                    <Form.Label className="custom-label">Installation Type</Form.Label>
                                    <Form.Select aria-label="Select installationType" id="installationType" className="custom-input" name="installationType" value={formData.installationType}
                                        onChange={handleChange} >
                                        <option value="" disabled>Select an option</option>
                                        <option value="Electrical">Electrical</option>
                                           <option value="Mechanical">Mechanical</option>
                                       <option value="Software">Software</option>
                                    </Form.Select>
                                </div>


                              
                               
                                <div className="form-column">
                                <Form.Label className="custom-label">Owner</Form.Label>
                                <Form.Select aria-label="Select owner" id="owner" className="custom-input" name="owner" value={formData.owner}
                                    onChange={handleChange} >
                                    <option value="" disabled>Select an option</option>
                                    <option value="Owner1">Owner1</option>
                                         <option value="Owner2">Owner2</option>
                                           <option value="Owner3">Owner3</option>
                                </Form.Select>

                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-column">
                                    <Form.Label className="custom-label">Installation Location</Form.Label>
                                    <Form.Select aria-label="Select installationLocation" id="installationLocation" className="custom-input" name="installationLocation" value={formData.installationLocation}
                                        onChange={handleChange} >
                                        <option value="" disabled>Select an option</option>
                                        <option value="Location1">Location1</option>
                                             <option value="Location2">Location2</option>
                                               <option value="Location3">Location3</option>
                                    </Form.Select>
                                </div>

                                <div className="form-column">
                                    <Form.Label className="custom-label">installationStatus</Form.Label>
                                    <Form.Select aria-label="Select installationStatus" id="installationStatus" className="custom-input" name="installationStatus" value={formData.installationStatus}
                                        onChange={handleChange} >
                                        <option value="" disabled>Select an option</option>
                                        <option value="Pending">Pending</option>
                                             <option value="In Progress">In Progress</option>
                                            <option value="Completed">Completed</option>
                                    </Form.Select>

                                </div>
                            </div>
                            <Form.Group className="mb-3">
                                <Form.Label className="custom-label" htmlFor="manufactureDate">
                                    Manufacture Date
                                </Form.Label>
                                <Form.Control
                                    type="date"
                                    id="manufactureDate"
                                    name="manufactureDate"
                                    value={formData.manufactureDate}
                                    onChange={handleChange}
                                    className="custom-input"
                                />
                            </Form.Group>


                            <button type="submit" className="sub" onSubmit={handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default FormInstall;

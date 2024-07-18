
//import ShowNavBar from '../NavBar/NavBar';
//import SideBar from '../sidebar/SideBar';
//import { useState } from 'react';
//import './FormCase.css';
//import axios from 'axios';
//import { useNavigate } from 'react-router-dom';
//import {
//    Button,
//    TextField,
//    Select,
//    InputLabel,
//    MenuItem,
//    FormControl,
//    AppBar,
//    Toolbar,
//    Typography,
//    Container,
//    IconButton
//} from '@material-ui/core';
//function FormCase() {
//    const [formData, setFormData] = useState({
//        id: '',
//        companyName: '',
//        productSerialNumber: '',
//        problemType: '',
//        description: '',
//        priority: '',
//        contract: '',
//    });

//    const [message, setMessage] = useState('');

//    const handleChange = (e) => {
//        const { name, value } = e.target;
//        setFormData({ ...formData, [name]: value });
//    };
//    const navigate = useNavigate();
//    const handleGetButtonClick = () => {
//        navigate('/DetailsFormCase');
//    };


//    const handleSubmit = async (e) => {
//        e.preventDefault();
//        try {
//            const response = await axios.post('https://localhost:7141/ServiceField/Case', formData);
//            console.log(response.data);
//            setMessage('Form submitted successfully!');
//            navigate('/DetailsFormCase');
//        } catch (error) {
//            console.error('There was an error adding the item!', error);
//            setMessage('Failed to submit form.');
//        }
//    };


//    return (






//        <div className="flex">
//            <SideBar />
//            <div className="flex-1">
//                <ShowNavBar />

//                <div className="p-4">

//                    <div className="body">


//                        {message && <p>{message}</p>}
//                        <form onSubmit={handleSubmit}>

//                            <div className="form-group">
//                                <label htmlFor="companyName" className="text">Company Name</label>
//                                <select id="companyName" name="companyName" value={formData.companyName} onChange={handleChange}>
//                                    <option value="0">L_Mobile</option>
//                                    <option value="1">Actia</option>
//                                    <option value="2">EY</option>
//                                </select>
//                            </div>
//                            <div className="form-row">
//                                <div className="form-group">
//                                <label htmlFor="companyName" className="text">Company Address</label>
//                                <select >
//                                    <option value="0">Tunis</option>
//                                    <option value="1">France</option>
//                                    <option value="2">Allemagne</option>
//                                </select>
//                                </div>
//                                <div className="form-group">
//                                    <label htmlFor="companyName" className="text">Contrat Type</label>
//                                    <select id="companyName" name="companyName" value={formData.companyName} onChange={handleChange}>
//                                        <option value="0">Maintenance contract</option>
//                                        <option value="1">Technical Support Contract</option>
//                                    </select>
//                                </div>


//                            </div>
//                            <div className="form-row">
//                                <div className="form-group">
//                                    <label htmlFor="productSerialNumber">Company E-mail</label>
//                                    <input type="text" />
//                                </div>

//                                <div className="form-group">
//                                    <label htmlFor="productSerialNumber">Company PhoneNumber</label>
//                                    <input type="text"  />
//                                </div>

//                            </div>

//                            <div className="form-group">
//                                <label htmlFor="productSerialNumber">Product Serial Number</label>
//                                <input type="text" id="productSerialNumber" name="productSerialNumber" value={formData.productSerialNumber} onChange={handleChange} />
//                            </div>
//                            <div className="form-row">
//                            <div className="form-group">
//                                <label htmlFor="problemType">Problem Type</label>
//                                <select id="problemType" name="problemType" value={formData.problemType} onChange={handleChange}>
//                                    <option value="0">Technical problem</option>
//                                    <option value="1">Billing Problem</option>
//                                    <option value="2-support">Customer Support</option>
//                                </select>
//                            </div>
//                            <div className="form-group">

//                                <label htmlFor="priority" >Priority</label>
//                                <select id="priority" name="priority" value={formData.priority} onChange={handleChange}>

//                                    <option value="0">High</option>
//                                    <option value="1">Average</option>
//                                    <option value="2">Low</option>
//                                </select>
//                                </div>
//                            </div>
//                            <div className="form-group">
//                                <label htmlFor="description">Description</label>
//                                <textarea id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
//                            </div>


//                            <button type="submit" className="sub" onSubmit={handleSubmit} >Submit</button>
//                        </form>
//                    </div>
//                </div>
//            </div>
//        </div>

//    );
//}


//export default FormCase;


import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../sidebar/SideBar';
import { useState } from 'react';
import './FormCase.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormCase() {
    const [formData, setFormData] = useState({
        id: '',
        productSerialNumber: '',
        ServiceObject: '',
        AffectedCompany: '',
        ContactPerson: '',
        AffectedInstallation: '',
        Skills: '',
        OriginatingSOrder: '',
       
        CheckList: '',
        Element: '',
        ServiceCaseStatus: '',
        ServiceCaseCategory: '',
        ResponsableUser: '',
        Priority: '',
        Message: '',
       
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const navigate = useNavigate();
    const handleGetButtonClick = () => {
        navigate('/DetailsFormCase');
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:7141/ServiceField/Case', formData);
            console.log(response.data);
            setMessage('Form submitted successfully!');
            navigate('/DetailsFormCase');
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
                    {message && <p>{message}</p>}
                    <form onSubmit={handleSubmit}> 
                    <h2>Service case</h2>
                    <h3>Basic information</h3>
                    <div className="all">
                        
                    <Form.Label className="custom-label">Service Case Numero</Form.Label>
                    <Form.Control
                        placeholder="Put service Numero"
                            className="custom-input"
                            name="productSerialNumber" value={formData.productSerialNumber} onChange={handleChange}
                        />
                   
                    <div className="form-row">
                            <div className="form-column">
                                <Form.Label className="custom-label">Service Object</Form.Label>
                                    <Form.Select className="custom-input" aria-label="Default select example" id="ServiceObject" name="ServiceObject" value={formData.ServiceObject} onChange={handleChange}>

                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                        
                    
                        </div>
                            <div className="form-column">
                                <Form.Label className="custom-label">Affected Company</Form.Label>

                                    <Form.Select className="custom-input" aria-label="Default select example" id="AffectedCompany" name="AffectedCompany" value={formData.AffectedCompany} onChange={handleChange}>

                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                   
                        </div>
                    </div>
                        <div className="form-row">
                            <div className="form-column">
                            <Form.Label className="custom-label">Contact Person </Form.Label>

                                    <Form.Select className="custom-input" aria-label="Default select example" id="ContactPerson" name="ContactPerson" value={formData.ContactPerson} onChange={handleChange}>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        
                           </div>
                        
                            <div className="form-column">
                                <Form.Label className="custom-label">Affected Installation</Form.Label>
                                    <Form.Select className="custom-input" aria-label="Select affected installation" id="AffectedInstallation" name="AffectedInstallation" value={formData.AffectedInstallation} onChange={handleChange}>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                          
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-column">
                            <Form.Label className="custom-label">Originating Service Order</Form.Label>
                                    <Form.Select className="custom-input" aria-label="Select affected installation" id="OriginatingSOrder" name="OriginatingSOrder" value={formData.OriginatingSOrder} onChange={handleChange}>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                        <div className="form-column">
                            <Form.Label className="custom-label">Skills</Form.Label>
                                    <Form.Select className="custom-input" aria-label="Select skills" id="Skills" name="Skills" value={formData.Skills} onChange={handleChange}>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-column">
                            <Form.Label className="custom-label">Checklist</Form.Label>
                                    <Form.Select aria-label="Select affected installation" className="custom-input" id="CheckList" name="CheckList" value={formData.CheckList} onChange={handleChange}>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                        <div className="form-column">
                            <Form.Label className="custom-label">Element</Form.Label>
                                    <Form.Select aria-label="Select skills" className="custom-input" id="Element" name="Element" value={formData.Element} onChange={handleChange}>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                           </div>
                    </div>
                        </div>
                        <h3>Extended information</h3>
                        <div className="all">
                            <div className="form-row">
                                <div className="form-column">
                                    <Form.Label className="custom-label">Service case status</Form.Label>
                                    <Form.Select aria-label="Select affected installation" className="custom-input" id="ServiceCaseStatus" name="ServiceCaseStatus" value={formData.ServiceCaseStatus} onChange={handleChange}>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="form-column">
                                    <Form.Label className="custom-label" >Service case category</Form.Label>
                                    <Form.Select aria-label="Select skills" className="custom-input" id="ServiceCaseCategory" name="ServiceCaseCategory" value={formData.ServiceCaseCategory} onChange={handleChange}>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="form-column">
                                    <Form.Label className="custom-label">Responsable user</Form.Label>
                                    <Form.Select aria-label="Select affected installation" className="custom-input" id="ResponsableUser" name="ResponsableUser" value={formData.ResponsableUser} onChange={handleChange}>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="form-column">
                                    <Form.Label className="custom-label">Priority</Form.Label>
                                    <Form.Select aria-label="Select skills" className="custom-input" id="Priority" name="Priority" value={formData.Priority} onChange={handleChange}>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                            </div>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="custom-label">Message</Form.Label>
                                <Form.Control className="custom-input" as="textarea" rows={3} style={{ resize: 'both' }} id="Message" name="Message" value={formData.Message} onChange={handleChange} />
                        </Form.Group>

                        <Button className="sub" as="input" type="submit" value="Submit" onSubmit={handleSubmit}  />{' '}
                        
                       
                        </div>


                 
                    </form>


                 
                    
                </div>
            </div>
        </div>

    );
}


export default FormCase;








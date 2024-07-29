
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


//import ShowNavBar from '../NavBar/NavBar';
//import SideBar from '../sidebar/SideBar';
//import { useState } from 'react';
//import './FormCase.css';
//import axios from 'axios';
//import { useNavigate } from 'react-router-dom';
//import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button';

//function FormCase() {
//    const [formData, setFormData] = useState({
//        id: '',
//        productSerialNumber: '',
//        ServiceObject: '',
//        AffectedCompany: '',
//        ContactPerson: '',
//        AffectedInstallation: '',
//        Skills: '',
//        OriginatingSOrder: '',

//        CheckList: '',
//        Element: '',
//        ServiceCaseStatus: '',
//        ServiceCaseCategory: '',
//        ResponsableUser: '',
//        Priority: '',
//        Message: '',

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
//                    {message && <p>{message}</p>}
//                    <form onSubmit={handleSubmit}>
//                    <h2>Service case</h2>
//                    <h3>Basic information</h3>
//                    <div className="all">

//                    <Form.Label className="custom-label">Service Case Numero</Form.Label>
//                    <Form.Control
//                        placeholder="Put service Numero"
//                            className="custom-input"
//                            name="productSerialNumber" value={formData.productSerialNumber} onChange={handleChange}
//                        />

//                    <div className="form-row">
//                            <div className="form-column">
//                                <Form.Label className="custom-label">Service Object</Form.Label>
//                                    <Form.Select className="custom-input" aria-label="Default select example" id="ServiceObject" name="ServiceObject" value={formData.ServiceObject} onChange={handleChange}>

//                                    <option value="1">One</option>
//                                    <option value="2">Two</option>
//                                    <option value="3">Three</option>
//                                </Form.Select>


//                        </div>
//                            <div className="form-column">
//                                <Form.Label className="custom-label">Affected Company</Form.Label>

//                                    <Form.Select className="custom-input" aria-label="Default select example" id="AffectedCompany" name="AffectedCompany" value={formData.AffectedCompany} onChange={handleChange}>

//                                    <option value="1">One</option>
//                                    <option value="2">Two</option>
//                                    <option value="3">Three</option>
//                                </Form.Select>

//                        </div>
//                    </div>
//                        <div className="form-row">
//                            <div className="form-column">
//                            <Form.Label className="custom-label">Contact Person </Form.Label>

//                                    <Form.Select className="custom-input" aria-label="Default select example" id="ContactPerson" name="ContactPerson" value={formData.ContactPerson} onChange={handleChange}>
//                                <option value="1">One</option>
//                                <option value="2">Two</option>
//                                <option value="3">Three</option>
//                            </Form.Select>

//                           </div>

//                            <div className="form-column">
//                                <Form.Label className="custom-label">Affected Installation</Form.Label>
//                                    <Form.Select className="custom-input" aria-label="Select affected installation" id="AffectedInstallation" name="AffectedInstallation" value={formData.AffectedInstallation} onChange={handleChange}>
//                                    <option value="1">One</option>
//                                    <option value="2">Two</option>
//                                    <option value="3">Three</option>
//                                </Form.Select>

//                        </div>
//                    </div>
//                    <div className="form-row">
//                        <div className="form-column">
//                            <Form.Label className="custom-label">Originating Service Order</Form.Label>
//                                    <Form.Select className="custom-input" aria-label="Select affected installation" id="OriginatingSOrder" name="OriginatingSOrder" value={formData.OriginatingSOrder} onChange={handleChange}>
//                                <option value="1">One</option>
//                                <option value="2">Two</option>
//                                <option value="3">Three</option>
//                            </Form.Select>
//                        </div>
//                        <div className="form-column">
//                            <Form.Label className="custom-label">Skills</Form.Label>
//                                    <Form.Select className="custom-input" aria-label="Select skills" id="Skills" name="Skills" value={formData.Skills} onChange={handleChange}>
//                                <option value="1">One</option>
//                                <option value="2">Two</option>
//                                <option value="3">Three</option>
//                            </Form.Select>
//                        </div>
//                    </div>
//                    <div className="form-row">
//                        <div className="form-column">
//                            <Form.Label className="custom-label">Checklist</Form.Label>
//                                    <Form.Select aria-label="Select affected installation" className="custom-input" id="CheckList" name="CheckList" value={formData.CheckList} onChange={handleChange}>
//                                <option value="1">One</option>
//                                <option value="2">Two</option>
//                                <option value="3">Three</option>
//                            </Form.Select>
//                        </div>
//                        <div className="form-column">
//                            <Form.Label className="custom-label">Element</Form.Label>
//                                    <Form.Select aria-label="Select skills" className="custom-input" id="Element" name="Element" value={formData.Element} onChange={handleChange}>
//                                <option value="1">One</option>
//                                <option value="2">Two</option>
//                                <option value="3">Three</option>
//                            </Form.Select>
//                           </div>
//                    </div>
//                        </div>
//                        <h3>Extended information</h3>
//                        <div className="all">
//                            <div className="form-row">
//                                <div className="form-column">
//                                    <Form.Label className="custom-label">Service case status</Form.Label>
//                                    <Form.Select aria-label="Select affected installation" className="custom-input" id="ServiceCaseStatus" name="ServiceCaseStatus" value={formData.ServiceCaseStatus} onChange={handleChange}>
//                                        <option value="1">One</option>
//                                        <option value="2">Two</option>
//                                        <option value="3">Three</option>
//                                    </Form.Select>
//                                </div>
//                                <div className="form-column">
//                                    <Form.Label className="custom-label" >Service case category</Form.Label>
//                                    <Form.Select aria-label="Select skills" className="custom-input" id="ServiceCaseCategory" name="ServiceCaseCategory" value={formData.ServiceCaseCategory} onChange={handleChange}>
//                                        <option value="1">One</option>
//                                        <option value="2">Two</option>
//                                        <option value="3">Three</option>
//                                    </Form.Select>
//                                </div>
//                                <div className="form-column">
//                                    <Form.Label className="custom-label">Responsable user</Form.Label>
//                                    <Form.Select aria-label="Select affected installation" className="custom-input" id="ResponsableUser" name="ResponsableUser" value={formData.ResponsableUser} onChange={handleChange}>
//                                        <option value="1">One</option>
//                                        <option value="2">Two</option>
//                                        <option value="3">Three</option>
//                                    </Form.Select>
//                                </div>
//                                <div className="form-column">
//                                    <Form.Label className="custom-label">Priority</Form.Label>
//                                    <Form.Select aria-label="Select skills" className="custom-input" id="Priority" name="Priority" value={formData.Priority} onChange={handleChange}>
//                                        <option value="1">One</option>
//                                        <option value="2">Two</option>
//                                        <option value="3">Three</option>
//                                    </Form.Select>
//                                </div>
//                            </div>
//                        <Form.Group controlId="exampleForm.ControlTextarea1">
//                            <Form.Label className="custom-label">Message</Form.Label>
//                                <Form.Control className="custom-input" as="textarea" rows={3} style={{ resize: 'both' }} id="Message" name="Message" value={formData.Message} onChange={handleChange} />
//                        </Form.Group>

//                        <Button className="sub" as="input" type="submit" value="Submit" onSubmit={handleSubmit}  />{' '}


//                        </div>



//                    </form>




//                </div>
//            </div>
//        </div>

//    );
//}


//export default FormCase;


import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../sidebar/SideBar';
import { useState, useEffect } from 'react';
import './FormCase.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormCase() {
    const [formData, setFormData] = useState({
       
        id: 0,
        productSerialNumber: 0,
        affectedCompany: '',
        contactPerson: '',
        affectedInstallation: '',
        originatingSOrder: '',
        serviceCaseStatus: '',
        responsableUser: '',
        priority: '',
        message: '',
        creator: '',
        creationDate: new Date().toISOString(), 
        objectFK:0,
        skillsFK: 0,
        checkListFK: 0,
        elementFK: 0,
        categoryFK: 0

    });

    const [message, setMessage] = useState('');
    const [checklist, setCheckLists] = useState([]);
    const [object, setObjects] = useState([]);
    const [element, setElements] = useState([]);
    const [skills, setSkills] = useState([]);
    const [category, setCategories] = useState([]);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(name, value);
       setError({ ...error, [name]: '' }); 
    };
    const navigate = useNavigate();
    const handleGetButtonClick = () => {
        navigate('/DetailsFormCase');
    };
 


    //const handleSubmit = async (e) => {
    //    e.preventDefault();


    //    try {
    //        const response = await axios.post('https://localhost:7141/ServiceField/Case', formData);
    //        console.log(response.data);
    //        setMessage('Form submitted successfully!');
    //        navigate('/DetailsFormCase');
    //    } catch (error) {
    //        console.error('There was an error adding the item!', error.response?.data);
    //        setMessage('Failed to submit form.');
    //    }
    //};
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation supplémentaire avant l'envoi
        if (!/^\d{6,}$/.test(formData.productSerialNumber)) {
            setError({ ...error, productSerialNumber: 'The product serial number must contain only digits and at least 6 digits' });
            return;
        }

        try {
            const response = await axios.post('https://localhost:7141/ServiceField/Case', formData);
            console.log(response.data);
            setMessage('Form submitted successfully!');
            navigate('/DetailsFormCase');
        } catch (error) {
            console.error('There was an error adding the item!', error.response?.data);
            setMessage('Failed to submit form.');
        }
    };

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const checklistResponse = await axios.get('https://localhost:7141/ServiceField/CheckList');
                    setCheckLists(checklistResponse.data);
                    const objectResponse = await axios.get('https://localhost:7141/ServiceField/Object');
                    setObjects(objectResponse.data);
                    const elementResponse = await axios.get('https://localhost:7141/ServiceField/Element');
                    setElements(elementResponse.data);
                    const skillsResponse = await axios.get('https://localhost:7141/ServiceField/Skills');
                    setSkills(skillsResponse.data);
                    const categoryResponse = await axios.get('https://localhost:7141/ServiceField/Category');
                    setCategories(categoryResponse.data);
                } catch (error) {
                    console.error('There was an error fetching the data!', error);
                    setError('Failed to fetch data.');
                }
            };

            fetchData();
        }, []);

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

                            <Form.Label className="custom-label">Product Serial Number</Form.Label>
                            <Form.Control
                                id="productSerialNumber"
                                placeholder="Enter product serial number"
                                className="custom-input"
                                name="productSerialNumber"
                                value={formData.productSerialNumber}
                                onChange={handleChange}
                                isInvalid={!!error.productSerialNumber}
                            />
                            <Form.Control.Feedback type="invalid">
                                {error.productSerialNumber}
                            </Form.Control.Feedback>

                                 

                            <div className="form-row">
                                <div className="form-column">
                                    <Form.Label className="custom-label">Service Object</Form.Label>
                                    <Form.Select className="custom-input" id="objectFK" aria-label="Default select example" name="objectFK" value={formData.objectFK}
                                        onChange={handleChange}>
                                        
                                        {object.map(obj => (
                                            <option key={obj.id} value={obj.id}>{obj.type}</option>
                                        ))}

                                    </Form.Select>


                                </div>
                                <div className="form-column">
                                    <Form.Label className="custom-label">Affected Company</Form.Label>

                                    <Form.Select className="custom-input" id="affectedCompany" aria-label="Default select example" name="affectedCompany"  value={formData.affectedCompany}
                                        onChange={handleChange}>

                                        <option value="One">One</option>
                                        <option value="Two">Two</option>
                                        <option value="Three">Three</option>
                                    </Form.Select>

                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-column">
                                    <Form.Label className="custom-label">Contact Person </Form.Label>

                                    <Form.Select className="custom-input" id="contactPerson" aria-label="Default select example" name="contactPerson" value={formData.contactPerson}
                                        onChange={handleChange}>
                                        <option value="One">One</option>
                                        <option value="Two">Two</option>
                                        <option value="Three">Three</option>
                                    </Form.Select>

                                </div>

                                <div className="form-column">
                                    <Form.Label className="custom-label">Affected Installation</Form.Label>
                                    <Form.Select className="custom-input" id="affectedInstallation" aria-label="Select affected installation" name="affectedInstallation" value={formData.affectedInstallation}
                                        onChange={handleChange} >
                                        <option value="One">One</option>
                                        <option value="Two">Two</option>
                                        <option value="Three">Three</option>
                                    </Form.Select>

                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-column">
                                    <Form.Label className="custom-label">Originating Service Order</Form.Label>
                                    <Form.Select className="custom-input" id="originatingSOrder" aria-label="Select affected installation" name="originatingSOrder" value={formData.originatingSOrder}
                                        onChange={handleChange} >
                                        <option value="One">One</option>
                                        <option value="Two">Two</option>
                                        <option value="Three">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="form-column">
                                    <Form.Label className="custom-label">Skills</Form.Label>
                                    <Form.Select className="custom-input" id="skillsFK" aria-label="Select skills" name="skillsFK" value={formData.skillsFK}
                                        onChange={handleChange}>
                                       
                                        {skills.map(skill => (
                                            <option key={skill.id} value={skill.id}>{skill.type}</option>
                                        ))}
                                       
                                    </Form.Select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-column">
                                    <Form.Label className="custom-label">Checklist</Form.Label>
                                    <Form.Select aria-label="Select affected installation" id="checkListFK" className="custom-input" name="checkListFK" value={formData.checkListFK}
                                        onChange={handleChange}>
                                        
                                        {checklist.map(ch => (
                                            <option key={ch.id} value={ch.id}>{ch.type}</option>
                                        ))}
                                       
                                    </Form.Select>
                                </div>
                                <div className="form-column">
                                    <Form.Label className="custom-label">Element</Form.Label>
                                    <Form.Select aria-label="Select skills" id="elementFK" className="custom-input" name="elementFK" value={formData.elementFK}
                                        onChange={handleChange}>
                                       
                                        {element.map(element => (
                                            <option key={element.id} value={element.id}>{element.type}</option>
                                        ))}
                                       
                                    </Form.Select>
                                </div>
                            </div>
                        </div>
                        <h3>Extended information</h3>
                        <div className="all">
                            <div className="form-row">
                                <div className="form-column">
                                    <Form.Label className="custom-label">Service case status</Form.Label>
                                    <Form.Select aria-label="Select affected installation" id="serviceCaseStatus" className="custom-input" name="serviceCaseStatus" value={formData.serviceCaseStatus}
                                        onChange={handleChange}>
                                        <option value="New">New</option>
                                        <option value="Old">Old</option>
                                        <option value="In-progress">In progress</option>
                                    </Form.Select>
                                </div>
                                <div className="form-column">
                                    <Form.Label className="custom-label" >Service case category</Form.Label>
                                    <Form.Select aria-label="Select skills" className="custom-input" id="categoryFK" name="categoryFK" value={formData.categoryFK}
                                        onChange={handleChange}>
                                        
                                        {category.map(ch => (
                                            <option key={ch.id} value={ch.id}>{ch.type}</option>
                                        ))}
                                       
                                    </Form.Select>
                                </div>
                                <div className="form-column">
                                    <Form.Label className="custom-label">Responsable user</Form.Label>
                                    <Form.Select aria-label="Select affected installation" id="responsableUser" className="custom-input" name="responsableUser" value={formData.responsableUser}
                                        onChange={handleChange} >
                                        <option value="One">One</option>
                                        <option value="Two">Two</option>
                                        <option value="Three">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="form-column">
                                    <Form.Label className="custom-label">Priority</Form.Label>
                                    <Form.Select aria-label="Select skills" className="custom-input" id="priority" name="priority" value={formData.priority}
                                        onChange={handleChange} >
                                        <option value="">Select an option</option>
                                        <option value="High">High</option>
                                        <option value="Midum">Medium</option>
                                        <option value="Low">Low</option>
                                    </Form.Select>
                                </div>
                              
                            </div>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="custom-label">Message</Form.Label>
                                                           <Form.Control className="custom-input"  as="textarea" rows={3} style={{ resize: 'both' }} id="message" name="message" value={formData.message} onChange={handleChange} />
                            </Form.Group>
                            <Form.Label className="custom-label">Creation Date</Form.Label>
                            <Form.Control
                                type="text"
                                value={formData.creationDate}
                                readOnly
                                className="custom-input"
                           
                            />
                          
                                {/*<Form.Label className="custom-label">Creator</Form.Label>*/}
                            {/*<Form.Select aria-label="creator" id="creator" className="custom-input" name="creator" value={formData.creator}*/}
                            {/*        onChange={handleChange} >*/}
                            {/*    <option value="Abir">Abir</option>*/}
                            {/*    <option value="Med">Med</option>*/}
                            {/*    <option value="Youssef">Youssef</option>*/}
                            {/*    </Form.Select>*/}
                           
                            <Button className="sub" as="input" type="submit" value="Submit" onSubmit={handleSubmit} />
                        </div>

                    </form>

                </div>
            </div>
        </div>

    );
}


export default FormCase;



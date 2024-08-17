import ShowNavBar from '../NavBar/NavBar'; import SideBar from '../SideBar/SideBar';
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
        objectFK: '',
        skillsFK: '',
        checkListFK: '',
        elementFK: '',
        categoryFK: ''

    });

    const [message, setMessage] = useState('');
    const [checklist, setCheckLists] = useState([]);
    const [object, setObjects] = useState([]);
    const [element, setElements] = useState([]);
    const [skills, setSkills] = useState([]);
    const [category, setCategories] = useState([]);
    const [error, setError] = useState('');
    const [company, setCompanies] = useState([]);

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
    const handleSubmit = async (e) => {
        e.preventDefault();
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
                    const companyResponse = await axios.get('https://localhost:7141/api/MasterDataCompanies');
                    setCompanies(companyResponse.data);
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
                        <div className="h2">Service case</div>
                        <div className="h3">Basic information</div>
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
                                        <option value="" disabled>Select an option</option>
                                        {object.map(obj => (
                                            <option key={obj.id} value={obj.id}>{obj.type}</option>
                                        ))}

                                    </Form.Select>


                                </div>
                                <div className="form-column">
                                    <Form.Label className="custom-label">Affected Company</Form.Label>
                                    <Form.Select
                                        className="custom-input"
                                        id="affectedCompany"
                                        aria-label="Select affected company"
                                        name="affectedCompany"
                                        value={formData.affectedCompany}
                                        onChange={handleChange}
                                    >
                                        <option value="" disabled>Select an option</option>
                                        {company.map(company => (
                                            <option key={company.id} value={company.name}>
                                                {company.name} 
                                            </option>
                                        ))}
                                    </Form.Select>

                                    

                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-column">
                                    <Form.Label className="custom-label">Contact Person </Form.Label>

                                    <Form.Select className="custom-input" id="contactPerson" aria-label="Default select example" name="contactPerson" value={formData.contactPerson}
                                        onChange={handleChange}>
                                        <option value="" disabled>Select an option</option>
                                        <option value="One">One</option>
                                        <option value="Two">Two</option>
                                        <option value="Three">Three</option>
                                    </Form.Select>

                                </div>

                                <div className="form-column">
                                    <Form.Label className="custom-label">Affected Installation</Form.Label>
                                    <Form.Select className="custom-input" id="affectedInstallation" aria-label="Select affected installation" name="affectedInstallation" value={formData.affectedInstallation}
                                        onChange={handleChange} >
                                        <option value="" disabled>Select an option</option>
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
                                        <option value="" disabled>Select an option</option>
                                        <option value="One">One</option>
                                        <option value="Two">Two</option>
                                        <option value="Three">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="form-column">
                                    <Form.Label className="custom-label">Skills</Form.Label>
                                    <Form.Select className="custom-input" id="skillsFK" aria-label="Select skills" name="skillsFK" value={formData.skillsFK}
                                        onChange={handleChange}>
                                        <option value="" disabled>Select an option</option>
                                       
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
                                        <option value="" disabled>Select an option</option>
                                        
                                        {checklist.map(ch => (
                                            <option key={ch.id} value={ch.id}>{ch.type}</option>
                                        ))}
                                       
                                    </Form.Select>
                                </div>
                                <div className="form-column">
                                    <Form.Label className="custom-label">Element</Form.Label>
                                    <Form.Select aria-label="Select skills" id="elementFK" className="custom-input" name="elementFK" value={formData.elementFK}
                                        onChange={handleChange}>
                                        <option value="" disabled>Select an option</option>
                                       
                                        {element.map(element => (
                                            <option key={element.id} value={element.id}>{element.type}</option>
                                        ))}
                                       
                                    </Form.Select>
                                </div>
                            </div>
                        </div>
                        <div className="h3">Extended information</div>
                        <div className="all">
                            <div className="form-row">
                                <div className="form-column">
                                    <Form.Label className="custom-label">Service case status</Form.Label>
                                    <Form.Select aria-label="Select affected installation" id="serviceCaseStatus" className="custom-input" name="serviceCaseStatus" value={formData.serviceCaseStatus}
                                        onChange={handleChange}>
                                        <option value="" disabled>Select an option</option>
                                        <option value="New">New</option>
                                        <option value="Old">Old</option>
                                        <option value="In-progress">In progress</option>
                                    </Form.Select>
                                </div>
                                <div className="form-column">
                                    <Form.Label className="custom-label" >Service case category</Form.Label>
                                    <Form.Select aria-label="Select skills" className="custom-input" id="categoryFK" name="categoryFK" value={formData.categoryFK}
                                        onChange={handleChange}>
                                        <option value="" disabled>Select an option</option>
                                        
                                        {category.map(ch => (
                                            <option key={ch.id} value={ch.id}>{ch.type}</option>
                                        ))}
                                       
                                    </Form.Select>
                                </div>
                                <div className="form-column">
                                    <Form.Label className="custom-label">Responsable user</Form.Label>
                                    <Form.Select aria-label="Select affected installation" id="responsableUser" className="custom-input" name="responsableUser" value={formData.responsableUser}
                                        onChange={handleChange} >
                                        <option value="" disabled>Select an option</option>
                                        <option value="One">One</option>
                                        <option value="Two">Two</option>
                                        <option value="Three">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="form-column">
                                    <Form.Label className="custom-label">Priority</Form.Label>
                                    <Form.Select aria-label="Select skills" className="custom-input" id="priority" name="priority" value={formData.priority}
                                        onChange={handleChange} >
                                        <option value="" disabled>Select an option</option>
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
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
                                className="custom-input"/>
                            <Button className="sub" as="input" type="submit" value="Submit" onSubmit={handleSubmit} />
                        </div>

                    </form>

                </div>
            </div>
        </div>

    );
}
export default FormCase;



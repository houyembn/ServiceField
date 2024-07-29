

////import { useEffect, useState } from 'react';
////import './FormCase.css';
////import axios from 'axios';
////import ShowNavBar from '../NavBar/NavBar';
////import SideBar from '../sidebar/SideBar';
////import { useNavigate } from 'react-router-dom';
////import Card from 'react-bootstrap/Card';
////import Button from 'react-bootstrap/Button';


////import './FormCase.css';

////function DetailsFormCase() {
////    const [serviceCases, setServiceCases] = useState([]);
////    const [error, setError] = useState('');
////    const navigate = useNavigate();
////    const handleCreateButtonClick = () => {
////        navigate('/FormCase');
////    };

////    useEffect(() => {
////        const fetchData = async () => {
////            try {
////                const response = await axios.get('https://localhost:7141/ServiceField/Case');
////                setServiceCases(response.data);
////            } catch (error) {
////                console.error('There was an error fetching the data!', error);
////                setError('Failed to fetch data.');
////            }
////        };

////        fetchData();
////    }, []);

////    const handleDelete = async (id) => {
////        try {
////            await axios.delete(`https://localhost:7141/ServiceField/Case/${id}`);
////            setServiceCases(serviceCases.filter(serviceCase => serviceCase.id !== id));
////        } catch (error) {
////            console.error('There was an error deleting the data!', error);
////            setError('Failed to delete data.');
////        }
////    };


////    return (
////        <div className="flex">
////            <SideBar />
////            <div className="flex-1">
////                <ShowNavBar />

////                <div className="p-4">
////                    <div className="details">

////                        <Card>
////                            <Card.Header>Featured</Card.Header>
////                            <Card.Body>
////                                <Card.Title>Special title treatment</Card.Title>
////                                <Card.Text>
////                                    With supporting text below as a natural lead-in to additional content.
////                                </Card.Text>

////                            </Card.Body>
////                        </Card>






////                    </div>
////                </div>
////            </div>
////        </div>

////    );
////}




////export default DetailsFormCase;


////import { useEffect, useState } from 'react';
////import './FormCase.css';
////import axios from 'axios';
////import ShowNavBar from '../NavBar/NavBar';
////import SideBar from '../sidebar/SideBar';
////import { useNavigate } from 'react-router-dom';

////import './FormCase.css';


////function DetailsFormCase() {
////    const [serviceCases, setServiceCases] = useState([]);
////    const [checklistMap, setCheckListMap] = useState({});
////    const [objectMap, setObjectMap] = useState({});
////    const [elementMap, setElementMap] = useState({});
////    const [skillsMap, setSkillsMap] = useState({});
////    const [categoryMap, setCategoryMap] = useState({});

////    useEffect(() => {
////        const fetchServiceCases = async () => {
////            try {
////                const response = await axios.get('https://localhost:7141/ServiceField/Case');
////                setServiceCases(response.data);
////            } catch (error) {
////                console.error('There was an error fetching the service cases!', error);
////            }
////        };

////        const fetchData = async () => {
////            try {
////                const [checklistResponse, objectResponse, elementResponse, skillsResponse, categoryResponse] = await Promise.all([
////                    axios.get('https://localhost:7141/ServiceField/CheckList'),
////                    axios.get('https://localhost:7141/ServiceField/Object'),
////                    axios.get('https://localhost:7141/ServiceField/Element'),
////                    axios.get('https://localhost:7141/ServiceField/Skills'),
////                    axios.get('https://localhost:7141/ServiceField/Category')
////                ]);

////                const mapData = (data) => {
////                    const map = {};
////                    data.forEach(item => {
////                        map[item.id] = item.type;
////                    });
////                    return map;
////                };

////                setCheckListMap(mapData(checklistResponse.data));
////                setObjectMap(mapData(objectResponse.data));
////                setElementMap(mapData(elementResponse.data));
////                setSkillsMap(mapData(skillsResponse.data));
////                setCategoryMap(mapData(categoryResponse.data));

////                fetchServiceCases();
////            } catch (error) {
////                console.error('There was an error fetching the data!', error);
////            }
////        };

////        fetchData();
////    }, []);

////    const getTypeById = (map, id) => map[id] || 'Unknown';

////    return (
////        <div className="details-form-case">
////            <h2>Service Cases</h2>
////            <table className="table">
////                <thead>
////                    <tr>
////                        <th>ID</th>
////                        <th>Product Serial Number</th>
////                        <th>Affected Company</th>
////                        <th>Contact Person</th>
////                        <th>Affected Installation</th>
////                        <th>Originating Service Order</th>
////                        <th>Service Case Status</th>
////                        <th>Responsible User</th>
////                        <th>Priority</th>
////                        <th>Message</th>
////                        <th>Creator</th>
////                        <th>Creation Date</th>
////                        <th>Object</th>
////                        <th>Skills</th>
////                        <th>Checklist</th>
////                        <th>Element</th>
////                        <th>Category</th>
////                    </tr>
////                </thead>
////                <tbody>
////                    {serviceCases.map((serviceCase) => (
////                        <tr key={serviceCase.id}>
////                            <td>{serviceCase.id}</td>
////                            <td>{serviceCase.productSerialNumber}</td>
////                            <td>{serviceCase.affectedCompany}</td>
////                            <td>{serviceCase.contactPerson}</td>
////                            <td>{serviceCase.affectedInstallation}</td>
////                            <td>{serviceCase.originatingSOrder}</td>
////                            <td>{serviceCase.serviceCaseStatus}</td>
////                            <td>{serviceCase.responsableUser}</td>
////                            <td>{serviceCase.priority}</td>
////                            <td>{serviceCase.message}</td>
////                            <td>{serviceCase.creator}</td>
////                            <td>{new Date(serviceCase.creationDate).toLocaleString()}</td>
////                            <td>{getTypeById(objectMap, serviceCase.objectFK)}</td>
////                            <td>{getTypeById(skillsMap, serviceCase.skillsFK)}</td>
////                            <td>{getTypeById(checklistMap, serviceCase.checkListFK)}</td>
////                            <td>{getTypeById(elementMap, serviceCase.elementFK)}</td>
////                            <td>{getTypeById(categoryMap, serviceCase.categoryFK)}</td>
////                        </tr>
////                    ))}
////                </tbody>
////            </table>
////        </div>
////    );
////}

////export default DetailsFormCase;



//import { useEffect, useState } from 'react';
//import './FormCase.css';
//import axios from 'axios';
//import ShowNavBar from '../NavBar/NavBar';
//import SideBar from '../sidebar/SideBar';
//import Card from 'react-bootstrap/Card';
//import { useNavigate } from 'react-router-dom';

//function DetailsFormCase() {
//        const [serviceCases, setServiceCases] = useState([]);
//        const [checklistMap, setCheckListMap] = useState({});
//        const [objectMap, setObjectMap] = useState({});
//        const [elementMap, setElementMap] = useState({});
//        const [skillsMap, setSkillsMap] = useState({});
//    const [categoryMap, setCategoryMap] = useState({});
//        const navigate = useNavigate();
//        const handleCreateButtonClick = () => {
//              navigate('/FormCase');
//          };

//        useEffect(() => {
//            const fetchServiceCases = async () => {
//                try {
//                    const response = await axios.get('https://localhost:7141/ServiceField/Case');
//                    setServiceCases(response.data);
//                } catch (error) {
//                    console.error('There was an error fetching the service cases!', error);
//                }
//            };

//            const fetchData = async () => {
//                try {
//                    const [checklistResponse, objectResponse, elementResponse, skillsResponse, categoryResponse] = await Promise.all([
//                        axios.get('https://localhost:7141/ServiceField/CheckList'),
//                        axios.get('https://localhost:7141/ServiceField/Object'),
//                        axios.get('https://localhost:7141/ServiceField/Element'),
//                        axios.get('https://localhost:7141/ServiceField/Skills'),
//                        axios.get('https://localhost:7141/ServiceField/Category')
//                    ]);

//                    const mapData = (data) => {
//                        const map = {};
//                        data.forEach(item => {
//                            map[item.id] = item.type;
//                        });
//                        return map;
//                    };

//                    setCheckListMap(mapData(checklistResponse.data));
//                    setObjectMap(mapData(objectResponse.data));
//                    setElementMap(mapData(elementResponse.data));
//                    setSkillsMap(mapData(skillsResponse.data));
//                    setCategoryMap(mapData(categoryResponse.data));

//                    fetchServiceCases();
//                } catch (error) {
//                    console.error('There was an error fetching the data!', error);
//                }
//            };

//            fetchData();
//        }, []);

//    const getTypeById = (map, id) => map[id] || 'Unknown';
//    const getPriorityClass = (priority) => {
//        switch (priority.toLowerCase()) {
//            case 'high':
//                return 'high-priority';
//            case 'midum':
//                return 'medium-priority';
//            case 'low':
//                return 'low-priority';
//        }
//    };
//    const getStatusClass = (serviceCaseStatus) => {
//        switch (serviceCaseStatus.toLowerCase()) {
//            case 'new':
//                return 'status-new';
//            case 'old':
//                return 'status-old';
//            case 'in-progress':
//                return 'status-inprog';
//        }
//    };

//    return (
//        <div className="flex">
//            <SideBar />
//            <div className="flex-1">
//                <ShowNavBar />

//                <div className="p-4">
                  
                        
//                            {serviceCases.map((serviceCase) => (
//                                <Card key={serviceCase.id} className="mb-3">
//                                    <Card.Body className="form-column1">
//                                        <Card.Title>{serviceCase.productSerialNumber}</Card.Title>
//                                        <Card.Text>

//                                            <strong>Affected Company:</strong> {serviceCase.affectedCompany}<br />
//                                            <strong>Object:</strong> {getTypeById(objectMap, serviceCase.objectFK)}<br />
//                                            <div className="form-row"> 
//                                                <div className="form-column1">
//                                                    <strong>Responsible User:</strong> {serviceCase.responsableUser}<br />
                                                   
//                                                </div>
//                                                <div className="form-column1">
//                                                    <span className={`circle ${getStatusClass(serviceCase.serviceCaseStatus)}`}></span>
//                                                    <strong>Status:</strong> {serviceCase.serviceCaseStatus}<br />
                                                    
//                                                </div>
//                                                <div className="form-column1">
//                                                    <span className={`circle ${getPriorityClass(serviceCase.priority)}`}></span>
//                                                    <strong>Priority:</strong> {serviceCase.priority}
                                                   
//                                                </div>
//                                                            <div className="form-column1">
//                                                                <strong>Created on :</strong> {new Date(serviceCase.creationDate).toLocaleString()}<br />
//                                                            </div></div>

//                                        </Card.Text>
//                                    </Card.Body>
//                                </Card>
//                            ))}
//                    <button onClick={handleCreateButtonClick} className="addBtn">
//                                       <i className="material-icons">add</i></button>
                       
//                </div>
//            </div>
//        </div>

//    );
//}
//export default DetailsFormCase;



import { useEffect, useState } from 'react';
import './FormCase.css';
import axios from 'axios';
import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../sidebar/SideBar';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function DetailsFormCase() {
    const [serviceCases, setServiceCases] = useState([]);
    const [checklistMap, setCheckListMap] = useState({});
    const [objectMap, setObjectMap] = useState({});
    const [elementMap, setElementMap] = useState({});
    const [skillsMap, setSkillsMap] = useState({});
    const [categoryMap, setCategoryMap] = useState({});
    const navigate = useNavigate();

    const handleCreateButtonClick = () => {
        navigate('/FormCase');
    };

    const handleCardClick = (id) => {
        navigate(`/ServiceCaseDetails/${id}`);
    };

    useEffect(() => {
        const fetchServiceCases = async () => {
            try {
                const response = await axios.get('https://localhost:7141/ServiceField/Case');
                setServiceCases(response.data);
            } catch (error) {
                console.error('There was an error fetching the service cases!', error);
            }
        };

        const fetchData = async () => {
            try {
                const [checklistResponse, objectResponse, elementResponse, skillsResponse, categoryResponse] = await Promise.all([
                    axios.get('https://localhost:7141/ServiceField/CheckList'),
                    axios.get('https://localhost:7141/ServiceField/Object'),
                    axios.get('https://localhost:7141/ServiceField/Element'),
                    axios.get('https://localhost:7141/ServiceField/Skills'),
                    axios.get('https://localhost:7141/ServiceField/Category')
                ]);

                const mapData = (data) => {
                    const map = {};
                    data.forEach(item => {
                        map[item.id] = item.type;
                    });
                    return map;
                };

                setCheckListMap(mapData(checklistResponse.data));
                setObjectMap(mapData(objectResponse.data));
                setElementMap(mapData(elementResponse.data));
                setSkillsMap(mapData(skillsResponse.data));
                setCategoryMap(mapData(categoryResponse.data));

                fetchServiceCases();
            } catch (error) {
                console.error('There was an error fetching the data!', error);
            }
        };

        fetchData();
    }, []);

    const getTypeById = (map, id) => map[id] || 'Unknown';
    const getPriorityClass = (priority) => {
        switch (priority.toLowerCase()) {
            case 'high':
                return 'high-priority';
            case 'medium':
                return 'medium-priority';
            case 'low':
                return 'low-priority';
            default:
                return '';
        }
    };
    const getStatusClass = (serviceCaseStatus) => {
        switch (serviceCaseStatus.toLowerCase()) {
            case 'new':
                return 'status-new';
            case 'old':
                return 'status-old';
            case 'in-progress':
                return 'status-inprog';
            default:
                return '';
        }
    };

    return (
        <div className="flex">
            <SideBar />
            <div className="flex-1">
                <ShowNavBar />
                <div className="p-4">
                    <h5>List of Service Cases</h5>

                    <div style={{ marginTop: '15px' }}>
                    {serviceCases.map((serviceCase) => (
                        <Card key={serviceCase.id} className="mb-3 clickable-card" onClick={() => handleCardClick(serviceCase.id)}>
                            <Card.Body >
                                <Card.Title>{serviceCase.productSerialNumber}</Card.Title>
                                <Card.Text>
                                    <strong>Affected Company:</strong> {serviceCase.affectedCompany}<br />
                                    <strong>Object:</strong> {getTypeById(objectMap, serviceCase.objectFK)}<br />
                                    <div className="form-row">
                                        <div className="form-column1">
                                            <strong>Responsible User:</strong> {serviceCase.responsableUser}<br />
                                        </div>
                                        <div className="form-column1">
                                            <span className={`circle ${getStatusClass(serviceCase.serviceCaseStatus)}`}></span>
                                            <strong>Status:</strong> {serviceCase.serviceCaseStatus}<br />
                                        </div>
                                        <div className="form-column1">
                                            <span className={`circle ${getPriorityClass(serviceCase.priority)}`}></span>
                                            <strong>Priority:</strong> {serviceCase.priority}
                                        </div>
                                        <div className="form-column1">
                                            <strong>Created on :</strong> {new Date(serviceCase.creationDate).toLocaleString()}<br />
                                        </div>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                    <button onClick={handleCreateButtonClick} className="addBtn">
                        <i className="material-icons">add</i>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsFormCase;



////import { useEffect, useState } from 'react';
////import './FormCase.css';
////import axios from 'axios';
////import ShowNavBar from '../NavBar/NavBar';
////import SideBar from '../sidebar/SideBar';
////import { useNavigate } from 'react-router-dom';

////import './FormCase.css';

////function DetailsFormCase() {
////    const [serviceCases, setServiceCases] = useState([]);
////    const [error, setError] = useState('');
////    const navigate = useNavigate();
////    const handleCreateButtonClick = () => {
////          navigate('/FormCase');
////      };

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
////           <div className="flex">
////            <SideBar />
////            <div className="flex-1">
////                <ShowNavBar />

////                <div className="p-4">
////                    <div className="details">

////                        {error && <p>{error}</p>}
////                        <table >
////                            <thead>
////                                <tr>
////                                    <th>ID</th>
////                                    <th>Company Name</th>
////                                    <th>Product Serial Number</th>
////                                    <th>Problem Type</th>
////                                    <th>Description</th>
////                                    <th>Priority</th>
////                                    <th>Contract</th>
////                                </tr>
////                            </thead>
////                            <tbody>
////                                {serviceCases.map((serviceCase) => (
////                                    <tr key={serviceCase.id}>
////                                        <td>{serviceCase.id}</td>
////                                        <td>{serviceCase.companyName}</td>
////                                        <td>{serviceCase.productSerialNumber}</td>
////                                        <td>{serviceCase.problemType}</td>
////                                        <td>{serviceCase.description}</td>
////                                        <td>{serviceCase.priority}</td>
////                                        <td>{serviceCase.contract}</td>
////                                        <td>
////                                            <button onClick={() => handleDelete(serviceCase.id)} >
////                                                <i className="material-icons">delete</i>
////                                                </button>

////                                        </td>
////                                    </tr>
////                                ))}
////                            </tbody>

////                        </table>
////                        <button onClick={handleCreateButtonClick} className="addBtn">
////                            <i className="material-icons">add</i></button>






////                    </div>
////                </div>
////            </div>
////        </div>

////    );
////}
////export default DetailsFormCase;


//import { useEffect, useState } from 'react';
//import './FormCase.css';
//import axios from 'axios';
//import ShowNavBar from '../NavBar/NavBar';
//import SideBar from '../sidebar/SideBar';
//import { useNavigate } from 'react-router-dom';
//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';


//import './FormCase.css';

//function DetailsFormCase() {
//    const [serviceCases, setServiceCases] = useState([]);
//    const [error, setError] = useState('');
//    const navigate = useNavigate();
//    const handleCreateButtonClick = () => {
//        navigate('/FormCase');
//    };

//    useEffect(() => {
//        const fetchData = async () => {
//            try {
//                const response = await axios.get('https://localhost:7141/ServiceField/Case');
//                setServiceCases(response.data);
//            } catch (error) {
//                console.error('There was an error fetching the data!', error);
//                setError('Failed to fetch data.');
//            }
//        };

//        fetchData();
//    }, []);

//    const handleDelete = async (id) => {
//        try {
//            await axios.delete(`https://localhost:7141/ServiceField/Case/${id}`);
//            setServiceCases(serviceCases.filter(serviceCase => serviceCase.id !== id));
//        } catch (error) {
//            console.error('There was an error deleting the data!', error);
//            setError('Failed to delete data.');
//        }
//    };


//    return (
//        <div className="flex">
//            <SideBar />
//            <div className="flex-1">
//                <ShowNavBar />

//                <div className="p-4">
//                    <div className="details">

//                        <Card>
//                            <Card.Header>Featured</Card.Header>
//                            <Card.Body>
//                                <Card.Title>Special title treatment</Card.Title>
//                                <Card.Text>
//                                    With supporting text below as a natural lead-in to additional content.
//                                </Card.Text>
                                
//                            </Card.Body>
//                        </Card>






//                    </div>
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
import { useNavigate } from 'react-router-dom';

import './FormCase.css';


function DetailsFormCase() {
    const [serviceCases, setServiceCases] = useState([]);
    const [checklistMap, setCheckListMap] = useState({});
    const [objectMap, setObjectMap] = useState({});
    const [elementMap, setElementMap] = useState({});
    const [skillsMap, setSkillsMap] = useState({});
    const [categoryMap, setCategoryMap] = useState({});

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

    return (
        <div className="details-form-case">
            <h2>Service Cases</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Serial Number</th>
                        <th>Affected Company</th>
                        <th>Contact Person</th>
                        <th>Affected Installation</th>
                        <th>Originating Service Order</th>
                        <th>Service Case Status</th>
                        <th>Responsible User</th>
                        <th>Priority</th>
                        <th>Message</th>
                        <th>Creator</th>
                        <th>Creation Date</th>
                        <th>Object</th>
                        <th>Skills</th>
                        <th>Checklist</th>
                        <th>Element</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {serviceCases.map((serviceCase) => (
                        <tr key={serviceCase.id}>
                            <td>{serviceCase.id}</td>
                            <td>{serviceCase.productSerialNumber}</td>
                            <td>{serviceCase.affectedCompany}</td>
                            <td>{serviceCase.contactPerson}</td>
                            <td>{serviceCase.affectedInstallation}</td>
                            <td>{serviceCase.originatingSOrder}</td>
                            <td>{serviceCase.serviceCaseStatus}</td>
                            <td>{serviceCase.responsableUser}</td>
                            <td>{serviceCase.priority}</td>
                            <td>{serviceCase.message}</td>
                            <td>{serviceCase.creator}</td>
                            <td>{new Date(serviceCase.creationDate).toLocaleString()}</td>
                            <td>{getTypeById(objectMap, serviceCase.objectFK)}</td>
                            <td>{getTypeById(skillsMap, serviceCase.skillsFK)}</td>
                            <td>{getTypeById(checklistMap, serviceCase.checkListFK)}</td>
                            <td>{getTypeById(elementMap, serviceCase.elementFK)}</td>
                            <td>{getTypeById(categoryMap, serviceCase.categoryFK)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DetailsFormCase;

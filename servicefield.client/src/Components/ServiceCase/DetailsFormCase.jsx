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
                    <h4>List of Service Cases</h4>

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

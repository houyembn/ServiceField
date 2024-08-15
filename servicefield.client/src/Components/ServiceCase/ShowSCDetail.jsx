import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../sidebar/SideBar';
import Card from 'react-bootstrap/Card';

function ServiceCaseDetails() {
    const { id } = useParams();
    const [serviceCase, setServiceCase] = useState(null);
    const [checklistMap, setCheckListMap] = useState({});
    const [objectMap, setObjectMap] = useState({});
    const [elementMap, setElementMap] = useState({});
    const [skillsMap, setSkillsMap] = useState({});
    const [categoryMap, setCategoryMap] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [checklistResponse, objectResponse, elementResponse, skillsResponse, categoryResponse, serviceCaseResponse] = await Promise.all([
                    axios.get('https://localhost:7141/ServiceField/CheckList'),
                    axios.get('https://localhost:7141/ServiceField/Object'),
                    axios.get('https://localhost:7141/ServiceField/Element'),
                    axios.get('https://localhost:7141/ServiceField/Skills'),
                    axios.get('https://localhost:7141/ServiceField/Category'),
                    axios.get(`https://localhost:7141/ServiceField/Case/${id}`) 
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
                setServiceCase(serviceCaseResponse.data);
            } catch (error) {
                console.error('There was an error fetching the data!', error);
                setError('Failed to fetch service case details.');
            }
        };

        fetchData();
    }, [id]);

    if (error) return <p>{error}</p>;

    if (!serviceCase) return <p>Loading...</p>;

    const getTypeById = (map, id) => map[id] || 'Unknown';

    return (
        <div className="flex">
            <SideBar />
            <div className="flex-1">
                <ShowNavBar />
                <div className="p-4">
                    <h5>Service Case Details</h5>
                    <div style={{ marginTop: '15px' }}>
                    <Card>
                        <Card.Body>
                                <Card.Title>Product Serial Number: {serviceCase.productSerialNumber}</Card.Title>
                            <Card.Text>
                                <strong>Affected Company:</strong> {serviceCase.affectedCompany}<br />
                                <strong>Object:</strong> {getTypeById(objectMap, serviceCase.objectFK)}<br />
                                <strong>Contact Person:</strong> {serviceCase.contactPerson}<br />
                                <strong>Affected Installation:</strong> {serviceCase.affectedInstallation}<br />
                                <strong>Responsible User:</strong> {serviceCase.responsableUser}<br />
                                <strong>Originating Service Order:</strong> {serviceCase.originatingSOrder}<br />
                                <strong>Category:</strong> {getTypeById(categoryMap, serviceCase.categoryFK)}<br />
                                <strong>Skills:</strong> {getTypeById(skillsMap, serviceCase.skillsFK)}<br />
                                <strong>Checklist:</strong> {getTypeById(checklistMap, serviceCase.checkListFK)}<br />
                                <strong>Element:</strong> {getTypeById(elementMap, serviceCase.elementFK)}<br />
                                <strong>Status:</strong> {serviceCase.serviceCaseStatus}<br />
                                <strong>Priority:</strong> {serviceCase.priority}<br />
                                <strong>Message:</strong> {serviceCase.message}<br />
                                <strong>Created on:</strong> {new Date(serviceCase.creationDate).toLocaleString()}<br />
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceCaseDetails;

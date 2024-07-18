

//import { useEffect, useState } from 'react';
//import './FormCase.css';
//import axios from 'axios';
//import ShowNavBar from '../NavBar/NavBar';
//import SideBar from '../sidebar/SideBar';
//import { useNavigate } from 'react-router-dom';

//import './FormCase.css';

//function DetailsFormCase() {
//    const [serviceCases, setServiceCases] = useState([]);
//    const [error, setError] = useState('');
//    const navigate = useNavigate();
//    const handleCreateButtonClick = () => {
//          navigate('/FormCase');
//      };

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
//           <div className="flex">
//            <SideBar />
//            <div className="flex-1">
//                <ShowNavBar />

//                <div className="p-4">
//                    <div className="details">

//                        {error && <p>{error}</p>}
//                        <table >
//                            <thead>
//                                <tr>
//                                    <th>ID</th>
//                                    <th>Company Name</th>
//                                    <th>Product Serial Number</th>
//                                    <th>Problem Type</th>
//                                    <th>Description</th>
//                                    <th>Priority</th>
//                                    <th>Contract</th>
//                                </tr>
//                            </thead>
//                            <tbody>
//                                {serviceCases.map((serviceCase) => (
//                                    <tr key={serviceCase.id}>
//                                        <td>{serviceCase.id}</td>
//                                        <td>{serviceCase.companyName}</td>
//                                        <td>{serviceCase.productSerialNumber}</td>
//                                        <td>{serviceCase.problemType}</td>
//                                        <td>{serviceCase.description}</td>
//                                        <td>{serviceCase.priority}</td>
//                                        <td>{serviceCase.contract}</td>
//                                        <td>
//                                            <button onClick={() => handleDelete(serviceCase.id)} >
//                                                <i className="material-icons">delete</i>
//                                                </button>

//                                        </td>
//                                    </tr>
//                                ))}
//                            </tbody>

//                        </table>
//                        <button onClick={handleCreateButtonClick} className="addBtn">
//                            <i className="material-icons">add</i></button>






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
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


import './FormCase.css';

function DetailsFormCase() {
    const [serviceCases, setServiceCases] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleCreateButtonClick = () => {
        navigate('/FormCase');
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7141/ServiceField/Case');
                setServiceCases(response.data);
            } catch (error) {
                console.error('There was an error fetching the data!', error);
                setError('Failed to fetch data.');
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://localhost:7141/ServiceField/Case/${id}`);
            setServiceCases(serviceCases.filter(serviceCase => serviceCase.id !== id));
        } catch (error) {
            console.error('There was an error deleting the data!', error);
            setError('Failed to delete data.');
        }
    };


    return (
        <div className="flex">
            <SideBar />
            <div className="flex-1">
                <ShowNavBar />

                <div className="p-4">
                    <div className="details">

                        <Card>
                            <Card.Header>Featured</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>






                    </div>
                </div>
            </div>
        </div>

    );
}




export default DetailsFormCase;


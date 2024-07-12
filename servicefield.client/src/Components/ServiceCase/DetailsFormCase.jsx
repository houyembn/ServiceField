

import { useEffect, useState } from 'react';
import './FormCase.css';
import axios from 'axios';
import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../sidebar/SideBar';
import { useNavigate } from 'react-router-dom'; 

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


    return (
           <div className="flex">
            <SideBar />
            <div className="flex-1">
                <ShowNavBar />

                <div className="p-4">
                    <div className="details">

                        {error && <p>{error}</p>}
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Company Name</th>
                                    <th>Product Serial Number</th>
                                    <th>Problem Type</th>
                                    <th>Description</th>
                                    <th>Priority</th>
                                    <th>Contract</th>
                                </tr>
                            </thead>
                            <tbody>
                                {serviceCases.map((serviceCase) => (
                                    <tr key={serviceCase.id}>
                                        <td>{serviceCase.id}</td>
                                        <td>{serviceCase.companyName}</td>
                                        <td>{serviceCase.productSerialNumber}</td>
                                        <td>{serviceCase.problemType}</td>
                                        <td>{serviceCase.description}</td>
                                        <td>{serviceCase.priority}</td>
                                        <td>{serviceCase.contract}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                        <button onClick={handleCreateButtonClick} className="addBtn">Add</button>
                        
                    
                    

                     

                    </div>
                </div>
            </div>
        </div>
       
    );
}




export default DetailsFormCase;

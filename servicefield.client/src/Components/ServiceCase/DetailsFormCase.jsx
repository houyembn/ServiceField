import { useEffect, useState } from 'react';
import './FormCase.css';
import axios from 'axios';
import Sidebar from '../sidebar/SideBar';

const DetailsFormCase = () => {
    const [serviceCases, setServiceCases] = useState([]);
    const [error, setError] = useState('');

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
        <div className="details">
            <Sidebar />
            <h2>Service Cases</h2>
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
        </div>
    );
};

export default DetailsFormCase;

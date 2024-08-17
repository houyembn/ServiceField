

//import { useEffect, useState } from 'react';
//import './FormInstall.css';
//import axios from 'axios';
//import ShowNavBar from '../NavBar/NavBar';
//import SideBar from '../SideBar/SideBar';
//import { useNavigate } from 'react-router-dom'; 

//import './FormInstall.css';

//function DetailsFormInstall() {
//    const [installations, setInstallations] = useState([]);
//    const [error, setError] = useState('');
//    const navigate = useNavigate();
//    const handleCreateButtonClick = () => {
//        navigate('/FormInstall');
//      };

//    useEffect(() => {
//        const fetchData = async () => {
//            try {
//                const response = await axios.get('https://localhost:7141/ServiceField/Installation');
//                setInstallations(response.data);
//            } catch (error) {
//                console.error('There was an error fetching the data!', error);
//                setError('Failed to fetch data.');
//            }
//        };

//        fetchData();
//    }, []);


//    return (
//           <div className="flex">
//            <SideBar />
//            <div className="flex-1">
//                <ShowNavBar />

//                <div className="p-4">
//                    <div className="details">

//                        {error && <p>{error}</p>}
//                        <table>
//                            <thead>
//                                <tr>
//                                    <th>Installation Name</th>
//                                    <th>Description</th>
//                                    <th>Installation Type</th>
//                                    <th>Owner</th>
//                                    <th>Installation Location</th>
//                                    <th>Manufacture Date</th>
//                                    <th>Installation Status</th>
//                                </tr>
//                            </thead>
//                            <tbody>
//                                {installations.map((installation) => (
//                                    <tr key={installation.InstallationNumber}>
//                                        <td>{installation.InstallationName}</td>
//                                        <td>{installation.Description}</td>
//                                        <td>{installation.InstallationType}</td>
//                                        <td>{installation.Owner}</td>
//                                        <td>{installation.InstallationLocation}</td>
//                                        <td>{installation.ManufactureDate}</td>
//                                        <td>{installation.InstallationStatus}</td>
//                                    </tr>
//                                ))}
//                            </tbody>

//                        </table>
//                        <button onClick={handleCreateButtonClick} className="addBtn">Add</button>
 

//                    </div>
//                </div>
//            </div>
//        </div>
       
//    );
//}

//export default DetailsFormInstall;
import { useEffect, useState } from 'react';
import './FormInstall.css';
import axios from 'axios';
import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import { useNavigate } from 'react-router-dom';

import './FormInstall.css';

function DetailsFormInstall() {
    const [installations, setInstallations] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleCreateButtonClick = () => {
        navigate('/FormInstall');
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7141/ServiceField/Installation');
                setInstallations(response.data);
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
                                    <th>Installation Number</th>
                                    <th>Description</th>
                                    <th>Installation Type</th>
                                    <th>Owner</th>
                                    <th>Installation Location</th>
                                    <th>Manufacture Date</th>
                                    <th>Installation Status</th>
                                </tr>
                            </thead>
                          
                                < tbody >
                            {
                                installations.map((installation) => (
                                    <tr key={installation.installationNumber}>
                                        <td>{installation.installationNumber}</td>
                                        <td>{installation.description}</td>
                                        <td>{installation.installationType}</td>
                                        <td>{installation.owner}</td>
                                        <td>{installation.installationLocation}</td>
                                        <td>{new Date(installation.manufactureDate).toLocaleDateString()}</td>
                                        <td>{installation.installationStatus}</td>
                                    </tr>
                                ))
                            }
                            </tbody>


                    </table>
                    <button onClick={handleCreateButtonClick} className="addBtn">Add</button>






                </div>
            </div>
        </div>
        </div >
       
    );
}




export default DetailsFormInstall;
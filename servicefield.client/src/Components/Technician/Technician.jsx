import { useState, useEffect } from 'react';
import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import '../OrderDetails/OrderDetails.css';



import axios from 'axios';
import Card from 'react-bootstrap/Card';

function Technician() {
    const [userDetails, setUserDetails] = useState(null);

  

    useEffect(() => {
        const fetchUserDetails = async () => {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user && user.email) {
                try {
                    const response = await axios.get(`https://localhost:7141/ServiceField.Server/User/email/${user.email}`);
                    setUserDetails(response.data);
                } catch (error) {
                    console.error('Error fetching user details:', error);
                }
            }
        };

        fetchUserDetails();
    }, []);

  

    return (
        <div className="flex">
            <SideBar />
            <div className="flex-1">
                <ShowNavBar />
                <div className="p-4">
                    <h1 className="display">User Details</h1>
                    {userDetails && (
                        <Card className="user-details-card">
                            <Card.Body>
                                <Card.Title>{userDetails.firstName}  {userDetails.lastName} Details</Card.Title>
                                <Card.Text>
                                    <strong>Email:</strong> {userDetails.email}<br />
                                    <strong>First Name:</strong> {userDetails.firstName}<br />
                                    <strong>Last Name:</strong> {userDetails.lastName}<br />
                                    <strong>CIN:</strong> {userDetails.cin}<br />
                                    <strong>Age:</strong> {userDetails.age}<br />
                                    <strong>Address:</strong> {userDetails.address}<br />
                                    <strong>Phone Number:</strong> {userDetails.phoneNumber}<br />
                                    <strong>Diploma:</strong> {userDetails.diploma}<br />
                                    <strong>Field:</strong> {userDetails.field}<br />
                                    <strong>Skills:</strong> {userDetails.skills}<br />
                                    <strong>Grade:</strong> {userDetails.grade}<br />
                                    <strong>Role:</strong> {userDetails.role}<br />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Technician;

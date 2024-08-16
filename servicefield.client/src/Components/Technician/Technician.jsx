import { useState, useEffect } from 'react';
import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
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
        <div className="d-flex">
            <SideBar />
            <div className="flex-grow-1">
                <ShowNavBar />
                <div className="p-4">
                    <h1 className="display">User Details:</h1>
                    {userDetails && (
                        <Card className="user-details-card shadow-sm my-4" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                            <Card.Header style={{ backgroundColor: '#0492C2', color: '#ffffff' }}>
                                {userDetails.firstName} {userDetails.lastName} Details
                            </Card.Header>
                            <Card.Body className="p-4">
                                <Card.Text>
                                    <div className="row mb-2">
                                        <div className="col-sm-4 font-weight-bold" style={{ fontWeight: '600' }}>Email:</div>
                                        <div className="col-sm-8">{userDetails.email}</div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-sm-4 font-weight-bold" style={{ fontWeight: '600' }}>First Name:</div>
                                        <div className="col-sm-8">{userDetails.firstName}</div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-sm-4 font-weight-bold" style={{ fontWeight: '600' }}>Last Name:</div>
                                        <div className="col-sm-8">{userDetails.lastName}</div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-sm-4 font-weight-bold" style={{ fontWeight: '600' }}>CIN:</div>
                                        <div className="col-sm-8">{userDetails.cin}</div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-sm-4 font-weight-bold" style={{ fontWeight: '600' }}>Age:</div>
                                        <div className="col-sm-8">{userDetails.age}</div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-sm-4 font-weight-bold" style={{ fontWeight: '600' }}>Address:</div>
                                        <div className="col-sm-8">{userDetails.address}</div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-sm-4 font-weight-bold" style={{ fontWeight: '600' }}>Phone Number:</div>
                                        <div className="col-sm-8">{userDetails.phoneNumber}</div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-sm-4 font-weight-bold" style={{ fontWeight: '600' }}>Diploma:</div>
                                        <div className="col-sm-8">{userDetails.diploma}</div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-sm-4 font-weight-bold" style={{ fontWeight: '600' }}>Field:</div>
                                        <div className="col-sm-8">{userDetails.field}</div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-sm-4 font-weight-bold" style={{ fontWeight: '600' }}>Skills:</div>
                                        <div className="col-sm-8">{userDetails.skills}</div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-sm-4 font-weight-bold" style={{ fontWeight: '600' }}>Grade:</div>
                                        <div className="col-sm-8">{userDetails.grade}</div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-sm-4 font-weight-bold" style={{ fontWeight: '600' }}>Role:</div>
                                        <div className="col-sm-8">{userDetails.role}</div>
                                    </div>
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

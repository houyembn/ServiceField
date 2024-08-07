
import SideBar from '../sidebar/SideBar';
import ShowNavBar from '../NavBar/NavBar';
import '../ServiceCase/FormCase.css';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function User() {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showFailModal, setShowFailModal] = useState(false);

    const [User, setUser] = useState({
        Email: '',
        FirstName: '',
        LastName: '',
        Password: '',
        CIN: '',
        Age: 0,
        Address: '',
        PhoneNumber: 0,
        Diploma: '',
        Field: '',
        Skills: '',
        Grade: '',
        Role: '',

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...User, [name]: value });
    };

    const handleRoleChange = (e) => {
        setUser({ ...User, Role: e.target.value });
    };
    const navigate = useNavigate();

    const handleGetButtonClick = () => {
        navigate('/UserDisplay');
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://localhost:7141/ServiceField.Server/User', User);
            console.log(response.data);
            setShowSuccessModal(true);
            setTimeout(() => setShowSuccessModal(false), 3000);
            navigate('/UserDisplay');
        } catch (error) {
            console.error('There was an error adding the User!', error);
            setShowFailModal(true);
            setTimeout(() => setShowFailModal(false), 3000);
        }

    };
   
    return (
        <div className="flex">
            <SideBar />
            <div className="flex-1">
                <ShowNavBar />
                <div className="p-4">

                    <form onSubmit={handleSubmit}>
                        <h2 className="h2">User Form</h2>
                        <h3 className="h3">User information</h3>
                        <div className="all">

                            <div className="form-row">

                                <div className="form-column">
                                    <Form.Label className="custom-label">First Name </Form.Label>

                                    <Form.Control
                                        placeholder="Enter First Name"
                                        className="custom-input"
                                        name="FirstName"
                                        value={User.FirstName} onChange={handleChange}
                                    />
                                </div>

                                <div className="form-column">
                                    <Form.Label className="custom-label">Last Name</Form.Label>

                                    <Form.Control
                                        placeholder="Enter Last Name "
                                        className="custom-input"
                                        name="LastName"
                                        value={User.LastName} onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-row">

                                <div className="form-column">
                                    <Form.Label className="custom-label">Email</Form.Label>
                                    <Form.Control
                                        placeholder="Enter Email"
                                        className="custom-input"
                                        name="Email"
                                        value={User.Email}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="form-column">
                                    <Form.Label className="custom-label">Password</Form.Label>

                                    <Form.Control
                                        type="password"
                                        placeholder="Enter User Password"
                                        className="custom-input"
                                        name="Password"
                                        value={User.Password} onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-column">
                                    <Form.Label className="custom-label">CIN</Form.Label>

                                    <Form.Control
                                        type="text"
                                        placeholder="Enter CIN "
                                        className="custom-input"
                                        name="CIN"
                                        value={User.CIN} onChange={handleChange}
                                        pattern="\d{8}"
                                        maxLength="8"
                                    />
                                </div>

                                <div className="form-column">
                                    <Form.Label className="custom-label">Phone Number</Form.Label>

                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Phone Number "
                                        className="custom-input"
                                        name="PhoneNumber"
                                        value={User.PhoneNumber} onChange={handleChange}
                                        pattern="\d{8}"
                                        maxLength="8"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-column">
                                    <Form.Label className="custom-label">Age</Form.Label>

                                    <Form.Control
                                        type="number"
                                        placeholder="Enter Age "
                                        className="custom-input"
                                        name="Age"
                                        value={User.Age} onChange={handleChange}
                                    />
                                </div>

                                <div className="form-column">
                                    <Form.Label className="custom-label">Address</Form.Label>

                                    <Form.Control
                                        placeholder="Enter Address "
                                        className="custom-input"
                                        name="Address"
                                        value={User.Address} onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <h3 className="h3">Professional Information</h3>
                            <div className="form-row">
                                <div className="form-column">
                                    <Form.Label className="custom-label">Diploma</Form.Label>

                                    <Form.Control
                                        placeholder="Enter Diploma "
                                        className="custom-input"
                                        name="Diploma"
                                        value={User.Diploma} onChange={handleChange}
                                    />
                                </div>

                                <div className="form-column">
                                    <Form.Label className="custom-label">Field</Form.Label>

                                    <Form.Control
                                        placeholder="Enter Field "
                                        className="custom-input"
                                        name="Field"
                                        value={User.Field} onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-column">
                                    <Form.Label className="custom-label">Skills</Form.Label>

                                    <Form.Control
                                        placeholder="Enter Skills "
                                        className="custom-input"
                                        name="Skills"
                                        value={User.Skills} onChange={handleChange}
                                    />
                                </div>

                                <div className="form-column">
                                    <Form.Label className="custom-label">Grade</Form.Label>

                                    <Form.Control
                                        placeholder="Enter Grade "
                                        className="custom-input"
                                        name="Grade"
                                        value={User.Grade} onChange={handleChange}
                                    />
                                </div>
                            </div>


                            <Form.Label className="custom-label">User Role</Form.Label>
                            <Form.Check
                                type="radio"
                                label="Service Manager"
                                name="Role"
                                value="Service Manager"
                                checked={User.Role === 'Service Manager'}
                                onChange={handleRoleChange}
                            />
                            <Form.Check
                                type="radio"
                                label="Technician"
                                name="Role"
                                value="Technician"
                                checked={User.Role === 'Technician'}
                                onChange={handleRoleChange}
                            />
                            <Button className="sub" as="input" type="submit" value="Submit" onSubmit={handleSubmit} />{' '}
                        </div>

                    </form>

                    <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} className="modal-success">
                        <Modal.Body> User added successfully!</Modal.Body>
                    </Modal>

                    <Modal show={showFailModal} onHide={() => setShowFailModal(false)} className="modal-fail">
                        <Modal.Body>Adding failed!</Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>


    );
}
export default User;
import '../../OrderManagement/OrderManagement.css';
import ShowNavBar from '../../NavBar/NavBar';
import SideBar from '../../SideBar/SideBar';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';

function ServiceObject() {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showFailModal, setShowFailModal] = useState(false);

    const [ServiceObject, setServiceObject] = useState({
        ServiceObjectName: '',
        ServiceObjectDescription: '', // Ensure this field matches the expected backend field
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setServiceObject({ ...ServiceObject, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://localhost:7141/api/ServiceObject', ServiceObject);
            console.log(response.data);
            setShowSuccessModal(true);
            setTimeout(() => setShowSuccessModal(false), 3000);
        } catch (error) {
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            } else if (error.request) {
                console.error('Request data:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
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
                        <h2 className="h2">Service Object Form</h2>
                        <h3 className="h3">Service Object information</h3>
                        <div className="all">
                            <div className="form-row">
                                <div className="form-column">
                                    <Form.Label className="custom-label">Service Object Name</Form.Label>
                                    <Form.Control
                                        placeholder="Enter ServiceObject"
                                        className="custom-input"
                                        name="ServiceObjectName"
                                        value={ServiceObject.ServiceObjectName}
                                        onChange={handleChange}
                                    />

                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label className="custom-label">Service Object Description</Form.Label>
                                        <Form.Control
                                            className="custom-input"
                                            as="textarea"
                                            rows={3}
                                            style={{ resize: 'both' }}
                                            name="ServiceObjectDescription"
                                            value={ServiceObject.ServiceObjectDescription}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                        <Button className="sub" as="input" type="submit" value="Submit" onSubmit={handleSubmit} />
                    </form>

                    <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} className="modal-success">
                        <Modal.Body> Service Object added successfully!</Modal.Body>
                    </Modal>

                    <Modal show={showFailModal} onHide={() => setShowFailModal(false)} className="modal-fail">
                        <Modal.Body>Adding failed!</Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default ServiceObject;

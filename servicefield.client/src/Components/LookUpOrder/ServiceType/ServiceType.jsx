import '../../OrderManagement/OrderManagement.css';
import ShowNavBar from '../../NavBar/NavBar';
import SideBar from '../../SideBar/SideBar';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';

function ServiceTypeForm() {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showFailModal, setShowFailModal] = useState(false);

    const [serviceType, setServiceType] = useState({
        ServiceTypeName: '',
        Category: '',
        IsActive: false,
        Description: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setServiceType({
            ...serviceType,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://localhost:7141/api/ServiceType', serviceType);
            console.log(response.data);
            setShowSuccessModal(true);
            setTimeout(() => setShowSuccessModal(false), 3000);
        } catch (error) {
            console.error('There was an error adding the Service Type!', error);
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
                        <h2 className="h2">Service Type Form</h2>
                        <h3 className="h3">Service Type Information</h3>
                        <div className="all">
                            <div className="form-row">
                                <div className="form-column">
                                    <Form.Label className="custom-label">Service Type Name</Form.Label>
                                    <Form.Control
                                        placeholder="Enter Service Type"
                                        className="custom-input"
                                        name="ServiceTypeName"
                                        value={serviceType.ServiceTypeName}
                                        onChange={handleChange}
                                    />

                                    <Form.Label className="custom-label">Category</Form.Label>
                                    <Form.Control
                                        as="select"
                                        className="custom-input"
                                        name="Category"
                                        value={serviceType.Category}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Category</option>
                                        <option value="Maintenance">Maintenance</option>
                                        <option value="Repair">Repair</option>
                                        <option value="Installation">Installation</option>
                                        <option value="Consultation">Consultation</option>
                                    </Form.Control>

                                    <Form.Check
                                        type="checkbox"
                                        label="Is Active"
                                        name="IsActive"
                                        className="checkbox-label"
                                        checked={serviceType.IsActive}
                                        onChange={handleChange}
                                    />

                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label className="custom-label">Description</Form.Label>
                                        <Form.Control
                                            className="custom-input"
                                            as="textarea"
                                            rows={3}
                                            style={{ resize: 'both' }}
                                            name="Description"
                                            value={serviceType.Description}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                        <Button className="sub" as="input" type="submit" value="Submit" onSubmit={handleSubmit} />
                    </form>

                    <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} className="modal-success">
                        <Modal.Body>Service Type added successfully!</Modal.Body>
                    </Modal>

                    <Modal show={showFailModal} onHide={() => setShowFailModal(false)} className="modal-fail">
                        <Modal.Body>Adding failed!</Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default ServiceTypeForm;

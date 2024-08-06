import '../../OrderManagement/OrderManagement.css';
import ShowNavBar from '../../NavBar/NavBar';
import SideBar from '../../SideBar/SideBar';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
function Invoicing() {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showFailModal, setShowFailModal] = useState(false);

    const [Invoicing, setInvoicing] = useState({
        InvoicingType: '',
        PaymentMethod: '',
        RecurringPeriod: '',
        TermsAndConditions: '',
   
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInvoicing({ ...Invoicing, [name]: value });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://localhost:7141/api/Invoicing', Invoicing);
            console.log(response.data);
            setShowSuccessModal(true);
            setTimeout(() => setShowSuccessModal(false), 3000);
        } catch (error) {
            console.error('There was an error adding the Invoicing!', error);
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
                        <h2 className="h2">Invoicing Form</h2>
                        <h3 className="h3">Invoicing information</h3>
                        <div className="all">

                            <div className="form-row">
                   
                                <div className="form-column">
                                    <Form.Label className="custom-label">Invoicing Type</Form.Label>

                                    <Form.Control
                                        placeholder="Enter InvoicingType"
                                        className="custom-input"
                                        name="InvoicingType" 
                                        value={Invoicing.InvoicingType} onChange={handleChange}
                                    />

                                    <Form.Label className="custom-label">Payment Method</Form.Label>

                                    <Form.Control
                                        placeholder="Enter PaymentMethod "
                                        className="custom-input"
                                        name="PaymentMethod"
                                        value={Invoicing.PaymentMethod} onChange={handleChange}
                                    />

                                    <Form.Label className="custom-label">Recurring Period</Form.Label>

                                    <Form.Control
                                        placeholder="Enter RecurringPeriod"
                                        className="custom-input"
                                        name="RecurringPeriod"
                                        value={Invoicing.RecurringPeriod} onChange={handleChange}
                                    />

                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label className="custom-label">Terms And Conditions</Form.Label>
                                        <Form.Control className="custom-input" as="textarea" rows={3} style={{ resize: 'both' }}  name="TermsAndConditions" value={Invoicing.TermsAndConditions} onChange={handleChange} />
                                    </Form.Group>

                                </div>
                            </div>
                            <Button className="sub" as="input" type="submit" value="Submit" onSubmit={handleSubmit} />{' '}
                        </div>
                    </form>

                    <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} className="modal-success">
                        <Modal.Body> Invoicing added successfully!</Modal.Body>
                    </Modal>
                   
                    <Modal show={showFailModal} onHide={() => setShowFailModal(false)} className="modal-fail">
                        <Modal.Body>Adding failed!</Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>


    );
}
export default Invoicing;

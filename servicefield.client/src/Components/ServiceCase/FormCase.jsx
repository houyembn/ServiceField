
import { useState } from 'react';
import './FormCase.css';
import axios from 'axios';

const FormCase = () => {
    const [formData, setFormData] = useState({
        id: '',
        companyName: '',
        productSerialNumber: '',
        problemType: '',
        description: '',
        priority: '',
        contract: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:7141/ServiceField/Case', formData);
            console.log(response.data);
            setMessage('Form submitted successfully!');
        } catch (error) {
            console.error('There was an error adding the item!', error);
            setMessage('Failed to submit form.');
        }
    };

    return (
        <div className="form">
            <h2>Service Case</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="companyName">Company Name</label>
                    <select id="companyName" name="companyName" value={formData.companyName} onChange={handleChange}>
                        <option value="0">L_Mobile</option>
                        <option value="1">Actia</option>
                        <option value="2">EY</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="productSerialNumber">Product Serial Number</label>
                    <input type="text" id="productSerialNumber" name="productSerialNumber" value={formData.productSerialNumber} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="problemType">Problem Type</label>
                    <select id="problemType" name="problemType" value={formData.problemType} onChange={handleChange}>
                        <option value="0">Technical problem</option>
                        <option value="1">Billing Problem</option>
                        <option value="2-support">Customer Support</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="priority">Priority</label>
                    <select id="priority" name="priority" value={formData.priority} onChange={handleChange}>
                        <option value="0">High</option>
                        <option value="1">Average</option>
                        <option value="2">Low</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="contract">Contract</label>
                    <select id="contract" name="contract" value={formData.contract} onChange={handleChange}>
                        <option value="0">Maintenance contract</option>
                        <option value="1">Technical Support Contract</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormCase;

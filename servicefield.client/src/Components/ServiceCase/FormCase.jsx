import React, { useState } from 'react';
import './FormCase.css';

const FormCase = () => {
    const [formData, setFormData] = useState({
        id: '',
        companyName: '',
        productSerialNumber: '',
        problemType: '',
        description:'',
        priority: '',
        contract: '',

 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ajoutez ici la logique pour soumettre le formulaire, par exemple envoyer les données au backend
        console.log(formData);
    };

    return (
        <div className="form">
            <h2>Service Case</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="id">ID </label>
                    <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="companyName">Company Name</label>
                    <select id="companyName" name="companyName" value={formData.companyName} onChange={handleChange}>
                        
                        <option value="Company A">L-Mobile</option>
                        <option value="Company B">Actie</option>
                        <option value="Company C">EY</option>
                        
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="productSerialNumber">Product Serial Number</label>
                    <input type="text" id="productSerialNumber" name="productSerialNumber" value={formData.productSerialNumber} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="problemType"> ProblemType </label>
                    <select id="problemType" name="problemType" value={formData.problemType} onChange={handleChange}>
                        
                        <option value="technical"> Technical problem</option>
                        <option value="billing"> Billing Problem</option>
                        <option value="customer-support">Customer Support</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description </label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="priority"> Priority </label>
                    <select id="priority" name="priority" value={formData.priority} onChange={handleChange}>
                        
                        <option value="high">High</option>
                        <option value="medium"> Average</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="contract">Contract </label>
                    <select id="contract" name="contract" value={formData.contract} onChange={handleChange}>
                        
                        <option value="maintenance">Maintenance contract</option>
                        <option value="support">Technical Support Contract</option>
                    </select>
                </div>

                <button >Submit</button>
            </form>
        </div>
    );
};

export default FormCase;


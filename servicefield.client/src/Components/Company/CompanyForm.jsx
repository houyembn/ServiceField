/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/*import React, { useState } from 'react';
import axios from 'axios';

const CompanyForm = () => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        type: 'sole_proprietorship',
        website: '',
        position: '',
        ResponsableUser: 'ceo',
        description: '',
        phone: '',
        sourceType: '',
        ParentCompany: '',
        Subsidiary: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post('http://localhost:5297/ServiceField.Server/Company', formData);
                console.log(response.data);
                // Handle success (e.g., show a success message, clear the form, etc.)
                alert('Form submitted successfully!');
                setFormData({
                    id: '',
                    name: '',
                    email: '',
                    type: 'sole_proprietorship',
                    website: '',
                    position: '',
                    ResponsableUser: 'ceo',
                    description: '',
                    phone: '',
                    sourceType: '',
                    ParentCompany: '',
                    Subsidiary:'',
                });
            } catch (error) {
                console.error('There was an error adding the item!', error);
                // Handle error (e.g., show an error message)
                alert('Error submitting form. Please try again.');
            }
        }
    };

    const validateForm = () => {
        // Example validation: Check if required fields are filled
        if (!formData.name || !formData.email || !formData.type) {
            alert('Please fill out all required fields.');
            return false;
        }
        return true;
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Id:
                    <input type="text" name="id" value={formData.id} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                 Company Name:
                    <input type="text" name="CompanyName" value={formData.name} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                   Company Type:
                    <select name="CompanyType" value={formData.type} onChange={handleChange}>
                        <option value="sole_proprietorship">Sole Proprietorship</option>
                        <option value="partnership">Partnership</option>
                        <option value="corporation">Corporation</option>
                        <option value="Franchise">Franchisep</option>
                        <option value=" Limited Liability Company"> Limited Liability Companyp</option>

                        

                    </select>
                </label>
            </div>
            <div>
                <label>
                   Source Type:
                    <select name="SourceType" value={formData.sourceType} onChange={handleChange}>
                        <option value=" Equity Financing">  Equity Financing </option>
                        <option value=" Debt Financing"> Debt Financing</option>
                        <option value="Internal Financing">Internal Financing</option>
                        <option value="Alternative Financing">Alternative Financing</option>
                        <option value=" Grants and Subsidies"> Grants and Subsidies</option>


                    </select>
                </label>
            </div>
            <div>
                <label>
                    Responsoble User:
                    <select name="Responsable User" value={formData.ResponsableUser} onChange={handleChange}>
                        <option value="IT Department">IT Department</option>
                        <option value="Finance Department">Finance Department</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value=" Project Management"> Project Management</option>
                        <option value="Customer Service"> Customer Servicet</option>
                        <option value=" Compliance and Risk Management"> Compliance and Risk Management</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                     Parent Company:
                    <select name="Responsable User" value={formData.ResponsableUser} onChange={handleChange}>
                        <option value="IT Department">IT Department</option>
                        <option value="Finance Department">Finance Department</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value=" Project Management"> Project Management</option>
                        <option value="Customer Service"> Customer Servicet</option>
                        <option value=" Compliance and Risk Management"> Compliance and Risk Management</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Subsidiary:
                    <select name=" Subsidiary" value={formData.Subsidiary} onChange={handleChange}>
                        <option value="Wholly Owned Subsidiary">Wholly Owned Subsidiary</option>
                        <option value="Partially Owned Subsidiary">Partially Owned Subsidiary</option>
                        <option value="Joint Venture">Joint Venture</option>
                        <option value="Holding Subsidiary">Holding Subsidiary</option>
                        <option value=" Operating Subsidiary"> Operating Subsidiary</option>
                        <option value=" Special Purpose Vehicle"> Special Purpose Vehicle</option>

                    </select>
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Website:
                    <input type="text" name="website" value={formData.website} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Phone:
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                </label>
            </div>
          
            <div>
                <label>
                    Position:
                    <input type="text" name="position" value={formData.position} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Description:
                    <textarea name="description" value={formData.description} onChange={handleChange} />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CompanyForm;*/
import React, { useState } from 'react';
import axios from 'axios';

const MasterDataCompanyForm = ({ onSubmitSuccess }) => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        type: 'sole_proprietorship',
        website: '',
        position: '',
        ResponsableUser: 'ceo',
        description: '',
        phone: '',
        sourceType: '',
        ParentCompany: '',
        Subsidiary: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post('https://localhost:7141/api/MasterDataCompanies', formData);
                console.log(response.data);
                alert('Form submitted successfully!');
                setFormData({
                    id: '',
                    name: '',
                    email: '',
                    type: 'sole_proprietorship',
                    website: '',
                    position: '',
                    ResponsableUser: 'ceo',
                    description: '',
                    phone: '',
                    sourceType: '',
                    ParentCompany: '',
                    Subsidiary: '',
                });
                if (onSubmitSuccess) {
                    onSubmitSuccess();
                }
            } catch (error) {
                console.error('There was an error adding the item!', error);
                alert('Error submitting form. Please try again.');
            }
        }
    };

    const validateForm = () => {
        if (!formData.name || !formData.email || !formData.type) {
            alert('Please fill out all required fields.');
            return false;
        }
        return true;
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Id:
                    <input type="text" name="id" value={formData.id} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Company Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Type:
                    <select name="type" value={formData.type} onChange={handleChange}>
                        <option value="sole_proprietorship">Sole Proprietorship</option>
                        <option value="partnership">Partnership</option>
                        <option value="corporation">Corporation</option>
                        <option value="franchise">Franchise</option>
                        <option value="limited_liability_company">Limited Liability Company</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Website:
                    <input type="text" name="website" value={formData.website} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Position:
                    <input type="text" name="position" value={formData.position} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Responsable User:
                    <select name="ResponsableUser" value={formData.ResponsableUser} onChange={handleChange}>
                        <option value="ceo">CEO</option>
                        <option value="it_department">IT Department</option>
                        <option value="finance_department">Finance Department</option>
                        <option value="human_resources">Human Resources</option>
                        <option value="project_management">Project Management</option>
                        <option value="customer_service">Customer Service</option>
                        <option value="compliance_risk_management">Compliance and Risk Management</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Description:
                    <textarea name="description" value={formData.description} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Phone:
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Source Type:
                    <select name="sourceType" value={formData.sourceType} onChange={handleChange}>
                        <option value="equity_financing">Equity Financing</option>
                        <option value="debt_financing">Debt Financing</option>
                        <option value="internal_financing">Internal Financing</option>
                        <option value="alternative_financing">Alternative Financing</option>
                        <option value="grants_subsidies">Grants and Subsidies</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Parent Company:
                    <input type="text" name="ParentCompany" value={formData.ParentCompany} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Subsidiary:
                    <input type="text" name="Subsidiary" value={formData.Subsidiary} onChange={handleChange} />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default MasterDataCompanyForm;

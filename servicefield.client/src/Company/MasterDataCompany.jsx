/* eslint-disable no-undef */
//import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MasterDataCompanyList = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        loadCompanies();
    }, []);

    const loadCompanies = async () => {
        const result = await axios.get('http://localhost:5000/api/masterdatacompanies');
        setCompanies(result.data);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/masterdatacompanies/${id}`);
        loadCompanies();
    };

    return (
        < div >
            < h1 > Master Data Companiesss</ h1 >
            < ul >
                {
                    companies.map((company) => (
                        < li key={company.id}>
                            {company.name}
                            - {company.email}
                            < button onClick={() => handleDelete(company.id)}> Delete </ button >
                        </ li >
                    ))}
            </ ul >
        </ div >
    );
};

export default MasterDataCompanyList;

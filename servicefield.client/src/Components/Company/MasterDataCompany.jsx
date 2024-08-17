
import { useEffect, useState } from 'react';
import axios from 'axios';

const MasterDataCompany = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        loadCompanies();
    }, []);

    const loadCompanies = async () => {
        const result = await axios.get('https://localhost:7141/api/MasterDataCompanies');
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

export default MasterDataCompany;

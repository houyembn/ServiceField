import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CompanyForm from './Company/CompanyForm';
import MasterDataCompanyList from './Company/MasterDataCompany';
import Sidebar from './SideBar/SideBar';
//import ShowNavBar from './NavBar/ShowNavBar';  // Ensure the correct import path
//import HomePage from './HomePage/HomePage';    // Adjusted to correct import path
import ShowNavBar from './NavBar/NavBar';
import HomePage from './HomePage/HomePage';



import './index.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/MasterDataCompany" element={<MasterDataCompanyList />} />
                <Route path="/CompanyForm" element={<CompanyForm />} />
                <Route path="/Sidebar" element={<Sidebar />} />
                <Route path="/NavBar" element={<ShowNavBar />} />
                <Route path="/Homepage" element={<HomePage />} />
            </Routes>
        </Router>
    );
};

export default App;

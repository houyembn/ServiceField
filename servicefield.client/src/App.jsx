import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import ShowSideBar from './Components/sidebar/SideBar';
import FormCase from './Components/ServiceCase/FormCase';
import DetailsFormCase from './Components/ServiceCase/DetailsFormCase';
import './Components/sidebar/SideBar.css';
import ShowNavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';
import LuSkills from './Components/ServiceCase/LuSkills';
import ServiceCaseDetails from './Components/ServiceCase/ShowSCDetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/ShowSideBar" element={<ShowSideBar />} />
                <Route path="/ShowNavBar" element={<ShowNavBar />} />
                <Route path="/DetailsFormCase" element={<DetailsFormCase />} />
                <Route path="/FormCase" element={<FormCase />} />
                <Route path="/ServiceCaseDetails/:id" element={<ServiceCaseDetails />} />
                <Route path="/LuSkills" element={<LuSkills />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
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
import LogIn from './Components/ServiceCase/LogIn';
import User from './Components/User/User';
import UserDisplay from './Components/User/UserDisplay';
import UserDetails from './Components/User/UserDetails';

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
                <Route path="/LogIn" element={<LogIn />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/User" element={<User />} />
                <Route path="/UserDisplay" element={<UserDisplay />} />
                <Route path="/UserDetails/:UserId" element={<UserDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
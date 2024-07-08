import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormCase from './Components/ServiceCase/FormCase';
import Home from './Components/ServiceCase/HomePage';
import DetailsFormCase from './Components/ServiceCase/DetailsFormCase';
import Sidebar from './Components/sidebar/SideBar';
import './App.css';


function App() {


    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/FormCase" element={<FormCase />} />
                <Route path="/DetailsFormCase" element={<DetailsFormCase />} />
                <Route path="/Sidebar" element={<Sidebar />} />

            </Routes>
        </Router>
    );
}

export default App;
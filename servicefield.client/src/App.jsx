import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServiceOrder from './Components/ServiceOrder/ServiceOrder';
import OrderManagement from './Components/OrderManagement/OrderManagement';
import CheckCase from './Components/CheckCase/CheckCase';
import SideBar from './Components/SideBar/SideBar';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';





function App() {
  

    return (
        <Router>
                <Routes>
                <Route path="/ServiceOrder" element={<ServiceOrder />} />
               <Route path="/OrderManagement" element={<OrderManagement />} />
               <Route path="/CheckCase" element={<CheckCase />} />
                <Route path="/SideBar" element={<SideBar />} />
                <Route path="/NavBar" element={<NavBar />} />
                <Route path="/HomePage" element={<HomePage />} />
                </Routes>
        </Router>
    );
}

export default App;
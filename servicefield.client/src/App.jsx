import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServiceOrder from './Components/ServiceOrder/ServiceOrder';
import OrderManagement from './Components/OrderManagement/OrderManagement';
import CheckCase from './Components/CheckCase/CheckCase';
import SideBar from './Components/SideBar/SideBar';

CheckCase
import './App.css';


function App() {
  

    return (
        <Router>
                <Routes>
                <Route path="/ServiceOrder" element={<ServiceOrder />} />
                <Route path="/OrderManagement" element={<OrderManagement />} />
                <Route path="/CheckCase" element={<CheckCase />} />
                <Route path="/SideBar" element={<SideBar />} />
               
                </Routes>
        </Router>
    );
}

export default App;
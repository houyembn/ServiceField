import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServiceOrder from './Components/ServiceOrder/ServiceOrder';
import OrderManagement from './Components/OrderManagement/OrderManagement';
import CheckCase from './Components/CheckCase/CheckCase';

CheckCase
import './App.css';


function App() {
  

    return (
        <Router>
                <Routes>
                <Route path="/ServiceOrder" element={<ServiceOrder />} />
                <Route path="/OrderManagement" element={<OrderManagement />} />
                <Route path="/CheckCase" element={<CheckCase />} />
               
                </Routes>
        </Router>
    );
}

export default App;
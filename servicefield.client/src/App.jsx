import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServiceOrder from './Components/ServiceOrder/ServiceOrder';
import OrderManagement from './Components/OrderManagement/OrderManagement';
import CheckCase from './Components/CheckCase/CheckCase';
import SideBar from './Components/SideBar/SideBar';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';
import OrderDisplay from './Components/OrderDisplay/OrderDisplay';
import OrderDetails from './Components/OrderDetails/OrderDetails';
import Invoicing from './Components/LookUpOrder/Invoicing/Invoicing';
import ServiceObject from './Components/LookUpOrder/ServiceObject/ServiceObject';
import ServiceType from './Components/LookUpOrder/ServiceType/ServiceType';
import TypeDisplay from './Components/LookUpOrder/ServiceType/TypeDisplay';
import TypeDetails from './Components/LookUpOrder/ServiceType/TypeDetails';
import ObjectDisplay from './Components/LookUpOrder/ServiceObject/ObjectDisplay';
import ObjectDetails from './Components/LookUpOrder/ServiceObject/ObjectDetails';
import InvoicingDisplay from './Components/LookUpOrder/Invoicing/InvoicingDisplay';
import InvoicingDetails from './Components/LookUpOrder/Invoicing/InvoicingDetails';
import User from './Components/User/User';
import UserDisplay from './Components/User/UserDisplay';
import UserDetails from './Components/User/UserDetails';
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
                <Route path="/OrderDisplay" element={<OrderDisplay />} />
                <Route path="/Invoicing" element={<Invoicing />} />
                <Route path="/ServiceObject" element={<ServiceObject />} />
                <Route path="/ServiceType" element={<ServiceType />} />
                <Route path="/TypeDisplay" element={<TypeDisplay />} />
                <Route path="/ObjectDisplay" element={<ObjectDisplay />} />
                <Route path="/InvoicingDisplay" element={<InvoicingDisplay />} />
                <Route path="/orderdetails/:idOrder" element={<OrderDetails />} />
                <Route path="/InvoicingDetails/:InvoicingId" element={<InvoicingDetails />} />
                <Route path="/ObjectDetails/:ServiceObjectId" element={<ObjectDetails />} />
                <Route path="/TypeDetails/:ServiceTypeId" element={<TypeDetails />} />
                <Route path="/User" element={<User />} />
                <Route path="/UserDisplay" element={<UserDisplay />} />
                <Route path="/UserDetails/:UserId" element={<UserDetails />} />
                </Routes>
        </Router>
    );
}

export default App;
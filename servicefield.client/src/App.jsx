import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServiceOrder from './Components/ServiceOrder/ServiceOrder';
import OrderManagement from './Components/OrderManagement/OrderManagement';
import CheckCase from './Components/CheckCase/CheckCase';
import SideBar from './Components/SideBar/SideBar';
//import SideBarTechnician from './Components/SideBarTechnician/SideBarTechnician';
//import SideBarServiceManager from './Components/SideBarServiceManager/SideBarServiceManager';
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
import Login from './Components/Login/Login';
import UserDisplay from './Components/User/UserDisplay';
import UserDetails from './Components/User/UserDetails';
import DetailsFormCase from './Components/ServiceCase/DetailsFormCase';
import FormCase from './Components/ServiceCase/FormCase';
import LuSkills from './Components/ServiceCase/LuSkills';
import ServiceCaseDetails from './Components/ServiceCase/ShowSCDetail';
import Technician from './Components/Technician/Technician';
import CompanyForm from './Components/Company/CompanyForm';
import MasterDataCompany from './Components/Company/MasterDataCompany';
import DetailsFormInstall from './Components/Installation/DetailsFormInstall';
import FormInstall from './Components/Installation/FormInstall';
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
                {/*<Route path="/SideBarTechnician" element={<SideBarSideBarTechnician />} />*/}
                {/*<Route path="/SideBarServiceManager" element={<SideBarServiceManager />} />*/}
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
                <Route path="/" element={<HomePage />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/DetailsFormCase" element={<DetailsFormCase />} />
                <Route path="/FormCase" element={<FormCase />} />
                <Route path="/ServiceCaseDetails/:id" element={<ServiceCaseDetails />} />
                <Route path="/LuSkills" element={<LuSkills />} />
                <Route path="/Technician" element={<Technician />} />
                <Route path="/CompanyForm" element={<CompanyForm />} />
                <Route path="/MasterDataCompany" element={<MasterDataCompany />} />
                <Route path="/DetailsFormInstall" element={<DetailsFormInstall />} />
                <Route path="/FormInstall" element={<FormInstall />} />
                </Routes>
        </Router>
    );
}

export default App;
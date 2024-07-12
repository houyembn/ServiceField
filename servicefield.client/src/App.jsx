//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import FormCase from './Components/ServiceCase/FormCase';
//import Home from './Components/ServiceCase/HomePage';
//import DetailsFormCase from './Components/ServiceCase/DetailsFormCase';
//import Sidebar from './Components/sidebar/SideBar';
//import './App.css';


//function App() {


//    return (
//        <Router>
//            <Routes>
//                <Route path="/" element={<Home/>} />
//                <Route path="/FormCase" element={<FormCase />} />
//                <Route path="/DetailsFormCase" element={<DetailsFormCase />} />
//                <Route path="/Sidebar" element={<Sidebar />} />

//            </Routes>
//        </Router>
//    );
//}

//export default App;
//
//import { useEffect, useState } from 'react';
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





function App() {


    return (
        <Router>
            <Routes>
                
               

                <Route path="/ShowSideBar" element={<ShowSideBar />} />



                <Route path="/ShowNavBar" element={<ShowNavBar />} />
                <Route path="/DetailsFormCase" element={<DetailsFormCase />} />
                <Route path="/FormCase" element={<FormCase />} />
               


                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
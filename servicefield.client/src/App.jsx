//import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Articles from './Componements/Articles/Articles';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import './index.css';

import ShowArticles from './Componements/Articles/ShowArticles';
import ArticleDetails from './Componements/Articles/ArticleDetails';
import ShowSideBar from './Componements/SideBar/SideBar';





import './Componements/SideBar/SideBar.css';
import ShowNavBar from './Componements/NavBar/NavBar';
import HomePage from './Componements/HomePage/HomePage';





function App() {


    return (
        <Router>
            <Routes>
                <Route path="/Articles" element={<Articles />} />
                <Route path="/ShowArticles" element={<ShowArticles />} />


                <Route path="/ShowArticles/:id" element={<ArticleDetails />} />

                <Route path="/ShowSideBar" element={<ShowSideBar />} />



                <Route path="/ShowNavBar" element={<ShowNavBar />} />



                <Route path="/Homepage" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
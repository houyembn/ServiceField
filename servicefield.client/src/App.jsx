//import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Articles from './Componements/Articles/Articles';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import ShowArticles from './Componements/Articles/ShowArticles';
import ArticleDetails from './Componements/Articles/ArticleDetails';





function App() {


    return (
        <Router>
            <Routes>
                <Route path="/Articles" element={<Articles />} />
                <Route path="/ShowArticles" element={<ShowArticles />} />


                <Route path="/ShowArticles/:id" element={<ArticleDetails />} />


            </Routes>
        </Router>
    );
}

export default App;
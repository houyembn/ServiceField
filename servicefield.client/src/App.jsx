//import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Articles from './Componements/Articles/Articles';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';

function App() {


    return (
        <Router>
            <Routes>
                <Route path="/Articles" element={<Articles />} />

            </Routes>
        </Router>
    );
}

export default App;
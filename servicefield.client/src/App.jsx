import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormCase from './Components/ServiceCase/FormCase';
import './App.css';

function App() {


    return (
        <Router>
            <Routes>
                <Route path="/FormCase" element={<FormCase/>} />

            </Routes>
        </Router>
    );
}

export default App;
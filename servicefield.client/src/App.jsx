import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServiceOrder from './Components/ServiceOrder/ServiceOrder';
import './App.css';

function App() {
  

    return (
        <Router>
                <Routes>
                <Route path="/ServiceOrder" element={<ServiceOrder />} />
               
                </Routes>
        </Router>
    );
}

export default App;
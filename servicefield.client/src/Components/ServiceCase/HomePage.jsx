//// Components/Home.js

//import React from 'react';
//import { useNavigate } from 'react-router-dom';

//function Home() {
//    const navigate = useNavigate();

//    const handleButtonClick = () => {
//        navigate('/FormCase');
//    };


//    return (
//        <div>
//            <h1>Welcome</h1>
//            <button onClick={handleButtonClick}>Create a ServiceCase</button>
//        </div>
//    );
//}

//export default Home;
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleCreateButtonClick = () => {
        navigate('/FormCase');
    };

    const handleDetailsButtonClick = () => {
        navigate('/DetailsFormCase');
    };

    return (
        <div>
            <h1>Welcome</h1>
            <button onClick={handleCreateButtonClick}>Create a ServiceCase</button>
            <button onClick={handleDetailsButtonClick}>View ServiceCases</button>
        </div>
    );
}

export default Home;

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
import LuSkills from './Components/ServiceCase/LuSkills';
import LuCategory from './Components/ServiceCase/LuCategory';
import LuObject from './Components/ServiceCase/LuObject';
import LuElement from './Components/ServiceCase/LuElement';
import LuCheckList from './Components/ServiceCase/LuCheckList';
import ServiceCaseDetails from './Components/ServiceCase/ShowSCDetail';
import LogIn from './Components/ServiceCase/LogIn';
import User from './Components/User/User';
import UserDisplay from './Components/User/UserDisplay';
import UserDetails from './Components/User/UserDetails';

import ShowArticles from './Componements/Articles/ShowArticles';
import ArticleDetails from './Componements/Articles/ArticleDetails';
import ShowSideBar from './Componements/SideBar/SideBar';





import './Componements/SideBar/SideBar.css';
import ShowNavBar from './Componements/NavBar/NavBar';
import HomePage from './Componements/HomePage/HomePage';
import AddLookup from './Componements/LU_Articles/AddLookup';
import EditArticle from './Componements/Articles/EditArticle';
import SignIn from './Componements/Users/SignIn';
import SignUp from './Componements/Users/SignUp';
import User from './Componements/Users/User';





function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LogIn />} />
                <Route path="/ShowSideBar" element={<ShowSideBar />} />
                <Route path="/ShowNavBar" element={<ShowNavBar />} />
                <Route path="/DetailsFormCase" element={<DetailsFormCase />} />
                <Route path="/FormCase" element={<FormCase />} />
                <Route path="/ServiceCaseDetails/:id" element={<ServiceCaseDetails />} />
                <Route path="/LuSkills" element={<LuSkills />} />
                <Route path="/LuObject" element={<LuObject/>} />
                <Route path="/LuCategory" element={<LuCategory />} />
                <Route path="/LuElement" element={<LuElement />} />
                <Route path="/LuCheckList" element={<LuCheckList />} />
                
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/User" element={<User />} />
                <Route path="/UserDisplay" element={<UserDisplay />} />
                <Route path="/UserDetails/:UserId" element={<UserDetails />} />
                <Route path="/Articles" element={<Articles />} />
                <Route path="/ShowArticles" element={<ShowArticles />} />


                <Route path="/ShowArticles/:id" element={<ArticleDetails />} />

                <Route path="/ShowSideBar" element={<ShowSideBar />} />



                <Route path="/ShowNavBar" element={<ShowNavBar />} />



                <Route path="/Homepage" element={<HomePage />} />

                <Route path="/add-lookup" element={<AddLookup />} />

                <Route path="/edit-article/:id" element={<EditArticle />} />


                <Route path="/SignIn/" element={<SignIn />} />


                <Route path="/SignUp/" element={<SignUp />} />
                <Route path="/User/" element={<User />} />
            </Routes>
        </Router>


    
     
    );
}

export default App;
//import  { useState } from 'react';
//import { FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { AiFillBulb } from "react-icons/ai";
import './SideBar.css';


const Sidebar = () => {
  

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <a href="#" className="logo">
                            <img src="/react.svg"></img>
                            <span className="nav-item">SideBar</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <AiFillBulb />
                            <span className="nav-item">Profil</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="icon"></i>
                            <span className="nav-item">Profil</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="icon"></i>
                            <span className="nav-item">Profil</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="icon"></i>
                            <span className="nav-item">Profil</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;



import './SideBar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
//import img from "../../assets/mobile.png";

const Sidebar = () => {
    const [mini, setMini] = useState(true);

    const openSidebar = () => {
        if (mini) {
            console.log("opening sidebar");
            document.getElementById("mySidebar").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
            setMini(false);
        }
    };

    const closeSidebar = () => {
        if (!mini) {
            console.log("closing sidebar");
            document.getElementById("mySidebar").style.width = "85px";
            document.getElementById("main").style.marginLeft = "85px";
            setMini(true);
        }
    };

    let closeSidebarTimeout;

    const handleMouseOver = () => {
        clearTimeout(closeSidebarTimeout);
        openSidebar();
    };

    const handleMouseOut = () => {
        closeSidebarTimeout = setTimeout(() => {
            closeSidebar();
        }, 300); 
    };

    return (
        <>
          
            <div
                id="mySidebar"
                className="sidebar"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                {/*<img src={img} / > */}
            <Link to="/Sidebar" className="sidebar-link">
                    <i className="material-icons">home</i>
                    <span className="icon-text">Home</span>
                </Link><br />
                <Link to="/DetailsFormCase" className="sidebar-link">
                    <i className="material-icons">description</i>
                    <span className="icon-text">Details</span>
                </Link><br />
                <Link to="#">
                    <i className="material-icons">add</i>
                    <span className="icon-text">services</span>
                </Link><br />
                <Link to="#">
                    <i className="material-icons">monetization_on</i>
                    <span className="icon-text">clients</span>
                </Link><br />
                <Link to="#">
                    <i className="material-icons">email</i>
                    <span className="icon-text">contact</span>
                </Link>
            </div>

            <div id="main">
                
            </div>
        </>
    );
};

export default Sidebar;

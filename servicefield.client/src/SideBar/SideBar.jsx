import './SideBar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import img from "../assets/mobile.png";

const Sidebar = () => {
    const [mini, setMini] = useState(true);
    const [isServiceManagementOpen, setIsServiceManagementOpen] = useState(false);

    const openSidebar = () => {
        if (mini) {
            document.getElementById("mySidebar").style.width = "280px";
            document.getElementById("main").style.marginLeft = "240px";
            setMini(false);
        }
    };

    const closeSidebar = () => {
        if (!mini) {
            document.getElementById("mySidebar").style.width = "85px";
            document.getElementById("main").style.marginLeft = "50px";
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

    const toggleServiceManagement = () => {
        setIsServiceManagementOpen(!isServiceManagementOpen);
    };

    return (
        <>
            <div
                id="mySidebar"
                className="sidebar"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                <div className="head">
                    <div className="user-img">
                        <img src={img} alt="Profile" />
                    </div>
                </div>

                <Link to="/Sidebar" className="sidebar-link">
                    <i className="material-icons">home</i>
                    <span className="icon-text">Home</span>
                </Link>
                <br />

                <div>
                    <button onClick={toggleServiceManagement} className="sidebar-link no-outline">
                        <i className="material-icons">build</i>
                        <span className="icon-text">Service Management</span>
                        <i className="material-icons">
                            {isServiceManagementOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                        </i>
                    </button>
                    {isServiceManagementOpen && (
                        <div className="nested-links">
                            <Link to="/DetailsFormCase" className="nested-link">
                                <i className="material-icons">view_list</i>
                                <span className="text">Service Case</span>
                            </Link>
                            <Link to="/service-cases" className="nested-link">
                                <i className="material-icons">view_list</i>
                                <span className="text">Service Order</span>
                            </Link>
                        </div>
                    )}
                </div>
                <br />
                <Link to="/CompanyForm">
                    <i className="material-icons">add</i>
                    <span className="icon-text">Company</span>
                </Link>
                <br />
                <Link to="#">
                    <i className="material-icons">business</i>
                    <span className="icon-text">Clients</span>
                </Link>
                <br />
                <Link to="#">
                    <i className="material-icons">email</i>
                    <span className="icon-text">Contact</span>
                </Link>
                <br />
            </div>

            <div id="main">
                {/* Contenu principal de l'application */}
            </div>
        </>
    );
};

export default Sidebar;

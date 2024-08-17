import './SideBar.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img from "../../assets/mobile.png";

const Sidebar = () => {
    const [mini, setMini] = useState(true);
    const [isServiceManagementOpen, setIsServiceManagementOpen] = useState(false);
    const [isInventoryOpen, setIsInventoryOpen] = useState(false);
    const [userRole, setUserRole] = useState('');

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUserRole(storedUser.role);
        }
    }, []);

    const openSidebar = () => {
        if (mini) {
            document.getElementById("mySidebar").style.width = "280px";
            document.getElementById("main").style.marginLeft = "250px";
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
    const toggleInventory = () => {
        setIsInventoryOpen(!isInventoryOpen);
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
                        <img src={img} alt="User" />
                    </div>
                </div>

                <Link to="/HomePage" className="sidebar-link">
                    <i className="material-icons">home</i>
                    <span className="icon-text">Home</span>
                </Link>
                <br />

                {userRole !== 'Technician' && (
                    <>
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
                                    <Link to="/OrderDisplay" className="nested-link">
                                        <i className="material-icons">view_list</i>
                                        <span className="text">Service Order</span>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <br />
                        <Link to="#">
                            <i className="material-icons">factory</i>
                            <span className="icon-text">Installation</span>
                        </Link>
                        <br />
                        <Link to="#">
                            <i className="material-icons">apartment</i>
                            <span className="icon-text">Companies</span>
                        </Link>
                        <br />
                        <Link to="/UserDisplay">
                            <i className="material-icons">groups</i>
                            <span className="icon-text">Users</span>
                        </Link>
                        <br />
                        <div>
                            <button onClick={toggleInventory} className="sidebar-link no-outline">
                                <i className="material-icons">inventory_2</i>
                                <span className="icon-text">Inventories</span>
                                <i className="material-icons">
                                    {isInventoryOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                                </i>
                            </button>
                            {isInventoryOpen && (
                                <div className="nested-links">
                                    <Link to="/DetailsFormCase" className="nested-link">
                                        <i className="material-icons">view_list</i>
                                        <span className="text">Articles</span>
                                    </Link>
                                    <Link to="/service-cases" className="nested-link">
                                        <i className="material-icons">view_list</i>
                                        <span className="text">Stocks</span>
                                    </Link>
                                    <Link to="/service-cases" className="nested-link">
                                        <i className="material-icons">view_list</i>
                                        <span className="text">Stores</span>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <br />
                        <div>
                            <button onClick={toggleServiceManagement} className="sidebar-link no-outline">
                                <i className="material-icons">collections_bookmark</i>
                                <span className="icon-text">LookUps</span>
                                <i className="material-icons">
                                    {isServiceManagementOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                                </i>
                            </button>
                            {isServiceManagementOpen && (
                                <div className="nested-links">
                                    <Link to="/InvoicingDisplay" className="nested-link">
                                        <i className="material-icons">view_list</i>
                                        <span className="text">Invoicing</span>
                                    </Link>
                                    <Link to="/TypeDisplay" className="nested-link">
                                        <i className="material-icons">view_list</i>
                                        <span className="text">Service Type</span>
                                    </Link>
                                    <Link to="/ObjectDisplay" className="nested-link">
                                        <i className="material-icons">view_list</i>
                                        <span className="text">Order Object </span>
                                    </Link>
                                    <Link to="/LuObject" className="nested-link">
                                        <i className="material-icons">view_list</i>
                                        <span className="text">Case Object </span>
                                    </Link>
                                    <Link to="/LuCategory" className="nested-link">
                                        <i className="material-icons">view_list</i>
                                        <span className="text">Category</span>
                                    </Link>
                                    <Link to="/LuElement" className="nested-link">
                                        <i className="material-icons">view_list</i>
                                        <span className="text">Element</span>
                                    </Link>
                                    <Link to="/LuSkills" className="nested-link">
                                        <i className="material-icons">view_list</i>
                                        <span className="text">Skills</span>
                                    </Link>
                                    <Link to="/LuCheckList" className="nested-link">
                                        <i className="material-icons">view_list</i>
                                        <span className="text">CheckList</span>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <br />
                    </>
                )}

                <Link to="/Technician" className="sidebar-link">
                    <i className="material-icons">person</i>
                    <span className="icon-text">My Account</span>
                </Link>
                <br />
                <Link to="/Login" className="sidebar-link">
                    <i className="material-icons">keyboard_return</i>
                    <span className="icon-text">Logout</span>
                </Link>
            </div>

            <div id="main"></div>
        </>
    );
};

export default Sidebar;

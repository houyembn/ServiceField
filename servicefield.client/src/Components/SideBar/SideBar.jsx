import './SideBar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/img.jfif';


const Sidebar = () => {
    const [mini, setMini] = useState(true);

    const openSidebar = () => {
        if (mini) {
            console.log("opening sidebar");
            document.getElementById("mySidebar").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
            document.getElementById("mySidebar").classList.add("open");
            document.getElementById("mySidebar").classList.remove("closed");
            setMini(false);
        }
    };

    const closeSidebar = () => {
        if (!mini) {
            console.log("closing sidebar");
            document.getElementById("mySidebar").style.width = "85px";
            document.getElementById("main").style.marginLeft = "85px";
            document.getElementById("mySidebar").classList.add("closed");
            document.getElementById("mySidebar").classList.remove("open");
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
                className={`sidebar ${mini ? 'closed' : 'open'}`}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                <div className="nav__items">
                    <div className="head">
                        <div className="user-img">
                            <img src={img} alt="" />
                        </div>
                        <div className="user-details">
                            <p className="name">ServiceField</p>
                        </div>
                    </div>
                    <div className="menu">
                        <h1 className="title">Main</h1>
                        <Link to="/DetailsFormCase" className="sidebar-link">
                            <i className="material-icons">description</i>
                            <span className="icon-text">Companies</span>
                        </Link><br />
                        <Link to="#">
                            <i className="material-icons">add</i>
                            <span className="icon-text">Technicians</span>
                        </Link><br />
                        <Link to="#">
                            <i className="material-icons">monetization_on</i>
                            <span className="icon-text">Articales</span>
                        </Link><br />
                        <Link to="#">
                            <i className="material-icons">email</i>
                            <span className="icon-text">Installation</span>
                        </Link>
                    </div>

                    <div className="menu">
                        <h1 className="title">Services</h1>
                        <Link to="/DetailsFormCase" className="sidebar-link">
                            <i className="material-icons">description</i>
                            <span className="icon-text">Service Cases</span>
                        </Link><br />
                        <Link to="/ServiceOrder">
                            <i className="material-icons">add</i>
                            <span className="icon-text">Service Orders</span>
                        </Link><br />
                    </div>
                </div>
            </div>
            <div id="main" className="main-content">
                
            </div>
        </>
    );
};

export default Sidebar;

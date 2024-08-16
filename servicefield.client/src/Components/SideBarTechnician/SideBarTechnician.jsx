//import './SideBar.css';
//import { useState } from 'react';
//import { Link } from 'react-router-dom';
//import img from "../../assets/mobile.png";


//const SidebarTechnician = () => {
//    const [mini, setMini] = useState(true);


//    const openSidebar = () => {
//        if (mini) {
//            console.log("opening sidebar");
//            document.getElementById("mySidebar").style.width = "280px";
//            document.getElementById("main").style.marginLeft = "250px";
//            setMini(false);
//        }
//    };

//    const closeSidebar = () => {
//        if (!mini) {
//            console.log("closing sidebar");
//            document.getElementById("mySidebar").style.width = "85px";
//            document.getElementById("main").style.marginLeft = "50px";
//            setMini(true);
//        }
//    };

//    let closeSidebarTimeout;

//    const handleMouseOver = () => {
//        clearTimeout(closeSidebarTimeout);
//        openSidebar();
//    };

//    const handleMouseOut = () => {
//        closeSidebarTimeout = setTimeout(() => {
//            closeSidebar();
//        }, 300);
//    };


//    return (
//        <>
//            <div
//                id="mySidebar"
//                className="sidebar"
//                onMouseOver={handleMouseOver}
//                onMouseOut={handleMouseOut}
//            >


//                <div className="head">
//                    <div className="user-img">
//                        <img src={img} alt="" />
                    
//                    </div>

//                </div>

//                <Link to="/HomePage" className="sidebar-link">
//                    <i className="material-icons">home</i>
//                    <span className="icon-text">Home</span>
//                </Link>
//                <br />

               
               


//            </div>

//            <div id="main">

//            </div>
//        </>
//    );
//};

//export default SidebarTechnician;
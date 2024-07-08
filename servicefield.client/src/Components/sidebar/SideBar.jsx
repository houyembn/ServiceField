
//import './SideBar.css';
//const Sidebar = () => {
//    return (
//        <div id="mySidebar" className="sidebar">
//            <a href="#">
//                <span><i className="material-icons">info</i><span className="icon-text">about</span></span>
//            </a><br />
//            <a href="#">
//                <i className="material-icons">spa</i><span className="icon-text">services</span>
//            </a><br />
//            <a href="#">
//                <i className="material-icons">monetization_on</i><span className="icon-text">clients</span>
//            </a><br />
//            <a href="#">
//                <i className="material-icons">email</i><span className="icon-text">contact</span>
//            </a>
//        </div>
//    );
//}

//export default Sidebar;

//import './SideBar.css';

//import { Link } from 'react-router-dom';

//const testIn = () => {
//    console.log("hovering in sidebar");
//}

//const testOut = () => {
//    console.log("hovering outside sidebar");
//}

//const Sidebar = () => {
//    return (
//        <div id="mySidebar" className="sidebar" onMouseOver={testIn} onMouseOut={testOut}>
//            <Link to="/DetailsFormCase" className="sidebar-link">
//                <i className="material-icons">description</i><span className="icon-text">Details Form Case</span>
//            </Link>


//            <a href="#">
//                <i className="material-icons">home</i><span className="icon-text">home</span>
//            </a>
//            <a href="#">
//                <i className="material-icons">spa</i><span className="icon-text">services</span>
//            </a>
//            <a href="#">
//                <i className="material-icons">monetization_on</i><span className="icon-text">clients</span>
//            </a>
//            <a href="#">
//                <i className="material-icons">email</i><span className="icon-text">contact</span>
//            </a>
//        </div>
//    );
//}


//export default Sidebar;



//////code3

//import './SideBar.css';
//import { useState } from 'react';
//import { Link } from 'react-router-dom';

//const Sidebar = () => {
//    const [mini, setMini] = useState(true);

//    const toggleSidebar = () => {
//        if (mini) {
//            console.log("opening sidebar");
//            document.getElementById("mySidebar").style.width = "250px";
//           /* document.getElementById("main").style.marginLeft = "250px";*/
//            setMini(false);
//        } else {
//            console.log("closing sidebar");
//            document.getElementById("mySidebar").style.width = "85px";
//          /*  document.getElementById("main").style.marginLeft = "85px";*/
//            setMini(true);
//        }
//    };

//    return (
//        <div>
//            <div id="mySidebar" className="sidebar" onMouseOver={toggleSidebar} onMouseOut={toggleSidebar}>
//                <a href="#">
//                    <i className="material-icons">home</i><span className="icon-text">Home</span>
//                </a><br />
//                <Link to="/DetailsFormCase" className="sidebar-link">
//                               <i className="material-icons">description</i><span className="icon-text">Details</span>
//                </Link>
              

//                <a href="#">
//                    <i className="material-icons">spa</i><span className="icon-text">services</span>
//                </a><br />
//                <a href="#">
//                    <i className="material-icons">monetization_on</i><span className="icon-text">clients</span>
//                </a><br />
//                <a href="#">
//                    <i className="material-icons">email</i><span className="icon-text">contact</span>
//                </a>
//            </div>
//            <div id="main">
                
//            </div>
//        </div>
//    );
//};

//export default Sidebar;

import './SideBar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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

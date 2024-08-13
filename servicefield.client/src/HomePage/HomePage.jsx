import SideBar from '../SideBar/SideBar';

import NavBar from '../NavBar/NavBar';

function HomePage() {
    return (
        <div className="flex">
            <SideBar />
            <div className="flex-1">
                <NavBar />
                <div className="p-4">
                    <h1>Welcome to the Home Page</h1>
                    <p>This is where your main content will go.</p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;

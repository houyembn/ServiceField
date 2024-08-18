



import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';

function HomePage() {


    return (



       


        <div className="flex">
            <SideBar />
            <div className="flex-1">
                <ShowNavBar />
            
                <div className="p-4">
                    <h1>Welcome to the Home Page</h1>
                    <p>This is where your main content will go.</p>
                </div>
            </div>
        </div>










         
    );
}

export default HomePage;
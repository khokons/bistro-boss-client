import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const MainLayout = () => {

    const location = useLocation();

    const noHeaderNoFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div>
           {noHeaderNoFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
           {noHeaderNoFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;
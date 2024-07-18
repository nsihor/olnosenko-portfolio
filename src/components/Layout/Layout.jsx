import Header  from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from "../Footer/Footer";

const Layout = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
);

export default Layout;

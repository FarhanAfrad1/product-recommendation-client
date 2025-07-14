import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';


const Layout = () => {
    return (
        <div className='bg-gradient-to-br from-[#ECF6FF] to-[#FFE8BB]'>
            <div className='p-5 lg:p-10'>
                <NavBar></NavBar>
            </div>
            <div>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;
import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import ThemeToggle from '../Components/ThemeToggle';


const Layout = () => {
    return (
        <div className=' min-h-screen
    bg-gradient-to-br
    from-[hsl(var(--grad-start))]
    to-[hsl(var(--grad-end))]
    text-base-content relative'>
            <div className='absolute left-10 top-35'>

                <ThemeToggle></ThemeToggle>
            </div>
            <div className='p-5 lg:p-10'>
                <NavBar></NavBar>
            </div>
            <div className='px-5 lg:px-10'>
                <div className='min-h-screen'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;
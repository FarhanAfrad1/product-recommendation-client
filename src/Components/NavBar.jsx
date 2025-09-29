import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import AuthContext from '../Auth/AuthContext';
import Swal from 'sweetalert2';
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
    const { user, userLogout } = useContext(AuthContext);
    console.log(user)
    const link = <>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/queries'>Queries</NavLink>
        </li>
        <li>
            <NavLink to='/blog'>Blogs</NavLink>
        </li>
        {
            user && <>
                <li>
                    <NavLink to='/recomforme'>Recommendations For Me</NavLink>
                </li>
                <li>
                    <NavLink to='/myqueries'>My Queries</NavLink>
                </li>
                <li>
                    <NavLink to='/myrecom'>My recommendations</NavLink>
                </li>
            </>
        }
    </>
    const handleLogout = () => {
        userLogout().then(() => {
            Swal.fire({
                icon: "success",
                text: "you are looged out"
            })
        }).catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message
            });
        });
    }
    return (
        <div className='w-full'>
            <div className="navbar bg-base-100 shadow-sm p-4 rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <div className='hidden xl:flex items-center'>
                        {/* Light mode logo (black) */}
                        <img
                            src="/lightmode.png"
                            alt="Logo"
                            className="w-[50px] h-[50px] dark:hidden"
                        />

                        {/* Dark mode logo (white) */}
                        <img
                            src="/darkmode.png"
                            alt="Logo"
                            className="w-[50px] h-[50px] hidden dark:block"
                        />
                        <a className="text-3xl font-bold">recom</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className='flex gap-2 items-center'>
                                <div className="avatar avatar-online">
                                    <div className="w-10 h-10 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                                <button onClick={handleLogout} className="btn bg-[#180d38] text-white px-8 rounded-full text-lg">Logout</button>
                            </div>

                            : <Link to='/login'>
                                <button className="btn bg-[#180d38] text-white  px-8 rounded-full text-lg">Login</button>
                            </Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;
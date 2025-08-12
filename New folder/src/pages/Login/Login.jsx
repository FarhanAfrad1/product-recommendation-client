import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import AuthContext from '../../Auth/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaGooglePlus } from 'react-icons/fa6';

const Login = () => {
    const { userLogin, registrationWithGoogleMama } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    const navigate = useNavigate();
    const from = location.state || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then((result) => {
                console.log(result.user)
                Swal.fire({
                    title: "Welcome!",
                    text: "Login Successfull",
                    icon: "success"
                })
                navigate(from, { replace: true });
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.message
                });
            });

    }
    const handleSignInWithGoogle = () => {
        registrationWithGoogleMama()
            .then(result => {
                console.log(result);
                Swal.fire({
                    title: "Welcome!",
                    text: "Login Successfull",
                    icon: "success"
                })

                navigate(from, { replace: true });


            }).catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.message
                });
            })
    }
    return (
        <div className='h-screen w-screen flex'>
            <div className='h-full'>
                <img src="/login.jpg" alt="" className='hidden lg:h-screen lg:flex' />
            </div>
            <div className='flex-1 p-8'>
                <div className=''>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-4xl font-bold'><span>r</span>ecom</h2>
                        <p className='text-sm md:text-lg'>Don't have an account? {" "} <Link to='/signup'><span className='cursor-pointer underline text-blue-500'>Create One</span></Link></p>
                    </div>
                    <div className='mt-20 mb-10'>
                        <h1 className='text-3xl md:text-5xl font-bold'>Login Please!</h1>
                        <p className='mt-2 text-xl'>Find trusted product recommendations from real people.</p>
                    </div>
                    <div className='w-full'>
                        <form onSubmit={handleLogin}>
                            <div className='flex flex-col md:flex-row md:gap-8'>
                                <fieldset className="fieldset w-full">
                                    <legend className="fieldset-legend">Email</legend>
                                    <input type="email" className="input w-full  border-2 focus:outline-0 text-lg p-4" placeholder="Type here" name='email' />
                                </fieldset>
                                <fieldset className="fieldset w-full">
                                    <legend className="fieldset-legend">Password</legend>
                                    <input type="text" className="input w-full  border-2 focus:outline-0 text-lg p-4" placeholder="Type here" name='password' />
                                </fieldset>
                            </div>
                            <input type="submit" value="Login" className='mt-4 border-2 px-8 py-2 rounded-full font-semibold text-white bg-[#180d38] cursor-pointer active:scale-95 ' />
                        </form>
                        <div className='mt-10 md:mt-20 flex gap-8 items-center '>
                            <span className='text-lg'>OR SIGN IN WITH:</span>
                            <button onClick={handleSignInWithGoogle} className='cursor-pointer active:scale-95 transition-all p-4 bg-gray-300 rounded-full'>
                                <FaGooglePlus size={30} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
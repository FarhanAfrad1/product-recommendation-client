import React, { useContext } from 'react';
import { FaGooglePlus } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import AuthContext from '../../Auth/AuthContext';

const Signup = () => {
    const { userRegistration, registrationWithGoogleMama, loading, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || '/';

    const handleRegistration = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photourl = form.photourl?.value;
        console.log(name, email, password, photourl);
        if (!/[A-Z]/.test(password)) {

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: 'your password must contain Uppercase letter',
            });
            return;
        }
        if (!/[a-z]/.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: 'your password must Lowercase letter',
            });
            return;
        }
        if (password.length < 6) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: 'your password must be atleat 6 caracters',
            });
            return;
        }

        userRegistration(email, password)
            .then(result => {
                console.log(result);
                Swal.fire({
                    title: "Welcome!",
                    text: "Login Successfull",
                    icon: "success"
                })
                navigate(from, { replace: true })
            }).catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.message
                });
            })

    }
    const handleSignUpWithGoogle = () => {
        registrationWithGoogleMama()
            .then(result => {
                console.log(result);
                Swal.fire({
                    title: "Welcome!",
                    text: "Login Successfull",
                    icon: "success"
                })
                navigate(from, { replace: true })

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
                        <p className='text-sm md:text-lg'>Already have an account? {" "} <Link to='/login'><span className='cursor-pointer underline text-blue-500'>Sign in</span></Link></p>
                    </div>
                    <div className='mt-20 mb-10'>
                        <h1 className='text-5xl font-bold'>Sign Up For Free</h1>
                        <p className='mt-2 text-xl'>Find trusted product recommendations from real people.</p>
                    </div>
                    <div className='w-full'>
                        <form onSubmit={handleRegistration}>
                            <div className='flex flex-col md:flex-row md:gap-8'>
                                <fieldset className="fieldset w-full">
                                    <legend className="fieldset-legend">Name</legend>
                                    <input type="text" className="input w-full  border-2 focus:outline-0 text-lg p-4" placeholder="Type here" name='name' />
                                </fieldset>
                                <fieldset className="fieldset w-full">
                                    <legend className="fieldset-legend">Photo Url</legend>
                                    <input type="text" className="input w-full  border-2 focus:outline-0 text-lg p-4" placeholder="Type here" name='photourl' />
                                </fieldset>
                            </div>
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
                            <input type="submit" value="Signup" className='mt-4 border-2 px-8 py-2 rounded-full font-semibold text-white bg-[#180d38] cursor-pointer active:scale-95 ' />
                        </form>
                        <div className='mt-10 md:mt-20 flex gap-8 items-center '>
                            <span className='text-lg'>OR SIGN IN WITH:</span>
                            <button onClick={handleSignUpWithGoogle} className='cursor-pointer active:scale-95 transition-all p-4 bg-gray-300 rounded-full'>
                                <FaGooglePlus size={30} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
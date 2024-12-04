import React, { useState } from 'react';
import desktop from '../assets/images/desktop.png';
import { Link, useNavigate } from 'react-router-dom';
import river from '../assets/images/river.mp4'
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === 'admin' && password === 'admin') {
            navigate('/AdminDashboard');
        } else {
            axios.post("http://localhost:3001/Login", { email, password })
                .then(result => {
                    console.log(result);
                    if (result.data === "Success") {                        
                        navigate("/EmployeeDashboard");
                    }else if(result.data === "Incorrect Password"){
                        alert("Incorrect Password Please try again");
                    }else if(result.data === "Incorrect Email"){
                        navigate("/Signin");
                        alert("You are not registered to this service");
                    }else{
                        alert("an Unexpected error occurred")
                    }
                })
                .catch(err => console.log(err));
                // alert("An error occurred while processing your request");

        }
    }

    return (
      
        <div className="flex flex-col justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-slate-300 font-serif ">
           <video className="absolute inset-0 w-full h-full object-fill" autoPlay muted loop>
    <source src={river} type="video/mp4" />
   </video>

            <nav className="hover:dark:bg-gray-900 fixed w-full z-50 top-0 start-0 border-b dark:border-gray-600 rounded-full lg:mt-3 bg-transparent shadow-2xl font-serif">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white border-b-2">A-M-S</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse lg:space-x-4">
          <button type="button" className="text-white bg-transparent hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 text-center hover:dark:bg-blue-600 hover:dark:focus:ring-blue-800">
            <Link to="/Signin">Signup</Link>
          </button>
          <button type="button" className="text-white bg-transparent hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 text-center hover:dark:bg-blue-600 dark:focus:ring-blue-800">
            <Link to="/login">Login</Link>
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${menuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 bg-transparent md:bg-transparent md:shadow-none shadow-lg md:w-auto max-w-xs md:max-w-none">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 mx-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <a href="/" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 hover:text-blue-600 text-xl">Home</a>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 mx-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
              <Link to="/About" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-lg">About</Link>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 mx-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
              </svg>
              <Link to="/Feature" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-lg">Features</Link>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 mx-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
              </svg>
              <a href="/Contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-lg">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
            <div className='flex h-screen z-30'>
                <div className="h-full">
                    <div className="flex h-full flex-wrap items-center justify-center lg:justify-between ">
                        <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12 ">
                            <img src={desktop} className="w-full " alt="Sample image" />
                        </div>
                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 ">
                        <div className="bg-transparent py-8 px-4 shadow-2xl sm:rounded-lg sm:px-10 border border-gray-100">
                            <form onSubmit={handleSubmit} autoComplete='off'>
                                <div className="relative mb-6">
                                    <input type="text" className="block min-h-[auto] w-full rounded border border-white hover:border-b-4 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-white text-lg placeholder-text-neutral-300" placeholder="Email address / Username" onChange={(e) => setEmail(e.target.value)} />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                clipRule="evenodd">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="relative mb-6">
                                    <input type="password" className="block min-h-[auto] w-full rounded border border-stone-300 hover:border-b-4 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-red-500 text-lg" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                clipRule="evenodd">
                                            </path>
                                        </svg>
                                    </div>
                                </div>

                                <div className="mb-6 flex items-center justify-between">
                                    <div className="mb-[0.125rem] flex items-center">
                                        <input className="mr-2 border-0 outline-none" type="checkbox" />
                                        <label className="hover:cursor-pointer text-white">Remember me</label>
                                    </div>
                                    <Link to="/Forgotpassword" className="hover:underline text-white">Forgot password?</Link>
                                </div>
                                <div className="text-center lg:text-left">
                                    <button type="submit" className="inline-block w-full rounded bg-blue-600 hover:bg-blue-800 px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong" data-twe-ripple-init data-twe-ripple-color="light">
                                        Login
                                    </button>
                                    <p className="mb-0 mt-2 pt-1 text-sm font-semibold text-white">
                                        Don't have an account?
                                        <Link to="/Signin" className="text-white border-b-4 border-red-400 hover:underline transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 mx-2 ">Register</Link>
                                    </p>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

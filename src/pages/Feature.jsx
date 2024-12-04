import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Feature = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
  <>
    <div className="bg-slate-500 w-full h-screen font-serif"> 
    {/* <nav className=" flex flex-col items-center justify-between bg-slate-700 py-2 shadow-dark-mild lg:flex-row lg:justify-between lg:py-4">
  <div className="flex flex-col w-full items-center lg:flex-row lg:items-center px-4 lg:justify-center">
    <div className="mx-8">
      <a className="text-xl text-white border-b-4 hover:text-yellow-200" href="#">A-M-S</a>
    </div>
  
    <div className="!visible lg:flex mt-2 flex-grow justify-center lg:mt-0  lg:basis-auto" id="">
      <ul className="list-none flex flex-col lg:flex-row lg:justify-center">
        <li className="my-4 lg:my-0 lg:ml-96 lg:mx-2 lg:pe-1">
          <a className="text-white hover:text-sky-500" href="/">Home</a>
        </li>
        <li className="my-4 lg:my-0 lg:mx-5 lg:pe-1">
          <Link className="text-white hover:text-sky-500" to="/Feature">Features</Link>
        </li>
        <li className="my-4 lg:my-0 lg:mx-5 lg:pe-1">
          <Link className="text-white hover:text-sky-500" to="/About">About</Link>
        </li>
        <li className="my-4 lg:my-0 lg:mx-5 lg:pl-96 lg:pe-1">
          <Link className="text-white hover:text-sky-500 hover:border-b-4 rounded-2xl hover:border-yellow-100" to="/Login">Sign in</Link>
        </li>
        <li className="my-4 lg:my-0 lg:mx-5 lg:pe-1">
          <Link className="text-white hover:text-sky-500 hover:border-b-4 rounded-2xl hover:border-yellow-100" to="/Signin">Register</Link>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
<nav className="hover:dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b dark:border-gray-600 rounded-full lg:mt-3 bg-transparent shadow-2xl font-serif">
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
    
    <div class="container mx-auto py-12">
<h2 className="text-3xl font-bold text-center te mt-14">Features</h2>

<div className=" mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:ml-3 lg:mr-3 gap-8">

   
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Automated Attendance Tracking</h3>
            <p className="text-gray-600">Say goodbye to manual attendance registers. Our system automatically records attendance based on various inputs such as biometric scans, RFID cards, or online check-ins.</p>
        </div>
    </div>

   
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Real-Time Monitoring</h3>
            <p className="text-gray-600">Keep track of attendance in real-time. Monitor who's present, absent, or on leave instantly, allowing you to take prompt action when needed.</p>
        </div>
    </div>

    
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Customizable Reporting</h3>
            <p className="text-gray-600">Generate detailed reports tailored to your organization's needs. Analyze attendance trends, identify patterns, and make informed decisions to optimize workforce management.</p>
        </div>
    </div>
</div>
   
</div>
  
    </div>
  </>

  )
}

export default Feature

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Sidepanel = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
        
    <div className="bg-stone-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 fixed flex flex-col  justify-center items-center py-4 xl:h-screen font-serif">
    <div className="w-full mb-4 text-center">
    <Link to="/AdminDashboard" className="text-2xl font-bold">Admin Dashboard</Link>
  </div>
  <hr className="w-full border-gray-500" />
  <div className="relative mt-4">
      <button
        className="hover: hover:bg-blue-600 text-black font-bold  rounded-lg inline-flex items-center w-60 h-12 justify-start gap-2"
        onClick={toggleDropdown}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users-group" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
  <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M17 10h2a2 2 0 0 1 2 2v1" />
  <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
</svg>
        Employee
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            <Link to="/Employeeone" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Employee 1</Link>
            <Link to="/Employeetwo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Employee 2</Link>
            <Link to="/Employeethree" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Employee 3</Link>
          </div>
        </div>
      )}
    </div>
   
    <div className="relative mt-4">
        <button className="hover:bg-blue-500 text-black font-bold  rounded-lg inline-flex items-center w-60 h-12 justify-start gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
  <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
</svg>

            Recruitment

        </button>
    </div>
    <div className="relative mt-4">
        <button className="hover:bg-blue-500 text-black font-bold  rounded-lg inline-flex items-center w-60 h-12 justify-start gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-histogram" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 3v18h18" />
  <path d="M20 18v3" />
  <path d="M16 16v5" />
  <path d="M12 13v8" />
  <path d="M8 16v5" />
  <path d="M3 11c6 0 5 -5 9 -5s3 5 9 5" />
</svg>
<Link to="Uldev">

            Performance
</Link>
        </button>
    </div>
    <div className="relative mt-4">
        <button className="hover:bg-blue-500 text-black font-bold  rounded-lg inline-flex items-center w-60 h-12 justify-start gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cash-banknote" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M3 6m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
  <path d="M18 12l.01 0" />
  <path d="M6 12l.01 0" />
</svg>
            Payroll
        </button>
    </div>
    <div className="relative mt-4">
        <button className="hover:bg-blue-500 text-black font-bold  rounded-lg inline-flex items-center w-60 h-12 justify-start gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-week" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
  <path d="M16 3v4" />
  <path d="M8 3v4" />
  <path d="M4 11h16" />
  <path d="M8 14v4" />
  <path d="M12 14v4" />
  <path d="M16 14v4" />
</svg>
            Schedule
        </button>
    </div>
    <div className="relative mt-4">
        <button className="hover:bg-blue-500 text-black font-bold  rounded-lg inline-flex items-center w-60 h-12 justify-start gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-description" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  <path d="M9 17h6" />
  <path d="M9 13h6" />
</svg>
            Reports and Analytics
        </button>
    </div>
    <div className="relative mt-4">
    <button className="hover:bg-blue-500 text-black font-bold rounded-lg inline-flex items-center w-60 h-12 justify-start gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-octagon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12.802 2.165l5.575 2.389c.48 .206 .863 .589 1.07 1.07l2.388 5.574c.22 .512 .22 1.092 0 1.604l-2.389 5.575c-.206 .48 -.589 .863 -1.07 1.07l-5.574 2.388c-.512 .22 -1.092 .22 -1.604 0l-5.575 -2.389a2.036 2.036 0 0 1 -1.07 -1.07l-2.388 -5.574a2.036 2.036 0 0 1 0 -1.604l2.389 -5.575c.206 -.48 .589 -.863 1.07 -1.07l5.574 -2.388a2.036 2.036 0 0 1 1.604 0z" />
            <path d="M12 9h.01" />
            <path d="M11 12h1v4h1" />
        </svg>
        <Link to="/Adminhelp">
        Help
        </Link>
    </button>
</div>
    <div className="relative mt-4">
  <button className="hover:bg-blue-500 text-black font-bold rounded-lg inline-flex items-center w-60 h-12 justify-start gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
  <path d="M15 12h-12l3 -3" />
  <path d="M6 15l-3 -3" />
</svg>
<Link to="/">
    Logout 
</Link>
  </button>
</div>
    </div>
   

  )
}

export default Sidepanel

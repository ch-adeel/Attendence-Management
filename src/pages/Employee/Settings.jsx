import React, { useState } from 'react'
import Emsidepanel from './Emsidepanel'
const Settings = () => {
    const [isSidebarOpen, setIsSidebarOpen] =useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
  return (
    <div className="flex flex-col min-h-screen">
        <button
        onClick={toggleSidebar}
        className="md:hidden bg-blue-500 text-white p-2 rounded-lg m-3 self-end">
       {isSidebarOpen ? 'close Menu' : 'open Menu'}     
        </button>
        <div className={`w-full md:w-1/5 ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
       <Emsidepanel />
        </div>
       
      <div className="flex-grow bg-slate-300 ">
      <div className="flex items-center justify-center   mx-12 my-12">
          <div className="mx-auto w-full max-w-[550px] ">
    <form autocomplete="off">
        <div className="mb-5">
            <label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
                Full Name
            </label>
            <input type="text" name="name" id="name" placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
        </div>
        <div className="mb-5">
            <label for="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                Phone Number
            </label>
            <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
        </div>
        <div className="mb-5">
            <label for="email" className="mb-3 block text-base font-medium text-[#07074D]">
                Email Address
            </label>
            <input type="email" name="email" id="email" placeholder="Enter your email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
        </div>
       
        <div className="mb-5">
            <label for="image" className="mb-3 block text-base font-medium text-[#07074D]">
                Upload Image
            </label>
            <input type="file" name="image" id="image" accept="image/*"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
        </div>
        <div>
            <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Update
            </button>
        </div>
    </form>
</div>

</div>
      </div>
    </div>
  )
}

export default Settings

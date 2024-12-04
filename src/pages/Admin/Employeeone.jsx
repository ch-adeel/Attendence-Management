import React from 'react'
import Sidepanel from './Sidepanel'

const Employeeone = () => {
  return (
    <div className="flex w-full">
      
      <Sidepanel/>
      
        
      <div className="flex-grow  bg-slate-400">
      <div class="bg-slate-900 py-10 rounded-3xl mx-3 my-3">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div class="lg:text-start">
            <h2 class="border-l-lime-500 border-l-8 text-lg font-semibold text-white px-2">Employee Details</h2>
        </div>
        
        <div className="flex flex-grow mt-6 gap-3">
    <div className="flex flex-col ">
        {/* <img src={employee} alt=""className='h-24 w-24  object-center object-cover rounded-full' /> */}
    </div>
    <div className="flex flex-col mx-12">
    <h3 class="text-white text-lg font-semibold mb-3">Natashia Khaleira</h3>
            <span class="text-gray-100 text-sm font-semibold">Role</span>
            <p class="mt-2 text-white text-sm">Senior UI Designer</p>
    </div>
    <div className="flex flex-col mt-12 mx-24">
 
            <span class="text-gray-100 text-sm font-semibold">Phone No</span>
            <p class="mt-2 text-white text-sm">03329875307</p>
    </div>
    <div className="flex flex-col mt-12 mx-14">
    
            <span class="text-gray-100 text-sm font-semibold">Email</span>
            <p class="mt-2 text-white text-sm">natashia@gmail.com</p>
    </div>
</div>
<div class="grid grid-cols-1 gap-2 lg:grid-cols-4 mt-6">
<div class="ml-4 flex flex-row items-center justify-center rounded-xl  bg-slate-500 py-4">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-door-enter h-8 w-8 mr-3" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M13 12v.01" />
        <path d="M3 21h18" />
        <path d="M5 21v-16a2 2 0 0 1 2 -2h6m4 10.5v7.5" />
        <path d="M21 7h-7m3 -3l-3 3l3 3" />
    </svg>
    <div>
        <span class="text-gray-100 text-sm font-semibold">309</span>
        <p class=" text-white text-sm">Total Attenedence</p>
    </div>
</div>

    <div class="ml-4 flex flex-row items-center justify-center  rounded-xl  bg-slate-500">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-stats" width="34" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
  <path d="M18 14v4h4" />
  <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M15 3v4" />
  <path d="M7 3v4" />
  <path d="M3 11h16" />
</svg>
        <div className='mx-2'>

        <span class="text-gray-100 text-sm font-semibold">08:46</span>
        <p class=" text-white text-sm">Avg Check In Time</p>
        </div>
    </div>
    <div class="ml-4 flex flex-row items-center justify-center rounded-xl bg-slate-500">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-time" width="34" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
  <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M15 3v4" />
  <path d="M7 3v4" />
  <path d="M3 11h16" />
  <path d="M18 16.496v1.504l1 1" />
</svg>
<div className='mx-2'>
<span class="text-gray-100 text-sm font-semibold">08:46</span>
        <p class=" text-white text-sm">Avg Check Out Time</p>
</div>

    </div>
    <div class="ml-4 flex flex-row justify-center rounded-xl py-3 bg-slate-500">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-star" width="34" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
  <path d="M6 21v-2a4 4 0 0 1 4 -4h.5" />
  <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
</svg>
<div className="mx-2">
        <span class="text-gray-100 text-sm font-semibold">Role Model</span>
        <p class=" text-white text-sm">Senior UI Designer</p>
</div>
    </div>
</div>

    </div>
</div>


<div className="bg-slate-900 py-10 rounded-3xl mx-3 my-3 px-4">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-start">
            <h2 class="border-l-lime-500 border-l-8 text-lg font-semibold text-white px-2">Attendence History</h2>
        </div>        
        </div> 
        <div class="grid grid-cols-1 gap-2 lg:grid-cols-3 mt-6">
        <div class="ml-4 flex flex-row items-center justify-center rounded-xl bg-slate-500 ">
    <div class="flex flex-col text-center">
        <span class="text-gray-100 text-sm font-semibold">16/05/2024</span>
        <hr className="bg-slate-800" />
        <div class="flex justify-center">
            <p class="text-white text-sm mr-2">Check In Time: </p>
            <span class="text-white text-sm">8:00</span>
        </div>
        <div class="flex justify-center">
            <p class="text-white text-sm ">Check Out Time: </p>
            <span class="text-white text-sm">7:00</span>
        </div>
    </div>
</div>
<div class="ml-4 flex flex-row items-center justify-center rounded-xl bg-slate-500 py-4">
    <div class="flex flex-col text-center">
        <span class="text-gray-100 text-sm font-semibold">16/05/2024</span>
        <hr className="bg-slate-800" />
        <div class="flex justify-center">
            <p class="text-white text-sm mr-2">Check In Time: </p>
            <span class="text-white text-sm">8:00</span>
        </div>
        <div class="flex justify-center">
            <p class="text-white text-sm ">Check Out Time: </p>
            <span class="text-white text-sm">7:00</span>
        </div>
    </div>
</div>
<div class="ml-4 flex flex-row items-center justify-center rounded-xl bg-slate-500 py-4">
    <div class="flex flex-col text-center">
        <span class="text-gray-100 text-sm font-semibold">16/05/2024</span>
        <hr className="bg-slate-800" />
        <div class="flex justify-center">
            <p class="text-white text-sm mr-2">Check In Time: </p>
            <span class="text-white text-sm">8:00</span>
        </div>
        <div class="flex justify-center">
            <p class="text-white text-sm ">Check Out Time: </p>
            <span class="text-white text-sm">7:00</span>
        </div>
    </div>
</div>
<div class="ml-4 flex flex-row items-center justify-center rounded-xl bg-slate-500 py-4">
    <div class="flex flex-col text-center">
        <span class="text-gray-100 text-sm font-semibold">16/05/2024</span>
        <hr className="bg-slate-800" />
        <div class="flex justify-center">
            <p class="text-white text-sm mr-2">Check In Time: </p>
            <span class="text-white text-sm">8:00</span>
        </div>
        <div class="flex justify-center">
            <p class="text-white text-sm">Check Out Time: </p>
            <span class="text-white text-sm">7:00</span>
        </div>
    </div>
</div>
<div class="ml-4 flex flex-row items-center justify-center rounded-xl bg-slate-500 py-4">
    <div class="flex flex-col text-center">
        <span class="text-gray-100 text-sm font-semibold">16/05/2024</span>
        <hr className="bg-slate-800" />
        <div class="flex justify-center">
            <p class="text-white text-sm mr-2">Check In Time: </p>
            <span class="text-white text-sm">8:00</span>
        </div>
        <div class="flex justify-center">
            <p class="text-white text-sm ">Check Out Time: </p>
            <span class="text-white text-sm">7:00</span>
        </div>
    </div>
</div>


</div>                       
</div>


      </div>
    </div>
  )
}

export default Employeeone

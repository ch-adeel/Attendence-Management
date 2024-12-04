import React, { useState, useEffect } from 'react';
import Emsidepanel from './Emsidepanel';
import employee from '../../assets/images/employee.jpg';
import axios from 'axios';

const EmployeeDashboard = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date().toISOString().slice(0, 16));
  const [startOfWeek, setStartOfWeek] = useState('');
  const [endOfWeek, setEndOfWeek] = useState('');
  const [submittedData, setSubmittedData] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const calculateWeekRange = () => {
      const now = new Date();
      const dayOfWeek = now.getDay(); // 0 (Sun) to 6 (Sat)
      const start = new Date(now);
      start.setDate(now.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1)); // Adjusting so that week starts on Monday
      start.setHours(0, 0, 0, 0);

      const end = new Date(start);
      end.setDate(start.getDate() + 6);
      end.setHours(23, 59, 59, 999);

      setStartOfWeek(start.toISOString().slice(0, 16));
      setEndOfWeek(end.toISOString().slice(0, 16));
    };

    calculateWeekRange();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Array.from({ length: 7 }).map((_, i) => {
      const startdatetime = e.target[`startdatetime${i}`].value;
      const enddatetime = e.target[`enddatetime${i}`].value;
      
      if (startdatetime && enddatetime) {
      axios.post("http://localhost:3001/api/attendance/submit", { startdatetime, enddatetime })
        .then(result => {
          console.log(result);
        })
        .catch(err => console.log(err));
    }  });
  
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="flex flex-col min-h-screen">
      <button
        onClick={toggleSidebar}
        className="md:hidden bg-blue-500 text-white p-2 rounded-lg m-3 self-end">
        {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      <div className={`w-full md:w-1/5 ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
        <Emsidepanel />
      </div>
      <div className="flex-grow bg-slate-500 lg:ml-72 font-serif">
        <div className="bg-slate-900 py-7 rounded-3xl mx-3 my-3 ml-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-start">
              <h2 className="border-l-lime-500 border-l-8 text-lg font-semibold text-white px-2">Employee Details</h2>
            </div>
            <div className="flex flex-col lg:flex-row flex-grow mt-6 gap-3 items-center">
              <div className="flex flex-col items-center">
                <img src={employee} alt="Employee" className="h-24 w-24 object-center object-cover rounded-full" />
              </div>
              <div className="flex flex-col lg:mx-12 text-center lg:text-left">
                <h3 className="text-white text-lg font-semibold mb-3">Natashia Khaleira</h3>
                <span className="text-gray-100 text-sm font-semibold">Role</span>
                <p className="mt-2 text-white text-sm">Senior UI Designer</p>
              </div>
              <div className="flex flex-col lg:mt-12 text-center lg:text-left">
                <span className="text-gray-100 text-sm font-semibold">Phone No</span>
                <p className="mt-2 text-white text-sm">03329875307</p>
              </div>
              <div className="flex flex-col lg:mt-12 text-center lg:text-left">
                <span className="text-gray-100 text-sm font-semibold">Email</span>
                <p className="mt-2 text-white text-sm">natashia@gmail.com</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 mt-16">
              <div className="ml-4 flex flex-col lg:flex-row items-center justify-center rounded-xl bg-slate-500 py-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-door-enter h-8 w-8 mb-3 lg:mb-0 lg:mr-3" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M13 12v.01" />
                  <path d="M3 21h18" />
                  <path d="M5 21v-16a2 2 0 0 1 2 -2h6m4 10.5v7.5" />
                  <path d="M21 7h-7m3 -3l-3 3l3 3" />
                </svg>
                <div>
                  <span className="text-gray-100 text-sm font-semibold">309</span>
                  <p className="text-white text-sm">Total Attendance</p>
                </div>
              </div>
              <div className="ml-4 flex flex-col lg:flex-row items-center justify-center rounded-xl bg-slate-500 py-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-stats h-8 w-8 mb-3 lg:mb-0 lg:mr-3" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
                  <path d="M18 14v4h4" />
                  <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                  <path d="M15 3v4" />
                  <path d="M7 3v4" />
                  <path d="M3 11h16" />
                </svg>
                <div>
                  <span className="text-gray-100 text-sm font-semibold">08:46</span>
                  <p className="text-white text-sm">Avg Check In Time</p>
                </div>
              </div>
              <div className="ml-4 flex flex-col lg:flex-row items-center justify-center rounded-xl bg-slate-500 py-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-time h-8 w-8 mb-3 lg:mb-0 lg:mr-3" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
                  <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                  <path d="M15 3v4" />
                  <path d="M7 3v4" />
                  <path d="M3 11h16" />
                  <path d="M18 16.496v1.504l1 1" />
                </svg>
                <div>
                  <span className="text-gray-100 text-sm font-semibold">08:46</span>
                  <p className="text-white text-sm">Avg Check Out Time</p>
                </div>
              </div>
              <div className="ml-4 flex flex-col lg:flex-row items-center justify-center rounded-xl bg-slate-500 py-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-star h-8 w-8 mb-3 lg:mb-0 lg:mr-3" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 7a4 4 0 1 1 8 0a4 4 0 1 1 -8 0" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h2.5" />
                  <path d="M18.083 19.682l-2.173 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                </svg>
                <div>
                  <span className="text-gray-100 text-sm font-semibold">Role Model</span>
                  <p className="text-white text-sm">Senior UI Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 py-10 rounded-3xl mx-3 my-3 ml-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-start">
              <h2 className="border-l-lime-500 border-l-8 text-lg font-semibold text-white px-2">Mark Your Attendance</h2>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mx-4 mt-9">
              <table className="table-auto w-full bg-slate-800 rounded-lg shadow-md">
                <thead>
                  <tr className="text-white">
                    <th className="px-4 py-2">Day</th>
                    <th className="px-4 py-2">Start Date and Time</th>
                    <th className="px-4 py-2">End Date and Time</th>
                  </tr>
                </thead>
                <tbody >
                  {daysOfWeek.map((day, i) => (
                    <tr key={i} className="text-white">
                      <td className="border px-4 py-2">{day}</td>
                      <td className="border px-4 py-2">
                        <input
                          type="datetime-local"
                          id={`startdatetime${i}`}
                          name={`startdatetime${i}`}
                          className="bg-slate-400 text-black rounded-xl p-1 w-full"
                          min={startOfWeek}
                          max={endOfWeek}
                          // required
                        />
                      </td>
                      <td className="border px-4 py-2">
                        <input
                          type="datetime-local"
                          id={`enddatetime${i}`}
                          name={`enddatetime${i}`}
                          className="bg-slate-400 text-black rounded-xl p-1 w-full"
                          min={startOfWeek}
                          max={endOfWeek}
                          // required
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button type="submit" className="bg-blue-500 rounded-lg w-64 p-4 hover:bg-blue-800 text-white mt-4 self-center">Submit</button>
            </form>
          </div>
        </div>

        <div className="bg-slate-900 py-10 rounded-3xl mx-3 my-3 px-4 ml-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-start">
              <h2 className="border-l-lime-500 border-l-8 text-lg font-semibold text-white px-2">Attendance History</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-1 mt-16 w-full justify-center">
            <div className="flex flex-row items-center justify-center rounded-xl bg-slate-500 py-4">
              <div className="bg-slate-800 mx-3 mt-4 rounded-lg w-full">
                <h3 className="text-lg text-center text-white font-semibold underline">Employee can view all Submitted records in the Attendance History</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;

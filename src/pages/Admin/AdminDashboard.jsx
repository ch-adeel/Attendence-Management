import React, { useState, useEffect } from 'react';
import Sidepanel from './Sidepanel';
import axios from 'axios';

const AdminDashboard = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/attendance')
      .then(response => setEmployees(response.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='flex flex-grow bg-gradient-to-r from-cyan-200 from-10% via-sky-300 via-30% to-emerald-200 to-90%  h-screen font-serif'>
      <Sidepanel />
      
      <div className="flex-grow ml-72 mb-3">
        <div className="my-6 ml-6 text-5xl text-center font-serif">Welcome back, Admin</div>
       
        <div className="flex justify-center  text-black">
          <table className="bg-white w-3/4 shadow-2xl">
            <thead className="w-full bg-gray-800 text-white text-left">
              <tr className="w-full bg-gray-800 text-white text-left">
                <th className="py-3 px-4 uppercase font-semibold text-sm">Id</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Start Date Time</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">End Date Time</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 text-gray-700">{employee._id}</td>
                  <td className="py-3 px-4 text-gray-700">{employee.startdatetime}</td>
                  <td className="py-3 px-4 text-gray-700">{employee.enddatetime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

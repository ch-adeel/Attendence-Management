import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import sriver from '../assets/images/sriver.mp4'
import axios from 'axios';

const Signin = () => {
  const [name, setName] = useState('');
  const [phno, setPhno] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePassword(password)) {
      axios.post("http://localhost:3001/Signin", { name, phno, email, password })
        .then(result => {
          console.log(result);
          navigate("/login");
        })
        .catch(err => console.log(err));
    }
  };

  const validatePassword = (password) => {
    const passwordCriteria = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordCriteria.test(password)) {
      setPasswordError("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
      return false;
    }
    setPasswordError('');
    return true;
  };

  return (
    
    <div className="min-h-screen flex flex-col justify-center  sm:px-6 lg:px-8 font-serif relative">
    <video className="absolute inset-0 w-full h-full object-fill" autoPlay muted loop>
      <source src={sriver} type="video/mp4" />
    </video>
    <div className="relative z-10 flex justify-center items-center min-h-screen">
      <div className="bg-opacity-70 bg-white border border-gray-300 rounded-lg shadow-lg p-6 sm:max-w-md w-full">
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-black">
          Create a new account
        </h2>
        <p className="mt-2 text-center text-lg leading-5 text-black">
          Or
          <Link to="/login"
            className="text-lg text-red-700 hover:text-xl font-bold focus:outline-none focus:underline transition ease-in-out duration-150 mx-2 hover:underline">
            login to your account
          </Link>
        </p>
        <form onSubmit={handleSubmit} autoComplete='off' className="mt-8">
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-xl font-semibold leading-5 text-black">Full Name</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                placeholder="Full Name"
                type="text"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="contactNumber" className="block text-xl font-semibold leading-5 text-black">Contact Number</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                placeholder="Contact Number"
                type="tel"
                pattern="\d{10}"
                maxLength={11}
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                onChange={(e) => setPhno(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-xl font-semibold leading-5 text-black">Email Address</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                placeholder="user@example.com"
                type="email"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-xl font-semibold leading-5 text-black">Password</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                placeholder="********"
                type="password"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-red-400 text-red-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <p className="text-red-500 text-xs mt-2">{passwordError}</p>
              )}
            </div>
          </div>
          <div className="z-50">
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              Create account
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
    
  );
}

export default Signin;

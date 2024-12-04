import React, { useState } from 'react';
import Emsidepanel from './Emsidepanel';


const Help = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    let dataSend = {
      email: email,
      fullname: fullname,
      subject: subject,
      message: message,
    };

    try {
      const res = await fetch("http://localhost:5000/email/sendEmail", {
        method: "POST",
        body: JSON.stringify(dataSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (res.status >= 200 && res.status < 300) {
        alert("Send Successfully!");
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-serif">
      <button
        onClick={toggleSidebar}
        className="md:hidden bg-blue-500 text-white p-2 rounded-lg m-3 self-end"
      >
        {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      <div className={`w-full md:w-1/5 ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
        <Emsidepanel />
      </div>
      <div className="flex-grow bg-slate-300 font-serif">
        
        <div className="flex items-center justify-center mx-12 my-12">
          <div className="mx-auto w-full max-w-[550px] ">
            {/* Form Section */}
            <div className="flex items-center justify-center mx-12 my-12">
          <div className="mx-auto w-full max-w-[550px]">
            <form onSubmit={sendEmail} autoComplete="off">
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="username@gmail.com"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="subject"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter your subject"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Message
                </label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="hover:shadow-form rounded-md bg-[#3831b5] py-3 px-8 text-base font-semibold text-white outline-none w-full hover:border-b border-blue-900 hover:bg-blue-600"
                >
                  Submit
                </button>
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

export default Help;

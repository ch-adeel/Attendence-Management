import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Feature from './pages/Feature';
import About from './pages/About';
import Sidepanel from './pages/Admin/Sidepanel';
import AdminDashboard from './pages/Admin/AdminDashboard';
import Emsidepanel from './pages/Employee/Emsidepanel';
import EmployeeDashboard from './pages/Employee/EmployeeDashboard';
import Help from './pages/Employee/Help';
import Settings from './pages/Employee/Settings';
import Adminhelp from './pages/Admin/Adminhelp';
import Forgotpassword from './pages/Employee/Forgotpassword';
import History from './pages/Employee/History';
import Contact from './pages/Contact';
// import PrivateRoutes from './components/PrivateRoutes';
// import Protected from './components/Protected';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/Signin" element={<Signin/>} />
    <Route path="/Feature" element={<Feature/>} />
    <Route path="/About" element={<About/>} />
    {/* <Route element={<PrivateRoutes />}> */}
    <Route path="/Sidepanel" element={<Sidepanel/>} />
    <Route path="/AdminDashboard" element={<AdminDashboard/>} />
    <Route path="/EmployeeDashboard" element={<EmployeeDashboard/>} />
    <Route path="/Emsidepanel" element={<Emsidepanel/>} />
    <Route path="/Help" element={<Help/>} />
    <Route path="/Settings" element={<Settings/>} />
    <Route path="/Adminhelp" element={<Adminhelp/>} />
    <Route path="/Forgotpassword" element={<Forgotpassword/>} />
    <Route path="/History" element={<History/>} />
    <Route path="/Contact" element={<Contact/>} />

    
    {/* </Route> */}
    

    </Routes>
    </BrowserRouter>
    
  );
};

export default App;

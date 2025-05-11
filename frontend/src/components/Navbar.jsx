import React, { use, useState } from 'react';
import { assets } from '../assets/assets_frontend/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import '../index.css';

function Navbar() {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="Logo" />

      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to="/" className="relative py-1">
          {({ isActive }) => (
            <li className='cursor-pointer px-1 pb-1'>
              Home
              {isActive && (
                <span className="absolute left-0 right-0 bottom-0 h-0.5 mx-auto w-3/5 bg-primary"></span>
              )}
            </li>
          )}
        </NavLink>

        <NavLink to="/doctors" className="relative py-1">
          {({ isActive }) => (
            <li className='cursor-pointer px-1 pb-1'>
              Doctors
              {isActive && (
                <span className="absolute left-0 right-0 bottom-0 h-0.5 mx-auto w-3/5 bg-primary"></span>
              )}
            </li>
          )}
        </NavLink>

        <NavLink to="/about" className="relative py-1">
          {({ isActive }) => (
            <li className='cursor-pointer px-1 pb-1'>
              About
              {isActive && (
                <span className="absolute left-0 right-0 bottom-0 h-0.5 mx-auto w-3/5 bg-primary"></span>
              )}
            </li>
          )}
        </NavLink>

        <NavLink to="/contact" className="relative py-1">
          {({ isActive }) => (
            <li className='cursor-pointer px-1 pb-1'>
              Contact
              {isActive && (
                <span className="absolute left-0 right-0 bottom-0 h-0.5 mx-auto w-3/5 bg-primary"></span>
              )}
            </li>
          )}
        </NavLink>
      </ul>

      <div className='flex items-center gap-5'>
        {
            token 
            ? <div className='flex items-center gap-2 cursor-pointer group relative' onClick={()=>setShowMenu(!showMenu)}>
                <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 shadow-lg hidden group-hover:block'>
                    <div className='min-w-48 bg-stone-50 rounded flex flex-col gap-2 p-4'>
                        <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                        <p onClick={()=>navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                        <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                    </div>
                </div>
            </div>
            : <button onClick={()=>navigate('/login')} className="cursor-pointer bg-primary text-white px-4 py-2 rounded-full hover:opacity-90 transition">Create Account</button>
        }
      </div>
    </div>
  );
}

export default Navbar;

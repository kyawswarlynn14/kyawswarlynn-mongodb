import React from 'react'
import {AiFillAppstore} from 'react-icons/ai'
import { RiAccountBoxFill } from 'react-icons/ri'
import { IoLogOut } from 'react-icons/io5'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { FaCertificate, FaLaptopCode } from 'react-icons/fa';
import { BsPersonWorkspace } from 'react-icons/bs';

function AdminNav() {
    const navigate = useNavigate();

    const handleLogout = () => {
      Cookies.remove('access_token');
      navigate('/');
      window.location.reload();
    };
  return (
    <div className='bg-gradient-to-r from-[#ff69b0] to-[#ffb5a8] sticky top-0 z-20'>
        <div className='bg-slate-800 text-white py-1 px-2 md:px-0 rounded-b-xl border-b-2'>
            <div className='container mx-auto flex justify-between items-center'>
                <a href='/' className='ml-4 md:ml-0 font-mono font-bold tracking-widest text-lg cursor-pointer'>
                    DevelopedByKSL
                </a>

                <nav className="flex gap-4 mt-1 items-center">
                    <a href='/admin'  className="webNavButton">
                        <AiFillAppstore /> Items
                    </a>

                    <a href='/services' className="webNavButton">
                        <FaLaptopCode /> Services
                    </a>

                    <a href='/portfolios' className="webNavButton">
                        <BsPersonWorkspace /> Portfolios
                    </a>

                    <a href='/certificates' className="webNavButton">
                        <FaCertificate /> Certificates
                    </a>

                    <a href='/socials' className="webNavButton">
                        <RiAccountBoxFill /> Accounts
                    </a>

                    <p onClick={handleLogout} className="webNavButton">
                        <IoLogOut /> Logout
                    </p>
                </nav>

            </div>
        </div>
    </div>
  )
}

export default AdminNav;
import logo from '../../img/logo-lg.png'
import React from 'react';
import {FaHome,FaClock,FaCalendarCheck,FaBackspace} from 'react-icons/fa';
import {BsFillPeopleFill,BsWifi,BsTwitter} from 'react-icons/bs'


export default function Meny() {
  return (
    
         <div className="w-[200px] h-[100vh] fixed top-0 left-0 bg-zinc-800 px-20 z-10 ">
          <img className='pt-10' src={logo} alt=""  />
            <div className="w-full flex flex-col pt-10">
            <a href="" className='text-green-600 text-4xl pt-8 hover:text-green-600'><FaHome /></a>
            <a href="" className='text-gray-600 text-3xl pt-8 hover:text-green-600'><FaClock /></a>
            <a href="" className='text-gray-600 text-3xl pt-8 hover:text-green-600'><FaCalendarCheck /></a>
            <a href="" className='text-gray-600 text-3xl pt-8 hover:text-green-600'><BsFillPeopleFill /></a>
            <a href="" className='text-gray-600 text-3xl pt-8 hover:text-green-600'><BsWifi /></a>
            <a href="" className='text-gray-600 text-3xl pt-8 hover:text-green-600'><BsTwitter /></a>
            <a href="" className='text-gray-600 text-3xl pt-8 hover:text-green-600'><FaBackspace /></a>
            </div>
         </div>
    
  );
}

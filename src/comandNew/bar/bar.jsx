    import { Heading } from '@chakra-ui/react'
    import React from 'react';
    import {VscListSelection} from 'react-icons/vsc';
    import {BsFillCalendar2CheckFill} from 'react-icons/bs'
    import lagatip from '../../img/lagatip.png'
    import pub from '../../img/pub.png'
    import pro from '../../img/pro.png'
    import pere from '../../img/per.png'

    export default function Bar() {
    return (
        <div className="w-full  bg-zinc-900 ml-[200px]">
        <div className='w-full h-24 fixed top-0 left-[200px]  bg-zinc-900 flex  pt-6 px-7 ' >
            <div className="w-full text-white text-3xl flex gap-2 "><a className='hover:text-green-600' href=""><VscListSelection /></a>
            <flex >
                <Heading className='mt-[-6px]'>Explore</Heading>
            </flex>
            </div>
            <div className="w-full flex pl-[250px]  gap-5 ">
                <a className='w-12 h-10 text-center  pt-1 text-gray-400 text-2xl border-solid border-2 border-gray-300 rounded-full flex justify-center ' href=""><BsFillCalendar2CheckFill /></a>
                <a className='w-12 h-10 text-center  pt-1 text-gray-400 text-2xl border-solid border-2 border-gray-300 rounded-full flex justify-center ' href=""><BsFillCalendar2CheckFill /></a>
                <a className='w-12 h-10 text-center  pt-1 text-gray-400 text-2xl border-solid border-2 border-gray-300 rounded-full flex justify-center ' href=""><BsFillCalendar2CheckFill /></a>
                <img className='w-10 h-10' src={lagatip} alt="" />
            </div>
        </div> 
        <div className="w-full  pl-8 pt-5 bg-zinc-900 flex gap-5 py-5 pr-10 mt-20">
        <div className="w-full">
            <iframe className="w-full xl:h-[400px] h-[300px] rounded-lg" src="https://www.youtube.com/embed/9EzoBBcYnS8" title="Rossiya bankini buzgan Surxonlik xaker Akmal Kadirovni yig‘latgan o‘zbeklar, ishining siri haqda" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className="w-full justify-between flex">
                  <h1 className="text-white py-4 text-2xl w-1/2" id="textTherd">Reactify Ecommerce Theme with Dashboard</h1>
                  <div className="flex gap-2 items-center justify-between">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full borer border-gray-800">
                        <i className="bi bi-hand-thumbs-up text-white hover:text-yellow-500 cursor-pointer" id="icons"></i>
                    </div>
                    <span className="text-white" id="span">22.4</span>
                    <div className="w-8 h-8 flex items-center justify-center rounded-full borer border-gray-800">
                        <i className="bi bi-chat text-white hover:text-yellow-500 cursor-pointer" id="iconsSecond"></i>
                    </div>
                    <span className="text-white" id="spans">22.4</span>
                  </div>
            </div>
            <div className="w-full">
              <div className="w-full flex">
                <div className="w-full flex justify-end gap-3">
                  <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:border-yellow-500">
                    <i className="bi bi-bookmark text-white" id="bi"></i>
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:border-yellow-500">
                  <i className="bi bi-paperclip text-white" id="bi1"></i>
              </div>
              <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:border-yellow-500">
                <i className="bi bi-bell text-white" id="bi2"></i>
            </div>
            <button className="w-[78px] h-10 border border-green-300 bg-green-300 rounded-full text-white hover:border-yellow-500 hover:bg-yellow-500">Follow</button>
                </div>
              </div>
            </div>
          <div className="w-full flex items-center justify-between pt-10">
           <h3 className="text-white">Top Products</h3>
          <i className="bi bi-three-dots text-white text-2xl"></i>
         </div> 
            <div className="h-[90px] bg-zinc-800 rounded-lg mt-10">
              <div className="w-full flex items-center justify-between pt-2">
                <div className="w-full flex gap-2">
                  <h1 className="text-white pt-5 text-xl text2" >01</h1>
                 <img src={pere} alt="" />
                  <h1 className="w-[240px]  text-white text-sm pt-3">Reactify Ecommerce Theme with Dashboard</h1>
                </div>
                <div className="w-full flex gap-12">
                  <h4 className="text-gray-600 w-[200px] pl-5 md:pl-14">Qubitron Solutions</h4>
                  <i className="bi bi-bookmark text-white text-lg"></i>
                  <i className="bi bi-three-dots text-white text-2xl"></i>
                </div>
            </div>
                </div>   
                <div className="h-[90px] bg-zinc-800 rounded-lg mt-3" >
                  <div className="w-full flex items-center justify-between pt-2 ">
                    <div className="w-full flex  gap-2">
                      <h1 className="text-white pt-5 text-xl" >02</h1>
                      <img src={pere} alt="" />
                      <h1 className="w-[240px]  text-white text-sm pt-3">Reactify Ecommerce Theme with Dashboard</h1>
                    </div>
                    <div className="w-full flex gap-12">
                      <h4 className="text-gray-600 w-[200px] pl-4 md:pl-14">Qubitron Solutions</h4>
                      <i className="bi bi-bookmark text-white text-lg"></i>
                      <i className="bi bi-three-dots text-white text-2xl"></i>
                    </div>
                </div>
                    </div>    
                    <div className="h-[90px] bg-zinc-800 rounded-lg mt-3" >
                      <div className="w-full flex items-center justify-between pt-2">
                        <div className="w-full flex  gap-2">
                          <h1 className="text-white pt-5 text-xl text2" >03</h1>
                          <img src={pere} alt="" />
                          <h1 className="w-[240px]  text-white text-sm pt-3">Reactify Ecommerce Theme with Dashboard</h1>
                        </div>
                        <div className="w-full flex gap-12">
                          <h4 className="text-gray-600 w-[200px] pl-4 md:pl-14">Qubitron Solutions</h4>
                          <i className="bi bi-bookmark text-white text-lg"></i>
                          <i className="bi bi-three-dots text-white text-2xl"></i>
                        </div>
                    </div>
                        </div>    
            
        </div>
        <div className="xl:w-[60%] lg:w-[50%] mt-2">
            <div className="flex xl:gap-2 gap-1 flex-wrap xl:flex-no-wrap" id="buttons">
                <button className="text-sm px-7 py-3 rounded-full border border-gray-800 bg-transparet text-white hover:border-yellow-500" id="btn">HTML</button>
                <button className="text-sm px-7 py-3 rounded-full border border-gray-800 bg-transparet text-white hover:border-yellow-500" id="btn2">CSS</button>
                <button className="text-sm px-7 py-3 rounded-full border border-gray-800 bg-transparet text-white hover:border-yellow-500" id="btn3">JAVASCRIPT</button>
                <button className="text-sm px-7 py-3 rounded-full border border-gray-800 bg-transparet text-white hover:border-yellow-500" id="btn4">REAKT.JS</button>
            </div>
            <div className="w-full flex justify-between  mt-5">
              <h3 className="text-white">Latest  Products</h3>
              <i className="bi bi-three-dots text-white cursor-pointer"></i>
            </div> 
            <div className="w-full my-10 flex flex-wrap    lg:flex-col gap-3">
              <div className="w-full flex gap-2 flex-col xl:flex-row">
                <div className="w-full xl:w-[160px] h-[150px]">
                <img src={pro} alt="" />
                </div>
                <div className="w-full xl:py-2">
                  <h3 className="text-white " id="textSecond">​RNB Modern Laravel React Rental System</h3>
                  <img src={pub} alt="" />
                  <span className="text-gray-500">days ago</span><span class="text-gray-500">.</span><span class="text-gray-500">View Product</span>
                </div>
              </div>
              <div className="w-full flex gap-2 flex-col xl:flex-row">
                <div className="w-full xl:w-[160px] h-[150px]">
                <img src={pro} alt="" />
                </div>
                <div className="w-full xl:py-2">
                  <h3 className="text-white " id="textSecond2">​RNB Modern Laravel React Rental System</h3>
                  <img src={pub} alt="" />
                  <span className="text-gray-500">days ago</span><span class="text-gray-500">.</span><span class="text-gray-500">View Product</span>
                </div>
              </div>
              <div className="w-full flex gap-2 flex-col xl:flex-row">
                <div className="w-full xl:w-[160px] h-[150px]">
                <img src={pro} alt="" />
                </div>
                <div className="w-full xl:py-2">
                  <h3 className="text-white " id="textSecond3">​RNB Modern Laravel React Rental System</h3>
                  <img src={pub} alt="" />
                  <span className="text-gray-500">days ago</span><span class="text-gray-500">.</span><span class="text-gray-500">View Product</span>
                </div>
              </div>
              <div className="w-full flex gap-2 flex-col xl:flex-row">
                <div className="w-full xl:w-[160px] h-[150px]">
                <img src={pro} alt="" />
                </div>
                <div className="w-full xl:py-2">
                  <h3 className="text-white " id="textSecond4">​RNB Modern Laravel React Rental System</h3>
                 <img src={pub} alt="" />
                  <span className="text-gray-500">days ago</span><span class="text-gray-500">.</span><span class="text-gray-500">View Product</span>
                </div>
              </div>
            </div>
        </div>
</div>
    </div>
        
    )
    }

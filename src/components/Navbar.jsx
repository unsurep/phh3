'use client'

import React from "react"
import Image from "next/image"
import logo from './Image/logo1.jpg'
import { IoHome } from "react-icons/io5";
import { BiSolidBookReader } from "react-icons/bi";
import { RiSettings2Fill } from "react-icons/ri";
import { FaCamera } from "react-icons/fa";
import { useState,useEffect } from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FcCancel } from "react-icons/fc";
import { BiSolidPhoneCall } from "react-icons/bi";

const Navbar=({toggleDarkMode, isDark})=>{

    const [menu, setMenu]=useState(false);

    const toggleMenu=()=>{
        setMenu(!menu);

    }

    

    return(
        <div className="">
            <nav className="flex    justify-between bg-white  items-center px-[1rem] lg:px-[5rem]  py-[1rem] w-full    z-50 fixed shadow-lg shadow-red-600">

                <Link href={'/'}>
                    <div>
                        <Image src={logo} width={0} height={0} alt="logo" className="w-20"/>
                    </div>
                </Link>

                {/* other screen responsive */}

                <div className="">        
                    <ul className=" lg:flex hidden lg:text-sm     lg:gap-6">

                    <Link href={'/'}>
                        <li className="hover:bg-blue-600 hover:text-white p-3 rounded-xl shake cursor-pointer font-medium flex items-center gap-1 "><IoHome/>HOME </li>
                    </Link>

                    <Link href={'/about'}>
                        <li className="hover:bg-blue-600 hover:text-white p-3 rounded-xl shake cursor-pointer font-medium flex gap-1 items-center "><BiSolidBookReader/>ABOUT HASH<span className=""></span></li>
                    </Link>


                    <Link href={'/mismanagement'}>
                        <li className="hover:bg-blue-600 hover:text-white p-3 rounded-xl shake cursor-pointer font-medium flex items-center gap-1 "><RiSettings2Fill/>MISMA</li>
                    </Link>


                    <Link href={'/photo'}>
                        <li className="hover:bg-blue-600 hover:text-white p-3 rounded-xl shake cursor-pointer font-medium flex gap-1 items-center "><FaCamera/>PHOTOS </li>
                    </Link>

                    <Link href={'/guidelines'}>
                        <li className="hover:bg-blue-600 hover:text-white  p-3 rounded-xl shake cursor-pointer font-medium flex items-center gap-1 "><BiSolidBookReader/> GUIDELINES </li>
                    </Link>

                    {/* <Link href={''}>
                        <li className="hover:bg-blue-600 hover:text-white  p-3 rounded-xl shake cursor-pointer font-medium flex items-center gap-1 "><FcCancel /> SUSPENSION </li>
                    </Link> */}
                    </ul>





                </div>



              


            

                {/* Contact Us button  */}
                <Link href={'/contact'}>
                    <div className=" lg:flex flex-col items-center hidden">
                    <button type="submit" className="relative inline-block md:text-[10px] lg:text-[16px] group mt-5 lg:mt-0 shake">
                  <span className="relative z-10 block px-5 py-2.5 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-sky-800 group-hover:-rotate-180 ease"></span>
                    <span className="relative">CONTACT US</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-red-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                    </button>
                    </div>
                </Link>


                {/* for mobile responsive */}
                <div onClick={toggleMenu} className=" lg:hidden flex items-center  ">

                    {menu===true ? <p className="text-4xl cursor-pointer"><IoMdClose />

                        <p className=" mt-20  absolute    min-h-[30vh] left-0 top-[11%] flex  p-5 text-base">        
                    <ul className=" flex flex-col gap-3 text-sm  roll-in-right bg-red-200 w-[90vw]  px-[1rem] py-5">

                    <Link href={'/'}>
                        <li className="hover:bg-blue-600 hover:text-white p-3 rounded-xl cursor-pointer font-medium flex items-center gap-1  "><IoHome/>HOME </li>
                    </Link>

                    <Link href={'/about'}>
                        <li className="hover:bg-blue-600 hover:text-white p-3 rounded-xl cursor-pointer font-medium flex gap-1 items-center "><BiSolidBookReader/>ABOUT HASH<span className=""></span></li>
                    </Link>


                    <Link href={'/mismanagement'}>
                        <li className="hover:bg-blue-600 hover:text-white p-3 rounded-xl cursor-pointer font-medium flex items-center gap-1 "><RiSettings2Fill/>MISMA</li>
                    </Link>


                    <Link href={'/photo'}>
                        <li className="hover:bg-blue-600 hover:text-white p-3 rounded-xl cursor-pointer font-medium flex gap-1 items-center "><FaCamera/>PHOTOS </li>
                    </Link>

                    <Link href={'/guidelines'}>
                        <li className="hover:bg-blue-600 hover:text-white p-3 rounded-xl cursor-pointer font-medium flex gap-1 items-center "><BiSolidBookReader/> GUIDELINES </li>
                    </Link>

                    <Link href={'/contact'}>
                        <li className="hover:bg-blue-600 hover:text-white  p-3 rounded-xl cursor-pointer font-medium flex gap-1 items-center "><BiSolidPhoneCall /> CONTACT US </li>
                    </Link>

                    {/* <Link href={''}>
                        <li className="hover:bg-blue-600 hover:text-white  p-3 rounded-xl cursor-pointer font-medium flex items-center gap-1 "><FcCancel /> SUSPENSION </li>
                    </Link> */}
                    </ul>
                        </p>

                    </p> :   <p className="text-3xl cursor-pointer"><IoMenu /> </p> }
                    
                   
                </div>
                
                
               


            </nav>






        </div>
    )



};

export default Navbar;
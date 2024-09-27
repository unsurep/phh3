'use client'

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import logo from './Image/logo1.jpg'
import { LuFacebook } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { PiTiktokLogoLight } from "react-icons/pi";
import svg from '../components/Image/svgbp.png'
import me from '../components/Image/meee.jpg'


const Footer=()=>{

    return(
        <div>
            <footer className="px-[1rem] lg:px-[5rem] flex bg-black py-12  flex-wrap lg:justify-between">
                {/* right div */}
                <div className="">

                    <Link href={'/'}>
                        <div>
                            <Image src={logo} width={0} height={0} alt="logo" className="w-20 rounded-full"/>
                        </div>
                    </Link>

                    <p className="text-neutral-200 font-serif">We are more than just a group of <br /> runners drinking beer, we are a <br /> vibrant community  from different <br /> works of life united by our passion <br /> beer & physical fitness.</p>

                    <ul className="pt-8 md:pt-16 flex gap-2 items-center">
                        <li className="bg-neutral-400 p-2 hover:bg-yellow-300 cursor-pointer rounded-full shake"><LuFacebook /></li>
                        <li className="bg-neutral-400 p-2 hover:bg-yellow-300 cursor-pointer rounded-full shake"><LuTwitter /></li>
                        <li className="bg-neutral-400 p-2 hover:bg-yellow-300 cursor-pointer rounded-full shake"><IoLogoInstagram /></li>
                        <li className="bg-neutral-400 p-2 hover:bg-yellow-300 cursor-pointer rounded-full shake"><PiYoutubeLogoThin /></li>
                        <li className="bg-neutral-400 p-2 hover:bg-yellow-300 cursor-pointer rounded-full shake"><PiTiktokLogoLight /></li>
                    </ul>
                </div>

                {/* left div */}
                <div className="mb-2 mt-12  md:flex gap-12 lg:flex   ">
                    <div>
                        <h1 className=" font-bold hover:text-yellow-300  text-neutral-200 font-serif">LINK</h1>
                        <ul className="text-neutral-200 font-serif">

                            <Link href={'/'}>
                                <li className="pt-16 hover:text-yellow-300 cursor-pointer">Home</li>
                            </Link>

                            <Link href={'/about'}>
                                <li className="hover:text-yellow-300 cursor-pointer">About Hash</li>
                            </Link>

                            <Link href={'/mismanagement'}>
                                <li className="hover:text-yellow-300 cursor-pointer">Mismanagement</li>
                            </Link>
                            
                            <Link href={'/photo'}>
                                <li className="hover:text-yellow-300 cursor-pointer">Photos</li>
                            </Link>

                            <Link href={'/guidelines'}>
                                <li className="hover:text-yellow-300 cursor-pointer">Guidelines</li>
                            </Link>

                            <Link href={'/contact'}>
                                <li className="hover:text-yellow-300 cursor-pointer">Contact Us</li>
                            </Link>

                            {/* <li className="hover:text-yellow-300 cursor-pointer">Suspension</li>  */}
                        </ul>
                    </div>

                    {/* subscribe div */}

                    <div className=" my-12 md:ml-[16rem]">
                        <h1 className="text-neutral-200 font-bold hover:text-yellow-300 font-serif ">OUR NEWSLETTER</h1>
                        <form className="pt-4" action="">
                            <input type="email" 
                            placeholder="email"
                            required
                            className="   border border-red-700 rounded-[12px] px-5 py-2  cursor-pointer"/>
                        </form>
                        {/* button */}
                        <div className="mt-2">
                            <button type="submit" className="relative inline-block text-lg group mt-5 lg:mt-0 shake">
                            <span className="relative z-10 block px-5 py-2.5 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-sky-800 group-hover:-rotate-180 ease"></span>
                            <span className="relative">SUBSCRIBE</span>
                            </span>
                            <span
                            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-red-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
                            data-rounded="rounded-lg"
                            ></span>
                            </button>
                        </div>

                    </div>
  
                </div>
                <hr />
            </footer>

            <div className="text-center px-[1rem] flex items-center justify-center gap-2 py-2">
                <h1 className="text-[12px]">Port Harcourt Hash || 2024 All Rights Reserved || Built by unSurePlayer </h1>
                <p className="">
                    <Image src={me} width={0} height={0} alt="svg_logo" className="w-8 ring ring-green-400 rounded-full" />
                </p>
            </div>

        </div>
    )




};

export default Footer;
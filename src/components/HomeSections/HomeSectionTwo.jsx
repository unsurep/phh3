
'use client'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import React from "react"
import Image from "next/image"
import pic11 from '../Image/pic11.jpg'
import { GiBeerStein } from "react-icons/gi";
import beericon from '../Image/beericon.png'
import xmas23 from '../Image/xmas23.jpg'
import bob23 from '../Image/bob23.png'
import bob24 from '../Image/bob24.jpg'
import Link from "next/link";
import nh18 from '../Image/nashhash18bg.png'
import isk from '../Image/bush.jpg'
import oct1 from '../Image/oct121.png'
import bob22 from '../Image/bob22.png'
import hover22 from '../Image/hover22bg.png'
import xmas20 from '../Image/xmas20bg.png'


import gb from '../Image/gb.png'
import allpic from '../Image/a1bg.png'
import all2 from '../Image/all2bg.png'
import all3 from '../Image/all3.jpg'
import hhm1 from '../Image/hhm1c.png'





const HomeSectionTwo=()=>{

    return(
        <div className=" ">
            {/* section 1 */}
            <section className=" pt-20 px-[1rem] lg:px-[5rem] " >
               <div className=" bg-blue-50 md:h-[130vh] w-[100%] lg:h-[100vh] md:flex gap-16 md:px-8 px-5 py-10 rounded-3xl border border-blue-400">
                    <div>
                        <Image src={pic11} width={0} height={0} alt="image" className="rounded-3xl wobble-hor-bottom cursor-pointer"/>
                    </div>



                    <div className="md:ml-[3rem]">
                        <h1 className=" text-base md:text-xl font-serif text-center font-extrabold text-black pt-5">HASHING IS A LIFE STYLE AND <br />COLD BEER HEALS ALL WOUND.</h1>

                        <p className="pt-5 text-black font-serif text-[14px] lg:text-lg">These are the core objectives of the Hash House Harriers.</p>

                        <ul className=" text-black  md:flex md:flex-col md:gap-2 text-[14px] lg:text-lg">
                            <li className="flex mt-6 font-serif justify-center  gap-1 md:mt-5"><span className="text-black flex items-center "><GiBeerStein /><GiBeerStein /><GiBeerStein /><GiBeerStein /></span> To promote physical fitness among hashers.</li>
                            <li className="flex gap-1 mt-6 md:mt-3 font-serif justify-center"> <span className="text-black flex items-center"><GiBeerStein /><GiBeerStein /><GiBeerStein /></span>To get rid of weekend hangovers.</li>
                            <li className="flex gap-1 mt-6 font-serif md:mt-3 justify-center"> <span className="text-black flex items-center"><GiBeerStein /><GiBeerStein /></span>To acquire a good thirst and to satisfy it with beer.</li>
                            <li className="flex gap-1 mt-6 font-serif md:mt-3 justify-center"> <span className="text-black flex items-center"><GiBeerStein /></span>To persuade the older hashers they are not as old as they feel.</li>
                        </ul>


                        {/* button linked to about page */}
                        <Link href={'/about'} >
                            <div className="pt-5 text-center md:mt-3">
                            <button type="submit" className="relative inline-block text-lg group mt-5 lg:mt-0 shake">
                                <span className="relative z-10 block px-5 py-2.5 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-sky-800 group-hover:-rotate-180 ease"></span>
                                <span className="relative">ABOUT US</span>
                                </span>
                                <span
                                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-red-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
                                data-rounded="rounded-lg"
                                ></span>
                            </button>
                            </div>
                        </Link>
                        

                    </div>
               </div>
            </section>

            {/* section 2 */}
            <section className="mt-[5rem] md:mt-[7rem] lg:mt-20 ">
                {/* heading shakes */}
                <div className="flex items-center justify-center gap-5 px-[1rem]">
                    <h1 className="text-xl md:text-2xl shake rounded-xl font-serif font-extrabold hover:bg-sky-800 hover:text-white inline-block text-black p-5 cursor-pointer shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">HASHING WITH PORT HARCOURT </h1>
                    <Image src={beericon} width={0} height={0} alt="image " className="shake cursor-pointer"/> 
                </div>
                {/* 1 */}
                <div  className="flex mt-12 bg-sky-800 px-[1rem] lg:px-[5rem] py-10 flex-wrap">
                    <div data-aos="fade-right"
                        data-aos-duration="2000" className="justify-center flex flex-col gap-2">
                        <h1 className="text-xl lg:text-3xl font-serif font-bold text-white">DISCOVER THE JOY OF <br /> RUNNING AND DRINKING BEER!</h1>
                        <p className="mt-4 font-serif text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Neque pariatur natus, adipisci culpa eos saepe numquam</p>

                        <div className="mt-4">
                            <button type="submit" className="relative inline-block text-lg group mt-5 lg:mt-0 shake">
                                <span className="relative z-10 block px-5 py-2.5 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-sky-800 group-hover:-rotate-180 ease"></span>
                                <span className="relative">ABOUT US</span>
                                </span>
                                <span
                                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-red-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
                                data-rounded="rounded-lg"
                                ></span>
                            </button>
                        </div>
                    </div>

                    <div  data-aos="fade-right"
                        data-aos-duration="2000" className="ml-auto mt-5">
                        <Image src={allpic} width={0} height={0}alt="image" className="w-[]"/>
                    </div>
                </div>

                {/* 2 */}
                <div  className="flex mt-1 bg-black px-[1rem] lg:px-[5rem] py-10 flex-wrap ">

                    <div data-aos="fade-left"
                        data-aos-duration="2000" className="">
                        <Image src={all2} width={0} height={0}alt="image" className=""/>
                    </div>


                    <div data-aos="fade-left"
                        data-aos-duration="2000" className="justify-center flex flex-col ml-auto">
                        <h1 className="text-xl lg:text-3xl font-serif font-bold text-white">DISCOVER THE JOY OF <br /> RUNNING AND DRINKING BEER!</h1>
                        <p className="mt-4 font-serif text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Neque pariatur natus, adipisci culpa eos saepe numquam</p>

                        <div className="mt-4">
                            <button type="submit" className="relative inline-block text-lg group mt-5 lg:mt-0 shake">
                                <span className="relative z-10 block px-5 py-2.5 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-sky-800 group-hover:-rotate-180 ease"></span>
                                <span className="relative">SEE MORE</span>
                                </span>
                                <span
                                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-red-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
                                data-rounded="rounded-lg"
                                ></span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* 3 */}
                <div  className="flex mt-1 bg-red-800 px-[1rem] lg:px-[5rem] py-10 flex-wrap">
                    <div data-aos="fade-right"
                        data-aos-duration="2000" className="justify-center flex flex-col">
                        <h1 className="text-xl lg:text-3xl font-serif font-bold text-white">DISCOVER THE JOY OF <br /> RUNNING AND DRINKING BEER!</h1>
                        <p className="mt-4 font-serif text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Neque pariatur natus, adipisci culpa eos saepe numquam</p>

                        <div className="mt-4">
                            <button type="submit" className="relative inline-block text-lg group mt-5 lg:mt-0 shake">
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
                    </div>

                    <div data-aos="fade-right"
                        data-aos-duration="2000" className="ml-auto mt-5">
                        <Image src={hhm1} width={0} height={0}alt="image" className=""/>
                    </div>
                </div>

            </section>

        </div>

   


 







    )




};

export default HomeSectionTwo;
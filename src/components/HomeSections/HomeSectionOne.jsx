'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
// import required modules
import { Pagination } from 'swiper/modules';

import Link from "next/link"
import Image from "next/image"
import trail from '../Image/trailbg.png'
import shoe from '../Image/shoebg.png'
import beer from '../Image/beerbg.png'
import { IoIosFastforward } from "react-icons/io";

import pic1a from '../Image/hhm1.jpg'
import pic1 from '../Image/hm1.jpg'
import pic2 from '../Image/hm2.jpg'
import pic3 from '../Image/hm3.jpg'
import pic4 from '../Image/hm4.jpg'
import pic5 from '../Image/hm5.jpg'
import pic6 from '../Image/hm6.jpg'
import pic7 from '../Image/hm7.jpg'
import pic8 from '../Image/hm8.jpg'
import pic9 from '../Image/hm9.jpg'
import pic11 from '../Image/hm11.jpg'
import pic12 from '../Image/hm12.jpg'
import pic13 from '../Image/hm13.jpg'
import pic14 from '../Image/hm14.jpg'
import pic15 from '../Image/hm15.jpg'
import pic16 from '../Image/hm16.jpg'
import pic17 from '../Image/hm17.jpg'
import logo from '../Image/logo1.jpg'


const HomeSectionOne=()=>{

    return(
        <>
            <section className="pt-32 md:pt-40 px-[1rem] lg:px-[5rem]">
               <div className="flex relative ">
                    <div className="flex flex-col gap-2">
                        <p className=" text-xl md:text-2xl font-serif font-extrabold text-black">Port Harcourt Hash House Harriers.</p>
                        <p className="text-[14px] md:text-xl  font-serif  text-black  ">Welcome to the vibrant world of Hashers, <br /> a running club with a drinking problem or <br /> a drinking club with a running problem.</p>
                        {/* <p className="text-[14px] md:text-xl font-serif  text-black">A drinking club with a running problem.</p> */}
                    </div>


                    <div className="hidden lg:flex ml-[20rem] ">
                        <p><Image src={trail} width={0} height={0} alt="image" className=""/></p>
                    </div>
               </div>

                <p className=" hidden lg:flex absolute top-[18rem] right-[29.5rem] bounce-in-top"><Image src={shoe} width={0} height={0} alt="image" className="w-32"/></p> 
                <p className=" hidden lg:flex absolute top-[2rem] right-[6rem] vibrate-1 "><Image src={beer} width={0} height={0} alt="image" className="w-80"/></p> 

                {/* Modals */}
               <div className='mt-5'>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>Run Information <IoIosFastforward /></button>
                    <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h1 className='flex justify-center' ><Image src={logo} width={0} height={0} alt='logo' className='w-16'/></h1>
                    <h3 className="font-bold text-lg text-center my-2">Weekly Run Information</h3>
                    <ul>
                        <li><b>Run No:</b> 1000</li>
                        <li><b>Date:</b> Friday 20th September, 2024</li>
                        <li><b>Venue:</b> Nwanyi Enugu, GRA Phase II,  Port Harcourt.</li>
                        <li><b>Hare:</b> PH H3Mismanagement</li>
                        <li><b>Rego:</b> N1,500</li>
                        <li><b>Time:</b> 5:00 pm</li>
                        <li><b>Sponsorship only: </b>1019116023 UBA</li>
                    </ul>
                    
                    <h2 className="font-bold text-lg text-center mt-2">Send payment slip to 08081808904</h2>


                    {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
                    </div>
                    </dialog>
               </div>

                {/* swiper tablet & laptops responsive */}
                <div className='mt-6'>
                    <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    navigation={true}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    >
                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic1a} width={0} height={0} alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>



                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic1} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic2} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>
                
                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic3} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>



                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic4} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide   SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic5} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic6} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic7} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic8} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic9} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic11} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic12} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic13} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic14} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic15} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic16} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic17} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>

                    </Swiper>
                </div>

            </section>
        </>
    )





};

export default HomeSectionOne;
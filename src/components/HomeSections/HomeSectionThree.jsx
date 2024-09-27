'use client'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { HiCursorClick } from "react-icons/hi";


import Image from "next/image"
import Link from "next/link"
import {  useEffect } from "react"
import homebeer from '../Image/homebeer.png'
import e1 from '../Image/e1.jpg'
import e2 from '../Image/e2.jpg'
import e3 from '../Image/e3.jpg'
import e4 from '../Image/e4.jpg'
import e5 from '../Image/e5.jpg'
import e6 from '../Image/e6.jpg'
import e7 from '../Image/e7.jpg'
import e8 from '../Image/e8.jpg'
import e9 from '../Image/e9.jpg'
import beericon from '../Image/beericon.png'
import hm1 from '../Image/hm1.jpg'
import hm8 from '../Image/hm8.jpg'
import dc from '../Image/dc.jpg'





const HomeSectionThree=()=>{

    const [grandMaster, setGrandMaster]=useState(true);
    const [religiousAdviser, setReligiousAdviser]=useState(false);

    const toggleGrandMaster=()=>{
        setGrandMaster(!grandMaster)
        setReligiousAdviser(false)
    }

    const toggleReligiousAdviser=()=>{
        setGrandMaster(false)
        setReligiousAdviser(!religiousAdviser)
    }




    return(
        <div className=" mt-12 ">
            <section className="px-[1rem] lg:px-[5rem]">

                <div className='flex justify-center '>
                    <h1 className='text-xl md:text-2xl text-black font-bold font-serif'>2024 UPCOMING HASH EVENTS IN NIGERIA...</h1>
                    <Image src={homebeer} width={0} height={0} alt="image " className="shake cursor-pointer w-20"/> 
                </div>

                {/* swiper for up-coming hash events in nigeria */}

                <div className='pt-6'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        // pagination={{clickable: true,}}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}

                        className="mySwiper">

                        <SwiperSlide>
                            <div>
                                <Image src={e2} width={0} height={0} alt='image' className='rounded-[20px]'/>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div>
                                <Image src={e3} width={0} height={0} alt='image' className='rounded-[20px]'/>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div>
                                <Image src={e5} width={0} height={0} alt='image' className='rounded-[20px]'/>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div>
                                <Image src={e7} width={0} height={0} alt='image' className='rounded-[20px]'/>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div>
                                <Image src={e8} width={0} height={0} alt='image' className='rounded-[20px]'/>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div>
                                <Image src={e9} width={0} height={0} alt='image' className='rounded-[20px]'/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* leaders dash board */}

                <div className=' mt-20'>
                    <div className='text-center'>
                        <h1 className='md:text-2xl font-serif font-bold'>PAST AND PRESENT LEADERS OF PH H3</h1>
                    </div>
                    
                    {/* both buttons */}
                    <div className='flex gap-10 justify-center items-center mt-4'>
                        <div><button onClick={toggleGrandMaster} type="submit" className="relative inline-block text-lg group  lg:mt-0 shake">
                            <span className="relative z-10 block px-5 py-2.5 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-sky-800 group-hover:-rotate-180 ease"></span>
                            <span className="relative flex items-center gap-2 text-[14px] md:text-lg">Grand Master</span>
                            </span>
                            <span
                            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-red-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
                            data-rounded="rounded-lg"
                            ></span>
                            </button>
                        </div>

                        <div onClick={toggleReligiousAdviser} className=''><button type="submit" className="relative inline-block text-lg group  lg:mt-0 shake">
                            <span className="relative z-10 block px-5 py-2.5 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-sky-800 group-hover:-rotate-180 ease"></span>
                            <span className="relative flex items-center gap-2 text-[14px] md:text-lg">Religious Adviser</span>
                            </span>
                            <span
                            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-red-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
                            data-rounded="rounded-lg"
                            ></span>
                            </button>
                        </div>
                    </div>

                    <div>
                        {/* GM */}
                        {grandMaster===true && <div>
                            <div  className='flex items-center gap-2 mt-6'>

                                <div data-aos="flip-left"
                                   
                                    data-aos-duration="2000" className='h-40 w-full overflow-hidden'>
                                    <Image src={hm1} width={0} height={0} alt='image' className='h-full w-full object-cover rounded-[12px]'/>
                                </div>

                                <div data-aos="flip-left"
                                   
                                    data-aos-duration="2000" className='h-40 w-full overflow-hidden'>
                                    <Image src={hm1} width={0} height={0} alt='image' className='h-full w-full object-cover rounded-[12px]'/>
                                </div>

                                <div data-aos="flip-left"
                    
                                    data-aos-duration="2000" className='h-40 w-full overflow-hidden'>
                                    <Image src={hm1} width={0} height={0} alt='image' className='h-full w-full object-cover rounded-[12px]'/>
                                </div>
                            </div>

                            <div className='flex items-center gap-2 mt-6'>
                                <div data-aos="flip-right"
                                   
                                    data-aos-duration="2000" className='h-40 w-full overflow-hidden'>
                                    <Image src={hm1} width={0} height={0} alt='image' className='h-full w-full object-cover rounded-[12px]'/>
                                </div>

                                <div data-aos="flip-right"
                                  
                                    data-aos-duration="2000" className='h-40 w-full overflow-hidden'>
                                    <Image src={hm1} width={0} height={0} alt='image' className='h-full w-full object-cover rounded-[12px]'/>
                                </div>

                                <div data-aos="flip-right"
                                   
                                    data-aos-duration="2000" className='h-40 w-full overflow-hidden'>
                                    <Image src={hm1} width={0} height={0} alt='image' className='h-full w-full object-cover rounded-[12px]'/>
                                </div>
                            </div>
                           
                        </div>}

                        {/* RA */}
                        {religiousAdviser===true && <div>
                            
                            <div className='flex items-center gap-2 mt-6'>
                                <div data-aos="flip-right"
                                 
                                    data-aos-duration="2000" className='h-40 w-full overflow-hidden'>
                                    <Image src={hm8} width={0} height={0} alt='image' className='h-full w-full object-cover rounded-[12px]'/>
                                </div>

                                <div data-aos="flip-right"
                                   
                                    data-aos-duration="2000" className='h-40 w-full overflow-hidden'>
                                    <Image src={hm8} width={0} height={0} alt='image' className='h-full w-full object-cover rounded-[12px]'/>
                                </div>

                                <div data-aos="flip-right"
                                    
                                    data-aos-duration="2000" className='h-40 w-full overflow-hidden'>
                                    <Image src={hm8} width={0} height={0} alt='image' className='h-full w-full object-cover rounded-[12px]'/>
                                </div>
                            </div>

                            <div data-aos="flip-right"
                                    
                                    data-aos-duration="2000" className='flex items-center gap-2 mt-6'>
                                <div className='h-40 w-full overflow-hidden'>
                                    <Image src={hm8} width={0} height={0} alt='image' className='h-full w-full object-cover rounded-[12px]'/>
                                </div>

                                <div data-aos="flip-right"
                                    
                                    data-aos-duration="2000" className='h-40 w-full overflow-hidden'>
                                    <Image src={hm8} width={0} height={0} alt='image' className='h-full w-full object-cover rounded-[12px]'/>
                                </div>

                                <div data-aos="flip-right"
                                    
                                    data-aos-duration="2000" className='h-40 w-full overflow-hidden'>
                                    <Image src={hm8} width={0} height={0} alt='image' className='h-full w-full object-cover rounded-[12px]'/>
                                </div>
                            </div> 
                        </div>}
                        
                    </div>
                </div>

                <h1 className='justify-center flex my-8'>
                    <Image src={dc} width={0} height={0} alt='image' className=''/>
                </h1>

               
            </section>
        </div>
    )


};

export default HomeSectionThree;
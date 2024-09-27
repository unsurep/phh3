'use client'

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import beericon from '../Image/beericon.png'
import { BsFillSendFill } from "react-icons/bs";

const ContactPage=()=>{

    return(
        <div className="px-[1rem] lg:px-[5rem] py-40 ">
            <section>
                <div className="flex items-center justify-center gap-5 pb-12">
                    <h1 className="text-xl  shake rounded-xl font-serif font-extrabold hover:bg-sky-800 hover:text-white inline-block text-black p-5 cursor-pointer shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">CONTACT US </h1>
                    <Image src={beericon} width={0} height={0} alt="image " className="shake cursor-pointer"/> 
                </div>

                <div className=" h-60vh w-full flex flex-col items-center justify-center contact ">
                </div>

                <div className="flex items-center justify-between py-10 bg-blue-50 px-5 mt-10 rounded-[12px] flex-wrap">
                    {/* left div */}
                    <div className="">
                        <h1 className="pb-5 font-bold text-[14px] lg:text-base font-serif bg-gradient-to-r from-red-400 to-slate-900 bg-clip-text text-transparent  ">Feel Free To Contact Us</h1>
                        <form action="" className="grid grid-cols-1 gap-2">
                            <input type="text" 
                            placeholder="Subject"
                            className="rounded-[4px] px-2 outline-none border-blue-500 border"
                            required/>

                            <input type="text" 
                            placeholder="Hash Handle"
                            className="rounded-[4px] px-2 outline-none border-blue-500 border"
                            required/>

                            <input type="email" 
                            placeholder="Email"
                            className="rounded-[4px] px-2 outline-none border-blue-500 border"
                            required/>

                            <textarea
                            placeholder="Message"
                            className="textarea textarea-bordered textarea-lg w-full max-w-xs"></textarea>

                            <button className="flex gap-2 mt-5 items-center justify-center bg-black text-white text-[12px] p-2 rounded-[4px] hover:text-red-200  ">Send message <BsFillSendFill /></button>
                        </form>
                    </div>


                    {/* right div */}
                    <div className="mt-6">
                        
                        <div className="flex flex-col gap-8">
                            <div>
                                <h1 className=" font-bold bg-gradient-to-r from-red-400 to-slate-900 bg-clip-text text-transparent font-serif">PORT HARCOURT HASH HOUSE HARRIERS</h1>
                                <ul className="text-black font-bold font-serif text-[14px] lg:text-base">
                                    <li>GM - Unsure Player - 08081808904</li>
                                    <li>RA - Always Pumping - 08098069000</li>
                                </ul>
                            </div>
            
                            <div>
                                <h1 className=" font-bold bg-gradient-to-r from-red-400 to-slate-900 bg-clip-text text-transparent font-serif">OBIO HASH HOUSE HARRIERS</h1>
                                <ul className="text-black font-bold font-serif text-[14px] lg:text-base">
                                    <li>HM - Prince of Baghdad - 08037630012</li>
                                    <li>RA - No Shelter - 08033100313</li>
                                </ul>
                        </div>
                    </div>
                </div>


            </div>


















            </section>
        </div>
    )



};

export default ContactPage;
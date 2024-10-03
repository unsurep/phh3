

import React from "react";
import Image from "next/image";
import HomeSectionOne from "@/components/HomeSections/HomeSectionOne";
import HomeSectionTwo from "@/components/HomeSections/HomeSectionTwo";
import { useState,useEffect } from "react";
import Navbar from "@/components/Navbar";
import HomeSectionThree from "@/components/HomeSections/HomeSectionThree";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";


const Home=()=>{
  

  return(
    <>
      <section>
     
       <HomeSectionOne/>
       <HomeSectionTwo/>
       <HomeSectionThree/>

        {/* scroll to the top */}
        <Link href='#top'>
          <div className="w-[10px] rounded-full px-6 py-4 bg-[#3177A3] items-center justify-center ring-8 hover:ring-red-300   md:flex fixed right-10 bottom-5 hidden"><span className="font-bold "><FaArrowUp /></span></div>
        </Link>

       
      
      </section>








    </>
  )



};

export default Home;
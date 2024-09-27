'use client'

import Guidelines from "@/components/GuidelinesPage/GuidelinesPage";
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { FaArrowUp } from "react-icons/fa";


const Page=()=>{

    return(
        <div>
            <section>
                <Guidelines/>

                {/* scroll to the top */}
                <Link href='#top'>
                    <div className="w-[10px] rounded-full px-6 py-4 bg-[#3177A3] items-center justify-center ring-8 hover:ring-red-300   flex fixed right-10 bottom-5"><span className="font-bold "><FaArrowUp /></span></div>
                </Link>



            </section>
        </div>
    )


};

export default Page;
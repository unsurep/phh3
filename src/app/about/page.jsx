'use client'


import AboutPage from "@/components/AboutPage/AboutPage";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";




const Page=()=>{

    return(
        <>
            <section>
                <AboutPage/>

                {/* scroll to the top */}
                <Link href='#top'>
                    <div className="w-[10px] rounded-full px-6 py-4 bg-[#3177A3] items-center justify-center ring-8 hover:ring-red-300   flex fixed right-10 bottom-5"><span className="font-bold "><FaArrowUp /></span></div>
                </Link>

                

            </section>
        </>
    )



};

export default Page;
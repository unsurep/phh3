'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import beericon from '../Image/beericon.png'


const Guidelines=()=>{

    return (
        <div className="px-[1rem] lg:px-[5rem] py-40">
            <section>
                <div className="flex items-center justify-center gap-5 pb-12">
                    <h1 className="text-base lg:text-xl shake rounded-xl font-serif font-extrabold hover:bg-sky-800 hover:text-white inline-block text-black p-5 cursor-pointer shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">PH H3 GUIDELINES  </h1>
                    <Image src={beericon} width={0} height={0} alt="image " className="shake cursor-pointer"/> 
                </div>

                <div className=" h-60vh w-full flex flex-col items-center justify-center  guildline">
                </div>

                 {/* hash rules & traditions */}

                <div className=" pt-5  ">
                    <h1 className="text-base lg:text-xl  text-black flex flex-col items-center justift-center py-4  px-2 rounded-[18px] cursor-pointer font-serif "> <b>HASH RULES, TRADITIONS, OBJECTIVES AND PROCLAMATIONS.</b></h1>
                    <h2 className=" pb-3 text-base lg:text-xl text-black font-serif  "><b><u>RULES OF THE HASH</u></b></h2>

                    <ul className="flex flex-col gap-3 text-black text-[14px] lg:text-base font-serif">
                        <li><b>RULE 1.</b> There ARE no rules, but the Grand Master (GM) is <b>ALWAYS RIGHT</b>.</li>
                        <li><b>RULE 2.</b> The Religious Adviser (RA) does <b>NO WRONG</b></li>
                        <li><b>RULE 3.</b> IF the Grand Master is wrong, refer to <b>RULE 1.</b></li>
                        <li><b>RULE 4.</b> IF the Religious Adviser is wrong, refer to <b>RULE 2.</b> </li>
                        <li><b>All other rules do not exist and are therefore, null and void. Some Hash Houses do, in fact, create new rules but in all such cases Rule 1 Applies.</b></li>
                    </ul>

                    <h2 className=" pt-8 pb-3  text-black text-base lg:text-xl font-serif "><b><u>GUIDELINES OF THE HASH</u></b></h2>
                    <ul className="flex flex-col gap-3 text-black text-[14px] lg:text-base font-serif">
                        <li><b>GUIDELINE 1.</b> Religious Adviser (RA), usually becomes Grand Master (GM) at the end of his/her tenure  and the new RA must have had at least a year  of experience on PH Mismanagement team.</li>
                        <li><b>GUIDELINE 2.</b>  The tenure of a Mismanagement Team is usually one year</li>
                        <li><b>GUIDELINE 3.</b> The Hare is responsible for laying the trail or accompanying the Hasher laying the trail. Failure to do so may attract a fine.</li>
                        <li><b>GUIDELINE 4.</b> Where a run is co-Hared, only 2 Hares are exempt from paying run fee (rego).</li>
                        <li><b>GUIDELINE 5.</b> It is not in the responsibility of the Hash to provide transport for Hashers traveling to events outside Rivers State</li>
                        <li><b>GUIDELINE 6</b> A new Hasher turning up after a Run without taking part in the Run cannot be introduced as a Virgin in the Circle.</li>
                        <li><b>GUIDELINE 7.</b> Rego is Key</li>
                        <li><b>GUIDELINE 8.</b> To be exempted from paying REGO (Friday hash fees), a Hasher should have Hashed consistently for at least 30 years and made noteworthy contributions to the Hash during that period  Or has reached 70 years old and has  hashed for at least  2years.</li>
                        <li><b>GUIDELINE 9.</b> To earn a Hash Handle (Hash Name), a Hasher should have RUN/WALKED at Friday Hash at least 10 times or hosted a Run, whichever comes first.</li>
                        <li><b>GUIDELINE 10.</b> Each new Mismanagement Team is encouraged to review this document within the first quarter of their tenure and make sure all members of Port Harcourt Hash House Harriers abide.</li>
                        <li><b>These Guidelines are non-binding. If in doubt refer to Rule No 1.</b></li>
                    </ul>

                    <h2 className="text-base lg:text-xl font-serif pt-8 pb-3  text-black  "><b><u>TRADITIONS OF THE HASH</u></b></h2>
                    <ul className="flex flex-col gap-3 text-black text-[14px] lg:text-base font-serif">
                        <li><b>TRADITION 1.</b>Down Down note to be drunk with the left hand.</li>
                        <li><b>TRADITION 2.</b> All hashers in the circle drinks with their left hand</li>
                        <li><b>TRADITION 3.</b>No headgear  should be worn during a down down note, including spectacles / sunglasses.</li>
                        <li><b>TRADITION 4.</b>Permission required to Exit/Enter the Circle, Put your mug on your head and signal whoever is in charge of the circle at the time.</li>
                        <li><b>TRADITION 5.</b>During  Down Down note finish ALL your drink and place your mug upside down on your head. Mug must be upside down on your head whether you finish your drink or not.</li>
                        <li><b>TRADITION 6.</b>Never point at a hasher, instead bend your arm and direct your elbow towards the person/hasher.</li>
                        <li><b>TRADITION 7.</b>Do not talk in the Circle unless called upon to do so.</li>
                        <li><b>TRADITION 8.</b> A Hasher wearing new shoes is obliged to drink from one of them or surrender it to the <b>shoe stomper</b>.</li>
                    </ul>

                    <h2 className=" text-base lg:text-xl font-serif pt-8 pb-3 text-black  "><b><u>OBJECTIVES OF THE HASH</u></b></h2>
                    <ul className="flex flex-col gap-3 text-black text-[14px] lg:text-base font-serif">
                        <li><b>OBJECTIVE 1.</b> To promote physical fitness amongst its members.</li>
                        <li><b>OBJECTIVE 2.</b> To get rid of weekend hangovers</li>
                        <li><b>OBJECTIVE 3.</b> To acquire a good thirst and satisfy it in beer.</li>
                    </ul>

                    <h2 className="text-base lg:text-xl font-serif pt-8 pb-3 text-black  "><b><u>PH H3 PROCLAMATION</u></b></h2>
                    <ul className="flex flex-col gap-3 text-black text-[14px] lg:text-base font-serif">
                        <li><b>PROCLAMATION 1.</b> If any Port Harcourt Hasher misbehaves at a Friday Run/Walk/Circle and a complaint is made AND seconded by another Hasher who witnessed the infraction the matter will be taken up by PH H3 Mismanagement. Otherwise it will be considered null and void.</li>

                        <li><b>PROCLAMATION 2.</b> If any PH H3 Hasher misbehaves at an Away run/event (all Hash events outside Rivers State including those organized by other kennels), and a complaint is made by ANY Hasher who was at the event AND seconded by an PH H3 Hasher, the matter will be taken up by PH H3 Mismanagement Team. Otherwise, it will be considered null and void.</li>
                        <li><b>PROCLAMATION 3.</b>Do not drag the name of PH H3 in the mug, else OTILO!!! </li>
                        <li><b>Reviewed and Approved by PH H3 Mismanagement Team 2023</b></li>



                    </ul>
                
                </div>

            </section>
        </div>
    )



};

export default Guidelines;
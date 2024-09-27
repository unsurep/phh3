'use client'


import Image from "next/image"
import beericon from '../Image/beericon.png'




const AboutPage=()=>{

    return(
        <div className="px-[1rem] lg:px-[5rem] py-40 ">
            <section className="text-black">

                <div className="flex items-center justify-center gap-5 pb-12">
                    <h1 className="text-base md:text-xl shake rounded-xl font-serif font-extrabold hover:bg-sky-800 hover:text-white inline-block text-black p-5 cursor-pointer shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">ABOUT THE HASH </h1>
                    <Image src={beericon} width={0} height={0} alt="image " className="shake cursor-pointer"/> 
                </div>

                <div className=" h-60vh w-full flex flex-col items-center justify-center  about">
                </div>

                <div className="flex flex-col gap-4">
                    <button className="pt-4 text-xl font-serif "><b><u>What is Hash/Hashing</u></b></button>
                    <p className="text-base font-serif">The Hash House Harriers (HHH or H3) is an international group of non-competitive running social club, originated in December 1874 in Kuala Lumpur. An event organized by a club is known as a Hash, Run, or a Hash Run. A common denominal verb for this activity is Hashing with participants calling themselves Hashers known by their hash handle. Male members are referred to as Harriers and females are known as Harriettes.</p>
                    <p className="text-base font-serif">The Hash is humorously known as A Drinking Club With A Running Problem, with the preferred beverage of consumption being Beer.</p>
                </div>

                <div className="pt-5">
                    <h1 className=" pb-2 text-xl font-serif"><b><u>History of Port Hash House Harriers</u></b></h1>
                    <p className="text-base font-serif">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum magni placeat sapiente dolorem natus rem aliquam consectetur repellendus ullam vitae nam autem ratione veniam eius, aspernatur eos laboriosam cupiditate perferendis quia consequuntur est. Amet vel praesentium quia incidunt unde adipisci provident hic, quae cupiditate ducimus. Odit, facilis modi quae labore magni officiis eaque in voluptate molestiae doloremque, neque quam eum nemo consectetur quo, unde suscipit debitis praesentium atque voluptates at accusantium tempora. Facilis animi magnam voluptatum minima consequatur amet commodi voluptates natus pariatur quod eaque, laudantium illo corrupti incidunt architecto officiis numquam atque laborum placeat nisi voluptas dolore. Ad.</p>
                </div>

                <div className="pt-5 flex flex-col gap-2">
                    <h1 className=" text-xl font-serif"><b><u>Port Harcourt HHH Hare Guide</u></b></h1>
                    <p className="text-base font-serif">The hare sets a run and play host for an evening. Scary ? What will you be expected to do? Where do you get the beer? How do you cool it? How do you take care of catering? and, the main feature, how do you set a good trail?</p>

                    <p className="text-base font-serif">These are just a few of questions that will be answered in this guide having in mind that the Mismanagement is always available to help. It will assist you in avoiding common goof-ups, though sometimes you have to use your own initiative. We like to reward a hare for doing good, not screwing up, however similar the reward may be!</p>

                    <p className="text-base font-serif">Beer is the most important factor in the Hash. Keep this in mind. The heritage of the Hash is a drinking club with a running problem. (This does not exclude the exceptional teetotaller from joining and having fun). If you get the beer temperature right you are sure to be rewarded. Warm beer is going to make a lot of Hashers unhappy, including yourself. Too cold, well, different schools of thoughts.</p>

                    <p className="text-base font-serif">One of the purposes of this revised Hash Hare guide is to outline the latest innovations that Mismanagement has arranged for you. These take care of beer and ice supply and also suggest food caterers if you can not prepare food yourself. Thus all a Hare has to do is provide a venue; ice the drinks down, set a trail and host a fun filled friday evening. The arrangements for food (if any) / drink must be made with the appropriate person at least a week in advance & preferably earlier than this, with a confirmation closer to the date.</p>
                </div>

                <div className="pt-5">
                    <h1 className="text-xl font-serif"><b><u>Beer Stop(s)</u></b></h1>
                    <p className="text-base font-serif">The Port Harcourt Hash permits voluntery beer stop(s). Cans of beer are more popular than bottles at beer stops but even more popular with many is water inwhich we drink beer to save. If it is a T shirt run, the beer stop can be the hand-out point, thus making sure that Hashers have had to participate to receive the reward. Try and set the beer stop between 70 to 75% into a run.</p>
                </div>

                <div className="pt-5">
                    <h1 className="text-xl font-serif"><b><u>The Venue</u></b></h1>
                    <p className="text-base font-serif">Preferably secure, walled and gated. This way entry can be strictly reserved for paid up members and invited guests only that rego for the evening. More public venues can be fun but they do not offer the same degree of security. The venue should also have adequate lighting, NEPA, backed up by generator. Circle should be as far removed from noisy generators as possible. Of course, these points may have to be compromised upon. The Hash is not a perfectionist organization!</p>
                </div>

                <div className="pt-5">
                    <h1 className="text-xl font-serif"><b><u>The Run</u></b></h1>
                    <p className="text-base font-serif">You must be aware of the fundamentals of a Hash Trail. It is not a race! Marathon runs are positively not required! A well-designed trail offers 60 minutes or so of exercise to participants ranging from athletes to jog/walkers. The aim is to have the whole pack home within a maximum of ten minutes between first and last. The closer together the Pack comes home, the better you have done.</p>
                </div>

               
                <div className="pt-5">
                    <h1 className="text-xl font-serif"><b><u>A Check</u></b></h1>
                    <p className="text-base font-serif">A Check is a mark, usually placed at some form of road junction. It gives the pack an opportunity to catch up on the F.R.Bs (Front Running Bastards). From the junction the trail could be in any direction except the direction you have come from. At this point the faster runners/serious Hashers will separate and check out the alternatives until a mark indicating On-On is found. The On-On call will go out and the pack will follow in the direction of the On-On. Obviously some F.R.Bs (Front Running Bastard) will have ventured completely in the wrong direction and will have lots of catching up to do.</p>
                </div>

                <div className="pt-5">
                    <h1 className="text-xl font-serif"><b><u>A Check-Back</u></b></h1>
                    <p className="text-base font-serif">A Check-Back is a mark that indicates some form of reversal of direction. i.e. back straight, back and left or back and right one or more junctions. Clearly, the front runners will be the first to find these marks and thus when the pack reverses direction they will initially be at the rear. Plenty of Check-backs are needed to hold a pack together!</p>
                </div>

                <div className="pt-5">
                    <h1 className="text-xl font-serif"><b><u>Checks & Check Backs</u></b></h1>
                    <p className="text-base font-serif">Checks & Check Backs... Make sure you have sufficient Check Backs of sufficient length or the F.R.Bs will eat your trail. Generally, the ideal is not to hide the trail by trickery and anyone reasonably observant should spot it. On On marks that are not too clear or could be taken as being ambiguous should be reinforced by extra marking as soon as a convenient location can be found. Chalking should always be marked on the left of the trail. This is where the pack should be running, facing the oncoming traffic!. Chalking is generally done approximately between knee and shoulder height of the average Hasher on telephone & electrical poles, road signs or whatever other permanent structure is available. Sometimes the only surface usable is the edge of the footpath. The chalk marks can either be marked facing the oncoming runners or on the side of the pole facing the trail. In the case of a divided highway, where the hare does not wish the trail to cross but run along it for some distance, assuming it is safe to do so, the trail can be marked on the right. Run on the Right should be chalked up at the start. It is also common practice to chalk up (On Over) where the trail crosses a divided highway. Chalk marks must be written in an unambiguous manner as possible. White or yellow are the preferred colours, being most visible at dusk, or later! Pink chalk will earn you a reward in the Circle.</p>
                </div>

                <div className="pt-5 flex gap-2 flex-col">
                    <h1 className="text-xl font-serif"><b><u>Tips for a Good Trail</u></b></h1>
                    <p className="text-base font-serif">Never underestimate how fast the F.R.Bs are. They are very fast and will find your Checks and Check Backs much faster than you set them. If they can leave the pack far behind them some of them will. They are Bastards of course and they are the only people who would not complain if they get some long Check Backs, so give it to them.</p>

                    <p className="text-base font-serif">While setting a run you will note many hash marks from previous trails .Thus your trail must be clearly dated, or marked with your initials, so it is not your fault when the pack become confused. You must advise the pack of the kind of markings at the On Out.</p>
                    <p className="text-base font-serif">Setting many Checks & Check Backs to keep the pack together is the major intention of a good Hash trail! Use drains, sand & a bit of bush if you can find it or Find somewhere new, if possible.</p>
                    <p className="text-base font-serif">Try to set a really meandering trail with Check Backs to the last, avoiding a long straight run. A trail should be set that where-ever possible the aged, infirm, drunks, wimps and physically disadvantaged ones can take an easy way home if needs be.
                    Beware of rain, it can really make a mess of your chalking. If you set the trail early, go around it again just before the run and touch up any missing marks. It does pay to double up on crucial marks anyway. You can use a vehicle for touching up but do not get caught!</p>
                    <p className="text-base font-serif"><i>The foregoing are PH H3 fundamentals of setting a trail. So what the hare needs to do now is find a venue, set a trail, ice the drinks down, be a good host and enjoy yourselves.</i></p>
                
                
                </div>
            

            </section>
        </div>
    )



};

export default AboutPage;
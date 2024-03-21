"use client";

import { AnimatedText } from "@/components/animatedText";
import Image from 'next/image';
import ProfilePic from "../../../public/IMG_5321.jpg";
import Link from "next/link";
import { ExternalLink } from "@/components/Icons";
import { AnimatedNumbers } from "@/components/animatedNumbers";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { LiIcon } from "@/components/liIcon";


const Paragraph = ({ text, className }: { text: string, className?: string }) => {
    const ref = useRef(null)
    
    return (
        <div ref={ref} className={`${className} max-w-lg`}>
            <LiIcon reference={ref}/>
            <motion.p initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
                {text}
            </motion.p>
        </div>
    )
}


export default function About() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "-50px start"]
        }
    )

    return (
        <div className="grow flex flex-col item-center justify-between flex-wrap w-full">
            <div className="flex lg:flex-col">
                <div className="w-1/2 flex items-center justify-center md:w-full lg:w-[75%]">

                    <Image priority className="h-[40vh] w-[80%] object-cover rounded-2xl border-2 border-solid border-zinc-600 lg:hidden md:inline-block md:h-[40vh]"
                     src={ProfilePic} alt='ProfilePic' sizes="(max-width : 768px) 100vw,(max-width : 1200px) 500vw,50vw"/>

                </div>
                <div className="w-1/2 flex flex-col items-center self-center lg:w-[90%] md:w-full">
                    <AnimatedText text={'Turning Vision Into Reality With Code And Design.'} className="!text-6xl !text-left
                                        xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl" />
                    <p className="mt-4 text-base text-slate-300 flex items-center justify-between md:text-sm">More than 4 years of successful development based on the wishes of the client and our own experience. Current focus is developing client applications using Next JS (React js).</p>
                    <div className="flex items-center self-start lg:self-center mt-8">
                        <Link href="/dummy.pdf" target={"_blank"}
                            className="flex items-center bg-slate-300 p-2.5 px-6 rounded-lg text-lg
                                font-semibold hover:bg-black hover:text-slate-300
                                border-2 border-solid border-transparent hover:border-slate-300 md:p-2 md:px-4 md:text-base"
                            download={true}
                        >Resume <ExternalLink className={"w-[20px] ml-1 md:w-[18px]"} />
                        </Link>
                        <Link href="mailto:maratzhen@gmal.com" target={"_blank"}
                            className="ml-4 text-lg font-medium capitalize text-slate-300 underline underline-offset-2 md:text-base"
                        >Contact</Link>
                    </div>
                </div>
            </div>


            <div className="my-32 flex flex-col items-center justify-center self-center w-full">
                <AnimatedText text={"passion fuels purpose!"} className="mx-auto xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl" />
                <div ref={ref} className="flex mt-16 md:flex-col md:mt-8">
                    <div className="flex grow flex-col items-start justify-start text-slate-300/75">
                        <h2 className="mb-4 text-lg font-bold uppercase ">Biography</h2>
                        <div className="relative w-[75%] lg:w-[90%] md:w-[100%]">
                            <motion.div style={{ scaleY: scrollYProgress }}
                                className="absolute -left-[2px] top-0 w-[4px] h-full bg-slate-300/75 origin-top" />
                            <div className="pl-8">
                                <Paragraph text="Hi, I`m Zhenya Ivanchik, a web developer and UI/UX designer with a passion for creating beautiful, functional,
                                    and user-centered digital experiences. With 4 years of experience in the field. I am always looking for
                                    new and innovative ways to bring my clients visions to life." className="mb-6" />

                                <Paragraph text="I believe that design is about more than just making things look pretty - it`s about solving problems and
                                    creating intuitive, enjoyable experiences for users." className="mb-6" />

                                <Paragraph text="Whether I`m working on a website, mobile app, or
                                    other digital product, I bring my commitment to design excellence and user-centered thinking to
                                    every project I work on. I look forward to the opportunity to bring my skills and passion to your next project." />
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-around mt-24">
                        <div className="flex flex-col items-center justify-center text-slate-300">
                            <span className="inline-block text-7xl font-bold">
                                <AnimatedNumbers value={4} />+
                            </span>
                            <h2 className="text-xl font-medium capitalize text-slate-300/75">Experiences</h2>
                        </div>
                        <div className="flex flex-col mt-16 items-center justify-center text-slate-300 md:mt-0">
                            <span className="inline-block text-7xl font-bold">
                                <AnimatedNumbers value={12} />+
                            </span>
                            <h2 className="text-xl font-medium capitalize text-slate-300/75">Projects</h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
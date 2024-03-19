import { AnimatedText } from "@/components/animatedText";
import Image from 'next/image'
import ProfilePic from "../../../public/IMG_5321.jpg";
import Link from "next/link";
import { ExternalLink } from "@/components/Icons";

export default function About() {
    return(
        <div className="grow flex item-center justify-between w-full">
            <div className="w-1/2 p-10 flex items-center justify-center">
                <Image className="object-cover h-50 rounded-full" src={ProfilePic} alt='ProfilePic' width={250} height={260}/>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
                <AnimatedText text={'Turning Vision Into Reality With Code And Design.'} className="!text-6xl !text-left"/>
                <p className="mt-4 px-6 text-base text-slate-300 flex items-center justify-between">More than 4 years of successful development based on the wishes of the client and our own experience. Current focus is developing client applications using Next JS (React js).</p>
                <div className="flex items-center self-start mt-2">
                    <Link href="/dummy.pdf" target={"_blank"}
                    className="flex items-center bg-slate-300 p-2.5 px-6 rounded-lg text-lg
                    font-semibold hover:bg-black hover:text-slate-300
                    border-2 border-solid border-transparent hover:border-slate-300"
                    download={true}
                    >Resume <ExternalLink className={"w-[22px] ml-1"}/>
                    </Link>
                    <Link href="mailto:maratzhen@gmal.com" target={"_blank"}
                    className="ml-4 text-lg font-medium capitalize text-slate-300 underline underline-offset-2"
                    >Contact</Link>
                </div>
            </div>
            
        </div>
    )
}
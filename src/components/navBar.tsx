"use client";

import { useEffect, useState } from "react";
import { GithubIcon, Instagram, Telegram } from "./Icons";
import { CustomLink } from "./customLink";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navigation = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "About me", href: "/about" },
    { id: 3, title: "Contact", href: "/contact" },
];

const socialLink = [
    { id: 1, titleIcon: "Github", href: "https://github.com/zhekkaq3", icon: <GithubIcon /> },
    { id: 2, titleIcon: "Telegram", href: "https://t.me/Zhekkaq3", icon: <Telegram /> },
    { id: 3, titleIcon: "Instagram", href: "https://www.instagram.com/zheniaivanchik/", icon: <Instagram /> },
]




export const NavBar: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const pathname = usePathname()
    
    useEffect(() =>{
            setIsOpen(false)     
    },[pathname])


    return (
        <header className="w-full px-24 xl:px-24 lg:px-16 md:px-12 sm:px-8 py-8 font-medium top-0 left-0 flex items-center justify-between relative">

            <button onClick={handleClick} className="flex-col justify-center items-center hidden lg:flex">
                <span className={`bg-slate-300 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-slate-300 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-slate-300 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className="w-full flex justify-between items-center lg:hidden">
                <nav className="flex items-center justify-center gap-8">
                    {navigation.map((item) => (
                        <CustomLink key={item.id} href={item.href} title={item.title} />
                    ))}
                </nav>

                <nav className="flex items-center justify-center gap-8">
                    {socialLink.map((item) => (
                        <CustomLink key={item.id} href={item.href} target={'_blank'} span={false}>
                            {item.icon}
                        </CustomLink>
                    ))}
                </nav>
            </div>

            {
                isOpen ?
                    <motion.div className="min-w-[70vw] min-h-[70vh] flex flex-col justify-between items-center z-30 
                                    fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                  bg-slate-300/75 rounded-lg backdrop-blur-md py-32"
                                    initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
                                    animate={{scale:1, opacity:1}}
                                    >
                        <nav className="flex items-center justify-center flex-col">
                            {navigation.map((item) => (
                                <CustomLink key={item.id} href={item.href} title={item.title} className={"hover:text-zinc-600 my-2"} />
                            ))}
                        </nav>

                        <nav className="flex flex-wrap w-full items-center justify-center gap-8  sm:gap-4 mt-2">
                            {socialLink.map((item) => (
                                <CustomLink key={item.id} href={item.href} target={'_blank'} span={false} className={'hover:text-zinc-500'}>
                                    {item.icon}
                                </CustomLink>
                            ))}
                        </nav>
                    </motion.div>
                    : null
            }



        </header>
    )
}
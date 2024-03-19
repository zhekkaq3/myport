"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";


export const CustomLink = ({ href, title, className = "", target = "", span = true, children }
    : { href: string, title?: string, className?: string | null, target?: string, span?:boolean, children?: React.JSX.Element }) => {
    const pathname = usePathname()

    return (
        <Link
            key={href}
            href={href}
            className={`${className} text-lg duration-500 text-zinc-500 hover:text-zinc-300 font-bold relative group`}
            target={target}
        >
            {span && <span className={`h-[1px] inline-block bg-zinc-500 
            absolute left-0 bottom-0 
            group-hover:w-full transition-[width] ease duration-300
            ${pathname === href ? 'w-full' : 'w-0'}`}
            >&nbsp;</span>}
            
            {title}

            {children}

        </Link>
    )
}
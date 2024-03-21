"use client";

import { GithubIcon, Instagram, Telegram } from "@/components/Icons";
import Link from "next/link";


const socials = [
	{
		icon: <Telegram />,
		id:1,
		href: "https://t.me/Zhekkaq3",
		label: "Telegram",
		handle: "@Zhekkaq3",
	},
	{
		icon: <Instagram />,
		id:2,
		href: "https://www.instagram.com/zheniaivanchik/",
		label: "Instagram",
		handle: "Instagram",
	},
	{
		icon: <GithubIcon />,
		id:3,
		href: "https://github.com/zhekkaq3",
		label: "Github",
		handle: "@Zhekkaq3",
	},
];

export default function Contact() {
	return (
				<div className="flex flex-row items-center justify-center md:flex-col">
					{socials.map((s) => (
							<Link
								key={s.id}
								href={s.href}
								target="_blank"
								className="relative p-16 flex flex-col items-center gap-8 duration-700 group md:p-12 md:gap-4"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<span className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</span>
							</Link>
					))}
				</div>
	);
}


import Link from "next/link";


const navigation = [
  { name: "About me", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col grow items-center justify-center overflow-hidden">
      {/* <div className="my-16 animate-fade-in"></div> */}
      <div className="hidden w-full h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
       IVANCHIK
      </h1>
      <div className="hidden w-full h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 font-bold">
          I&apos;m building Next JS application.
        </h2>
        </div>
    </div>
  );

}

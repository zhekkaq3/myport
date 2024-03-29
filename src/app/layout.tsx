import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Particles from "@/components/particles";
import PageTransitionEffect from "@/components/pageTransitionEffect";
import { NavBar } from "@/components/navBar";
import { Footer } from "@/components/footer";
import { CircularTextComponent } from "@/components/circularText";

const lato = Lato({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lato.className}>
      <body className='flex flex-col relative bg-black bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen w-full'>
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        <NavBar />     
        {/* <PageTransitionEffect> */}
        <div className="grow flex flex-col items-center justify-center p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8">
          {children}
        </div> 
        {/* </PageTransitionEffect> */}
        <Footer />
        <CircularTextComponent />

      </body>
    </html>
  );
}

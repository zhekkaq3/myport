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
      <body className='flex flex-col bg-black bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen w-full'>
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        <NavBar />     
        {/* <PageTransitionEffect> */}
          {children}
        {/* </PageTransitionEffect> */}
        <Footer />
        <CircularTextComponent />

      </body>
    </html>
  );
}

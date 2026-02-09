"use client";

import { useState } from "react";
import AnimatedContent from "@/components/animated-content";
import Image from "next/image";
import CustomIcon from "@/components/custom-icon";
import WaitlistModal from "@/components/waitlist-modal";
import cashfeed from "@/app/cashfeed.webp";
import starapps from "@/app/starappsventures_logo.jpeg";
import { ArrowRight, HeartPulse, StarIcon, Twitter, Facebook } from "lucide-react";
import RainBowButton from "@/components/rainBowButton";

export default function HeroSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-[url('/assets/hero-gradient-bg.png')] bg-cover bg-center bg-no-repeat px-4 md:px-16 lg:px-24 xl:px-32">
      <div className="absolute inset-0 bg-black/10" /> {/* soft overlay */}
      <div className="relative max-w-7xl mx-auto flex flex-col items-center justify-center h-screen z-10">

        {/* Social proof */}
        <AnimatedContent
          reverse
          distance={30}
          className="flex items-center gap-2 bg-white/50 backdrop-blur p-1 rounded-full mb-4"
        >
          <div className="flex items-center -space-x-3">
            <Image src={cashfeed} alt="Company 1" className="w-7 h-7 rounded-full border-2 border-white"/>
            <Image src={starapps} alt="Company 2" className="w-7 h-7 rounded-full border-2 border-white"/>
          </div>
          <div className="h-5 w-px mx-1 bg-white rounded-full" />
          <span className="text-sm md:text-base font-medium">Used by local businesses</span>
          <div className="h-5 w-px mx-1 bg-white rounded-full" />
          <div className="flex items-center gap-1 pr-3">
            <StarIcon className="w-4.5 h-4.5 fill-orange-500 stroke-orange-500" />
            <span className="text-sm font-semibold">4.7</span>
          </div>
        </AnimatedContent>

        {/* Headline */}
        <AnimatedContent distance={30} delay={0.1} className="relative flex flex-col items-center">
          <h1 className="text-center font-urbanist font-bold max-w-5xl md:max-w-6xl text-5xl sm:text-6xl md:text-6xl leading-tight">
            <span className="block md:whitespace-nowrap">Stay visible on social media</span>
            <span className="text-orange-500 block md:whitespace-nowrap">without spending your own time.</span>
          </h1>
          <div className="absolute -top-6 right-0 hidden md:block">
            <CustomIcon icon={HeartPulse} dir="right" />
          </div>
        </AnimatedContent>

        {/* Subheadline */}
        <AnimatedContent distance={30} delay={0.2}>
          <p className="mt-6 text-center text-xl md:text-xl text-gray-700 font-regular max-w-xl">
            We automatically create and post every week for your business. No hassle. No marketing knowledge needed.
          </p>
        </AnimatedContent>



      </div>
      
      {/* Waitlist modal */}
      <WaitlistModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
"use client";

import { useState } from "react";
import AnimatedContent from "@/components/animated-content";
import CustomIcon from "@/components/custom-icon";
import { StarIcon, HeartPulse } from "lucide-react";
import Image from "next/image";
import cashfeed from "@/app/cashfeed.webp";
import starapps from "@/app/starappsventures_logo.jpeg";

export default function HeroSection() {

  const [open, setOpen] = useState(false);

  return (
    <section className="bg-[url('/assets/hero-gradient-bg.png')] bg-cover bg-center bg-no-repeat px-4 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center h-screen">
        <AnimatedContent
          reverse
          distance={30}
          className="flex items-center gap-2 bg-white/50 backdrop-blur p-1 rounded-full"
        >
          <div className="flex items-center -space-x-3">
            <Image
              src={cashfeed}
              alt="Company 1"
              className="w-7 h-7 rounded-full border-2 border-white"
            />
            <Image
              src={starapps}
              alt="Company 2"
              className="w-7 h-7 rounded-full border-2 border-white"
            />
          </div>
          <div className="h-5 w-px mx-1 bg-white rounded-full" />
          <span>Used by local businesses</span>
          <div className="h-5 w-px mx-1 bg-white rounded-full" />
          <div className="flex items-center gap-1 pr-3">
            <StarIcon className="size-4.5 fill-orange-500 stroke-orange-500" />
            <span>4.9</span>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={30} delay={0.1} className="relative">
          <h1 className="text-center font-urbanist font-bold max-w-5xl md:max-w-6xl text-5xl sm:text-6xl md:text-6xl leading-tight">
            <span className="block md:whitespace-nowrap">
              Stay visible on social media
            </span>
            <span className="text-orange-500 block md:whitespace-nowrap">
              without spending your own time.
            </span>
          </h1>
          <div className="absolute -top-5 right-13 hidden md:block">
            <CustomIcon icon={HeartPulse} dir="right" />
          </div>
        </AnimatedContent>

        <AnimatedContent distance={30} delay={0.2}>
          <p className="text-center text-base/7 text-zinc-500 max-w-lg mt-4">
            We automatically create and post every week for your business. No
            hassle. No marketing knowledge needed.
          </p>
        </AnimatedContent>

        <AnimatedContent className="flex flex-col md:flex-row items-center gap-4 mt-6 w-full md:w-auto">
          <button 
            onClick={() => setOpen(true)}
            className="cursor-pointer relative py-3 md:py-2.5 w-full md:w-auto px-8 bg-white/50 text-gray-600 font-medium text-center border border-white rounded-full"
          >
            Join waitinglist
            <AnimatedContent
              direction="horizontal"
              className="absolute size-8 pointer-events-none right-0 top-full -translate-y-1/2"
            >
              <Image
                src="/assets/mouse-arrow.svg"
                alt="mouse-arrow"
                width={24}
                height={24}
              />
            </AnimatedContent>
          </button>
        </AnimatedContent>
      </div>
          {open && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        
        {/* Modal container */}
        <div className="relative w-[95%] md:w-[800px] h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
          
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="cursor-pointer absolute top-3 right-3 z-10 bg-black/70 text-white rounded-full px-3 py-1 text-sm hover:bg-black"
          >
            ✕
          </button>

          {/* Tally iframe */}
          <iframe
            src="https://tally.so/r/5B1zrQ?transparentBackground=1"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Join waiting list"
          />
        </div>
      </div>
    )}

    </section>
    
  );
}




"use client";

import { useState, useEffect } from "react";
import AnimatedContent from "@/components/animated-content";
import { ArrowRight } from "lucide-react";
import pulsy from '@/public/assets/pulsy-hi.png';
import { useModal } from "@/context/modal-context";

const ROTATING_TEXTS = [
  "without spending your own time.",
  "at a fraction of the cost.",
  "on autopilot, 24/7.",
  "built for busy businesses.",
];

export default function HeroSection() {
  const [textIndex, setTextIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const { openModal } = useModal();

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % ROTATING_TEXTS.length);
        setFade(true);
      }, 1000);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-3 sm:px-4 md:px-8 pt-6 sm:pt-8 pb-0">
      <section className="relative rounded-2xl sm:rounded-3xl bg-linear-to-tl from-orange-300 to-orange-500 overflow-hidden">

        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[85vh] sm:min-h-[80vh] md:min-h-[75vh] pt-28 sm:pt-36 md:pt-40 pb-56 sm:pb-52 md:pb-48 px-5 sm:px-8 md:px-16 lg:px-24 xl:px-32">

          {/* Badge */}
          <AnimatedContent distance={20} delay={0}>
            <a className="flex items-center gap-2 border border-gray-200 rounded-full p-1 pr-3 text-xs text-orange-500 transition bg-white mb-6 sm:mb-8">
              <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                NEW
              </span>
              <span className="text-xs">The world's first AI marketing employee for SMBs</span>
            </a>
          </AnimatedContent>

          {/* Heading */}
          <AnimatedContent distance={30} delay={0.1} className="relative w-full">
            <h1 className="text-center font-urbanist font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.15]">
              <span className="font-urbanist block md:whitespace-nowrap text-zinc-900">
                Your full-time marketing manager.
              </span>
              <span
                className={`text-white block md:whitespace-nowrap mt-1 md:mt-0 transition-all duration-1000 ease-in-out font-urbanist text-3xl sm:text-4xl md:text-6xl ${
                  fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                {ROTATING_TEXTS[textIndex]}
              </span>
            </h1>
          </AnimatedContent>

          {/* Paragraph */}
          <AnimatedContent distance={30} delay={0.2}>
            <p className="text-center text-white/80 max-w-sm sm:max-w-md mt-6 sm:mt-8 mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed px-2 sm:px-0">
              Equip your team with Pulsy, the AI agent that creates high-quality content and boosts your social presence.
            </p>
          </AnimatedContent>

          {/* CTA Button */}
          <AnimatedContent distance={20} delay={0.3}>
            <button
              onClick={openModal}
              className="cursor-pointer flex items-center justify-center py-3.5 px-8 sm:px-10 border border-orange-200 bg-linear-to-tl from-orange-600 to-orange-500 text-white rounded-full font-medium transition-transform active:scale-95 text-sm sm:text-base"
            >
              Hire pulsy
              <ArrowRight className="ml-2" size={16} />
            </button>
          </AnimatedContent>
        </div>

        {/* Pulsy pinned to bottom-center */}
        <div className="absolute bottom-0 left-1/2 sm:left-[60%] md:left-2/3 -translate-x-1/2 z-10 pointer-events-none">
          <img
            src={pulsy.src}
            alt="Pulsy mascot"
            className="w-44 sm:w-56 md:w-72 -mb-4 sm:-mb-6 object-contain"
          />
        </div>

      </section>
    </div>
  );
}




'use client';

import React from 'react';
import SectionTitle from "@/components/section-title";
import pulsy from "@/public/assets/pulsy-fly.png";

const MeetPulseSection: React.FC = (): React.ReactElement => {
  return (
    <div className="bg-white">
      <section id="meet-pulsy" className="py-20 px-4 md:px-16 lg:px-24 xl:px-32 max-w-7xl mx-auto">

        <div className="text-center mb-16 flex flex-col items-center gap-6">
          <span className="bg-linear-to-tr from-orange-300 to-orange-500 text-white text-xs px-3 py-1 rounded-full">
            Meet Pulsy
          </span>
          <SectionTitle
            title="Meet Pulsy, your AI marketing employee."
            subtitle="Your full-time employee who works 24/7, knows your brand from day one, and never calls in sick."
          />
        </div>

        <div className="relative w-full overflow-hidden mx-auto border border-white flex flex-col md:flex-row items-center justify-between bg-linear-to-tl from-orange-300 to-orange-500 rounded-3xl p-6 sm:p-8 md:p-10 text-white">

          {/* Decorative Background Glows */}
          <div className="absolute pointer-events-none top-10 -z-1 left-20 size-64 bg-gradient-to-br from-[#536DFF] to-[#F046FF] blur-[180px]"></div>
          <div className="absolute pointer-events-none bottom-10 -z-1 right-20 size-64 bg-gradient-to-br from-[#536DFF] to-[#F046FF] blur-[180px]"></div>

          {/* Text content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:max-w-xl">
            <a className="flex items-center gap-2 border border-gray-200 rounded-full p-1 pr-3 text-xs text-orange-500 transition bg-white/50 mb-6">
              <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                NEW
              </span>
              <p className="text-white text-xs">
                The first AI marketing employee for SMBs
              </p>
            </a>

            <h2 className="text-2xl sm:text-3xl font-medium mt-2">
              He runs your social media.
            </h2>

            <p className="text-sm sm:text-base mt-4 text-white/80 font-light leading-relaxed">
              Pulsy knows your business from day one. He writes, designs, schedules, and publishes every week. You never write a brief. You never open a dashboard. You just approve.
            </p>

            <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 w-full">
              {[
                "Works 24/7",
                "Knows your brand",
                "Never needs briefing",
                "Posts while you sleep",
                "Gets better over time",
                "Cheaper than a day rate",
              ].map((text, index) => (
                <span
                  key={index}
                  className="bg-white/10 text-white text-xs px-3 py-2 rounded-full text-center font-bold border border-white/20"
                >
                  {text}
                </span>
              ))}
            </div>
          </div>

          {/* Pulsy image */}
          <div className="mt-8 md:mt-0 md:-mr-10 lg:-mr-40 flex justify-center shrink-0">
            <img
              src={pulsy.src}
              alt="Pulsy mascot"
              className="w-48 sm:w-56 md:w-64 lg:max-w-xs -rotate-12 md:-rotate-20 object-contain"
            />
          </div>

        </div>
      </section>
    </div>
  );
};

export default MeetPulseSection;
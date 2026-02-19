'use client';

import React, { JSX } from 'react';
import SectionTitle from "@/components/section-title";
import pulsy from "@/public/assets/pulsy-fly.png";

interface FeatureItem {
  title: string;
  description: string;
  step: string;
  accent: string;
}

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
        <div className="relative max-w-5xl py-20  md:w-full overflow-hidden mx-2 md:mx-auto border border-white flex flex-col md:flex-row items-center justify-between bg-linear-to-tl from-orange-300 to-orange-500  rounded-3xl p-4 md:p-10 text-white">
                {/* Decorative Background Glows */}
                <div className="absolute pointer-events-none top-10 -z-1 left-20 size-64 bg-gradient-to-br from-[#536DFF] to-[#F046FF] blur-[180px]"></div>
                <div className="absolute pointer-events-none bottom-10 -z-1 right-20 size-64 bg-gradient-to-br from-[#536DFF] to-[#F046FF] blur-[180px]"></div>
                
                <div className="flex flex-col items-center md:items-start max-md:text-center">
                    <a className="flex items-center gap-2 border border-gray-200 rounded-full p-1 pr-3 text-xs font-regular text-orange-500 transition bg-white/50 mb-8">
                        <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                            NEW
                        </span>
                        <p className="flex items-center gap-1 text-white">
                            <span>The world's first AI marketing employee for SMBs</span>
                        </p>
                    </a>
                    
                    <h1 className="text-3xl font-medium max-w-xl mt-5 bg-clip-text">
                      He runs your social media.
                    </h1>
                    
                    <p className="text-base max-w-lg mt-4 text-white/80 font-light">
                      Pulsy knows your business from day one. He writes, designs, schedules, and publishes every week. You never write a brief. You never open a dashboard. You just approve.
                    </p>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
                        {[
                            "Works 24/7",
                            "Knows your brand",
                            "Never needs briefing",
                            "Posts while you sleep",
                            "Gets better over time",
                            "Costs less than a day rate"
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

                <div className="md:-mr-40 max-md:mt-10">
                <img 
                        className="max-w-xs md:max-w-xs -rotate-20" 
                        src={pulsy.src}
                    />
                </div>
            </div>
      </section>
    </div>
  );
};

export default MeetPulseSection;
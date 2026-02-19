'use client';

import React from 'react';
import SectionTitle from "@/components/section-title";
import AnimatedContent from "@/components/animated-content";
import { ArrowRight } from "lucide-react";
import pulsy from "@/public/assets/pulsy-up.png";
import { useModal } from "@/context/modal-context";

const HirePulsySection: React.FC = (): React.ReactElement => {
  const { openModal } = useModal();

  return (
    <div className="bg-white">
      <section className="py-20 px-4 md:px-16 lg:px-24 xl:px-32 max-w-7xl mx-auto flex flex-col items-center">

        {/* Header Section */}
        <div className="text-center mb-10 flex flex-col items-center gap-6">
          <SectionTitle
            title="Boost your social presence"
            subtitle="What are you waiting for? Get started with Pulsy and watch your social media grow like never before."
          />
        </div>

        <AnimatedContent distance={20} delay={0.3}>
          <button
            onClick={openModal}
            className="cursor-pointer flex items-center justify-center py-3.5 px-10 border border-orange-200 bg-linear-to-tl from-orange-600 to-orange-500 text-white rounded-full font-medium transition-transform active:scale-95"
          >
            Hire pulsy
            <ArrowRight className="ml-2" size={16} />
          </button>
        </AnimatedContent>

        {/* Image Section */}
        <div className="flex justify-center w-full ml-40 -mt-2">
          <div
            className="relative"
            style={{
              maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
            }}
          >
            <img
              src={pulsy.src}
              alt="Pulsy Mascot"
              className="max-w-xs md:max-w-xs h-auto"
            />
          </div>
        </div>

      </section>
    </div>
  );
};

export default HirePulsySection;
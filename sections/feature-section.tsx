'use client';

import React, { JSX } from 'react';
import SectionTitle from "@/components/section-title";
import { RefreshCcw, MessageCircle, Fingerprint, Layers, PiggyBank, ShieldCheck} from 'lucide-react';

interface FeatureItem {
  title: string;
  description: string;
  image: string;
  icon?: JSX.Element;
}

const FeaturesSection: React.FC = (): React.ReactElement => {
  const featuresData: FeatureItem[] = [
    {
      title: "Always posting.",
      description: "Every week, without fail. Whether you send something or not, Pulse keeps your business visible while you focus on running it.",
      icon: <RefreshCcw className="w-5 h-5 text-orange-500"  />,
    },
    {
      title: "Just Message.",
      description: "No tools to learn. No dashboards to manage. Send Pulse a photo or a voice note and she handles everything from there.",
      icon: <MessageCircle className="w-5 h-5 text-orange-500"  />,
    },
    {
      title: "Sounds like you.",
      description: "Not generic AI content. Pulse learns your voice, your customers, your industry. Every post feels like you wrote it on your best day.",
      icon: <Fingerprint className="w-5 h-5 text-orange-500"  />,
    },
    {
      title: "Every platform.",
      description: "One message becomes three platform-native posts. LinkedIn, Instagram, Facebook. Each written the right way for that audience.",
      icon: <Layers className="w-5 h-5 text-orange-500"  />,
    },
    {
      title: "Cheaper than coffee.",
      description: "Less than your monthly Spotify. No agency fees, no freelancer invoices, no hiring. Just results — every single week.",
      icon: <PiggyBank className="w-5 h-5 text-orange-500"  />,
    },
    {
      title: "You stay in control.",
      description: "Pulse sends you a preview before anything goes live. One tap to approve. You are always the final say without any of the work.",
      icon: <ShieldCheck className="w-5 h-5 text-orange-500"  />,
    },
  ];

  return (
    <div className="bg-white">
      <section id="features" className="py-20 px-4 md:px-16 lg:px-24 xl:px-32 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-6">
          <span className="bg-linear-to-tr from-orange-300 to-orange-500 text-white text-xs px-3 py-1 rounded-full">
            Features
          </span>
          <SectionTitle
            title="Your social media superpowers."
            subtitle="Everything you’re currently doing across five different tabs, now in one pulse."
          />
        </div>

        <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl w-full border border-zinc-200 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {featuresData.map((feature, index) => {
              const totalItems = featuresData.length;

              // At each breakpoint, determine cols and derive border needs
              // We always show border-b unless it's the last item in that column layout
              // We always show border-r unless it's the last column in that layout
              // Tailwind can't do dynamic cols, so we handle per-breakpoint with responsive classes

              // 1 col (default): border-b on all except last item, never border-r
              const isLastItem = index === totalItems - 1;

              // 2 cols (sm): last row = last 2 items (indexes 4,5), right col = odd indexes
              const isLastRowSm = index >= totalItems - 2;
              const isLastColSm = (index + 1) % 2 === 0;

              // 3 cols (md): last row = last 3 items (indexes 3,4,5), right col = indexes 2,5
              const isLastRowMd = index >= totalItems - 3;
              const isLastColMd = (index + 1) % 3 === 0;

              return (
                <div
                  key={index}
                  className={`relative p-6 md:p-8 flex flex-col gap-4 transition-all duration-300 cursor-pointer bg-white hover:bg-linear-to-b hover:from-white hover:to-orange-100
                    ${!isLastItem ? 'border-b' : ''}
                    ${isLastRowSm ? 'sm:border-b-0' : 'sm:border-b'}
                    ${isLastColSm ? 'sm:border-r-0' : 'sm:border-r'}
                    ${isLastRowMd ? 'md:border-b-0' : 'md:border-b'}
                    ${isLastColMd ? 'md:border-r-0' : 'md:border-r'}
                    border-zinc-200
                  `}
                >
                  <div className="flex items-center gap-2.5 mb-1">
                    <div>{feature.icon}</div>
                    <h3 className="text-sm font-medium text-gray-800 leading-snug">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </section>
    </div>
  );
};

export default FeaturesSection;

{/*
  
          <div className="space-y-6">          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuresData.slice(0, 2).map((feature: FeatureItem, index: number) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-200 transition-all duration-300 flex flex-col h-full"

                <div className="relative w-full h-72  overflow-hidden">
                </div>


                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 text-base leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuresData.slice(2, 5).map((feature: FeatureItem, index: number) => (
              <div
                key={index + 2}
                className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-200 transition-all duration-300 flex flex-col h-full"
              >

                <div className="relative w-full h-56 overflow-hidden">


                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
  
  
  */}
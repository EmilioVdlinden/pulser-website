'use client';

import React from 'react';
import SectionTitle from "@/components/section-title";
import HowItWorksOne from "@/public/assets/how-it-works-1.svg";
import HowItWorksTwo from "@/public/assets/how-it-works-2.svg";
import HowItWorksThree from "@/public/assets/how-it-works-3.svg";

interface FeatureItem {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const HowItWorksSection: React.FC = () => {
  const featuresData: FeatureItem[] = [
    {
      title: "Pulsy learns your business",
      description: "Connect your website and socials once. Pulsy reads your tone, industry, and brand. Under 5 minutes. You'll never repeat this.",
      image: HowItWorksOne,
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
        </svg>
      ),
    },
    {
      title: "Send an update. Or don't.",
      description: "A photo, a promo, yesterday's news or silence. Pulsy generates from your reviews and website automatically. Posts go out either way.",
      image: HowItWorksTwo,
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    },
    {
      title: "One tap. Live everywhere.",
      description: "You hired Pulsy once. Now he runs every week — writing, designing, publishing. The only thing he'll ever ask: one tap to approve.",
      image: HowItWorksThree,
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white">
      <section id="how-it-works" className="py-20 px-4 md:px-16 lg:px-24 xl:px-32 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-6">
          <span className="bg-linear-to-tr from-orange-300 to-orange-500 text-white text-xs px-3 py-1 rounded-full">
            How it works
          </span>
          <SectionTitle
            title="Three steps, that's it"
            subtitle="Set it up once. After that, it runs itself."
          />
        </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuresData.slice(0, 3).map((feature, index) => {
          const isThirdItem = index === 2;

          return (
            <div
              key={index}
              className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-200 flex flex-col h-full transition-all duration-300"
            >
              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="flex items-center justify-center w-8 h-8 bg-linear-to-tl from-orange-400 to-orange-600 text-white rounded-md border border-white text-sm font-bold mb-4">
                  {index + 1}
                </span>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>

              {/* Image Container */}
              <div className={`relative w-full ${isThirdItem ? 'h-40' : 'h-40 p-3 pt-0'}`}>
                <img
                  src={feature.image.src}
                  alt={feature.title}
                  className={
                    isThirdItem
                      ? "absolute bottom-0 left-0 w-full h-auto block -mb-2" // The "Stick" logic
                      : "w-full h-full object-contain"               // The "Centered" logic
                  }
                />
              </div>
            </div>
          );
        })}
      </div>
      </section>
    </div>
  );
};

export default HowItWorksSection;
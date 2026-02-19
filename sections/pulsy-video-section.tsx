"use client";

import AnimatedContent from "@/components/animated-content";

export default function PulsyVideoSection() {
  return (
    <section className="bg-white py-12">
      <div className="flex justify-center">
        <AnimatedContent 
          distance={40} 
          delay={0.4} 
          className="w-full max-w-xs md:max-w-md mx-4 md:mx-0 -mt-5"
        >
          {/* Container with Masking for the smooth white transition */}
          <div 
            className="relative overflow-hidden"
            style={{
              maskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)'
            }}
          >
            <video
              src="/assets/pulsy-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover"
            />
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
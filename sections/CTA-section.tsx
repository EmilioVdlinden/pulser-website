'use client';
import AnimatedContent from "@/components/animated-content";
import { useModal } from "@/context/modal-context";
import { ArrowRight } from "lucide-react";

export default function CTA() {

  const { openModal } = useModal();

  return (
      <>
        <div className="mb-20 max-w-5xl py-16 mx-auto md:pl-20 md:w-full flex flex-col gap-6 items-start justify-between text-left bg-linear-to-tl from-orange-300 to-orange-500 rounded-2xl mt-20 text-white">
            <div>
              
                <h1 className="text-3xl md:text-5xl md:leading-[60px] font-semibold bg-gradient-to-r from-white to-white/60 text-transparent bg-clip-text">
                Hire your first digital marketeer.
                </h1>
                <p className="bg-gradient-to-r from-white to-white/80 text-transparent bg-clip-text text-lg">
                Let Pulser handle it. Post 3-4x per week on autopilot. Try free for 7 days - no credit card required.
                </p>
            </div>
            <AnimatedContent distance={20} delay={0.3}>
              <button
                onClick={openModal}
                className="cursor-pointer flex items-center justify-center py-3 px-8 border border-orange-200 bg-linear-to-tl from-orange-600 to-orange-500 text-white rounded-full font-medium transition-transform active:scale-95"
              >
                Hire pulsy
                <ArrowRight className="ml-2" size={16} />
              </button>
            </AnimatedContent>
        </div>
      </>
  );
};
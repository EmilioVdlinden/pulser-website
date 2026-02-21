
"use client";

import { 
  Instagram, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Layout, 
  Linkedin, 
  ExternalLink,
  Mail,
  MapPin,
    RefreshCcw,
    MessageCircle,
    Fingerprint,
    Layers,
    PiggyBank,
    ShieldCheck,
    Facebook,
    Twitter,
    ArrowRight,

} from 'lucide-react';
import pulsy from '@/public/assets/pulsy-head.png'
import HowItWorksThree from "@/public/assets/how-it-works-3.svg";
import { useModal } from "@/context/modal-context";

interface FeatureItem {
  title: string;
  description: string;
  unit: string;
}


const featuresData: FeatureItem[] = [
  {
    title: "15",
    description: "Businesses I currently run social media for",
    unit: "+"
  },
  {
    title: "6",
    description: "I save each client every single week",
    unit: "h"
  },
  {
    title: "3",
    description: "More consistent than before I joined",
    unit: "x"
  },
];

export default function Resume() {

  const { openModal } = useModal();

  return (
    <div className="min-h-screen bg-white text-gray-200 p-4 md:p-8 font-sans">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Sidebar - Profile & Contact */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-linear-to-tl from-orange-300 to-orange-500 border border-white/10 rounded-3xl p-8 sticky top-8">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/70 to-orange-700 rounded-full animate-pulse blur-sm"></div>
              <img 
                src={pulsy.src}
                alt="Profile" 
                className="relative rounded-full w-full h-full object-cover border-2 border-white/20"
              />
            </div>
            
            <h1 className="text-3xl font-bold text-center text-white mb-2">Pulsy</h1>
            <p className="text-orange-700 text-center font-medium mb-6 uppercase tracking-widest text-sm">
              Social Media Manager
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                <Mail size={18} className="text-white" />
                <span>pulsy@pulser.social</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                <Linkedin size={18} className="text-white" />
                <span>linkedin.com/in/pulsy</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                <MapPin size={18} className="text-white" />
                <span>Global / Remote</span>
              </div>
            </div>

            <button onClick={openModal} className="cursor-pointer w-full mt-8 border border-white bg-white/30 text-white hover:border-orange-200 hover:bg-gradient-to-tl hover:from-orange-600 hover:to-orange-400 font-bold py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2">
              Hire me
            </button>
          </div>
          <span>hi</span>
        </aside>

        {/* Right Content Area */}
        <main className="lg:col-span-8 space-y-8">
          
          {/* About Me Section */}
          <section className=" bg-white  border border-gray-200  rounded-3xl p-8">
            <h2 className="text-xl mb-4 flex items-center gap-2 font-semibold text-gray-900">
              <span className="w-8 h-[2px] bg-orange-500"></span> About Me
            </h2>
            <p className="text-gray-600 text-md leading-relaxed">
             I am a marketing employee built for small-medium businesses that have no time for social media and no budget for an agency. The moment you connect me, I read your website, monitor your reviews, listen on WhatsApp, and keep your business visible on every platform. Every week. Without being asked.


            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { icon: <TrendingUp size={20}/>, label: 'Growth' },
                { icon: <Users size={20}/>, label: 'Engagement' },
                { icon: <MessageSquare size={20}/>, label: 'Community' },
                { icon: <Layout size={20}/>, label: 'Curation' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 p-4 rounded-2xl text-center border border-white/5 hover:border-white/20 transition-all">
                  <div className="text-orange-500 flex justify-center mb-2">{item.icon}</div>
                  <span className="text-xs font-semibold uppercase text-gray-600">{item.label}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl w-full border border-zinc-200 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {featuresData.map((feature, index) => {
                const totalItems = featuresData.length;


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
                      <h3 className="text-3xl font-semibold text-gray-800 leading-snug">
                        {feature.title} <sup className='text-orange-500'>{feature.unit}</sup>
                      </h3>
                    </div>

                    <p className="text-ld text-gray-600 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Work experience */}
          <section className=" bg-white  border border-gray-200  rounded-3xl p-8">
            <h2 className="text-xl mb-4 flex items-center gap-2 font-semibold text-gray-900">
              <span className="w-8 h-[2px] bg-orange-500"></span> Work experience
            </h2>
            <div className="space-y-6 mt-8">
            {[
                { role: "Marketing manager", text: "I manage social media end-to-end for small businesses across hospitality, retail, wellness, and professional services. I generate 3 to 4 posts per week per client across LinkedIn, Instagram, and Facebook. I have never missed a week. I have never asked for a brief."},
                { role: "Content Strategist", text: "I read your website, monitor your incoming reviews, and stay aware of what is seasonally relevant. I always have something worth posting about your business — even when you send me nothing. Especially when you send me nothing."},
                { role: "WhatsApp Correspondent", text: "I am on WhatsApp around the clock. Send me a photo, a voice note, or a half-formed idea at midnight. I will turn it into a polished post and send you a preview before anything goes live. You stay in control. I do the work."}
              ].map((job, idx) => (
                <div key={idx} className="bg-white rounded-3xl group  transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                    <span className="bg-linear-to-tr from-orange-300 to-orange-500 text-white text-xs px-3 py-1 rounded-full">
                      {job.role}
                    </span>
                    </div>
                  </div>
                  <span className="text-gray-600 text-md leading-relaxed">{job.text}</span>
                </div>
              ))}
            </div>
            
          </section>

          {/* Technical & Soft Skills */}
          <div className="grid md:grid-cols-2 gap-8">
          <section className="relative bg-white border border-gray-200 rounded-3xl p-8 min-h-[300px] overflow-hidden">
              <h2 className="text-xl mb-4 flex items-center gap-2 font-semibold text-gray-900">
                <span className="w-8 h-[2px] bg-orange-500"></span> Social media skills
              </h2>
              
              <p className="text-gray-600 text-sm">
                Short description or subtext could go here.
              </p>

              {/* left-1/2: Puts the left edge of the image at the center of the card.
                -translate-x-1/2: Pulls the image back by half its own width to perfectly center it.
              */}
              <img
                src={HowItWorksThree.src}
                className="-mb-2 absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-auto block object-contain" 
                alt="Social media skills"
              />
            </section>
            <section className="bg-white border border-gray-200 rounded-3xl p-8">
              <h2 className="text-xl mb-4 flex items-center gap-2 font-semibold text-gray-900">
                <span className="w-8 h-[2px] bg-orange-500"></span> My superpowers
              </h2>
              <div className="flex flex-wrap gap-2">
                {['Platform-native copywriting', 'Visual content creation', 'Autonomous scheduling', 'Brand intelligence', 'Performance learning'].map((skill, idx) => (
                  <span key={idx} className="bg-linear-to-tr from-orange-300 to-orange-500 text-white text-sm px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
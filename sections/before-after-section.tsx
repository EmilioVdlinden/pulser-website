'use client';

import React from 'react';
import SectionTitle from "@/components/section-title";

const before = [
  {
    title: "The week disappears.",
    body: "Monday becomes Friday. You meant to post something. You didn't. It happens every week.",
  },
  {
    title: "So you try an agency.",
    body: "€1500 a month. Three weeks to onboard. They still ask you to write the brief.",
  },
  {
    title: "Your feed goes quiet.",
    body: "Customers check your Instagram before they call. A dead feed is a closed door.",
  },
  {
    title: "Nothing ever changes.",
    body: "You know you should be posting. You just never do. And the guilt compounds.",
  },
];

const after = [
  {
    title: "Pulse never forgets.",
    body: "Every week, posts go out. Whether you remembered or not.",
  },
  {
    title: "Your only job is WhatsApp.",
    body: "Send a photo. Send nothing. Either way, Pulse figures it out.",
  },
  {
    title: "Visibility builds on itself.",
    body: "One consistent month beats twelve sporadic ones. Pulse keeps the streak alive.",
  },
  {
    title: "The guilt is gone. For good.",
    body: "Not because you got better at posting. Because you stopped needing to.",
  },
];

const BeforeAfterSection: React.FC = (): React.ReactElement => {
  return (
    <div className="bg-[#FDFAF6]">
      <section className="py-24 px-4 md:px-16 lg:px-24 xl:px-32 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <span className="bg-orange-500 text-white text-[11px] font-semibold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full">
            The reality
          </span>
          <SectionTitle
            title="The Pulser effect."
            subtitle="Most businesses aren't bad at social media. They just never have time for it. Pulse removes the task entirely."
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Before */}
          <div className="rounded-2xl border border-black/[0.07] bg-white p-8 flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-zinc-400">
                Without Pulser
              </span>
            </div>

            <div className="flex flex-col gap-6">
              {before.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="pt-[3px] shrink-0">
                    <div className="w-5 h-5 rounded-full border border-zinc-200 bg-zinc-50 flex items-center justify-center">
                      <span className="text-zinc-300 text-[10px]">✕</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-zinc-800 mb-1 leading-snug">
                      {item.title}
                    </p>
                    <p className="text-[13px] text-zinc-400 leading-relaxed font-light">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div className="rounded-2xl bg-[#0D0C0A] p-8 flex flex-col gap-8 relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-orange-500/10 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-orange-500/8 blur-[60px] pointer-events-none" />

            <div className="flex items-center gap-3 relative z-10">
              <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(240,78,15,0.6)]" />
              <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-orange-500/80">
                With Pulser
              </span>
            </div>

            <div className="flex flex-col gap-6 relative z-10">
              {after.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="pt-[3px] shrink-0">
                    <div className="w-5 h-5 rounded-full bg-orange-500/15 border border-orange-500/25 flex items-center justify-center">
                      <span className="text-orange-400 text-[10px] font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-white mb-1 leading-snug">
                      {item.title}
                    </p>
                    <p className="text-[13px] text-white/40 leading-relaxed font-light">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default BeforeAfterSection;
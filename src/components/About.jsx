import React from 'react';
import { Sparkles, Users, Eye, CheckCircle2 } from 'lucide-react';
import { studioInfo, principles } from '../data/content';
import ImageWithFallback from './ImageWithFallback';

export default function About() {
  const principleIcons = [
    <Sparkles key="p1" className="w-5 h-5 text-[#4F46E5]" />,
    <Users key="p2" className="w-5 h-5 text-[#4F46E5]" />,
    <Eye key="p3" className="w-5 h-5 text-[#4F46E5]" />,
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#F8F7F4] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-[#4F46E5]" />
          <span className="text-xs uppercase tracking-widest text-[#4F46E5] font-bold">
            About Our Studio
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight mb-12 sm:mb-16 max-w-2xl">
          {studioInfo.aboutHeading}
        </h2>

        {/* Main Two-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Visual Studio Atmosphere */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="space-y-6">
              
              {/* Studio Workspace Image */}
              <div className="rounded-3xl overflow-hidden bg-white p-3 shadow-md border border-black/[0.06]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern creative agency workspace with natural light"
                  aspectRatio="aspect-[4/3]"
                  className="rounded-2xl"
                />
              </div>

              {/* Our Approach Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.06] shadow-xs">
                <h3 className="text-lg font-bold text-[#171717] mb-3">
                  Our Approach
                </h3>
                <p className="text-sm sm:text-base text-[#666666] leading-relaxed mb-6">
                  We don't believe in assembly-line development. Every collaboration is intentional, focused on deep understanding, rapid prototyping, and high-fidelity execution.
                </p>

                <div className="space-y-3">
                  {[
                    "Direct access to senior designers and developers",
                    "Rigorous user research before prototyping",
                    "Clean, standards-compliant modern codebase"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#4F46E5] shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-[#171717]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Studio Intro, Philosophy & 3 Principles */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-10">
            
            {/* Core Manifesto Text */}
            <div className="space-y-6">
              <p className="text-xl sm:text-2xl text-[#171717] font-semibold leading-relaxed">
                {studioInfo.aboutText}
              </p>
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                By intentionally staying lean and agile, we eliminate layers of bureaucracy. You work directly with the creative and technical minds building your experience, ensuring the original vision never gets lost in translation.
              </p>
            </div>

            {/* Three Core Principles */}
            <div className="pt-6 border-t border-black/[0.08]">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest text-[#666666] font-bold">
                  Our Core Principles
                </span>
                <p className="text-sm text-[#666666] mt-1">
                  Three pillars that anchor every digital decision we make.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {principles.map((principle, index) => (
                  <div
                    key={principle.title}
                    className="group bg-white rounded-2xl p-5 sm:p-6 border border-black/[0.06] hover:border-[#4F46E5]/30 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#EEECFF] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                        {principleIcons[index]}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xs font-mono font-bold text-[#4F46E5]">
                            {principle.number}
                          </span>
                          <h4 className="text-base sm:text-lg font-bold text-[#171717]">
                            {principle.title}
                          </h4>
                        </div>
                        <p className="text-sm text-[#666666] leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

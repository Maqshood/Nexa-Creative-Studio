import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { processSteps } from '../data/content';

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-[#F8F7F4] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-[#4F46E5]" />
          <span className="text-xs uppercase tracking-widest text-[#4F46E5] font-bold">
            How We Work
          </span>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight">
              From First Thought to Final Launch.
            </h2>
            <p className="text-base sm:text-lg text-[#666666] max-w-2xl mt-4">
              A structured, transparent roadmap that minimizes guesswork. From raw hypothesis to high-fidelity implementation, we ensure steady momentum every week.
            </p>
          </div>
          <div className="text-xs font-mono text-[#666666] uppercase tracking-wider hidden md:block">
            4-Stage Lifecycle
          </div>
        </div>

        {/* Numbered Editorial Timeline Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div
              key={step.step}
              className="group relative bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.08] hover:border-[#4F46E5]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step Index Badge & Connector line */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[#4F46E5] tracking-tighter">
                    {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#EEECFF] flex items-center justify-center text-[#4F46E5] group-hover:bg-[#4F46E5] group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Step Title & Tagline */}
                <h3 className="text-xl font-bold text-[#171717] mb-2 group-hover:text-[#4F46E5] transition-colors">
                  {step.name}
                </h3>
                <p className="text-xs uppercase font-semibold tracking-wider text-[#4F46E5] mb-4">
                  {step.tagline}
                </p>

                {/* Step Description */}
                <p className="text-sm text-[#666666] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Step Key Deliverable */}
              <div className="pt-4 border-t border-black/[0.06]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4F46E5] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#666666] block">
                      Milestone Outcome
                    </span>
                    <span className="text-xs font-medium text-[#171717]">
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

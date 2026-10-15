import React from 'react';
import { Quote, Sparkles, UserCheck } from 'lucide-react';
import { sampleTestimonials } from '../data/content';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#F8F7F4] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-[#4F46E5]" />
          <span className="text-xs uppercase tracking-widest text-[#4F46E5] font-bold">
            Concept Perspectives
          </span>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight">
              Sample Feedback Concepts.
            </h2>
            <p className="text-base sm:text-lg text-[#666666] max-w-2xl mt-4">
              Illustrative examples reflecting client partnerships and our commitment to collaborative, design-led execution.
            </p>
          </div>

          {/* Transparent Demonstration Disclaimer */}
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-amber-50 border border-amber-200/60 text-amber-900 text-xs font-semibold shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Illustrative Samples — For Demo Purposes</span>
          </div>
        </div>

        {/* Two Clearly Labeled Sample Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sampleTestimonials.map((item, index) => (
            <div
              key={item.id}
              className="relative bg-white rounded-3xl p-8 sm:p-10 border border-black/[0.08] shadow-xs hover:border-[#4F46E5]/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Decorative Quote Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#EEECFF] text-[#4F46E5] flex items-center justify-center">
                    <Quote className="w-5 h-5 rotate-180" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#666666] bg-stone-100 px-2.5 py-1 rounded-md">
                    Sample 0{index + 1}
                  </span>
                </div>

                {/* Quote Text */}
                <blockquote className="text-base sm:text-lg text-[#171717] font-medium leading-relaxed mb-8 italic">
                  “{item.quote}”
                </blockquote>
              </div>

              {/* Attribution and Demonstration Disclaimer */}
              <div className="pt-6 border-t border-black/[0.06] space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EEECFF] text-[#4F46E5] font-bold text-xs flex items-center justify-center shrink-0">
                    {item.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#171717]">
                      {item.author}
                    </h4>
                    <p className="text-xs text-[#666666]">
                      {item.role} · {item.company}
                    </p>
                  </div>
                </div>

                {/* Specific disclaimer note tag */}
                <div className="text-[11px] text-[#666666] bg-[#F8F7F4] px-3 py-1.5 rounded-lg border border-black/[0.04]">
                  {item.note}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

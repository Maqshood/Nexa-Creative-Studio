import React, { useState } from 'react';
import { Layout, Code2, Sparkles, Compass, Check, ChevronRight } from 'lucide-react';
import { services } from '../data/content';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-6 h-6 text-[#4F46E5]" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-[#4F46E5]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#4F46E5]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#4F46E5]" />;
      default:
        return <Layout className="w-6 h-6 text-[#4F46E5]" />;
    }
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#F8F7F4] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-[#4F46E5]" />
          <span className="text-xs uppercase tracking-widest text-[#4F46E5] font-bold">
            Capabilities & Services
          </span>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight">
              What We Bring to the Table.
            </h2>
            <p className="text-base sm:text-lg text-[#666666] max-w-xl mt-4">
              Integrated digital solutions bridging strategy, aesthetics, and engineering. Built for founders who value substance as much as style.
            </p>
          </div>
          <div className="text-xs font-mono text-[#666666] uppercase tracking-wider hidden md:block">
            4 Core Disciplines
          </div>
        </div>

        {/* Four Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const isExpanded = selectedService === service.id;

            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl p-8 sm:p-10 border border-black/[0.08] hover:border-[#4F46E5]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon & Discipline Index */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-[#EEECFF] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-2xs">
                      {getIcon(service.icon)}
                    </div>
                    <span className="text-xs font-mono font-bold text-[#666666]/70 tracking-widest">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Core Description */}
                  <h3 className="text-2xl font-bold text-[#171717] mb-3 group-hover:text-[#4F46E5] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-base text-[#666666] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlight statement */}
                  <div className="p-3.5 rounded-xl bg-[#F8F7F4] border border-black/[0.04] mb-6">
                    <p className="text-xs text-[#171717] font-medium leading-relaxed">
                      {service.highlight}
                    </p>
                  </div>
                </div>

                {/* Deliverables Accordion / Expansion */}
                <div>
                  <button
                    type="button"
                    onClick={() => setSelectedService(isExpanded ? null : service.id)}
                    aria-expanded={isExpanded}
                    className="w-full flex items-center justify-between pt-4 border-t border-black/[0.06] text-xs font-bold uppercase tracking-wider text-[#4F46E5] hover:text-[#4338CA] transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? 'Hide Deliverables' : 'Explore Deliverables'}</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'
                      }`}
                    />
                  </button>

                  {/* Deliverables list */}
                  {isExpanded && (
                    <div className="mt-4 pt-2 space-y-2.5 animate-fadeIn">
                      {service.deliverables.map((deliv, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-[#171717]">
                          <div className="w-4 h-4 rounded-full bg-[#EEECFF] text-[#4F46E5] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Section Bottom Summary Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#EEECFF] border border-[#4F46E5]/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-[#4F46E5] animate-ping" />
            <p className="text-sm font-semibold text-[#171717]">
              Need a bespoke scope combining multiple disciplines?
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4F46E5] hover:text-[#4338CA] bg-white px-5 py-2.5 rounded-full shadow-2xs hover:shadow transition-all"
          >
            <span>Request Custom Proposal</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

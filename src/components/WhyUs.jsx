import React from 'react';
import { Target, Smartphone, MessagesSquare, Zap } from 'lucide-react';
import { whyChooseUs } from '../data/content';

export default function WhyUs() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-6 h-6 text-[#4F46E5]" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#4F46E5]" />;
      case 'MessagesSquare':
        return <MessagesSquare className="w-6 h-6 text-[#4F46E5]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#4F46E5]" />;
      default:
        return <Target className="w-6 h-6 text-[#4F46E5]" />;
    }
  };

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-[#F8F7F4] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-[#4F46E5]" />
          <span className="text-xs uppercase tracking-widest text-[#4F46E5] font-bold">
            Studio Advantages
          </span>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight">
            Thoughtful Work. Meaningful Results.
          </h2>
          <p className="text-base sm:text-lg text-[#666666] mt-4">
            We operate with deliberate restraint and attention to craft. Here is why discerning clients partner with Nexa for their key digital initiatives.
          </p>
        </div>

        {/* Four Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyChooseUs.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group bg-white rounded-3xl p-8 sm:p-10 border border-black/[0.08] hover:border-[#4F46E5]/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#EEECFF] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-2xs">
                  {getIcon(benefit.icon)}
                </div>

                <div>
                  <span className="text-xs font-mono font-bold text-[#4F46E5] tracking-widest block mb-1">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#171717] mb-3 group-hover:text-[#4F46E5] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-base text-[#666666] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

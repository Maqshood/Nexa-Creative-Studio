import React from 'react';
import { ArrowDownRight, ArrowUpRight, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { studioInfo } from '../data/content';
import ImageWithFallback from './ImageWithFallback';

export default function Hero() {
  const scrollTo = (href) => {
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#F8F7F4]"
    >
      {/* Subtle background architectural ambient accents */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#EEECFF]/40 to-transparent pointer-events-none rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Editorial Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Pill / Trust Statement */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEECFF] border border-[#4F46E5]/15 text-[#4F46E5] text-xs sm:text-sm font-semibold mb-6 sm:mb-8 w-fit shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#4F46E5]" />
              <span>{studioInfo.trustStatement}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold text-[#171717] tracking-tight leading-[1.08] sm:leading-[1.06] mb-6 sm:mb-8">
              Good Ideas Deserve{' '}
              <span className="relative inline-block text-[#4F46E5]">
                Exceptional
                {/* Subtle editorial underline accent */}
                <svg
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 text-[#4F46E5]/30 pointer-events-none"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>{' '}
              Digital Experiences.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#666666] max-w-2xl font-normal leading-relaxed mb-8 sm:mb-10">
              {studioInfo.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => scrollTo('#work')}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-white bg-[#4F46E5] hover:bg-[#4338CA] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
              >
                <span>Explore Our Work</span>
                <ArrowDownRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-[#171717] bg-white border border-black/[0.12] hover:border-black/[0.25] hover:bg-stone-50 transition-all duration-200 shadow-2xs hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-5 h-5 text-[#666666]" />
              </button>
            </div>

            {/* Key Micro Metadata */}
            <div className="mt-12 pt-8 border-t border-black/[0.07] grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#666666] font-semibold">Specialization</p>
                <p className="text-sm font-semibold text-[#171717] mt-1">Web & Identity</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#666666] font-semibold">Model</p>
                <p className="text-sm font-semibold text-[#171717] mt-1">Bespoke Studio</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#666666] font-semibold">Availability</p>
                <p className="text-sm font-semibold text-[#4F46E5] mt-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
                  Q3/Q4 Open
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Composition with Editorial Studio Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Frame */}
              <div className="relative rounded-3xl overflow-hidden bg-white p-3.5 shadow-xl border border-black/[0.08] transition-transform duration-500 hover:scale-[1.01]">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-stone-100">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80"
                    alt="Creative workspace and minimalist architectural design setup"
                    aspectRatio="aspect-[4/5]"
                    className="w-full h-full"
                  />
                  
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Caption on visual */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[11px] uppercase tracking-widest font-semibold text-[#EEECFF] bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md inline-block mb-2">
                      Studio Aesthetic
                    </span>
                    <p className="text-base font-semibold leading-snug">
                      Transforming complex objectives into elegant digital interactions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top Right */}
              <div className="absolute -top-5 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-black/[0.08] shadow-lg flex items-center gap-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-[#EEECFF] text-[#4F46E5] flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider font-bold text-[#666666]">Craft Standard</p>
                  <p className="text-xs font-bold text-[#171717]">Pixel-Precise Detail</p>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md px-4 py-3.5 rounded-2xl border border-black/[0.08] shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#4F46E5] text-white flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#171717]">Full Responsive Polish</p>
                  <p className="text-[11px] text-[#666666]">Tested Mobile to 4K</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

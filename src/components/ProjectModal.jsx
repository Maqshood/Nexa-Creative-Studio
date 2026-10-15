import React, { useEffect } from 'react';
import { X, Sparkles, CheckCircle, ArrowUpRight, Palette, Layers } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#F8F7F4] rounded-3xl shadow-2xl border border-black/[0.1] focus:outline-none"
      >
        {/* Sticky Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 sm:px-8 py-5 bg-[#F8F7F4]/95 backdrop-blur-md border-b border-black/[0.06]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4F46E5]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#4F46E5]">
              Concept Case Study
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-white border border-black/[0.08] hover:bg-stone-100 text-[#171717] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
            aria-label="Close case study modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 lg:p-10 space-y-10">
          
          {/* Project Title & Meta Header */}
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-[#EEECFF] text-[#4F46E5] text-xs font-bold mb-3">
              {project.category}
            </div>
            <h3 id="modal-title" className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight mb-2">
              {project.title}
            </h3>
            <p className="text-base sm:text-lg text-[#666666] font-medium">
              {project.tagline}
            </p>

            {/* Illustrative Disclaimer Notice */}
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200/60 text-amber-900 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>{project.clientConcept} — Fictional Studio Showcase Concept</span>
            </div>
          </div>

          {/* Large Hero Showcase Image */}
          <div className="rounded-2xl overflow-hidden border border-black/[0.08] shadow-md">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              aspectRatio="aspect-[16/9]"
              className="w-full"
            />
          </div>

          {/* Project Overview */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-[#171717]">Concept Overview</h4>
            <p className="text-base text-[#666666] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-black/[0.06] shadow-2xs">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <h5 className="text-sm font-bold uppercase tracking-wider text-[#171717]">
                  The Creative Challenge
                </h5>
              </div>
              <p className="text-sm text-[#666666] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-black/[0.06] shadow-2xs">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                  02
                </div>
                <h5 className="text-sm font-bold uppercase tracking-wider text-[#171717]">
                  Our Studio Solution
                </h5>
              </div>
              <p className="text-sm text-[#666666] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Secondary Visual & Deliverables */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-black/[0.08] shadow-xs">
              <ImageWithFallback
                src={project.secondaryImage}
                alt={`${project.title} detailed detail preview`}
                aspectRatio="aspect-[4/3]"
                className="w-full"
              />
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div>
                <h5 className="text-xs uppercase tracking-widest font-bold text-[#666666] mb-3">
                  Scope & Deliverables
                </h5>
                <div className="space-y-2.5">
                  {project.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-[#171717]">
                      <CheckCircle className="w-4 h-4 text-[#4F46E5] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="text-xs uppercase tracking-widest font-bold text-[#666666] mb-3">
                  Technologies & Methods
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-white border border-black/[0.08] text-[#171717]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-8 py-5 bg-white border-t border-black/[0.06] rounded-b-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#666666]">
            Nexa Creative Studio Conceptual Portfolio Demonstration
          </p>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full text-sm font-semibold bg-[#171717] hover:bg-black text-white transition-colors cursor-pointer"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
}

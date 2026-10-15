import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Eye } from 'lucide-react';
import { portfolioProjects } from '../data/content';
import ImageWithFallback from './ImageWithFallback';
import ProjectModal from './ProjectModal';

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-24 lg:py-32 bg-[#F8F7F4] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-[#4F46E5]" />
          <span className="text-xs uppercase tracking-widest text-[#4F46E5] font-bold">
            Curated Case Studies
          </span>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight">
              Selected Work. Real Possibilities.
            </h2>
            <p className="text-base sm:text-lg text-[#666666] max-w-2xl mt-4">
              Explore our fictional concept engagements designed to illustrate how thoughtful visual systems, modern frontend architecture, and strategic UX elevate digital presence.
            </p>
          </div>

          {/* Illustrative Concept Disclaimer Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-amber-50 border border-amber-200/60 text-amber-900 text-xs font-semibold shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Illustrative Studio Concepts</span>
          </div>
        </div>

        {/* Varied Editorial Projects Grid */}
        <div className="space-y-16 lg:space-y-24">
          
          {/* Project 1: Forma Living — Featured Large Editorial Layout */}
          {(() => {
            const project = portfolioProjects[0];
            return (
              <article
                key={project.id}
                className="group relative bg-white rounded-3xl p-6 sm:p-10 border border-black/[0.08] hover:border-[#4F46E5]/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Visual Left */}
                  <div className="lg:col-span-7 overflow-hidden rounded-2xl bg-stone-100 relative">
                    <div className="transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                      <ImageWithFallback
                        src={project.image}
                        alt={`Forma Living contemporary furniture website concept`}
                        aspectRatio="aspect-[16/10]"
                        className="w-full"
                      />
                    </div>

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-[#171717] shadow-xs">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Details Right */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs uppercase tracking-wider font-bold text-[#4F46E5]">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight mb-3 group-hover:text-[#4F46E5] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-base text-[#666666] leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium px-3 py-1 rounded-full bg-[#F8F7F4] text-[#171717] border border-black/[0.06]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-black/[0.06] flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#4F46E5] hover:bg-[#4338CA] transition-all cursor-pointer shadow-xs"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Concept Details</span>
                      </button>

                      <span className="text-xs text-[#666666] font-mono">
                        01 / 03
                      </span>
                    </div>

                  </div>

                </div>
              </article>
            );
          })()}

          {/* Projects 2 & 3: Two-Column Complementary Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {portfolioProjects.slice(1).map((project, idx) => (
              <article
                key={project.id}
                className="group relative bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.08] hover:border-[#4F46E5]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Zoom effect */}
                  <div className="overflow-hidden rounded-2xl bg-stone-100 relative mb-6">
                    <div className="transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                      <ImageWithFallback
                        src={project.image}
                        alt={`${project.title} digital experience showcase`}
                        aspectRatio="aspect-[4/3]"
                        className="w-full"
                      />
                    </div>

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-[#171717] shadow-xs">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs uppercase tracking-wider font-bold text-[#4F46E5]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#171717] tracking-tight mb-2 group-hover:text-[#4F46E5] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#666666] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#F8F7F4] text-[#171717] border border-black/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-black/[0.06] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-[#4F46E5] hover:text-[#4338CA] bg-[#EEECFF] hover:bg-[#EEECFF]/80 transition-all cursor-pointer"
                  >
                    <span>Explore Concept</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-xs text-[#666666] font-mono">
                    0{idx + 2} / 03
                  </span>
                </div>

              </article>
            ))}
          </div>

        </div>

      </div>

      {/* Case Study Deep Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

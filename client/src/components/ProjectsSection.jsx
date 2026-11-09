import React, { useState } from 'react';
import { FEATURED_PROJECTS } from '../data/companyData';
import { ExternalLink, Layers, X, Sparkles, Code2 } from 'lucide-react';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-[#070B10]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-ztg-blue/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ztg-navy/90 border border-ztg-border mb-4">
            <span className="w-2 h-2 rounded-full bg-ztg-cyan" />
            <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.2em] uppercase text-ztg-cyan">
              ENGINEERING SHOWCASE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Innovation <span className="text-ztg-cyan">Brought to Life.</span>
          </h2>

          <p className="text-base sm:text-lg text-ztg-muted leading-relaxed font-normal">
            Explore concepts and architectural implementations that represent our approach to solving high-stakes technical challenges.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group glass-panel rounded-3xl overflow-hidden border border-ztg-border/70 hover:border-ztg-cyan/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl hover:shadow-ztg-blue/10"
            >
              {/* Thumbnail Container */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-ztg-navy">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 group-hover:brightness-110"
                  loading="lazy"
                />
                
                {/* Tech Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1420] via-[#0B1420]/40 to-transparent" />

                {/* Badge identifying demo status */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[#070B10]/80 text-ztg-cyan border border-ztg-cyan/40 backdrop-blur-md uppercase tracking-wider">
                    {project.badge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <span className="text-xs font-mono uppercase tracking-wider text-ztg-cyan font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-ztg-cyan transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-ztg-muted leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-ztg-muted border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-ztg-navy hover:bg-ztg-blue/20 border border-ztg-border hover:border-ztg-cyan/40 transition-all cursor-pointer"
                  >
                    <span>View Project Architecture</span>
                    <ExternalLink className="w-3.5 h-3.5 text-ztg-cyan" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-8 border border-ztg-border shadow-2xl bg-[#09121d]/95 overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-ztg-muted hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-ztg-cyan px-2.5 py-0.5 rounded-full bg-ztg-blue/10 border border-ztg-blue/20">
                {selectedProject.badge}
              </span>
              <span className="text-xs font-mono text-ztg-muted">
                {selectedProject.category}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              {selectedProject.title}
            </h3>

            <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 border border-white/10">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-ztg-muted leading-relaxed mb-6">
              {selectedProject.description} This demonstration model reflects Zuriqon Technology Group's standard for architectural modularity, continuous deployment, and enterprise security compliance.
            </p>

            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white flex items-center gap-2">
                <Code2 className="w-4 h-4 text-ztg-cyan" />
                <span>Primary Technical Stack:</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-ztg-blue/15 text-ztg-cyan border border-ztg-blue/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedProject(null)}
                className="py-2.5 px-6 rounded-full text-sm font-medium text-white bg-white/10 hover:bg-white/20 transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


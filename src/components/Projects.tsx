"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiLock, FiArrowUpRight } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { projects } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

const accents = [
  { from: "#DC2626", to: "#7f1d1d" },
  { from: "#7c3aed", to: "#4c1d95" },
  { from: "#0891b2", to: "#164e63" },
  { from: "#059669", to: "#064e3b" },
];

export default function Projects() {
  return (
    <section id="projects" className="section-py bg-[#050505] relative overflow-hidden">
      <div className="orb w-[560px] h-[380px] bg-[#DC2626] opacity-[0.035] bottom-0 left-1/2 -translate-x-1/2" />

      <div className="section-shell relative">
        <SectionHeader
          label="Projects"
          title="Things I've built"
          subtitle="A selection of projects that showcase my skills across the full stack."
        />

        <div className="grid grid-cols-12 gap-12">
          {projects.map((project, i) => {
            const accent = accents[i % accents.length];
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease }}
                whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.12)" }}
                className="group glass col-span-12 md:col-span-6 xl:col-span-4 flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-white/[0.07] transition-all duration-300 hover:shadow-[0_24px_64px_rgba(0,0,0,0.45)]"
              >
                {/* Visual header */}
                <div
                  className="relative flex h-72 flex-shrink-0 items-center justify-center overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${accent.from}, ${accent.to})` }}
                >
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full border border-white/[0.08]" />
                  <div className="absolute -bottom-5 -left-5 w-24 h-24 rounded-full border border-white/[0.08]" />

                  <span className="relative text-[3.75rem] font-black text-white/70 tracking-tight select-none z-10">
                    {project.title.split(" ").map((w) => w[0]).join("")}
                  </span>

                  {project.live && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 bg-black/30 backdrop-blur-md rounded-full border border-white/[0.14]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] font-semibold text-white">Live</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-10 flex flex-col gap-6 flex-1">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[15px] font-bold text-[#f2f2f2] leading-snug">{project.title}</h3>
                    <p className="text-[13px] text-[rgba(242,242,242,0.44)] leading-[1.75]">{project.description}</p>
                  </div>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-[11px] font-medium text-[rgba(242,242,242,0.52)] bg-white/[0.04] border border-white/[0.07] rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 mt-auto pt-1">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-[12px] font-semibold text-white bg-[#DC2626] rounded-lg hover:bg-[#b91c1c] transition-colors"
                      >
                        <FiExternalLink size={12} /> Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-[12px] font-semibold text-[rgba(242,242,242,0.62)] glass rounded-lg hover:text-[#f2f2f2] transition-colors"
                      >
                        <FiGithub size={12} /> GitHub
                      </a>
                    )}
                    {!project.live && !project.github && (
                      <span className="inline-flex items-center gap-1.5 text-[12px] text-[rgba(242,242,242,0.26)]">
                        <FiLock size={11} /> Private project
                      </span>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open project"
                        className="ml-auto p-2 rounded-lg text-[rgba(242,242,242,0.28)] hover:text-[#f2f2f2] hover:bg-white/[0.05] transition-all"
                      >
                        <FiArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { experiences } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Experience() {
  return (
    <section id="experience" className="section-py bg-[#050505] relative overflow-hidden">
      <div className="orb w-[480px] h-[480px] bg-[#DC2626] opacity-[0.032] top-0 right-0" />

      <div className="section-shell relative">
        <SectionHeader
          label="Experience"
          title="Where I've worked"
          subtitle="My professional journey building products and solving real-world problems."
        />

        <div className="relative mx-auto w-full">
          <div className="timeline-line absolute top-4 bottom-4 hidden sm:block" style={{ left: 'var(--timeline-offset)' }} />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${i}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute top-[26px] w-[18px] h-[18px] rounded-full border-2 border-[#DC2626] bg-[#050505] hidden sm:flex items-center justify-center" style={{ left: 'calc(var(--timeline-offset) - 9px)' }}>
                  <div className="w-[8px] h-[8px] rounded-full bg-[#DC2626]" />
                </div>

                <motion.div
                  whileHover={{ borderColor: "rgba(220,38,38,0.2)", y: -2 }}
                  className="glass w-full rounded-[2rem] border border-white/[0.07] p-10 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-[16px] font-bold text-[#f2f2f2] leading-snug">{exp.role}</h3>
                      <p className="text-[13px] font-semibold text-[#DC2626]">{exp.company}</p>
                    </div>
                    <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 flex-shrink-0">
                      <span className="inline-flex items-center px-4 py-1.5 text-[11px] font-medium text-[rgba(242,242,242,0.48)] bg-white/[0.04] border border-white/[0.07] rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[11px] font-medium text-emerald-400 bg-emerald-500/[0.08] border border-emerald-500/[0.16] rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="flex flex-col gap-3">
                    {exp.responsibilities.map((r, j) => (
                      <li key={j} className="flex items-start gap-3 text-[13px] text-[rgba(242,242,242,0.46)] leading-[1.75]">
                        <span className="mt-[8px] w-1 h-1 rounded-full bg-[#DC2626]/45 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

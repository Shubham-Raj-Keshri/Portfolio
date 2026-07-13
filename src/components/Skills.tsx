"use client";

import { motion } from "framer-motion";
import { Code2, Database, Wrench } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { skills } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

const cfg: Record<string, { accent: string; bg: string; border: string; icon: React.ReactNode }> = {
  Frontend: {
    accent: "#DC2626",
    bg:     "rgba(220,38,38,0.07)",
    border: "rgba(220,38,38,0.16)",
    icon:   <Code2    size={16} />,
  },
  Backend: {
    accent: "#7c3aed",
    bg:     "rgba(124,58,237,0.07)",
    border: "rgba(124,58,237,0.16)",
    icon:   <Database size={16} />,
  },
  Tools: {
    accent: "#0891b2",
    bg:     "rgba(8,145,178,0.07)",
    border: "rgba(8,145,178,0.16)",
    icon:   <Wrench   size={16} />,
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section-py bg-[#050505] relative overflow-hidden">
      <div className="orb w-[440px] h-[440px] bg-[#DC2626] opacity-[0.032] top-1/2 -translate-y-1/2 right-0" />

      <div className="section-shell relative">
        <SectionHeader
          label="Skills"
          title="My technical toolkit"
          subtitle="Technologies and tools I use to build modern, scalable applications."
        />

        <div className="grid grid-cols-12 gap-10">
          {Object.entries(skills).map(([category, items], i) => {
            const c = cfg[category];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease }}
                whileHover={{ y: -4, borderColor: c.border }}
                className="glass flex flex-col gap-8 rounded-[1.75rem] border border-white/[0.07] p-10 transition-all duration-300 col-span-12 sm:col-span-6 xl:col-span-4"
              >
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div
                    className="shrink-0 rounded-xl p-2.5"
                    style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.accent }}
                  >
                    {c.icon}
                  </div>
                  <h3 className="text-[14px] font-bold text-[#f2f2f2]">{category}</h3>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {items.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: i * 0.06 + j * 0.03 }}
                      whileHover={{ scale: 1.04, y: -1 }}
                      className="px-3 py-1.5 text-[12px] font-semibold rounded-lg border cursor-default transition-all duration-200"
                      style={{ color: c.accent, background: c.bg, borderColor: c.border }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

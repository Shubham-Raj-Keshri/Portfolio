"use client";

import { motion } from "framer-motion";
import { Monitor, Zap, Layers } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { aboutCards } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  monitor: <Monitor size={17} />,
  zap:     <Zap     size={17} />,
  layers:  <Layers  size={17} />,
};

const stats = [
  { value: "3+",   label: "Years Experience" },
  { value: "10+",  label: "Projects Built"   },
  { value: "200+", label: "LMS Courses"      },
  { value: "5+",   label: "Tech Stacks"      },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  return (
    <section id="about" className="section-py bg-[#050505] relative overflow-hidden">
      <div className="orb w-[480px] h-[480px] bg-[#DC2626] opacity-[0.038] top-1/2 -translate-y-1/2 -left-48" />

      <div className="section-shell relative">
        <SectionHeader
          label="About Me"
          title="Crafting digital experiences with purpose"
          subtitle="Full Stack Engineer with 3+ years building scalable, production-ready web applications."
        />

        <div className="grid grid-cols-12 items-start gap-12 lg:gap-16 xl:gap-20">

          {/* ── Left: Text + Stats ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-col gap-10 col-span-12 lg:col-span-7"
          >
            <div className="flex flex-col gap-5">
              <p className="text-[15px] text-[rgba(242,242,242,0.5)] leading-[1.85]">
                I&apos;m a passionate Full Stack Engineer with over{" "}
                <span className="text-[#f2f2f2] font-semibold">3+ years of experience</span>{" "}
                in Frontend &amp; Full Stack Development. I specialize in building scalable web
                applications with React, Next.js, TypeScript, Node.js, and PostgreSQL.
              </p>
              <p className="text-[15px] text-[rgba(242,242,242,0.5)] leading-[1.85]">
                My expertise spans designing{" "}
                <span className="text-[#f2f2f2] font-semibold">REST APIs</span>, building{" "}
                <span className="text-[#f2f2f2] font-semibold">modern UI</span> with reusable
                components, and architecting clean, maintainable codebases. I thrive on turning
                complex problems into polished, production-ready products.
              </p>
              <p className="text-[15px] text-[rgba(242,242,242,0.5)] leading-[1.85]">
                Whether it&apos;s a pixel-perfect frontend or a robust backend system, I bring the
                same level of care and craftsmanship to every layer of the stack.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 xl:grid-cols-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease }}
                  whileHover={{ y: -3, borderColor: "rgba(220,38,38,0.28)" }}
                  className="glass rounded-[1.75rem] border border-white/[0.07] p-8 text-center transition-all duration-300"
                >
                  <p className="text-[1.75rem] font-black text-[#DC2626] leading-none">{stat.value}</p>
                  <p className="text-[11px] text-[rgba(242,242,242,0.38)] mt-2 font-medium leading-snug">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Feature Cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-col gap-5 col-span-12 lg:col-span-5"
          >
            {aboutCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                whileHover={{ y: -3, borderColor: "rgba(220,38,38,0.2)" }}
                className="glass rounded-[1.75rem] border border-white/[0.07] p-8 transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-[#DC2626]/[0.08] border border-[#DC2626]/[0.16] text-[#DC2626] flex-shrink-0 group-hover:bg-[#DC2626]/[0.12] transition-colors">
                    {iconMap[card.icon]}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-[14px] font-semibold text-[#f2f2f2]">{card.title}</h3>
                    <p className="text-[13px] text-[rgba(242,242,242,0.45)] leading-[1.75]">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

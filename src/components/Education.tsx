"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { education, certificates } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Education() {
  return (
    <section id="education" className="section-py bg-[#050505] relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-[#DC2626] opacity-[0.032] bottom-0 left-0" />

      <div className="section-shell relative">
        <SectionHeader
          label="Education & Certificates"
          title="Academic background"
          subtitle="My educational foundation and professional certifications."
        />

        <div className="grid grid-cols-12 gap-12 xl:gap-16">

          {/* ── Education ── */}
          <div className="flex flex-col gap-8 col-span-12 lg:col-span-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-[#DC2626]/16 bg-[#DC2626]/8 p-2.5">
                <GraduationCap size={16} className="text-[#DC2626]" />
              </div>
              <h3 className="text-[15px] font-bold text-[#f2f2f2]">Education</h3>
            </div>

            <div className="flex flex-col gap-5">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                  whileHover={{ y: -3, borderColor: "rgba(220,38,38,0.2)" }}
                  className="glass rounded-[1.75rem] border border-white/[0.07] p-10 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                      <h4 className="text-[14px] font-bold text-[#f2f2f2] leading-snug">{edu.institution}</h4>
                      <p className="text-[13px] text-[rgba(242,242,242,0.48)]">{edu.degree}</p>
                      <p className="text-[12px] text-[rgba(242,242,242,0.28)]">{edu.period}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[rgba(242,242,242,0.26)]">CGPA</p>
                      <p className="text-[1.75rem] font-black text-[#DC2626] leading-none mt-1">{edu.cgpa}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Certificates ── */}
          <div className="flex flex-col gap-8 col-span-12 lg:col-span-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-[#7c3aed]/16 bg-[#7c3aed]/8 p-2.5">
                <Award size={16} className="text-[#7c3aed]" />
              </div>
              <h3 className="text-[15px] font-bold text-[#f2f2f2]">Certificates</h3>
            </div>

            <div className="flex flex-col gap-5">
              {certificates.map((cert, i) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease }}
                  whileHover={{ x: 5, borderColor: "rgba(124,58,237,0.22)" }}
                  className="flex items-center gap-4 p-6 glass rounded-2xl border border-white/[0.07] transition-all duration-200"
                >
                  <CheckCircle2 size={16} className="shrink-0 text-[#7c3aed]" />
                  <span className="text-[13px] font-medium text-[rgba(242,242,242,0.68)]">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

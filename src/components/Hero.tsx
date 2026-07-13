"use client";

import { motion } from "framer-motion";
import {
  FiGithub, FiLinkedin, FiMail,
  FiArrowRight, FiDownload,
  FiCode, FiDatabase, FiGitBranch,
} from "react-icons/fi";
import { socialLinks } from "@/lib/data";
import type { Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const stats     = [
  { value: "3+",   label: "Years Exp"  },
  { value: "10+",  label: "Projects"   },
  { value: "200+", label: "Courses"    },
];
const stackRows = [
  { icon: FiCode,      text: "React · Next.js · TypeScript" },
  { icon: FiDatabase,  text: "Node.js · PostgreSQL · Prisma" },
  { icon: FiGitBranch, text: "REST APIs · JWT · Git"         },
];
const socials   = [
  { icon: FiGithub,   href: socialLinks.github,            label: "GitHub"   },
  { icon: FiLinkedin, href: socialLinks.linkedin,          label: "LinkedIn" },
  { icon: FiMail,     href: `mailto:${socialLinks.email}`, label: "Email"    },
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        <div className="hero-grid-bg absolute inset-0" />
        <div className="orb -top-32 left-1/2 h-[480px] w-[640px] -translate-x-1/2 bg-[#DC2626] opacity-[0.05]" />
        <div className="orb bottom-0 right-0 h-[360px] w-[360px] bg-[#DC2626] opacity-[0.025]" />
      </div>

      <div className="section-shell relative pb-32 pt-36">
        <div className="grid grid-cols-12 items-center gap-16 lg:gap-20 xl:gap-24">
          <motion.div
            variants={stagger} initial="hidden" animate="show"
            className="order-2 flex flex-col gap-10 lg:order-1 col-span-12 lg:col-span-7"
          >
            {/* Badge
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DC2626]/22 bg-[#DC2626]/[0.07] text-[12px] font-medium text-[#DC2626]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                Available for opportunities
              </span>
            </motion.div> */}

            {/* Name */}
            <motion.div variants={item} className="flex flex-col gap-2">
              <p className="text-[12px] font-semibold text-[rgba(242,242,242,0.35)] tracking-[0.2em] uppercase">
                Hello, I&apos;m
              </p>
              <h1 className="text-[clamp(2.75rem,5.5vw,5rem)] font-[800] leading-[1.02] tracking-[-0.03em] text-[#f2f2f2]">
                Shubham<br />Raj Keshri
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div variants={item} className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#DC2626] flex-shrink-0" />
              <span className="text-[clamp(1rem,1.8vw,1.15rem)] font-light text-[rgba(242,242,242,0.5)] tracking-wide">
                Full Stack Engineer
              </span>
            </motion.div>

            {/* Description */}
            <motion.p variants={item} className="max-w-[640px] text-[15px] leading-[1.9] text-[rgba(242,242,242,0.46)]">
              Building scalable, modern web applications with React, Next.js,
              TypeScript, Node.js and PostgreSQL. Focused on clean architecture
              and exceptional user experiences.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-3 px-7 py-4 bg-[#DC2626] text-white text-[14px] font-semibold rounded-2xl hover:bg-[#b91c1c] transition-colors shadow-[0_0_24px_rgba(220,38,38,0.25)]"
              >
                View Projects <FiArrowRight size={14} />
              </button>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-3 px-7 py-4 glass rounded-2xl text-[14px] font-semibold text-[rgba(242,242,242,0.75)] hover:text-[#f2f2f2] hover:bg-white/[0.065] transition-all"
              >
                <FiDownload size={14} /> Download CV
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div variants={item} className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 glass rounded-xl text-[rgba(242,242,242,0.42)] hover:text-[#f2f2f2] hover:border-white/[0.13] transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Developer Card */}
          <motion.div
            initial={{ opacity: 0, x: 28, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, ease, delay: 0.12 }}
            className="order-1 flex justify-center lg:order-2 col-span-12 lg:col-span-5 lg:justify-end"
          >
            <div className="relative animate-float w-full max-w-[560px]">
              <div className="hero-glow absolute -inset-8 rounded-[2.6rem] opacity-70" />

              <div className="section-card relative w-full rounded-[1.9rem] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.07),0_32px_80px_rgba(0,0,0,0.55)] sm:p-10 xl:p-12">

                {/* Avatar row */}
                <div className="mb-8 flex items-center gap-4">
                  <div className="relative shrink-0">
                    <div className="flex h-18 w-18 items-center justify-center rounded-[1.4rem] bg-gradient-to-br from-[#DC2626] to-[#7f1d1d] shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                      <span className="text-[2rem] font-black leading-none text-white">S</span>
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 h-[14px] w-[14px] rounded-full border-2 border-[#0c0c0c] bg-emerald-500" />
                  </div>
                  <div>
                    <p className="text-[15px] font-bold leading-snug text-[#f2f2f2]">Shubham Raj Keshri</p>
                    <p className="mt-0.5 text-[12px] text-[rgba(242,242,242,0.42)]">Full Stack Engineer</p>
                    <div className="mt-2 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span className="text-[11px] font-medium text-emerald-400">Open to work</span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="divider mb-7" />

                {/* Stats */}
                <div className="mb-7 grid grid-cols-2 gap-3 md:grid-cols-3">
                  {stats.map((s) => (
                    <div key={s.label} className="flex flex-col items-center py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <span className="text-[1.25rem] font-black text-[#DC2626] leading-none">{s.value}</span>
                      <span className="text-[10px] text-[rgba(242,242,242,0.36)] mt-1.5 font-medium text-center leading-tight">{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* Stack rows */}
                <div className="flex flex-col gap-2.5">
                  {stackRows.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/[0.025] border border-white/[0.05]">
                      <Icon size={13} className="text-[#DC2626] flex-shrink-0" />
                      <span className="text-[12px] text-[rgba(242,242,242,0.46)] font-medium">{text}</span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-5">
                  <span className="text-[11px] text-[rgba(242,242,242,0.28)]">📍 Hyderabad, India</span>
                  <span className="text-[11px] text-[rgba(242,242,242,0.28)]">Full Stack</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.22em] uppercase text-[rgba(242,242,242,0.2)]">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-7 bg-gradient-to-b from-[rgba(220,38,38,0.45)] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { navLinks, socialLinks } from "@/lib/data";

export default function Footer() {
  const scrollTo = (href: string) =>
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-[#050505] border-t border-white/[0.06]">
      <div className="section-shell py-20">

        {/* Top grid */}
        <div className="grid gap-12 border-b border-white/6 pb-16 sm:grid-cols-3 sm:gap-14">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <button
              onClick={() => scrollTo("#home")}
              className="text-[16px] font-bold text-[#f2f2f2] tracking-tight w-fit hover:opacity-75 transition-opacity"
            >
              Shubham<span className="text-[#DC2626]">.</span>
            </button>
            <p className="max-w-[240px] text-[13px] leading-[1.8] text-[rgba(242,242,242,0.3)]">
              Full Stack Engineer building scalable, modern web applications with React, Next.js &amp; Node.js.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-5">
            <p className="text-[11px] font-semibold text-[rgba(242,242,242,0.2)] uppercase tracking-[0.15em]">
              Quick Links
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-[13px] text-[rgba(242,242,242,0.4)] hover:text-[#f2f2f2] text-left transition-colors w-fit"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-5">
            <p className="text-[11px] font-semibold text-[rgba(242,242,242,0.2)] uppercase tracking-[0.15em]">
              Connect
            </p>
            <div className="flex gap-2.5">
              {[
                { icon: FiGithub,   href: socialLinks.github,            label: "GitHub"   },
                { icon: FiLinkedin, href: socialLinks.linkedin,          label: "LinkedIn" },
                { icon: FiMail,     href: `mailto:${socialLinks.email}`, label: "Email"    },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass rounded-full p-4 text-[rgba(242,242,242,0.36)] transition-all hover:border-white/13 hover:text-[#f2f2f2]"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 pt-8 sm:flex-row">
          <p className="text-[12px] text-[rgba(242,242,242,0.2)]">
            © {new Date().getFullYear()} Shubham Raj Keshri. All rights reserved.
          </p>
          <p className="text-[12px] text-[rgba(242,242,242,0.2)]">
            Designed &amp; Developed by{" "}
            <span className="text-[rgba(242,242,242,0.4)] font-medium">Shubham Raj Keshri</span>
          </p>
        </div>

      </div>
    </footer>
  );
}

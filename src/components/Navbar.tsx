"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { navLinks, socialLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-[0_1px_0_rgba(255,255,255,0.06),0_8px_40px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="section-container relative h-[88px]">
        <div className="grid grid-cols-12 items-center h-full">
          {/* Left: Logo */}
          <div className="col-span-4 md:col-span-3 flex items-center">
            <button
              onClick={() => scrollTo("#home")}
              className="shrink-0 rounded-full px-5 py-3 text-[15px] font-semibold tracking-tight text-[#f2f2f2] transition-opacity hover:opacity-80"
            >
              Shubham<span className="text-[#DC2626]">.</span>
            </button>
          </div>

          {/* Center: Navigation */}
          <nav className="col-span-4 md:col-span-6 hidden md:flex justify-center items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="relative rounded-md px-4 py-2 text-[14px] font-medium transition-colors duration-150"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-md border border-white/9 bg-white/7"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className={`relative z-10 transition-colors ${isActive ? "text-[#f2f2f2]" : "text-[rgba(242,242,242,0.48)] hover:text-[rgba(242,242,242,0.8)]"}`}>
                    {link.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Right: Socials + Resume */}
          <div className="col-span-4 md:col-span-3 hidden md:flex items-center justify-end gap-3">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full p-4 text-[rgba(242,242,242,0.55)] transition-all hover:bg-white/5 hover:text-[#f2f2f2]">
              <FiGithub size={16} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-md p-3 text-[rgba(242,242,242,0.45)] transition-all hover:bg-white/5 hover:text-[#f2f2f2]">
              <FiLinkedin size={16} />
            </a>
            <a href="/resume.pdf" download className="ml-3 rounded-full bg-[#DC2626] px-7 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#b91c1c]">
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="col-span-4 justify-self-end rounded-md p-3 text-[#f2f2f2] transition-colors hover:bg-white/5 md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/6 glass md:hidden"
          >
            <div className="section-shell flex flex-col gap-3 py-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="rounded-2xl px-4 py-3 text-left text-[14px] font-medium text-[rgba(242,242,242,0.72)] transition-colors hover:bg-white/5 hover:text-[#f2f2f2]"
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-1 flex items-center gap-2 border-t border-white/6 pt-3">
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 text-[rgba(242,242,242,0.5)] hover:text-[#f2f2f2]">
                  <FiGithub size={16} />
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 text-[rgba(242,242,242,0.5)] hover:text-[#f2f2f2]">
                  <FiLinkedin size={16} />
                </a>
                <a href="/resume.pdf" download className="ml-auto rounded-full bg-[#DC2626] px-5 py-2.5 text-[13px] font-semibold text-white">
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMenu,
  FiX,
  FiDownload,
  FiArrowUpRight,
} from "react-icons/fi";

import { navLinks, socialLinks } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  /* ============================================================
     SCROLL STATE
  ============================================================ */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* ============================================================
     ACTIVE SECTION
  ============================================================ */

  useEffect(() => {
    const ids = navLinks.map((link) => link.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top),
          );

        if (visibleEntries.length > 0) {
          setActive(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /* ============================================================
     CLOSE MOBILE MENU ON DESKTOP
  ============================================================ */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* ============================================================
     PREVENT BODY SCROLL
  ============================================================ */

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* ============================================================
     ESCAPE KEY
  ============================================================ */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* ============================================================
     SCROLL TO SECTION
  ============================================================ */

  const scrollTo = (href: string) => {
    setMenuOpen(false);

    document.getElementById(href.slice(1))?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* ========================================================
          NAVBAR
      ======================================================== */}

      <motion.header
        initial={{
          y: -72,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease,
        }}
        className={`
          fixed
          inset-x-0
          top-0
          z-50
          w-full
          transition-all
          duration-300

          ${
            scrolled || menuOpen
              ? `
                border-b
                border-[var(--border)]
                bg-[var(--bg)]
                shadow-[var(--shadow-sm)]
              `
              : `
                bg-transparent
              `
          }
        `}
      >
        {/* ======================================================
            MAIN NAVBAR
        ====================================================== */}

        <div className="site-container">
          <div
            className="
              flex
              h-20
              items-center
              justify-between
              gap-4
            "
          >
            {/* ==================================================
                LOGO
            ================================================== */}

            <button
              type="button"
              onClick={() => scrollTo("#home")}
              aria-label="Go to home section"
              className="
                group
                relative
                shrink-0
                py-2
                text-base
                font-bold
                leading-none
                tracking-[-0.035em]
                text-[var(--text-hi)]
              "
            >
              <span>Shubham</span>

              <span
                className="
                  text-[var(--red)]
                  transition-opacity
                  duration-200
                  group-hover:opacity-60
                "
              >
                .
              </span>
            </button>

            {/* ==================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <nav
              className="
                hidden
                h-full
                items-center
                justify-center
                gap-1
                md:flex
                lg:gap-2
              "
              aria-label="Main navigation"
            >
              {navLinks.map((link) => {
                const sectionId = link.href.slice(1);
                const isActive = active === sectionId;

                return (
                  <button
                    key={link.href}
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="
                      group
                      relative
                      flex
                      h-full
                      items-center
                      justify-center
                      px-3
                      lg:px-4
                    "
                  >
                    {/* Navigation Label */}

                    <span
                      className={`
                        relative
                        z-10
                        text-sm
                        font-medium
                        leading-none
                        transition-colors
                        duration-200

                        ${
                          isActive
                            ? `
                              text-[var(--text-hi)]
                            `
                            : `
                              text-[var(--text-mid)]
                              group-hover:text-[var(--text-hi)]
                            `
                        }
                      `}
                    >
                      {link.label}
                    </span>

                    {/* Active Underline */}

                    {isActive && (
                      <motion.span
                        layoutId="desktop-nav-indicator"
                        className="
                          absolute
                          bottom-0
                          left-3
                          right-3
                          h-[2px]
                          bg-[var(--red)]
                          lg:left-4
                          lg:right-4
                        "
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 34,
                        }}
                      />
                    )}

                    {/* Hover Underline */}

                    {!isActive && (
                      <span
                        className="
                          absolute
                          bottom-0
                          left-1/2
                          h-[2px]
                          w-0
                          -translate-x-1/2
                          bg-[var(--border-hover)]
                          transition-all
                          duration-300
                          group-hover:w-[calc(100%-2rem)]
                        "
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* ==================================================
                DESKTOP ACTIONS
            ================================================== */}

            <div
              className="
                hidden
                shrink-0
                items-center
                gap-1
                md:flex
              "
            >
              {/* GitHub */}

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
                className="
                  group
                  inline-flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  text-[var(--text-mid)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:text-[var(--text-hi)]
                "
              >
                <FiGithub
                  size={17}
                  className="
                    transition-transform
                    duration-200
                    group-hover:scale-105
                  "
                />
              </a>

              {/* LinkedIn */}

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
                className="
                  group
                  inline-flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  text-[var(--text-mid)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:text-[var(--text-hi)]
                "
              >
                <FiLinkedin
                  size={17}
                  className="
                    transition-transform
                    duration-200
                    group-hover:scale-105
                  "
                />
              </a>

              {/* Divider */}

              <div
                className="
                  mx-2
                  h-5
                  w-px
                  bg-[var(--border)]
                "
              />

              {/* Resume */}

              <a
                href="/resume.pdf"
                download
                className="
                  group
                  inline-flex
                  h-10
                  items-center
                  justify-center
                  gap-2
                  px-2
                  text-sm
                  font-semibold
                  text-[var(--text-hi)]
                  transition-colors
                  duration-200
                  hover:text-[var(--red)]
                "
              >
                <span>Resume</span>

                <FiDownload
                  size={14}
                  className="
                    transition-transform
                    duration-200
                    group-hover:translate-y-0.5
                  "
                />
              </a>
            </div>

            {/* ==================================================
                MOBILE MENU BUTTON
            ================================================== */}

            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              className="
                relative
                inline-flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                text-[var(--text-hi)]
                md:hidden
              "
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{
                      opacity: 0,
                      rotate: -45,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 45,
                      scale: 0.8,
                    }}
                    transition={{
                      duration: 0.16,
                    }}
                  >
                    <FiX size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{
                      opacity: 0,
                      rotate: 45,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -45,
                      scale: 0.8,
                    }}
                    transition={{
                      duration: 0.16,
                    }}
                  >
                    <FiMenu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* ======================================================
            MOBILE MENU
        ====================================================== */}

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.28,
                ease,
              }}
              className="
                overflow-hidden
                border-t
                border-[var(--border)]
                bg-[var(--bg)]
                md:hidden
              "
            >
              <div
                className="
                  site-container
                  pb-7
                  pt-3
                "
              >
                {/* ==============================================
                    MOBILE NAVIGATION
                ============================================== */}

                <nav
                  className="
                    flex
                    flex-col
                  "
                  aria-label="Mobile navigation"
                >
                  {navLinks.map((link, index) => {
                    const sectionId = link.href.slice(1);
                    const isActive = active === sectionId;

                    return (
                      <motion.button
                        key={link.href}
                        type="button"
                        onClick={() => scrollTo(link.href)}
                        initial={{
                          opacity: 0,
                          x: -12,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.04,
                          ease,
                        }}
                        className="
                          group
                          relative
                          flex
                          w-full
                          items-center
                          gap-4
                          border-b
                          border-[var(--border-soft)]
                          py-4
                          text-left
                          last:border-b-0
                        "
                      >
                        {/* Number */}

                        <span
                          className={`
                            w-5
                            shrink-0
                            font-mono
                            text-[10px]
                            transition-colors
                            duration-200

                            ${
                              isActive
                                ? `
                                  text-[var(--red)]
                                `
                                : `
                                  text-[var(--text-faint)]
                                `
                            }
                          `}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* Label */}

                        <span
                          className={`
                            flex-1
                            text-base
                            font-medium
                            tracking-[-0.015em]
                            transition-colors
                            duration-200

                            ${
                              isActive
                                ? `
                                  text-[var(--text-hi)]
                                `
                                : `
                                  text-[var(--text-mid)]
                                  group-hover:text-[var(--text-hi)]
                                `
                            }
                          `}
                        >
                          {link.label}
                        </span>

                        {/* Active Indicator */}

                        {isActive && (
                          <motion.span
                            layoutId="mobile-nav-indicator"
                            className="
                              h-1.5
                              w-1.5
                              shrink-0
                              rounded-full
                              bg-[var(--red)]
                            "
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </nav>

                {/* ==============================================
                    MOBILE FOOTER
                ============================================== */}

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    justify-between
                    gap-4
                    border-t
                    border-[var(--border)]
                    pt-5
                  "
                >
                  {/* Social Links */}

                  <div className="flex items-center gap-4">
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit GitHub profile"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-medium
                        text-[var(--text-mid)]
                        transition-colors
                        duration-200
                        hover:text-[var(--text-hi)]
                      "
                    >
                      <FiGithub size={16} />

                      <span>GitHub</span>
                    </a>

                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit LinkedIn profile"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-medium
                        text-[var(--text-mid)]
                        transition-colors
                        duration-200
                        hover:text-[var(--text-hi)]
                      "
                    >
                      <FiLinkedin size={16} />

                      <span>LinkedIn</span>
                    </a>
                  </div>

                  {/* Resume */}

                  <a
                    href="/resume.pdf"
                    download
                    className="
                      group
                      inline-flex
                      shrink-0
                      items-center
                      gap-1.5
                      text-sm
                      font-semibold
                      text-[var(--red)]
                    "
                  >
                    <span>Resume</span>

                    <FiArrowUpRight
                      size={14}
                      className="
                        transition-transform
                        duration-200
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ========================================================
          MOBILE BACKDROP
      ======================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              fixed
              inset-0
              z-40
              bg-black/20
              backdrop-blur-[2px]
              md:hidden
            "
          />
        )}
      </AnimatePresence>
    </>
  );
}

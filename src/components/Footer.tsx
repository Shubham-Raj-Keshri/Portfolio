"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from "react-icons/fi";

import { navLinks, socialLinks } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

const socials = [
  {
    icon: FiGithub,
    href: socialLinks.github,
    label: "GitHub",
  },
  {
    icon: FiLinkedin,
    href: socialLinks.linkedin,
    label: "LinkedIn",
  },
  {
    icon: FiMail,
    href: `mailto:${socialLinks.email}`,
    label: "Email",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  /* ============================================================
     SCROLL TO SECTION
  ============================================================ */

  const scrollTo = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-[var(--border)]
        bg-[var(--bg)]
        transition-colors
        duration-300
      "
    >
      {/* ======================================================
          BACKGROUND ACCENT
      ====================================================== */}

      <div
        className="
          orb
          pointer-events-none
          absolute
          -bottom-48
          -right-48
          h-[440px]
          w-[440px]
          bg-[#DC2626]
          opacity-[0.02]
        "
        aria-hidden="true"
      />

      {/* ======================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="site-container relative">
        {/* ====================================================
            TOP FOOTER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-50px",
          }}
          transition={{
            duration: 0.6,
            ease,
          }}
          className="
            grid
            grid-cols-1
            gap-12
            py-14
            sm:grid-cols-2
            md:py-16
            lg:grid-cols-[1.4fr_0.8fr_0.8fr]
            lg:gap-16
            lg:py-20
            xl:gap-24
          "
        >
          {/* ==================================================
              BRAND
          ================================================== */}

          <div
            className="
              flex
              min-w-0
              flex-col
              items-start
            "
          >
            {/* Logo */}

            <button
              type="button"
              onClick={() => scrollTo("#home")}
              aria-label="Go to home section"
              className="
                group
                inline-flex
                items-center
                text-lg
                font-bold
                leading-none
                tracking-[-0.04em]
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

            {/* Description */}

            <p
              className="
                mt-5
                max-w-[380px]
                text-sm
                leading-7
                text-[var(--text-mid)]
              "
            >
              Full Stack Engineer building scalable, modern web applications
              with thoughtful interfaces and reliable backend systems.
            </p>

            {/* Availability */}

            <div
              className="
                mt-6
                flex
                items-center
                gap-2.5
              "
            >
              <span
                className="
                  relative
                  flex
                  h-2
                  w-2
                "
              >
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-emerald-500
                    opacity-30
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-emerald-500
                  "
                />
              </span>

              <span
                className="
                  text-xs
                  font-medium
                  text-[var(--text-lo)]
                "
              >
                Available for new opportunities
              </span>
            </div>
          </div>

          {/* ==================================================
              NAVIGATION
          ================================================== */}

          <div className="min-w-0">
            {/* Heading */}

            <p
              className="
                mb-5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[var(--text-lo)]
              "
            >
              Navigation
            </p>

            {/* Links */}

            <nav
              className="
                flex
                flex-col
                items-start
              "
              aria-label="Footer navigation"
            >
              {navLinks.map((link, index) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => scrollTo(link.href)}
                  className="
                    group
                    flex
                    w-full
                    max-w-[200px]
                    items-center
                    gap-3
                    border-b
                    border-[var(--border-soft)]
                    py-3
                    text-left
                    first:pt-0
                    last:border-b-0
                  "
                >
                  {/* Number */}

                  <span
                    className="
                      w-5
                      shrink-0
                      font-mono
                      text-[9px]
                      text-[var(--text-faint)]
                      transition-colors
                      duration-200
                      group-hover:text-[var(--red)]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Label */}

                  <span
                    className="
                      text-[13px]
                      font-medium
                      text-[var(--text-mid)]
                      transition-all
                      duration-200
                      group-hover:translate-x-1
                      group-hover:text-[var(--text-hi)]
                    "
                  >
                    {link.label}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* ==================================================
              CONNECT
          ================================================== */}

          <div className="min-w-0">
            {/* Heading */}

            <p
              className="
                mb-5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[var(--text-lo)]
              "
            >
              Connect
            </p>

            {/* Social Links */}

            <div className="flex flex-col">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={label}
                  whileHover={{
                    x: 4,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    group
                    flex
                    w-full
                    max-w-[220px]
                    items-center
                    justify-between
                    gap-4
                    border-b
                    border-[var(--border-soft)]
                    py-3
                    first:pt-0
                    last:border-b-0
                  "
                >
                  {/* Left */}

                  <div
                    className="
                      flex
                      min-w-0
                      items-center
                      gap-3
                    "
                  >
                    <Icon
                      className="
                        h-4
                        w-4
                        shrink-0
                        text-[var(--text-lo)]
                        transition-colors
                        duration-200
                        group-hover:text-[var(--red)]
                      "
                    />

                    <span
                      className="
                        text-[13px]
                        font-medium
                        text-[var(--text-mid)]
                        transition-colors
                        duration-200
                        group-hover:text-[var(--text-hi)]
                      "
                    >
                      {label}
                    </span>
                  </div>

                  {/* Arrow */}

                  <FiArrowUpRight
                    className="
                      h-3.5
                      w-3.5
                      shrink-0
                      text-[var(--text-faint)]
                      transition-all
                      duration-200
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-[var(--red)]
                    "
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ====================================================
            BOTTOM BAR
        ==================================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            border-t
            border-[var(--border)]
            py-6
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-8
          "
        >
          {/* Copyright */}

          <p
            className="
              text-xs
              leading-5
              text-[var(--text-lo)]
            "
          >
            © {currentYear} Shubham Raj Keshri. All rights reserved.
          </p>

          {/* Built By */}

          <p
            className="
              text-xs
              leading-5
              text-[var(--text-lo)]
              sm:text-right
            "
          >
            Designed &amp; developed by{" "}
            <button
              type="button"
              onClick={() => scrollTo("#home")}
              className="
                font-medium
                text-[var(--text-mid)]
                transition-colors
                duration-200
                hover:text-[var(--red)]
              "
            >
              Shubham Raj Keshri
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
}

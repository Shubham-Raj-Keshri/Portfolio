"use client";

import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowRight,
  FiDownload,
  FiCode,
  FiDatabase,
  FiGitBranch,
  FiMapPin,
} from "react-icons/fi";
import type { Variants } from "framer-motion";

import { socialLinks } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

/* ============================================================
   ANIMATION VARIANTS
============================================================ */

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease,
    },
  },
};

/* ============================================================
   DATA
============================================================ */

const stats = [
  {
    value: "3+",
    label: "Years Experience",
  },
  {
    value: "10+",
    label: "Projects Built",
  },
  {
    value: "200+",
    label: "LMS Courses",
  },
];

const stackRows = [
  {
    icon: FiCode,
    label: "Frontend",
    text: "React · Next.js · TypeScript",
  },
  {
    icon: FiDatabase,
    label: "Backend",
    text: "Node.js · PostgreSQL · Prisma",
  },
  {
    icon: FiGitBranch,
    label: "Development",
    text: "REST APIs · JWT · Git",
  },
];

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

/* ============================================================
   HERO COMPONENT
============================================================ */

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        bg-[var(--bg)]
        pt-20
        transition-colors
        duration-300
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          select-none
        "
        aria-hidden="true"
      >
        <div className="hero-grid-bg absolute inset-0" />

        <div
          className="
            orb
            -top-40
            left-1/2
            h-[500px]
            w-[650px]
            -translate-x-1/2
            bg-[#DC2626]
            opacity-[0.025]
          "
        />

        <div
          className="
            orb
            -bottom-40
            right-[-160px]
            h-[420px]
            w-[420px]
            bg-[#DC2626]
            opacity-[0.018]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          site-container
          relative
          py-14
          sm:py-16
          md:py-20
          lg:py-28
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-14
            lg:grid-cols-[1.08fr_0.92fr]
            lg:gap-16
            xl:gap-24
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="
              flex
              min-w-0
              flex-col
            "
          >
            {/* Availability */}

            <motion.div
              variants={item}
              className="
                mb-7
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  relative
                  flex
                  h-2
                  w-2
                  shrink-0
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
                    opacity-40
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
                  text-[13px]
                  font-medium
                  leading-none
                  text-[var(--text-mid)]
                "
              >
                Available for new opportunities
              </span>
            </motion.div>

            {/* Intro + Name */}

            <motion.div variants={item}>
              <p
                className="
                  mb-4
                  text-[11px]
                  font-semibold
                  uppercase
                  leading-none
                  tracking-[0.18em]
                  text-[var(--text-lo)]
                  sm:text-xs
                "
              >
                Hello, I&apos;m
              </p>

              <h1
                className="
                  max-w-[720px]
                  text-[clamp(3.1rem,12vw,5.4rem)]
                  font-bold
                  leading-[0.92]
                  tracking-[-0.06em]
                  text-[var(--text-hi)]
                "
              >
                Shubham
                <br />
                Raj Keshri
              </h1>
            </motion.div>

            {/* Role */}

            <motion.div
              variants={item}
              className="
                mt-7
                flex
                items-center
                gap-3
                sm:mt-8
              "
            >
              <span
                className="
                  h-px
                  w-8
                  shrink-0
                  bg-[var(--red)]
                "
              />

              <p
                className="
                  text-base
                  font-medium
                  tracking-[-0.01em]
                  text-[var(--text-mid)]
                  sm:text-lg
                "
              >
                Full Stack Engineer
              </p>
            </motion.div>

            {/* Description */}

            <motion.p
              variants={item}
              className="
                mt-6
                max-w-[590px]
                text-[15px]
                leading-7
                text-[var(--text-mid)]
                sm:text-base
                sm:leading-8
              "
            >
              Building scalable web applications with React, Next.js,
              TypeScript, Node.js, and PostgreSQL. Focused on clean
              architecture, thoughtful interfaces, and reliable products.
            </motion.p>

            {/* =================================================
                CTA BUTTONS
            ================================================== */}

            <motion.div
              variants={item}
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-3
              "
            >
              <button
                type="button"
                onClick={scrollToProjects}
                className="btn btn-primary"
              >
                <span>View Projects</span>

                <FiArrowRight size={15} className="btn-icon" />
              </button>

              <a href="/resume.pdf" download className="btn btn-secondary">
                <FiDownload size={15} className="shrink-0" />

                <span>Download CV</span>
              </a>
            </motion.div>

            {/* =================================================
                SOCIAL LINKS
            ================================================== */}

            <motion.div
              variants={item}
              className="
                mt-7
                flex
                items-center
                gap-1
              "
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={label}
                  className="
                    inline-flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    text-[var(--text-lo)]
                    transition-all
                    duration-200
                    hover:bg-[var(--surface-raised)]
                    hover:text-[var(--text-hi)]
                  "
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT — PROFILE OVERVIEW
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.75,
              delay: 0.15,
              ease,
            }}
            className="
              flex
              min-w-0
              justify-center
              lg:justify-end
            "
          >
            <div
              className="
                relative
                w-full
                max-w-[520px]
              "
            >
              {/* Glow */}

              <div
                className="
                  hero-glow
                  absolute
                  -inset-10
                  rounded-[3rem]
                "
                aria-hidden="true"
              />

              {/* Main Card */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                  p-5
                  shadow-[var(--shadow-md)]
                  sm:p-7
                  md:p-8
                "
              >
                {/* Top accent */}

                <div
                  className="
                    absolute
                    left-8
                    right-8
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-red-500/50
                    to-transparent
                  "
                />

                {/* =============================================
                    PROFILE HEADER
                ============================================== */}

                <div
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >
                  {/* Avatar */}

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[var(--text-hi)]
                      text-lg
                      font-bold
                      text-[var(--bg)]
                      sm:h-16
                      sm:w-16
                      sm:text-xl
                    "
                  >
                    SK
                  </div>

                  {/* Profile Details */}

                  <div className="min-w-0 flex-1">
                    <p
                      className="
                        truncate
                        text-base
                        font-semibold
                        leading-snug
                        tracking-[-0.02em]
                        text-[var(--text-hi)]
                        sm:text-lg
                      "
                    >
                      Shubham Raj Keshri
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-[var(--text-mid)]
                      "
                    >
                      Full Stack Engineer
                    </p>

                    <div
                      className="
                        mt-2
                        flex
                        items-center
                        gap-2
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-emerald-500
                        "
                      />

                      <span
                        className="
                          text-xs
                          text-[var(--text-lo)]
                        "
                      >
                        Open to opportunities
                      </span>
                    </div>
                  </div>
                </div>

                {/* =============================================
                    STATS
                ============================================== */}

                <div
                  className="
                    mt-7
                    grid
                    grid-cols-3
                    border-y
                    border-[var(--border)]
                    py-5
                  "
                >
                  {stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className={`
                        min-w-0
                        px-2
                        text-center
                        sm:px-4

                        ${
                          index !== stats.length - 1
                            ? "border-r border-[var(--border)]"
                            : ""
                        }
                      `}
                    >
                      <p
                        className="
                          text-xl
                          font-bold
                          leading-none
                          tracking-[-0.04em]
                          text-[var(--text-hi)]
                          sm:text-2xl
                        "
                      >
                        {stat.value}
                      </p>

                      <p
                        className="
                          mt-2
                          text-[9px]
                          leading-4
                          text-[var(--text-lo)]
                          sm:text-[11px]
                        "
                      >
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* =============================================
                    STACK
                ============================================== */}

                <div
                  className="
                    mt-6
                    divide-y
                    divide-[var(--border)]
                  "
                >
                  {stackRows.map(({ icon: Icon, label, text }) => (
                    <div
                      key={label}
                      className="
                          group
                          flex
                          min-w-0
                          items-center
                          gap-4
                          py-4
                          first:pt-0
                          last:pb-0
                        "
                    >
                      <Icon
                        className="
                            h-4
                            w-4
                            shrink-0
                            text-[var(--red)]
                          "
                      />

                      <div className="min-w-0 flex-1">
                        <p
                          className="
                              text-[10px]
                              font-semibold
                              uppercase
                              tracking-[0.12em]
                              text-[var(--text-lo)]
                            "
                        >
                          {label}
                        </p>

                        <p
                          className="
                              mt-1
                              truncate
                              text-[13px]
                              font-medium
                              text-[var(--text-mid)]
                              sm:text-sm
                            "
                        >
                          {text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* =============================================
                    FOOTER
                ============================================== */}

                <div
                  className="
                    mt-7
                    flex
                    flex-wrap
                    items-center
                    justify-between
                    gap-3
                    border-t
                    border-[var(--border)]
                    pt-5
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-xs
                      text-[var(--text-lo)]
                    "
                  >
                    <FiMapPin
                      size={13}
                      className="
                        shrink-0
                        text-[var(--red)]
                      "
                    />

                    <span>Hyderabad, India</span>
                  </div>

                  <span
                    className="
                      text-xs
                      text-[var(--text-lo)]
                    "
                  >
                    Frontend · Backend
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

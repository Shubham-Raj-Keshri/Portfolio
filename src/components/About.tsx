"use client";

import { motion } from "framer-motion";
import { Monitor, Zap, Layers } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { aboutCards } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  monitor: <Monitor className="h-[18px] w-[18px] shrink-0" />,
  zap: <Zap className="h-[18px] w-[18px] shrink-0" />,
  layers: <Layers className="h-[18px] w-[18px] shrink-0" />,
};

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "200+", label: "LMS Courses" },
  { value: "5+", label: "Tech Stacks" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  return (
    <section
      id="about"
      className="
        section-py
        relative
        overflow-hidden
        bg-[var(--bg)]
        transition-colors
        duration-300
      "
    >
      {/* =====================================================
          BACKGROUND ACCENT
      ====================================================== */}

      <div
        className="
          orb
          pointer-events-none
          absolute
          -left-48
          top-1/2
          h-[480px]
          w-[480px]
          -translate-y-1/2
          bg-[#DC2626]
          opacity-[0.02]
        "
        aria-hidden="true"
      />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="site-container relative">
        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

        <SectionHeader
          label="About Me"
          title="Crafting digital experiences with purpose"
          subtitle="Full Stack Engineer with 3+ years building scalable, production-ready web applications."
        />

        {/* ===================================================
            MAIN CONTENT
        ==================================================== */}

        <div
          className="
            grid
            items-start
            gap-12
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-16
            xl:gap-20
          "
        >
          {/* =================================================
              LEFT — ABOUT TEXT + STATS
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -16,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-40px",
            }}
            transition={{
              duration: 0.6,
              ease,
            }}
            className="min-w-0"
          >
            {/* ===============================================
                ABOUT TEXT
            ================================================ */}

            <div
              className="
                max-w-2xl
                space-y-4
                sm:space-y-5
              "
            >
              <p
                className="
                  text-sm
                  leading-[1.8]
                  text-[var(--text-mid)]
                  sm:text-[15px]
                  sm:leading-7
                  md:text-base
                "
              >
                I&apos;m a passionate Full Stack Engineer with over{" "}
                <span className="font-semibold text-[var(--text-hi)]">
                  3+ years of experience
                </span>{" "}
                in Frontend &amp; Full Stack Development. I specialize in
                building scalable web applications with React, Next.js,
                TypeScript, Node.js, and PostgreSQL.
              </p>

              <p
                className="
                  text-sm
                  leading-[1.8]
                  text-[var(--text-mid)]
                  sm:text-[15px]
                  sm:leading-7
                  md:text-base
                "
              >
                My expertise spans designing{" "}
                <span className="font-semibold text-[var(--text-hi)]">
                  REST APIs
                </span>
                , building{" "}
                <span className="font-semibold text-[var(--text-hi)]">
                  modern UI
                </span>{" "}
                with reusable components, and architecting clean, maintainable
                codebases.
              </p>

              <p
                className="
                  text-sm
                  leading-[1.8]
                  text-[var(--text-mid)]
                  sm:text-[15px]
                  sm:leading-7
                  md:text-base
                "
              >
                I focus on turning complex requirements into polished,
                production-ready products with clean architecture and thoughtful
                user experiences.
              </p>
            </div>

            {/* =================================================
                STATS
            ================================================== */}

            <div
              className="
                mt-9
                grid
                grid-cols-2
                gap-x-5
                gap-y-7
                sm:mt-10
                sm:grid-cols-4
                sm:gap-x-4
                sm:gap-y-0
              "
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                    ease,
                  }}
                  className="
                    relative
                    min-w-0
                    border-l
                    border-[var(--border)]
                    pl-4
                  "
                >
                  {/* Red accent line */}

                  <span
                    className="
                      absolute
                      -left-px
                      top-0
                      h-7
                      w-px
                      bg-[var(--red)]
                    "
                  />

                  {/* Value */}

                  <p
                    className="
                      text-2xl
                      font-bold
                      leading-none
                      tracking-[-0.04em]
                      text-[var(--text-hi)]
                      md:text-3xl
                    "
                  >
                    {stat.value}
                  </p>

                  {/* Label */}

                  <p
                    className="
                      mt-2
                      max-w-[100px]
                      text-[11px]
                      leading-[1.45]
                      text-[var(--text-lo)]
                      sm:text-xs
                    "
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* =================================================
              RIGHT — FEATURE LIST
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 16,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-40px",
            }}
            transition={{
              duration: 0.6,
              ease,
            }}
            className="
              min-w-0
              border-y
              border-[var(--border)]
            "
          >
            {aboutCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease,
                }}
                className={`
                  group
                  relative
                  flex
                  items-start
                  gap-4
                  py-5
                  transition-all
                  duration-300
                  sm:gap-5
                  sm:py-6
                  lg:py-7

                  ${
                    index !== aboutCards.length - 1
                      ? "border-b border-[var(--border)]"
                      : ""
                  }
                `}
              >
                {/* ===========================================
                    ICON
                ============================================ */}

                <div
                  className="
                    relative
                    mt-0.5
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    text-[var(--red)]
                    sm:h-10
                    sm:w-10
                  "
                >
                  {/* Minimal corner lines */}

                  <span
                    className="
                      absolute
                      left-0
                      top-0
                      h-2.5
                      w-2.5
                      border-l
                      border-t
                      border-[var(--red-border)]
                    "
                  />

                  <span
                    className="
                      absolute
                      bottom-0
                      right-0
                      h-2.5
                      w-2.5
                      border-b
                      border-r
                      border-[var(--red-border)]
                    "
                  />

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    {iconMap[card.icon]}
                  </motion.div>
                </div>

                {/* ===========================================
                    CONTENT
                ============================================ */}

                <div className="min-w-0 flex-1">
                  <h3
                    className="
                      text-[15px]
                      font-semibold
                      leading-snug
                      tracking-[-0.02em]
                      text-[var(--text-hi)]
                      sm:text-base
                      md:text-lg
                    "
                  >
                    {card.title}
                  </h3>

                  <p
                    className="
                      mt-1.5
                      max-w-xl
                      text-[13px]
                      leading-[1.7]
                      text-[var(--text-mid)]
                      sm:mt-2
                      sm:text-sm
                      sm:leading-6
                    "
                  >
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

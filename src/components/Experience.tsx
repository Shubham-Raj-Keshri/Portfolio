"use client";

import { motion } from "framer-motion";
import { Briefcase, CalendarDays } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { experiences } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        section-py
        relative
        overflow-hidden
        bg-[var(--bg)]
        transition-colors
        duration-300
      "
    >
      {/* Background Accent */}
      <div
        className="
          orb
          pointer-events-none
          absolute
          right-[-180px]
          top-0
          h-[480px]
          w-[480px]
          bg-[#DC2626]
          opacity-[0.025]
        "
        aria-hidden="true"
      />

      <div className="site-container relative">
        {/* Section Header */}
        <SectionHeader
          label="Experience"
          title="Where I've worked"
          subtitle="My professional journey building products and solving real-world problems."
        />

        {/* =====================================================
            EXPERIENCE TIMELINE
        ====================================================== */}

        <div className="mx-auto w-full max-w-6xl">
          <div className="relative">
            {/* Desktop / Tablet Timeline Line */}
            <div
              className="
                absolute
                bottom-0
                left-[19px]
                top-0
                hidden
                w-px
                bg-[var(--border)]
                sm:block
              "
              aria-hidden="true"
            />

            <div className="flex flex-col gap-10 sm:gap-12">
              {experiences.map((exp, index) => (
                <motion.article
                  key={`${exp.company}-${index}`}
                  initial={{
                    opacity: 0,
                    y: 22,
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
                    duration: 0.55,
                    delay: index * 0.08,
                    ease,
                  }}
                  className="
                    relative
                    min-w-0
                    sm:grid
                    sm:grid-cols-[40px_minmax(0,1fr)]
                    sm:gap-7
                    lg:gap-10
                  "
                >
                  {/* =================================================
                      TIMELINE MARKER
                  ================================================== */}

                  <div
                    className="
                      relative
                      z-10
                      hidden
                      justify-center
                      sm:flex
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[var(--border)]
                        bg-[var(--bg)]
                        text-[var(--red)]
                        shadow-[var(--shadow-sm)]
                      "
                    >
                      <Briefcase size={16} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* =================================================
                      EXPERIENCE CONTENT
                  ================================================== */}

                  <div
                    className="
                      group
                      relative
                      min-w-0
                      border-b
                      border-[var(--border)]
                      pb-10
                      sm:pb-12
                    "
                  >
                    {/* Mobile Top Detail */}
                    <div
                      className="
                        mb-5
                        flex
                        items-center
                        gap-3
                        sm:hidden
                      "
                    >
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[var(--border)]
                          bg-[var(--surface)]
                          text-[var(--red)]
                        "
                      >
                        <Briefcase size={15} strokeWidth={1.8} />
                      </div>

                      <span
                        className="
                          text-[11px]
                          font-semibold
                          uppercase
                          tracking-[0.14em]
                          text-[var(--text-lo)]
                        "
                      >
                        Experience {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* =================================================
                        HEADER
                    ================================================== */}

                    <div
                      className="
                        flex
                        flex-col
                        gap-5
                        md:flex-row
                        md:items-start
                        md:justify-between
                        md:gap-8
                      "
                    >
                      {/* Role + Company */}
                      <div className="min-w-0">
                        <p
                          className="
                            mb-2
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.14em]
                            text-[var(--red)]
                          "
                        >
                          {exp.company}
                        </p>

                        <h3
                          className="
                            max-w-2xl
                            text-xl
                            font-bold
                            leading-[1.2]
                            tracking-[-0.03em]
                            text-[var(--text-hi)]
                            sm:text-2xl
                            lg:text-[1.65rem]
                          "
                        >
                          {exp.role}
                        </h3>
                      </div>

                      {/* Period + Employment Type */}
                      <div
                        className="
                          flex
                          shrink-0
                          flex-col
                          gap-2
                          md:items-end
                        "
                      >
                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            text-sm
                            text-[var(--text-mid)]
                          "
                        >
                          <CalendarDays
                            size={15}
                            strokeWidth={1.8}
                            className="shrink-0 text-[var(--text-lo)]"
                          />

                          <span>{exp.period}</span>
                        </div>

                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            md:justify-end
                          "
                        >
                          <span
                            className="
                              h-1.5
                              w-1.5
                              shrink-0
                              rounded-full
                              bg-emerald-500
                            "
                          />

                          <span
                            className="
                              text-xs
                              font-medium
                              text-[var(--text-lo)]
                            "
                          >
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* =================================================
                        RESPONSIBILITIES
                    ================================================== */}

                    <div
                      className="
                        mt-7
                        border-l
                        border-[var(--border)]
                        pl-5
                        sm:mt-8
                        sm:pl-6
                      "
                    >
                      <ul className="space-y-4">
                        {exp.responsibilities.map(
                          (responsibility, responsibilityIndex) => (
                            <motion.li
                              key={responsibilityIndex}
                              initial={{
                                opacity: 0,
                                x: -8,
                              }}
                              whileInView={{
                                opacity: 1,
                                x: 0,
                              }}
                              viewport={{
                                once: true,
                              }}
                              transition={{
                                duration: 0.4,
                                delay:
                                  index * 0.06 + responsibilityIndex * 0.04,
                                ease,
                              }}
                              className="
                                relative
                                text-[14px]
                                leading-7
                                text-[var(--text-mid)]
                                sm:text-[15px]
                              "
                            >
                              {/* Small Timeline Marker */}
                              <span
                                className="
                                  absolute
                                  -left-[23px]
                                  top-[0.7rem]
                                  h-1
                                  w-1
                                  rounded-full
                                  bg-[var(--red)]
                                  sm:-left-[27px]
                                "
                              />

                              {responsibility}
                            </motion.li>
                          ),
                        )}
                      </ul>
                    </div>

                    {/* =================================================
                        BOTTOM DETAIL
                    ================================================== */}

                    <div
                      className="
                        mt-8
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <span
                        className="
                          font-mono
                          text-[10px]
                          font-medium
                          tracking-[0.12em]
                          text-[var(--text-faint)]
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div
                        className="
                          h-px
                          w-10
                          bg-[var(--border)]
                          transition-all
                          duration-300
                          group-hover:w-16
                          group-hover:bg-[var(--red-border)]
                        "
                      />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

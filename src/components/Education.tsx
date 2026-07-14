"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle2, CalendarDays } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { education, certificates } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Education() {
  return (
    <section
      id="education"
      className="
        section-py
        relative
        overflow-hidden
        bg-[var(--bg)]
        transition-colors
        duration-300
      "
    >
      {/* Background accent */}
      <div
        className="
          orb
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-[480px]
          w-[480px]
          bg-[#DC2626]
          opacity-[0.02]
        "
        aria-hidden="true"
      />

      <div className="site-container relative">
        {/* Section Header */}
        <SectionHeader
          label="Education & Certificates"
          title="Academic background"
          subtitle="My educational foundation and professional certifications."
        />

        {/* Main Grid */}
        <div
          className="
            grid
            grid-cols-1
            gap-14
            lg:grid-cols-2
            lg:gap-16
            xl:gap-20
          "
        >
          {/* =================================================
              EDUCATION
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-60px",
            }}
            transition={{
              duration: 0.6,
              ease,
            }}
            className="min-w-0"
          >
            {/* Section title */}
            <div
              className="
                mb-8
                flex
                items-center
                gap-3
              "
            >
              <GraduationCap
                className="
                  h-5
                  w-5
                  shrink-0
                  text-[var(--red)]
                "
              />

              <h3
                className="
                  text-base
                  font-semibold
                  leading-none
                  tracking-[-0.02em]
                  text-[var(--text-hi)]
                  md:text-lg
                "
              >
                Education
              </h3>
            </div>

            {/* Education Timeline */}
            <div
              className="
                border-y
                border-[var(--border)]
              "
            >
              {education.map((edu, index) => (
                <motion.div
                  key={`${edu.institution}-${index}`}
                  initial={{
                    opacity: 0,
                    y: 16,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease,
                  }}
                  className={`
                    relative
                    py-7
                    sm:py-8

                    ${
                      index !== education.length - 1
                        ? "border-b border-[var(--border)]"
                        : ""
                    }
                  `}
                >
                  <div
                    className="
                      flex
                      flex-col
                      gap-5
                      sm:flex-row
                      sm:items-start
                      sm:justify-between
                      sm:gap-8
                    "
                  >
                    {/* Education details */}
                    <div
                      className="
                        min-w-0
                        flex-1
                      "
                    >
                      {/* Number */}
                      <span
                        className="
                          mb-3
                          block
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.16em]
                          text-[var(--red)]
                        "
                      >
                        0{index + 1}
                      </span>

                      {/* Institution */}
                      <h4
                        className="
                          text-base
                          font-semibold
                          leading-snug
                          tracking-[-0.02em]
                          text-[var(--text-hi)]
                          sm:text-lg
                        "
                      >
                        {edu.institution}
                      </h4>

                      {/* Degree */}
                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-[var(--text-mid)]
                        "
                      >
                        {edu.degree}
                      </p>

                      {/* Period */}
                      <div
                        className="
                          mt-4
                          flex
                          items-center
                          gap-2
                          text-xs
                          text-[var(--text-lo)]
                        "
                      >
                        <CalendarDays
                          size={14}
                          className="
                            shrink-0
                            text-[var(--red)]
                          "
                        />

                        <span>{edu.period}</span>
                      </div>
                    </div>

                    {/* CGPA */}
                    <div
                      className="
                        flex
                        shrink-0
                        items-end
                        gap-2
                        border-l-2
                        border-[var(--red)]
                        pl-4
                        sm:block
                        sm:min-w-[88px]
                        sm:text-right
                      "
                    >
                      <span
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.14em]
                          text-[var(--text-lo)]
                        "
                      >
                        CGPA
                      </span>

                      <p
                        className="
                          text-2xl
                          font-bold
                          leading-none
                          tracking-[-0.04em]
                          text-[var(--text-hi)]
                          sm:mt-2
                          sm:text-3xl
                        "
                      >
                        {edu.cgpa}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* =================================================
              CERTIFICATES
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-60px",
            }}
            transition={{
              duration: 0.6,
              ease,
            }}
            className="min-w-0"
          >
            {/* Section title */}
            <div
              className="
                mb-8
                flex
                items-center
                gap-3
              "
            >
              <Award
                className="
                  h-5
                  w-5
                  shrink-0
                  text-[var(--red)]
                "
              />

              <h3
                className="
                  text-base
                  font-semibold
                  leading-none
                  tracking-[-0.02em]
                  text-[var(--text-hi)]
                  md:text-lg
                "
              >
                Certificates
              </h3>
            </div>

            {/* Certificate list */}
            <div
              className="
                border-y
                border-[var(--border)]
              "
            >
              {certificates.map((certificate, index) => (
                <motion.div
                  key={`${certificate}-${index}`}
                  initial={{
                    opacity: 0,
                    y: 14,
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
                    delay: index * 0.07,
                    ease,
                  }}
                  className={`
                    group
                    relative
                    flex
                    min-w-0
                    items-start
                    gap-4
                    py-5
                    transition-all
                    duration-300
                    sm:items-center

                    ${
                      index !== certificates.length - 1
                        ? "border-b border-[var(--border)]"
                        : ""
                    }
                  `}
                >
                  {/* Number */}
                  <span
                    className="
                      mt-0.5
                      w-6
                      shrink-0
                      text-[10px]
                      font-semibold
                      leading-5
                      tracking-[0.08em]
                      text-[var(--text-lo)]
                      transition-colors
                      duration-300
                      group-hover:text-[var(--red)]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Check icon */}
                  <CheckCircle2
                    className="
                      mt-0.5
                      h-4
                      w-4
                      shrink-0
                      text-[var(--red)]
                      transition-transform
                      duration-300
                      group-hover:scale-110
                      sm:mt-0
                    "
                  />

                  {/* Certificate name */}
                  <span
                    className="
                      min-w-0
                      flex-1
                      text-sm
                      font-medium
                      leading-6
                      text-[var(--text-mid)]
                      transition-colors
                      duration-300
                      group-hover:text-[var(--text-hi)]
                    "
                  >
                    {certificate}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

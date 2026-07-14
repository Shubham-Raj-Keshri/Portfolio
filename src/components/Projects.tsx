"use client";

import { motion } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiLock,
  FiArrowUpRight,
} from "react-icons/fi";

import SectionHeader from "./SectionHeader";
import { projects } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Projects() {
  return (
    <section
      id="projects"
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
          bottom-[-180px]
          left-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          bg-[#DC2626]
          opacity-[0.02]
        "
        aria-hidden="true"
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="site-container relative">
        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

        <SectionHeader
          label="Projects"
          title="Things I've built"
          subtitle="A selection of projects that showcase my skills across the full stack."
        />

        {/* ===================================================
            PROJECTS GRID
        ==================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-x-8
            gap-y-12
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {projects.map((project, index) => {
            const projectNumber = String(index + 1).padStart(2, "0");

            return (
              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 24,
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
                  group
                  flex
                  min-w-0
                  flex-col
                "
              >
                {/* =================================================
                    PROJECT VISUAL
                ================================================== */}

                <div
                  className="
                    relative
                    mb-6
                    overflow-hidden
                    border-y
                    border-[var(--border)]
                    bg-[var(--surface)]
                  "
                >
                  {/* ===============================================
                      VISUAL AREA
                  ================================================ */}

                  <div
                    className="
                      relative
                      flex
                      h-[180px]
                      items-center
                      justify-center
                      overflow-hidden
                      sm:h-[200px]
                      lg:h-[220px]
                    "
                  >
                    {/* Subtle Grid */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        opacity-50
                      "
                      style={{
                        backgroundImage:
                          "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                      }}
                      aria-hidden="true"
                    />

                    {/* Red Glow */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-1/2
                        h-32
                        w-32
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-[var(--red)]
                        opacity-[0.04]
                        blur-[50px]
                        transition-all
                        duration-500
                        group-hover:scale-125
                        group-hover:opacity-[0.07]
                      "
                      aria-hidden="true"
                    />

                    {/* Large Project Number */}

                    <span
                      className="
                        pointer-events-none
                        absolute
                        right-3
                        top-2
                        select-none
                        font-mono
                        text-[4rem]
                        font-bold
                        leading-none
                        tracking-[-0.08em]
                        text-[var(--text-hi)]
                        opacity-[0.025]
                        sm:text-[5rem]
                      "
                      aria-hidden="true"
                    >
                      {projectNumber}
                    </span>

                    {/* Center Project Mark */}

                    <div
                      className="
                        relative
                        z-10
                        flex
                        flex-col
                        items-center
                        justify-center
                        text-center
                      "
                    >
                      {/* Project Number */}

                      <span
                        className="
                          font-mono
                          text-[11px]
                          font-medium
                          tracking-[0.14em]
                          text-[var(--red)]
                        "
                      >
                        PROJECT / {projectNumber}
                      </span>

                      {/* Decorative Line */}

                      <div
                        className="
                          my-5
                          h-10
                          w-px
                          bg-gradient-to-b
                          from-[var(--red)]
                          to-transparent
                          opacity-60
                        "
                      />

                      {/* Project Title */}

                      <p
                        className="
                          max-w-[80%]
                          text-lg
                          font-bold
                          leading-tight
                          tracking-[-0.03em]
                          text-[var(--text-hi)]
                          sm:text-xl
                        "
                      >
                        {project.title}
                      </p>
                    </div>

                    {/* Top Left Corner */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        left-0
                        top-0
                        h-6
                        w-px
                        bg-[var(--red)]
                        opacity-60
                      "
                    />

                    <div
                      className="
                        pointer-events-none
                        absolute
                        left-0
                        top-0
                        h-px
                        w-6
                        bg-[var(--red)]
                        opacity-60
                      "
                    />

                    {/* Bottom Right Corner */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        bottom-0
                        right-0
                        h-6
                        w-px
                        bg-[var(--red)]
                        opacity-60
                      "
                    />

                    <div
                      className="
                        pointer-events-none
                        absolute
                        bottom-0
                        right-0
                        h-px
                        w-6
                        bg-[var(--red)]
                        opacity-60
                      "
                    />
                  </div>
                </div>

                {/* =================================================
                    PROJECT CONTENT
                ================================================== */}

                <div
                  className="
                    flex
                    flex-1
                    flex-col
                  "
                >
                  {/* ===============================================
                      TITLE
                  ================================================ */}

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-5
                    "
                  >
                    <div className="min-w-0">
                      <p
                        className="
                          mb-2
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.14em]
                          text-[var(--text-lo)]
                        "
                      >
                        Project {projectNumber}
                      </p>

                      <h3
                        className="
                          text-lg
                          font-bold
                          leading-tight
                          tracking-[-0.025em]
                          text-[var(--text-hi)]
                          sm:text-xl
                        "
                      >
                        {project.title}
                      </h3>
                    </div>

                    {/* Open Arrow */}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title}`}
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
                          text-[var(--text-lo)]
                          transition-all
                          duration-200
                          hover:border-[var(--red-border)]
                          hover:text-[var(--red)]
                        "
                      >
                        <FiArrowUpRight size={15} />
                      </a>
                    )}
                  </div>

                  {/* ===============================================
                      DESCRIPTION
                  ================================================ */}

                  <p
                    className="
                      mt-4
                      text-[14px]
                      leading-7
                      text-[var(--text-mid)]
                    "
                  >
                    {project.description}
                  </p>

                  {/* ===============================================
                      TECHNOLOGY STACK
                  ================================================ */}

                  <div
                    className="
                      mt-6
                      border-l
                      border-[var(--border)]
                      pl-4
                    "
                  >
                    <p
                      className="
                        mb-3
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.14em]
                        text-[var(--text-faint)]
                      "
                    >
                      Technologies
                    </p>

                    <div
                      className="
                        flex
                        flex-wrap
                        gap-x-2
                        gap-y-1
                      "
                    >
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="
                            text-[12px]
                            font-medium
                            leading-5
                            text-[var(--text-mid)]
                          "
                        >
                          {tech}

                          {techIndex < project.tech.length - 1 && (
                            <span
                              className="
                                ml-2
                                text-[var(--text-faint)]
                              "
                            >
                              /
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ===============================================
                      PROJECT ACTIONS
                  ================================================ */}

                  <div
                    className="
                      mt-auto
                      flex
                      items-center
                      gap-5
                      border-t
                      border-[var(--border)]
                      pt-5
                      mt-7
                    "
                  >
                    {/* Live Demo */}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          group/link
                          inline-flex
                          items-center
                          gap-2
                          text-[13px]
                          font-semibold
                          text-[var(--text-hi)]
                          transition-colors
                          duration-200
                          hover:text-[var(--red)]
                        "
                      >
                        <FiExternalLink
                          size={14}
                          className="
                            shrink-0
                            transition-transform
                            duration-200
                            group-hover/link:-translate-y-0.5
                            group-hover/link:translate-x-0.5
                          "
                        />

                        <span>Live Demo</span>
                      </a>
                    )}

                    {/* GitHub */}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          group/link
                          inline-flex
                          items-center
                          gap-2
                          text-[13px]
                          font-semibold
                          text-[var(--text-mid)]
                          transition-colors
                          duration-200
                          hover:text-[var(--text-hi)]
                        "
                      >
                        <FiGithub
                          size={14}
                          className="
                            shrink-0
                            transition-transform
                            duration-200
                            group-hover/link:-translate-y-0.5
                          "
                        />

                        <span>GitHub</span>
                      </a>
                    )}

                    {/* Private Project */}

                    {!project.live && !project.github && (
                      <div
                        className="
                          inline-flex
                          items-center
                          gap-2
                          text-[13px]
                          text-[var(--text-lo)]
                        "
                      >
                        <FiLock size={13} className="shrink-0" />

                        <span>Private project</span>
                      </div>
                    )}

                    {/* Project Number */}

                    <span
                      className="
                        ml-auto
                        font-mono
                        text-[10px]
                        tracking-[0.12em]
                        text-[var(--text-faint)]
                      "
                    >
                      {projectNumber}
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

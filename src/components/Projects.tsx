"use client";
import Image from "next/image";
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
    PROJECT IMAGE
================================================== */}

                <div
                  className="
    relative
    mb-6
    aspect-[16/10]
    overflow-hidden
    rounded-xl
    border
    border-[var(--border)]
    bg-[var(--surface)]
  "
                >
                  {project.image ? (
                    <>
                      <Image
                        src={project.image}
                        alt={`${project.title} project preview`}
                        fill
                        sizes="
          (max-width: 767px) 100vw,
          (max-width: 1279px) 50vw,
          33vw
        "
                        className="
          object-cover
          object-top
          transition-transform
          duration-500
          ease-out
          group-hover:scale-[1.03]
        "
                      />

                      {/* Subtle hover overlay */}

                      <div
                        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-black/15
          via-transparent
          to-transparent
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
                        aria-hidden="true"
                      />

                      {/* Project number */}

                      <div
                        className="
          absolute
          right-3
          top-3
          z-10
          rounded-md
          border
          border-white/20
          bg-black/60
          px-2.5
          py-1
          font-mono
          text-[10px]
          font-medium
          tracking-[0.12em]
          text-white
          backdrop-blur-sm
        "
                      >
                        {projectNumber}
                      </div>
                    </>
                  ) : (
                    /* Fallback when no project image exists */

                    <div
                      className="
        relative
        flex
        h-full
        w-full
        items-center
        justify-center
        overflow-hidden
      "
                    >
                      {/* Grid */}

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

                      {/* Glow */}

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
        "
                        aria-hidden="true"
                      />

                      {/* Fallback content */}

                      <div
                        className="
          relative
          z-10
          flex
          flex-col
          items-center
          justify-center
          px-6
          text-center
        "
                      >
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
                    </div>
                  )}
                </div>

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

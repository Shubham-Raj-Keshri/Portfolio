"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiJsonwebtokens,
  SiGit,
  SiGithub,
  SiPostman,
  SiClickup,
} from "react-icons/si";

import { FaCss3Alt } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { Code2, Database, Wrench } from "lucide-react";

import SectionHeader from "./SectionHeader";

const ease = [0.22, 1, 0.36, 1] as const;

/* ============================================================
   TYPES
============================================================ */

type Skill = {
  name: string;
  icon: IconType;
};

type SkillCategory = {
  title: string;
  subtitle: string;
  number: string;
  icon: IconType;
  skills: Skill[];
};

/* ============================================================
   SKILLS DATA
============================================================ */

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    subtitle: "Interfaces & experiences",
    number: "01",
    icon: Code2,
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "SCSS", icon: SiSass },
    ],
  },
  {
    title: "Backend",
    subtitle: "APIs, data & architecture",
    number: "02",
    icon: Database,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Prisma ORM", icon: SiPrisma },
      { name: "JWT", icon: SiJsonwebtokens },
    ],
  },
  {
    title: "Tools",
    subtitle: "Workflow & productivity",
    number: "03",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: VscCode },
      { name: "Postman", icon: SiPostman },
      { name: "ClickUp", icon: SiClickup },
    ],
  },
];

/* ============================================================
   COMPONENT
============================================================ */

export default function Skills() {
  return (
    <section
      id="skills"
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
          -right-48
          top-1/2
          h-[480px]
          w-[480px]
          -translate-y-1/2
          bg-[#DC2626]
          opacity-[0.02]
        "
        aria-hidden="true"
      />

      <div className="site-container relative">
        {/* Section Header */}
        <SectionHeader
          label="Skills"
          title="My technical toolkit"
          subtitle="Technologies and tools I use to build modern, scalable applications."
        />

        {/* ====================================================
            SKILLS
        ==================================================== */}

        <div
          className="
            border-y
            border-[var(--border)]
          "
        >
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{
                  opacity: 0,
                  y: 20,
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
                  delay: categoryIndex * 0.08,
                  ease,
                }}
                className={`
                  grid
                  gap-7
                  py-8
                  sm:py-10
                  lg:grid-cols-[220px_1fr]
                  lg:gap-12
                  xl:grid-cols-[260px_1fr]

                  ${
                    categoryIndex !== skillCategories.length - 1
                      ? "border-b border-[var(--border)]"
                      : ""
                  }
                `}
              >
                {/* ============================================
                    CATEGORY INFO
                ============================================ */}

                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-5
                    lg:block
                  "
                >
                  <div
                    className="
                      flex
                      min-w-0
                      items-start
                      gap-4
                    "
                  >
                    {/* Category Icon */}

                    <CategoryIcon
                      className="
                        mt-0.5
                        h-5
                        w-5
                        shrink-0
                        text-[var(--red)]
                      "
                    />

                    {/* Category Text */}

                    <div className="min-w-0">
                      <h3
                        className="
                          text-lg
                          font-semibold
                          leading-tight
                          tracking-[-0.025em]
                          text-[var(--text-hi)]
                        "
                      >
                        {category.title}
                      </h3>

                      <p
                        className="
                          mt-1.5
                          text-xs
                          leading-5
                          text-[var(--text-lo)]
                        "
                      >
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Number */}

                  <span
                    className="
                      shrink-0
                      text-[10px]
                      font-semibold
                      tracking-[0.14em]
                      text-[var(--text-faint)]
                      lg:mt-6
                      lg:block
                      lg:pl-9
                    "
                  >
                    {category.number}
                  </span>
                </div>

                {/* ============================================
                    SKILLS GRID
                ============================================ */}

                <div
                  className="
                    grid
                    grid-cols-2
                    gap-x-5
                    gap-y-1
                    sm:grid-cols-3
                    sm:gap-x-8
                    lg:grid-cols-3
                    xl:grid-cols-4
                  "
                >
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
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
                          duration: 0.4,
                          delay:
                            categoryIndex * 0.06 + skillIndex * 0.035,
                          ease,
                        }}
                        className="
                          group
                          relative
                          flex
                          min-w-0
                          items-center
                          gap-3
                          border-b
                          border-[var(--border-soft)]
                          py-4
                        "
                      >
                        {/* Skill Icon */}

                        <div
                          className="
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center
                            text-[var(--text-lo)]
                            transition-all
                            duration-300
                            group-hover:-translate-y-0.5
                            group-hover:text-[var(--red)]
                          "
                        >
                          <SkillIcon className="h-[18px] w-[18px]" />
                        </div>

                        {/* Skill Name */}

                        <span
                          className="
                            min-w-0
                            truncate
                            text-[13px]
                            font-medium
                            leading-5
                            text-[var(--text-mid)]
                            transition-colors
                            duration-300
                            group-hover:text-[var(--text-hi)]
                            sm:text-sm
                          "
                        >
                          {skill.name}
                        </span>

                        {/* Hover line */}

                        <span
                          className="
                            absolute
                            bottom-[-1px]
                            left-0
                            h-px
                            w-0
                            bg-[var(--red)]
                            transition-all
                            duration-300
                            group-hover:w-full
                          "
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

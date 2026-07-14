"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  label: string;
  title: string;
  subtitle?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function SectionHeader({
  label,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <motion.div
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
        margin: "-40px",
      }}
      transition={{
        duration: 0.55,
        ease,
      }}
      className="
        mb-9
        w-full
        max-w-3xl
        sm:mb-11
        md:mb-14
        lg:mb-16
      "
    >
      {/* =====================================================
          SECTION LABEL
      ====================================================== */}

      <div
        className="
          mb-3
          flex
          items-center
          gap-2.5
          sm:mb-4
        "
      >
        {/* Accent dot */}
        <span
          className="
            h-1.5
            w-1.5
            shrink-0
            rounded-full
            bg-[var(--red)]
          "
        />

        {/* Label */}
        <span
          className="
            text-[10px]
            font-semibold
            uppercase
            leading-none
            tracking-[0.18em]
            text-[var(--text-mid)]
            sm:text-[11px]
          "
        >
          {label}
        </span>
      </div>

      {/* =====================================================
          TITLE
      ====================================================== */}

      <h2
        className="
          max-w-[760px]
          text-[clamp(2rem,8vw,2.75rem)]
          font-bold
          leading-[1.04]
          tracking-[-0.045em]
          text-[var(--text-hi)]
          sm:text-[clamp(2.25rem,6vw,3rem)]
          lg:text-[3.5rem]
        "
      >
        {title}
      </h2>

      {/* =====================================================
          SUBTITLE
      ====================================================== */}

      {subtitle && (
        <p
          className="
            mt-3
            max-w-[620px]
            text-sm
            leading-[1.7]
            text-[var(--text-mid)]
            sm:mt-4
            sm:text-[15px]
            sm:leading-7
            md:text-base
          "
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

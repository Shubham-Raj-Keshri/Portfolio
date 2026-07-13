"use client";

import { motion } from "framer-motion";


interface Props {
  label: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeader({ label, title, subtitle, align = "center" }: Props) {
  const centered = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-20 flex flex-col gap-4 ${centered ? "items-center text-center" : "items-start text-left"}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-[#DC2626]/20 bg-[#DC2626]/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#DC2626]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#DC2626]" />
        {label}
      </span>

      <h2 className={`text-[clamp(1.7rem,3.4vw,2.45rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#f2f2f2] text-balance`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`text-[15px] leading-[1.8] text-[rgba(242,242,242,0.45)] ${centered ? "max-w-[58ch]" : "max-w-[65ch]"}`}>
          {subtitle}
        </p>
      )}

    </motion.div>
  );
}

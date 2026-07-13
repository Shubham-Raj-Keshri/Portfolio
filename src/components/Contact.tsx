"use client";

import { motion } from "framer-motion";
import type { FormEvent } from "react";
import {
  FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin,
} from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { socialLinks } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

const WA_HREF =
  "https://wa.me/918210057738?text=Hi%20Shubham,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity";

const contactCards = [
  {
    icon: FiMail,
    label: "Email",
    value: "shubhamkeshri2020@gmail.com",
    href: "mailto:shubhamkeshri2020@gmail.com",
    external: false,
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+91 8210057738",
    href: "tel:918210057738",
    external: false,
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Hyderabad, Telangana, India",
    href: null,
    external: false,
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "Shubham-Raj-Keshri",
    href: socialLinks.github,
    external: true,
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "shubham-raj-keshri",
    href: socialLinks.linkedin,
    external: true,
  },
];

/* WhatsApp SVG — reused in the CTA button */
function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className="fill-white flex-shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault();

  return (
    <section id="contact" className="section-py bg-[#050505] relative overflow-hidden">
      {/* Background orb */}
      <div className="orb w-[600px] h-[600px] bg-[#DC2626] opacity-[0.045] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="section-shell relative">

        <SectionHeader
          label="Contact"
          title="Let's work together"
          subtitle="Open to full-time roles, freelance projects, and exciting collaborations. Reach out through any channel below."
        />

        {/* ── Primary CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-16 flex justify-center"
        >
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Shubham on WhatsApp"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1ebe5d] text-white text-[15px] font-semibold transition-all duration-300 shadow-[0_0_32px_rgba(37,211,102,0.28)] hover:shadow-[0_0_48px_rgba(37,211,102,0.42)] hover:-translate-y-0.5"
          >
            <WhatsAppIcon size={20} />
            Let&apos;s Connect on WhatsApp
            {/* Arrow */}
            <svg
              viewBox="0 0 16 16"
              width={14}
              height={14}
              className="fill-white/70 group-hover:fill-white group-hover:translate-x-0.5 transition-all duration-200"
              aria-hidden
            >
              <path d="M3.5 8h9M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </a>
        </motion.div>

        {/* ── Divider with label ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="mb-12 flex items-center gap-4"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/[0.07]" />
          <span className="text-[11px] font-semibold text-[rgba(242,242,242,0.22)] uppercase tracking-[0.14em] flex-shrink-0">
            Or reach out directly
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/[0.07]" />
        </motion.div>

        <div className="grid grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease }}
            className="section-card rounded-[2.25rem] p-10 sm:p-12 col-span-12 lg:col-span-7"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#DC2626]">Available for</p>
            <h3 className="mt-3 text-[clamp(1.3rem,2.4vw,1.8rem)] font-semibold tracking-[-0.02em] text-[#f2f2f2]">Full-time roles, product builds, and thoughtful collaborations.</h3>
            <p className="mt-4 text-[15px] leading-[1.8] text-[rgba(242,242,242,0.48)]">If you need a fast-moving engineer who can ship polished interfaces and reliable backend systems, I’d love to hear about it.</p>

            <form onSubmit={handleSubmit} className="mt-12 grid gap-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-[13px] text-[#f2f2f2]">
                  <span className="font-semibold">Name</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="rounded-[1.75rem] border border-white/[0.08] bg-[#060606] px-5 py-4 text-[14px] text-[#f2f2f2] outline-none transition-all duration-200 focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20"
                  />
                </label>
                <label className="flex flex-col gap-2 text-[13px] text-[#f2f2f2]">
                  <span className="font-semibold">Email</span>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="rounded-[1.75rem] border border-white/[0.08] bg-[#060606] px-5 py-4 text-[14px] text-[#f2f2f2] outline-none transition-all duration-200 focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2 text-[13px] text-[#f2f2f2]">
                <span className="font-semibold">Message</span>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="min-h-[180px] rounded-[1.75rem] border border-white/[0.08] bg-[#060606] px-5 py-5 text-[14px] text-[#f2f2f2] outline-none transition-all duration-200 focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20"
                />
              </label>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-7 py-3.5 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-[#1ebe5d]"
                >
                  Send message
                </button>
                <span className="text-[13px] text-[rgba(242,242,242,0.48)]">Typically replies within 24 hours.</span>
              </div>
            </form>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 col-span-12 lg:col-span-5">
          {contactCards.map((card, i) => {
            const inner = (
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="p-3 rounded-xl bg-[#DC2626]/[0.08] border border-[#DC2626]/[0.16] flex-shrink-0">
                  <card.icon size={16} className="text-[#DC2626]" />
                </div>
                {/* Text */}
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold text-[rgba(242,242,242,0.26)] uppercase tracking-[0.1em] mb-0.5">
                    {card.label}
                  </p>
                  <p className="text-[13px] font-semibold text-[rgba(242,242,242,0.72)] truncate leading-snug group-hover:text-[#f2f2f2] transition-colors duration-200">
                    {card.value}
                  </p>
                </div>
              </div>
            );

            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease }}
                whileHover={{ y: -3, borderColor: "rgba(220,38,38,0.2)" }}
                className="glass rounded-2xl border border-white/[0.07] p-6 transition-all duration-300 group"
              >
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                    className="block"
                    aria-label={`${card.label}: ${card.value}`}
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </motion.div>
            );
          })}
          </div>
        </div>

      </div>
    </section>
  );
}

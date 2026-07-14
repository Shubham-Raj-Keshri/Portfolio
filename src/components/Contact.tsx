"use client";

import { motion } from "framer-motion";
import type { FormEvent } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

import SectionHeader from "./SectionHeader";
import { socialLinks } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

/* ============================================================
   WHATSAPP LINK
============================================================ */

const WA_HREF =
  "https://wa.me/918210057738?text=Hi%20Shubham,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity";

/* ============================================================
   CONTACT INFORMATION
============================================================ */

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

/* ============================================================
   WHATSAPP ICON
============================================================ */

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className="shrink-0 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ============================================================
   CONTACT COMPONENT
============================================================ */

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section
      id="contact"
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
          left-1/2
          top-1/2
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          bg-[#DC2626]
          opacity-[0.025]
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
          label="Contact"
          title="Let's work together"
          subtitle="Open to full-time roles, freelance projects, and exciting collaborations. Reach out through any channel below."
        />

        {/* ===================================================
            PRIMARY CTA
        ==================================================== */}

        <motion.div
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
            duration: 0.6,
            ease,
          }}
          className="
            mb-14
            flex
            justify-center
            md:mb-16
          "
        >
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Shubham on WhatsApp"
            className="btn btn-primary"
          >
            <WhatsAppIcon size={18} />

            <span>Let&apos;s Connect on WhatsApp</span>
          </a>
        </motion.div>

        {/* ===================================================
            DIVIDER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease,
          }}
          className="
            mb-12
            flex
            items-center
            gap-4
          "
        >
          <div
            className="
              h-px
              flex-1
              bg-gradient-to-r
              from-transparent
              to-[var(--border)]
            "
          />

          <span
            className="
              shrink-0
              text-center
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-[var(--text-lo)]
              sm:text-[11px]
            "
          >
            Or reach out directly
          </span>

          <div
            className="
              h-px
              flex-1
              bg-gradient-to-l
              from-transparent
              to-[var(--border)]
            "
          />
        </motion.div>

        {/* ===================================================
            MAIN CONTACT GRID
        ==================================================== */}

        <div
          className="
            grid
            gap-8
            lg:grid-cols-[1.2fr_0.8fr]
            lg:items-start
          "
        >
          {/* =================================================
              CONTACT FORM CARD
          ================================================== */}

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
              duration: 0.6,
              ease,
            }}
            className="
              rounded-[2rem]
              border
              border-[var(--border)]
              bg-[var(--surface)]
              p-6
              transition-all
              duration-300
              sm:p-8
              lg:p-10
            "
          >
            {/* ===============================================
                FORM INTRO
            ================================================ */}

            <p
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[var(--red)]
              "
            >
              Available for
            </p>

            <h3
              className="
                mt-3
                max-w-2xl
                text-[clamp(1.3rem,2.4vw,1.8rem)]
                font-semibold
                leading-[1.25]
                tracking-[-0.03em]
                text-[var(--text-hi)]
              "
            >
              Full-time roles, product builds, and thoughtful collaborations.
            </h3>

            <p
              className="
                mt-4
                max-w-2xl
                text-[15px]
                leading-[1.8]
                text-[var(--text-mid)]
              "
            >
              If you need a fast-moving engineer who can ship polished
              interfaces and reliable backend systems, I&apos;d love to hear
              about it.
            </p>

            {/* ===============================================
                CONTACT FORM
            ================================================ */}

            <form
              onSubmit={handleSubmit}
              className="
                mt-10
                grid
                gap-6
                md:mt-12
              "
            >
              {/* =============================================
                  NAME + EMAIL
              ============================================== */}

              <div
                className="
                  grid
                  gap-5
                  sm:grid-cols-2
                "
              >
                {/* Name */}

                <label
                  className="
                    flex
                    min-w-0
                    flex-col
                    gap-2
                    text-[13px]
                    text-[var(--text-hi)]
                  "
                >
                  <span className="font-semibold">Name</span>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-[var(--border)]
                      bg-[var(--bg-soft)]
                      px-5
                      py-4
                      text-sm
                      text-[var(--text-hi)]
                      outline-none
                      transition-all
                      duration-200
                      placeholder:text-[var(--text-lo)]
                      focus:border-[var(--red)]
                      focus:ring-2
                      focus:ring-red-500/10
                    "
                  />
                </label>

                {/* Email */}

                <label
                  className="
                    flex
                    min-w-0
                    flex-col
                    gap-2
                    text-[13px]
                    text-[var(--text-hi)]
                  "
                >
                  <span className="font-semibold">Email</span>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-[var(--border)]
                      bg-[var(--bg-soft)]
                      px-5
                      py-4
                      text-sm
                      text-[var(--text-hi)]
                      outline-none
                      transition-all
                      duration-200
                      placeholder:text-[var(--text-lo)]
                      focus:border-[var(--red)]
                      focus:ring-2
                      focus:ring-red-500/10
                    "
                  />
                </label>
              </div>

              {/* =============================================
                  MESSAGE
              ============================================== */}

              <label
                className="
                  flex
                  min-w-0
                  flex-col
                  gap-2
                  text-[13px]
                  text-[var(--text-hi)]
                "
              >
                <span className="font-semibold">Message</span>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="
                    min-h-[180px]
                    w-full
                    resize-y
                    rounded-2xl
                    border
                    border-[var(--border)]
                    bg-[var(--bg-soft)]
                    px-5
                    py-5
                    text-sm
                    leading-6
                    text-[var(--text-hi)]
                    outline-none
                    transition-all
                    duration-200
                    placeholder:text-[var(--text-lo)]
                    focus:border-[var(--red)]
                    focus:ring-2
                    focus:ring-red-500/10
                  "
                />
              </label>

              {/* =============================================
                  SUBMIT
              ============================================== */}

              <div
                className="
                  flex
                  flex-col
                  items-start
                  gap-3
                  sm:flex-row
                  sm:items-center
                  sm:gap-4
                "
              >
                <button type="submit" className="btn btn-primary">
                  Send message
                </button>

                <span
                  className="
                    text-[13px]
                    text-[var(--text-mid)]
                  "
                >
                  Typically replies within 24 hours.
                </span>
              </div>
            </form>
          </motion.div>

          {/* =================================================
              CONTACT INFORMATION CARDS
          ================================================== */}

          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-1
              lg:self-start
            "
          >
            {contactCards.map((card, index) => {
              const CardIcon = card.icon;

              const inner = (
                <div
                  className="
                    flex
                    min-w-0
                    items-center
                    gap-4
                  "
                >
                  {/* =========================================
                      ICON
                  ========================================== */}

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[var(--red-border)]
                      bg-[var(--red-alpha)]
                      text-[var(--red)]
                    "
                  >
                    <CardIcon size={16} />
                  </div>

                  {/* =========================================
                      TEXT
                  ========================================== */}

                  <div className="min-w-0">
                    <p
                      className="
                        mb-1
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.1em]
                        text-[var(--text-lo)]
                      "
                    >
                      {card.label}
                    </p>

                    <p
                      className="
                        truncate
                        text-[13px]
                        font-semibold
                        leading-snug
                        text-[var(--text-mid)]
                        transition-colors
                        duration-200
                        group-hover:text-[var(--text-hi)]
                      "
                    >
                      {card.value}
                    </p>
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={card.label}
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
                    margin: "-40px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                    ease,
                  }}
                  whileHover={{
                    y: -3,
                  }}
                  className="
                    group
                    rounded-2xl
                    border
                    border-[var(--border)]
                    bg-[var(--surface)]
                    p-5
                    transition-all
                    duration-300
                    hover:border-[var(--red-border)]
                    hover:bg-[var(--surface-raised)]
                    hover:shadow-[var(--shadow-sm)]
                    sm:p-6
                  "
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

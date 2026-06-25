"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GoldButton from "@/components/ui/GoldButton";
import { socialLinks } from "@/lib/constants";

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyNumber = async (num: string) => {
    try {
      await navigator.clipboard.writeText(num);
      setCopied(num);
      setTimeout(() => setCopied(null), 2000);
    } catch {}
  };

  const phones = ["+251 92 034 9528", "+251 74 569 528"];

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Let&apos;s Connect"
          subtitle="Whether you need a full-scale platform or just want to talk tech — my inbox (and phone) is always open."
        />

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-sm tracking-widest uppercase text-[var(--text-secondary)] mb-4">
                Call or WhatsApp
              </p>
              <div className="space-y-4">
                {phones.map((phone) => (
                  <button
                    key={phone}
                    onClick={() => copyNumber(phone)}
                    className="block w-full text-left group"
                  >
                    <div className="flex items-center justify-between p-4 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--accent-gold)]/30 transition-all duration-300">
                      <span className="text-lg font-mono tracking-wider text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors">
                        {phone}
                      </span>
                      <span className="text-xs tracking-wider text-[var(--accent-gold)]">
                        {copied === phone ? "Copied!" : "Copy"}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm tracking-widest uppercase text-[var(--text-secondary)] mb-4">
                Email
              </p>
              <a
                className="inline-flex items-center gap-2 text-lg text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors"
              >
                fuadnesredinhiyar@gmail.com
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            <div>
              <p className="text-sm tracking-widest uppercase text-[var(--text-secondary)] mb-4">
                Social
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "GitHub", href: socialLinks.github, icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  )},
                  { label: "Telegram", href: socialLinks.telegram, icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  )},
                  { label: "Instagram", href: socialLinks.instagram, icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  )},
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-5 py-3 rounded-xl glass border border-[var(--card-border)] hover:border-[var(--accent-gold)]/30 transition-all duration-300"
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--accent-gold)]/0 via-transparent to-[var(--accent-gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 flex items-center gap-3">
                      <span className="text-[var(--accent-gold)]">
                        {s.icon}
                      </span>
                      <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                        {s.label}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-3 right-3 h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)]/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)]"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[var(--text-primary)]">
                  Ready to build something extraordinary?
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                  I&apos;m currently available for freelance projects, full-time roles, and consulting engagements.
                  Let&apos;s talk about how I can help bring your vision to life.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <GoldButton onClick={() => window.location.href = "mailto:hello@goye.dev"}>
                  Send an Email
                </GoldButton>
                <GoldButton onClick={() => copyNumber("+251920349528")}>
                  {copied === "+251920349528" ? "Copied!" : "Call Now"}
                </GoldButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
                  { label: "GitHub", href: socialLinks.github, icon: "GH" },
                  { label: "Telegram", href: socialLinks.telegram, icon: "TG" },
                  { label: "Instagram", href: socialLinks.instagram, icon: "IG" },
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
                      <span className="font-mono text-sm font-bold text-[var(--accent-gold)]">
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

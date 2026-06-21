"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GoldButton from "@/components/ui/GoldButton";

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
                href="mailto:hello@goye.dev"
                className="inline-flex items-center gap-2 text-lg text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors"
              >
                hello@goye.dev
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
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

"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Send, MessageSquare } from "@/components/ui/icon";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const fieldClass =
  "w-full rounded-lg border border-[var(--color-border)] bg-white px-3.5 py-2.5 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple";
const labelClass = "text-sm font-medium text-[var(--color-text-primary)]";

/**
 * "Get started — Book your free systems audit" (Figma 1416:1110 / 1416:1210).
 * A contact form card. (The task brief described an "image card with a button";
 * the rendered design at this node is the audit contact form — built to match
 * the screenshot.)
 */
export function GolfCta() {
  return (
    <section
      id="book-audit"
      className="scroll-mt-24 bg-[var(--color-background-warm)] py-[var(--section-padding-y)]"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
          className="text-center"
        >
          <Eyebrow color="teal">Get Started</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Book your free systems audit
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          className="mx-auto mt-10 max-w-2xl rounded-2xl border border-[var(--color-border-subtle)] bg-white p-6 shadow-md sm:p-8"
          action="#"
        >
          <div className="flex items-start gap-3">
            <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-surface)] text-[var(--color-text-secondary)]">
              <MessageSquare className="size-4" />
            </span>
            <div>
              <p className="text-base font-semibold text-[var(--color-text-primary)]">
                Send us a message
              </p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="af-first" className={labelClass}>
                First Name
              </label>
              <input
                id="af-first"
                name="firstName"
                type="text"
                placeholder="Jane"
                className={fieldClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="af-last" className={labelClass}>
                Last Name
              </label>
              <input
                id="af-last"
                name="lastName"
                type="text"
                placeholder="Smith"
                className={fieldClass}
              />
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-1.5">
            <label htmlFor="af-email" className={labelClass}>
              Work Email
            </label>
            <input
              id="af-email"
              name="email"
              type="email"
              placeholder="jane@academy.com"
              className={fieldClass}
            />
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="af-company" className={labelClass}>
                Company
              </label>
              <input
                id="af-company"
                name="company"
                type="text"
                placeholder="Acme Golf"
                className={fieldClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="af-phone" className={labelClass}>
                Phone (optional)
              </label>
              <input
                id="af-phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                className={fieldClass}
              />
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-1.5">
            <label htmlFor="af-help" className={labelClass}>
              What can we help with?
            </label>
            <select id="af-help" name="topic" defaultValue="" className={fieldClass}>
              <option value="" disabled>
                Choose a service
              </option>
              <option value="bookings">Lesson bookings &amp; scheduling</option>
              <option value="billing">Billing &amp; payments</option>
              <option value="crm">Student CRM &amp; follow-ups</option>
              <option value="full">Full academy automation</option>
            </select>
          </div>

          <div className="mt-5 flex flex-col gap-1.5">
            <label htmlFor="af-project" className={labelClass}>
              Tell us about your project
            </label>
            <textarea
              id="af-project"
              name="project"
              rows={4}
              placeholder="What tools are you using? What's the pain point? What outcome do you need?"
              className={fieldClass}
            />
          </div>

          <Button type="submit" variant="primary" size="lg" className="mt-6 w-full">
            Send Message
            <Send className="size-4" />
          </Button>

          <p className="mt-4 text-center text-xs text-[var(--color-text-muted)]">
            No spam. No obligation. Just a working demo for your academy.
          </p>
        </motion.form>
      </Container>
    </section>
  );
}

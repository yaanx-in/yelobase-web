"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { ArrowRight } from "@/components/ui/icon";

type Accent = "purple" | "coral" | "teal" | "amber";

type App = {
  name: string;
  label: string;
  body: string;
  features: string[];
  accent: Accent;
  cover: string;
  popular?: boolean;
};

const ACCENT: Record<Accent, { dot: string; pill: string }> = {
  purple: { dot: "bg-brand-purple-strong", pill: "bg-tint-lavender text-brand-purple-strong" },
  coral: { dot: "bg-brand-coral-strong", pill: "bg-tint-pink-soft text-brand-coral-strong" },
  teal: { dot: "bg-brand-teal", pill: "bg-tint-mint text-brand-teal" },
  amber: { dot: "bg-[#8a6a12]", pill: "bg-tint-cream text-[#8a6a12]" },
};

const APPS: App[] = [
  { name: "Zoho CRM", label: "Most Popular", popular: true, accent: "coral", cover: "/graphics/zoho/crm.webp", body: "Complete CRM customization with automated workflows, lead scoring, and pipeline management.", features: ["Custom modules", "Workflow automation", "Integration setup", "Report customization"] },
  { name: "Zoho Campaigns", label: "Marketing", accent: "purple", cover: "/graphics/zoho/campaigns.webp", body: "Email marketing automation with advanced segmentation and personalization.", features: ["Campaign automation", "A/B testing", "Analytics setup", "Template design"] },
  { name: "Zoho Analytics", label: "Insights", accent: "teal", cover: "/graphics/zoho/analytics.webp", body: "Business intelligence dashboards and automated reporting solutions.", features: ["Custom dashboards", "Data visualization", "Automated reports", "KPI tracking"] },
  { name: "Zoho Creator", label: "Low Code", accent: "amber", cover: "/graphics/zoho/creator.webp", body: "Custom business applications built to match your unique processes.", features: ["App development", "Database design", "Mobile optimization", "Integration APIs"] },
  { name: "Zoho Projects", label: "Productivity", accent: "purple", cover: "/graphics/zoho/projects.webp", body: "Project management automation with resource allocation and time tracking.", features: ["Project templates", "Resource planning", "Time automation", "Progress tracking"] },
  { name: "Zoho Books", label: "Finance", accent: "teal", cover: "/graphics/zoho/books.webp", body: "Financial management automation with invoice generation and expense tracking.", features: ["Invoice automation", "Expense tracking", "Tax compliance", "Financial reports"] },
  { name: "Zoho People", label: "HR", accent: "coral", cover: "/graphics/zoho/people.webp", body: "HR management automation for employee lifecycle and performance tracking.", features: ["Employee onboarding", "Time tracking", "Performance management", "Leave automation"] },
  { name: "Zoho Desk", label: "Support", accent: "amber", cover: "/graphics/zoho/desk.webp", body: "Customer support automation with ticket management and knowledge base.", features: ["Ticket automation", "SLA management", "Knowledge base", "Customer satisfaction"] },
  { name: "Zoho Flow", label: "Automation", accent: "purple", cover: "/graphics/zoho/flow.webp", body: "Powerful workflow automation connecting all your business applications.", features: ["Multi app workflows", "Conditional logic", "Real time sync", "Custom triggers"] },
  { name: "Zoho Expense", label: "Finance", accent: "teal", cover: "/graphics/zoho/expense.webp", body: "Expense management automation with receipt scanning and approval workflows.", features: ["Receipt scanning", "Expense tracking", "Approval workflows", "Reimbursement automation"] },
  { name: "Zoho Payroll", label: "Payroll", accent: "coral", cover: "/graphics/zoho/payroll.webp", body: "Comprehensive payroll management with automated calculations and compliance tracking.", features: ["Salary calculations", "Tax compliance", "Employee self-service", "Statutory reports"] },
  { name: "Zoho Inventory", label: "Operations", accent: "amber", cover: "/graphics/zoho/inventory.webp", body: "Complete inventory management with automated stock tracking and order fulfillment.", features: ["Stock automation", "Order management", "Supplier tracking", "Multi-warehouse"] },
  { name: "Zoho Commerce", label: "E-Commerce", accent: "purple", cover: "/graphics/zoho/commerce.webp", body: "E-commerce platform with automated inventory and order management.", features: ["Online store setup", "Inventory sync", "Order automation", "Payment integration"] },
  { name: "Zoho Bigin", label: "Small Biz", accent: "teal", cover: "/graphics/zoho/bigin.webp", body: "Simple CRM for small businesses with essential automation features.", features: ["Pipeline management", "Contact automation", "Deal tracking", "Mobile CRM"] },
];

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const shortName = (name: string) => name.replace(/^Zoho\s+/, "");

export function ZohoApplications() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const app = APPS[active];
  const a = ACCENT[app.accent];

  return (
    <section id="applications" className="scroll-mt-24 bg-[var(--color-background)] py-[var(--section-padding-y)]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-14">
          {/* Left: heading + app list */}
          <div>
            <Eyebrow color="teal">Zoho Ecosystem</Eyebrow>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Zoho Applications We Specialize In
            </h2>
            <p className="mt-4 text-[var(--color-text-secondary)]">
              Complete customization and automation across the entire Zoho ecosystem.
            </p>

            <div role="tablist" aria-label="Zoho applications" className="mt-8 flex flex-col">
              {APPS.map((item, i) => {
                const selected = i === active;
                const ac = ACCENT[item.accent];
                return (
                  <button
                    key={item.name}
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActive(i)}
                    className="group flex items-center gap-3 border-b border-[var(--color-border-subtle)] py-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2"
                  >
                    <span
                      className={`relative text-lg font-semibold transition-colors ${
                        selected
                          ? "text-brand-coral-strong"
                          : "text-[var(--color-text-primary)] group-hover:text-brand-coral-strong"
                      }`}
                    >
                      {shortName(item.name)}
                      {selected && (
                        <motion.span
                          aria-hidden
                          layoutId={reduceMotion ? undefined : "app-underline"}
                          className="absolute -bottom-1 left-0 h-[2px] w-full rounded-pill bg-brand-coral"
                        />
                      )}
                    </span>
                    <span
                      className={`rounded-pill px-2 py-0.5 text-[11px] font-semibold ${
                        item.popular ? "bg-brand-coral text-white" : ac.pill
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: per-app detail panel */}
          <div className="overflow-hidden rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-background)] shadow-sm ring-1 ring-brand-coral/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: EASE_OUT }}
              >
                {/* Baked-in tinted product screenshot per app */}
                <div className="relative aspect-[742/440] w-full">
                  <Image
                    src={app.cover}
                    alt={`${app.name} interface`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                    priority={active === 0}
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-[var(--color-text-secondary)]">{app.body}</p>
                  <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                    {app.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2.5 text-sm text-[var(--color-text-secondary)]"
                      >
                        <span className={`size-2 shrink-0 rounded-full ${a.dot}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink href="/contact" variant="dark" size="md" className="mt-7">
                    Schedule Now
                    <ArrowRight className="size-4" />
                  </ButtonLink>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}

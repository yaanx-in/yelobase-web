"use client";

import type { ComponentType, SVGProps } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Container } from "@/components/layout/container";
import {
  ArrowRight,
  Users,
  Megaphone,
  BarChart,
  Code,
  Kanban,
  Book,
  IdCard,
  Headset,
  Workflow,
  Receipt,
  Wallet,
  Box,
  Cart,
  GitBranch,
} from "@/components/ui/icon";

type Accent = "purple" | "coral" | "teal" | "amber";

type App = {
  name: string;
  label: string;
  body: string;
  features: string[];
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  accent: Accent;
  popular?: boolean;
};

const ACCENT: Record<Accent, { tile: string; icon: string; pill: string; ring: string }> = {
  purple: {
    tile: "bg-tint-lavender",
    icon: "text-brand-purple-strong",
    pill: "bg-tint-lavender text-brand-purple-strong",
    ring: "group-hover:border-brand-purple/40",
  },
  coral: {
    tile: "bg-tint-pink",
    icon: "text-brand-coral-strong",
    pill: "bg-tint-pink-soft text-brand-coral-strong",
    ring: "group-hover:border-brand-coral/40",
  },
  teal: {
    tile: "bg-tint-mint",
    icon: "text-brand-teal",
    pill: "bg-tint-mint text-brand-teal",
    ring: "group-hover:border-brand-teal/40",
  },
  amber: {
    tile: "bg-tint-cream",
    icon: "text-[#8a6a12]",
    pill: "bg-tint-cream text-[#8a6a12]",
    ring: "group-hover:border-[#d8a73a]/50",
  },
};

const APPS: App[] = [
  { name: "Zoho CRM", label: "Most Popular", popular: true, icon: Users, accent: "coral", body: "Complete CRM customization with automated workflows, lead scoring, and pipeline management.", features: ["Custom modules", "Workflow automation", "Integration setup", "Report customization"] },
  { name: "Zoho Campaigns", label: "Marketing", icon: Megaphone, accent: "purple", body: "Email marketing automation with advanced segmentation and personalization.", features: ["Campaign automation", "A/B testing", "Analytics setup", "Template design"] },
  { name: "Zoho Analytics", label: "Insights", icon: BarChart, accent: "teal", body: "Business intelligence dashboards and automated reporting solutions.", features: ["Custom dashboards", "Data visualization", "Automated reports", "KPI tracking"] },
  { name: "Zoho Creator", label: "Low Code", icon: Code, accent: "amber", body: "Custom business applications built to match your unique processes.", features: ["App development", "Database design", "Mobile optimization", "Integration APIs"] },
  { name: "Zoho Projects", label: "Productivity", icon: Kanban, accent: "purple", body: "Project management automation with resource allocation and time tracking.", features: ["Project templates", "Resource planning", "Time automation", "Progress tracking"] },
  { name: "Zoho Books", label: "Finance", icon: Book, accent: "teal", body: "Financial management automation with invoice generation and expense tracking.", features: ["Invoice automation", "Expense tracking", "Tax compliance", "Financial reports"] },
  { name: "Zoho People", label: "HR", icon: IdCard, accent: "coral", body: "HR management automation for employee lifecycle and performance tracking.", features: ["Employee onboarding", "Time tracking", "Performance management", "Leave automation"] },
  { name: "Zoho Desk", label: "Support", icon: Headset, accent: "amber", body: "Customer support automation with ticket management and knowledge base.", features: ["Ticket automation", "SLA management", "Knowledge base", "Customer satisfaction"] },
  { name: "Zoho Flow", label: "Automation", icon: Workflow, accent: "purple", body: "Powerful workflow automation connecting all your business applications.", features: ["Multi app workflows", "Conditional logic", "Real time sync", "Custom triggers"] },
  { name: "Zoho Expense", label: "Finance", icon: Receipt, accent: "teal", body: "Expense management automation with receipt scanning and approval workflows.", features: ["Receipt scanning", "Expense tracking", "Approval workflows", "Reimbursement automation"] },
  { name: "Zoho Payroll", label: "Payroll", icon: Wallet, accent: "coral", body: "Comprehensive payroll management with automated calculations and compliance tracking.", features: ["Salary calculations", "Tax compliance", "Employee self-service", "Statutory reports"] },
  { name: "Zoho Inventory", label: "Operations", icon: Box, accent: "amber", body: "Complete inventory management with automated stock tracking and order fulfillment.", features: ["Stock automation", "Order management", "Supplier tracking", "Multi-warehouse"] },
  { name: "Zoho Commerce", label: "E-Commerce", icon: Cart, accent: "purple", body: "E-commerce platform with automated inventory and order management.", features: ["Online store setup", "Inventory sync", "Order automation", "Payment integration"] },
  { name: "Zoho Bigin", label: "Small Biz", icon: GitBranch, accent: "teal", body: "Simple CRM for small businesses with essential automation features.", features: ["Pipeline management", "Contact automation", "Deal tracking", "Mobile CRM"] },
];

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const gridParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};

function AppCard({ app }: { app: App }) {
  const reduceMotion = useReducedMotion();
  const a = ACCENT[app.accent];
  const Icon = app.icon;

  return (
    <motion.article
      variants={cardVariant}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      className={`group flex h-full flex-col rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-background)] p-6 shadow-sm transition-shadow duration-[var(--duration-micro)] hover:shadow-lg ${a.ring}`}
    >
      <div className="flex items-start justify-between">
        <span
          className={`inline-flex size-12 items-center justify-center rounded-2xl ${a.tile} transition-transform duration-[var(--duration-micro)] group-hover:scale-110`}
        >
          <Icon className={`size-6 ${a.icon}`} />
        </span>
        <span
          className={`rounded-pill px-2.5 py-1 text-[11px] font-semibold ${
            app.popular ? "bg-brand-coral text-white" : a.pill
          }`}
        >
          {app.label}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-[var(--color-text-primary)]">
        {app.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {app.body}
      </p>

      <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
        {app.features.map((f) => (
          <li
            key={f}
            className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]"
          >
            <span className={`size-1.5 shrink-0 rounded-full ${a.icon} bg-current`} />
            {f}
          </li>
        ))}
      </ul>

      <a
        href="#footer"
        className="mt-6 inline-flex items-center gap-1.5 self-start rounded-sm pt-1 text-sm font-semibold text-[var(--color-text-primary)] transition-colors hover:text-brand-coral-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2"
      >
        Discuss {app.name}
        <ArrowRight className="size-4 transition-transform duration-[var(--duration-micro)] group-hover:translate-x-1" />
      </a>
    </motion.article>
  );
}

export function ZohoApplications() {
  return (
    <section className="bg-[var(--color-background)] py-[var(--section-padding-y)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
          className="mx-auto max-w-2xl text-center"
        >
          <Eyebrow color="teal">Zoho Ecosystem</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Zoho Applications We Specialize In
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            Complete customization and automation across the entire Zoho ecosystem.
          </p>
        </motion.div>

        <motion.div
          variants={gridParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {APPS.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

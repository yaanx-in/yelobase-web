"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Container } from "@/components/layout/container";

type Industry = {
  name: string;
  body: string;
  icon: string;
};

const INDUSTRIES: Industry[] = [
  { name: "E-commerce and Retail", body: "Automate inventory, orders and customer journeys", icon: "/graphics/zoho/industries/ecommerce.webp" },
  { name: "SaaS and Technology", body: "Scale operations with intelligent CRM and analytics", icon: "/graphics/zoho/industries/saas.webp" },
  { name: "Manufacturing", body: "Streamline production, procurement and supply chain", icon: "/graphics/zoho/industries/manufacturing.webp" },
  { name: "Healthcare", body: "Manage patients, compliance and billing workflows", icon: "/graphics/zoho/industries/healthcare.webp" },
  { name: "Financial Services", body: "Automate reporting, compliance and client management", icon: "/graphics/zoho/industries/financial.webp" },
  { name: "Education", body: "Manage admissions, communication and student data", icon: "/graphics/zoho/industries/education.webp" },
  { name: "Real Estate", body: "Track leads, listings and automate client follow ups", icon: "/graphics/zoho/industries/realestate.webp" },
  { name: "Professional Services", body: "Optimize projects, billing and client relationships", icon: "/graphics/zoho/industries/professional.webp" },
];

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const parent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const child: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};

function Tile({ industry }: { industry: Industry }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      variants={child}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex h-full flex-col rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-background)] p-6 shadow-sm transition-shadow duration-[var(--duration-micro)] hover:shadow-lg"
    >
      <span className="inline-flex size-12 items-center justify-center rounded-full bg-black/[0.05] transition-transform duration-[var(--duration-micro)] group-hover:scale-110">
        <Image src={industry.icon} alt="" width={24} height={24} className="size-6" />
      </span>
      <h3 className="mt-5 text-base font-semibold text-[var(--color-text-primary)]">
        {industry.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {industry.body}
      </p>
    </motion.article>
  );
}

export function ZohoIndustries() {
  return (
    <section className="bg-[var(--color-background-warm)] py-[var(--section-padding-y)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Industries We Serve
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            Tailored Zoho solutions for businesses across all sectors.
          </p>
        </motion.div>

        <motion.div
          variants={parent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {INDUSTRIES.map((industry) => (
            <Tile key={industry.name} industry={industry} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

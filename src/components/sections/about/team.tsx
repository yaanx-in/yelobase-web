"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Container } from "@/components/layout/container";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

type Member = { name: string; role: string; photo: string };

// ponytail: placeholder team — swap `name`/`role`/`photo` with the real roster.
const TEAM: Member[] = [
  { name: "Team Member", role: "Founder & CEO", photo: "/graphics/about/team-1.webp" },
  { name: "Team Member", role: "Chief Technology Officer", photo: "/graphics/about/team-2.webp" },
  { name: "Team Member", role: "Head of Zoho Solutions", photo: "/graphics/about/team-3.webp" },
  { name: "Team Member", role: "Automation Engineer", photo: "/graphics/about/team-4.webp" },
  { name: "Team Member", role: "AI Agent Developer", photo: "/graphics/about/team-5.webp" },
  { name: "Team Member", role: "Integration Specialist", photo: "/graphics/about/team-6.webp" },
  { name: "Team Member", role: "Project Manager", photo: "/graphics/about/team-7.webp" },
  { name: "Team Member", role: "CRM Consultant", photo: "/graphics/about/team-8.webp" },
  { name: "Team Member", role: "Customer Success Lead", photo: "/graphics/about/team-9.webp" },
  { name: "Team Member", role: "Support Engineer", photo: "/graphics/about/team-10.webp" },
];

const gridParent: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};

export function AboutTeam() {
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
            Our Core Values
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
            The principles that guide everything we do
          </p>
        </motion.div>

        <motion.div
          variants={gridParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -6% 0px" }}
          className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5"
        >
          {TEAM.map((m, i) => (
            <motion.article
              key={i}
              variants={cardVariant}
              className="overflow-hidden rounded-[20px] border border-[var(--color-border-subtle)] bg-[var(--color-background)] shadow-sm"
            >
              <div
                className={`relative aspect-square w-full ${
                  i % 2 === 0 ? "bg-[#cfc3ff]" : "bg-tint-pink-soft"
                }`}
              >
                <Image
                  src={m.photo}
                  alt={m.role}
                  fill
                  sizes="(min-width:1024px) 20vw, (min-width:640px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="px-3 py-4 text-center">
                <p className="font-semibold text-[var(--color-text-primary)]">{m.name}</p>
                <p className="mt-0.5 text-sm text-[var(--color-text-muted)]">{m.role}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

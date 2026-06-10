import Link from "next/link";
import { Container } from "./container";
import { Mail, Phone, MapPin } from "@/components/ui/icon";

const SERVICES = [
  { label: "Zoho Automation", href: "#what-we-do" },
  { label: "AI Agents", href: "#what-we-do" },
  { label: "Data Migration", href: "#what-we-do" },
  { label: "Pricing", href: "#" },
];

const COMPANY = [
  { label: "About Us", href: "#why-yelobase" },
  { label: "Wall of Love", href: "/customer-stories" },
  { label: "Contact", href: "#footer" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

function LinkColumn({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
        {heading}
      </h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-white/80 transition-colors duration-[var(--duration-micro)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-dark)] rounded-sm"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[var(--color-surface-dark)] text-white"
    >
      <Container className="py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <LinkColumn heading="Services" links={SERVICES} />
          <LinkColumn heading="Company" links={COMPANY} />
          <div className="lg:col-span-2 lg:justify-self-end">
            <h3 className="sr-only">Contact</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a
                  href="mailto:hello@yelobase.com"
                  className="inline-flex items-center gap-2.5 hover:text-white"
                >
                  <Mail className="size-4 text-white/50" /> hello@yelobase.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919551714690"
                  className="inline-flex items-center gap-2.5 hover:text-white"
                >
                  <Phone className="size-4 text-white/50" /> +91 9551714690
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <MapPin className="size-4 text-white/50" /> USA, UK, UAE, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-6 rounded-2xl bg-[#050505] px-8 py-8 sm:flex-row sm:items-center sm:gap-12 sm:px-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/footer-lockup.svg"
            alt="Yelobase — Zoho Authorized Partner"
            width={313}
            height={56}
            className="h-11 w-auto shrink-0"
          />
          <p className="max-w-[720px] text-sm leading-[1.45] text-white/55">
            Transforming businesses through intelligent Zoho automation and
            custom AI agents. We help companies streamline operations and enhance
            productivity across all industries.
          </p>
        </div>
      </Container>
    </footer>
  );
}

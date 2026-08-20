import Link from "next/link";
import { Container } from "./container";
import { Mail, Phone, MapPin } from "@/components/ui/icon";

const SERVICES = [
  { label: "Zoho Automation", href: "/zoho-services" },
  { label: "AI Agents", href: "/zoho-services" },
  { label: "Data Migration", href: "/zoho-services" },
  { label: "Pricing", href: "/zoho-services" },
];

const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Wall of Love", href: "/wall-of-love" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
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
      className="relative overflow-hidden bg-[var(--color-surface-dark)] text-white"
    >
      <Container className="relative z-10 pb-44 pt-14 sm:pb-52">
        {/* Tagline bar */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 sm:px-8">
          <p className="max-w-[1100px] text-sm leading-[1.45] text-white/60">
            Transforming businesses through intelligent Zoho automation and
            custom AI agents. We help companies streamline operations and enhance
            productivity across all industries.
          </p>
        </div>

        {/* Link + contact columns */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
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
      </Container>

      {/* Oversized Yelobase wordmark, clipped by the footer's bottom edge.
          The real brand lockup (logo-white.svg) masks a purple→coral gradient. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-8%] z-0 h-[46%] min-h-[220px]"
        style={{
          background:
            "linear-gradient(90deg, var(--color-brand-purple-strong) 8%, var(--color-brand-purple) 42%, var(--color-brand-coral) 82%)",
          opacity: 0.35,
          WebkitMaskImage: "url(/brand/logo-white.svg)",
          maskImage: "url(/brand/logo-white.svg)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center top",
          maskPosition: "center top",
          WebkitMaskSize: "min(1180px, 92%) auto",
          maskSize: "min(1180px, 92%) auto",
        }}
      />
    </footer>
  );
}

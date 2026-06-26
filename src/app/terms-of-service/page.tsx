import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LegalDoc } from "@/components/sections/legal/legal-doc";

export const metadata: Metadata = {
  title: "Terms of Service — Yelobase",
  description:
    "Read the terms and conditions governing your use of Yelobase's business automation and Zoho implementation services.",
};

const SECTIONS = [
  {
    id: "acceptance-of-terms",
    heading: "Acceptance of Terms",
    paragraphs: [
      "By accessing and using YeloBase's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
    ],
  },
  {
    id: "description-of-service",
    heading: "Description of Service",
    intro: "YeloBase provides business automation services including:",
    bullets: [
      "Zoho implementation, customization, and migration",
      "AI agent development and deployment",
      "Data migration and system integrations",
      "Process optimization and automation consulting",
      "Technical support and maintenance",
    ],
  },
  {
    id: "user-responsibilities",
    heading: "User Responsibilities",
    intro: "As a user of our services, you agree to:",
    bullets: [
      "Provide accurate and complete information",
      "Maintain the security of your account credentials",
      "Use the services in compliance with applicable laws",
      "Not interfere with or disrupt the services",
      "Respect intellectual property rights",
      "Pay all fees associated with your use of the services",
    ],
  },
  {
    id: "payment-terms",
    heading: "Payment Terms",
    intro: "Payment terms are established in individual service agreements. Generally:",
    bullets: [
      "Fees are due as specified in your service agreement",
      "Late payments may incur additional charges",
      "Refunds are subject to our refund policy",
      "Price changes will be communicated in advance",
    ],
  },
  {
    id: "intellectual-property",
    heading: "Intellectual Property",
    paragraphs: [
      "All content, features, and functionality of our services are owned by YeloBase and are protected by copyright, trademark, and other intellectual property laws. Custom solutions developed for clients remain the property of the respective client upon full payment.",
    ],
  },
  {
    id: "service-availability",
    heading: "Service Availability",
    paragraphs: [
      "While we strive to maintain high service availability, we do not guarantee uninterrupted access to our services. Scheduled maintenance and updates may temporarily affect service availability.",
    ],
  },
  {
    id: "limitation-of-liability",
    heading: "Limitation of Liability",
    paragraphs: [
      "YeloBase shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business interruption, arising out of your use of our services.",
    ],
  },
  {
    id: "data-protection-and-privacy",
    heading: "Data Protection and Privacy",
    paragraphs: [
      "We are committed to protecting your data and privacy. Our data handling practices are detailed in our Privacy Policy. We implement industry-standard security measures to protect your information.",
    ],
  },
  {
    id: "termination",
    heading: "Termination",
    paragraphs: [
      "Either party may terminate services with appropriate notice as specified in individual service agreements. Upon termination, you remain responsible for any outstanding fees and must cease using our services.",
    ],
  },
  {
    id: "modifications-to-terms",
    heading: "Modifications to Terms",
    paragraphs: [
      "We reserve the right to modify these terms at any time. Material changes will be communicated to users, and continued use of our services constitutes acceptance of the updated terms.",
    ],
  },
  {
    id: "governing-law",
    heading: "Governing Law",
    paragraphs: [
      "These terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be resolved through binding arbitration or appropriate legal channels.",
    ],
  },
  {
    id: "contact-information",
    heading: "Contact Information",
    intro: "For questions about these terms of service, please contact us:",
    showContact: true,
  },
];

const CONTACT = {
  email: "hello@yelobase.com",
  phone: "+91 9551714690",
  website: "www.yelobase.com",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main id="main">
        <LegalDoc
          title="Terms of Service"
          icon="file"
          lastUpdated="Last updated: December 2024"
          sections={SECTIONS}
          contact={CONTACT}
        />
      </main>
      <Footer />
    </>
  );
}

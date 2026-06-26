import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LegalDoc } from "@/components/sections/legal/legal-doc";

export const metadata: Metadata = {
  title: "Privacy Policy — Yelobase",
  description:
    "Learn how Yelobase collects, uses, and protects your personal information when you use our business automation services.",
};

const SECTIONS = [
  {
    id: "information-we-collect",
    heading: "Information We Collect",
    intro:
      "We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include:",
    bullets: [
      "Contact information (name, email address, phone number)",
      "Business information (company name, industry, use case)",
      "Account credentials and preferences",
      "Communications with our support team",
      "Usage data and analytics",
    ],
  },
  {
    id: "how-we-use-your-information",
    heading: "How We Use Your Information",
    intro: "We use the information we collect to:",
    bullets: [
      "Provide, maintain, and improve our automation services",
      "Process transactions and send related information",
      "Send technical notices, updates, and support messages",
      "Respond to your comments, questions, and requests",
      "Analyze usage patterns to enhance user experience",
      "Detect, investigate, and prevent fraudulent transactions",
    ],
  },
  {
    id: "information-sharing",
    heading: "Information Sharing",
    intro:
      "We do not sell, trade, or otherwise transfer your personal information to third parties except as described in this policy. We may share your information:",
    bullets: [
      "With service providers who assist in our operations",
      "To comply with legal obligations",
      "To protect our rights and prevent fraud",
      "With your consent for specific purposes",
    ],
  },
  {
    id: "data-security",
    heading: "Data Security",
    paragraphs: [
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.",
    ],
  },
  {
    id: "data-retention",
    heading: "Data Retention",
    paragraphs: [
      "We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law.",
    ],
  },
  {
    id: "your-rights",
    heading: "Your Rights",
    intro:
      "Depending on your location, you may have certain rights regarding your personal information:",
    bullets: [
      "Right to access your personal information",
      "Right to correct inaccurate information",
      "Right to delete your personal information",
      "Right to restrict processing",
      "Right to data portability",
      "Right to object to processing",
    ],
  },
  {
    id: "cookies-and-tracking",
    heading: "Cookies and Tracking",
    paragraphs: [
      "We use cookies and similar tracking technologies to collect information about your browsing activities and to provide personalized experiences. You can control cookie settings through your browser preferences.",
    ],
  },
  {
    id: "third-party-services",
    heading: "Third-Party Services",
    paragraphs: [
      "Our services may integrate with third-party platforms (Zoho, Google Cloud, Microsoft, etc.). These integrations are subject to their respective privacy policies, and we encourage you to review them.",
    ],
  },
  {
    id: "changes-to-this-policy",
    heading: "Changes to This Policy",
    paragraphs: [
      'We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.',
    ],
  },
  {
    id: "contact-us",
    heading: "Contact Us",
    intro:
      "If you have any questions about this privacy policy or our privacy practices, please contact us at:",
    showContact: true,
  },
];

const CONTACT = {
  email: "hello@yelobase.com",
  phone: "+91 9551714690",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main id="main">
        <LegalDoc
          title="Privacy Policy"
          icon="lock"
          lastUpdated="Last updated: December 2024"
          sections={SECTIONS}
          contact={CONTACT}
        />
      </main>
      <Footer />
    </>
  );
}

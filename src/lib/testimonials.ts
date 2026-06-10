export type TestimonialCategory =
  | "Zoho Services"
  | "AI Agent"
  | "Automation"
  | "Custom Development";

export type Testimonial = {
  quote: string;
  name: string;
  company: string;
  location: string;
  rating: number;
  category: TestimonialCategory;
  image?: string;
};

// Only these three reviews are real (from Figma). We do NOT fabricate extra
// testimonials to fill the grid — the Figma mock duplicated these as
// placeholders. Add more here as real reviews come in.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "It has been an absolute pleasure to work with the team on our Zoho projects. The work they have delivered for us is beyond expectations, and we look forward to working closely with them in the future on all of our CRM and Zoho related projects.",
    name: "Sam O'Neile",
    company: "Tuta Global PTY LTD",
    location: "Australia",
    rating: 5,
    category: "Zoho Services",
    image: "/avatars/sam.webp",
  },
  {
    quote:
      "I was greatly surprised — this was my first project with Yelobase and they delivered and completed the project perfectly.",
    name: "Mr Edgar",
    company: "StatWorks",
    location: "Mexico",
    rating: 4,
    category: "Custom Development",
    image: "/avatars/edgar.webp",
  },
  {
    quote:
      "Yelobase is a joy to work with. They know what they're doing, communicate clearly, and get the job done.",
    name: "Lena",
    company: "Lena Wigs",
    location: "USA",
    rating: 5,
    category: "Automation",
    image: "/avatars/lena.webp",
  },
];

export const STORY_STATS = [
  { value: "50+", label: "Happy Clients" },
  { value: "100+", label: "Projects Completed" },
  { value: "5.0", label: "Average Rating" },
  { value: "15+", label: "Countries Served" },
];

export const STORY_FILTERS = [
  "All",
  "Zoho Services",
  "AI Agent",
  "Automation",
  "Custom Development",
] as const;

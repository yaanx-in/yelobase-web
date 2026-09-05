import type { SVGProps } from "react";

// Thin-stroke line icons (Figma uses a Lucide/Feather-style set). Inline to
// avoid an icon dependency. All inherit currentColor and a 1.75 stroke.
type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
    ...props,
  };
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function Layers(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </svg>
  );
}

export function Workflow(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <path d="M10 6.5h4a3 3 0 0 1 3 3V14" />
    </svg>
  );
}

export function Handshake(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m11 17 2 2a1 1 0 0 0 1.5-.1l3.5-4" />
      <path d="m21 11-4.5 4.5" />
      <path d="M3 11.5 8 7l3 2.5 3-2.5 6 4.5" />
      <path d="m3 11.5 4 4a1 1 0 0 0 1.4 0l1.6-1.6" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </svg>
  );
}

// Filled exclamation-in-circle (from Figma error.svg), recolored to
// currentColor so it works on both dark and light tab states.
export function ErrorCircle(props: IconProps) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      focusable={false}
      {...props}
    >
      <path
        d="M10.0003 14.1667C10.2364 14.1667 10.4344 14.0868 10.5941 13.9271C10.7538 13.7674 10.8337 13.5694 10.8337 13.3333C10.8337 13.0972 10.7538 12.8993 10.5941 12.7396C10.4344 12.5799 10.2364 12.5 10.0003 12.5C9.76421 12.5 9.5663 12.5799 9.40658 12.7396C9.24685 12.8993 9.16699 13.0972 9.16699 13.3333C9.16699 13.5694 9.24685 13.7674 9.40658 13.9271C9.5663 14.0868 9.76421 14.1667 10.0003 14.1667ZM9.16699 10.8333H10.8337V5.83334H9.16699V10.8333ZM10.0003 18.3333C8.84755 18.3333 7.76421 18.1146 6.75033 17.6771C5.73644 17.2396 4.85449 16.6458 4.10449 15.8958C3.35449 15.1458 2.76074 14.2639 2.32324 13.25C1.88574 12.2361 1.66699 11.1528 1.66699 10C1.66699 8.84723 1.88574 7.76389 2.32324 6.75C2.76074 5.73612 3.35449 4.85417 4.10449 4.10417C4.85449 3.35417 5.73644 2.76042 6.75033 2.32292C7.76421 1.88542 8.84755 1.66667 10.0003 1.66667C11.1531 1.66667 12.2364 1.88542 13.2503 2.32292C14.2642 2.76042 15.1462 3.35417 15.8962 4.10417C16.6462 4.85417 17.2399 5.73612 17.6774 6.75C18.1149 7.76389 18.3337 8.84723 18.3337 10C18.3337 11.1528 18.1149 12.2361 17.6774 13.25C17.2399 14.2639 16.6462 15.1458 15.8962 15.8958C15.1462 16.6458 14.2642 17.2396 13.2503 17.6771C12.2364 18.1146 11.1531 18.3333 10.0003 18.3333Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Check-in-circle (from Figma Check circle.svg), stroke recolored to
// currentColor so it works on both dark and light tab states.
export function CheckCircle(props: IconProps) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      focusable={false}
      {...props}
    >
      <path
        d="M18.3337 9.23333V10C18.3326 11.797 17.7507 13.5456 16.6748 14.9849C15.5988 16.4241 14.0864 17.4771 12.3631 17.9866C10.6399 18.4961 8.79804 18.4349 7.11238 17.8122C5.42673 17.1894 3.98754 16.0384 3.00946 14.5309C2.03138 13.0234 1.56682 11.2401 1.68506 9.44693C1.80329 7.6538 2.498 5.94694 3.66556 4.58089C4.83312 3.21485 6.41098 2.26282 8.16382 1.86679C9.91665 1.47076 11.7505 1.65195 13.392 2.38333M18.3337 3.33333L10.0003 11.675L7.50033 9.175"
        stroke="currentColor"
        strokeWidth={1.67}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AlertCircle(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  );
}

export function Bolt(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

export function ShieldCheck(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Grid(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
    </svg>
  );
}

export function Globe(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.6 3.6 6 3.6 9s-1.1 6.4-3.6 9c-2.5-2.6-3.6-6-3.6-9s1.1-6.4 3.6-9Z" />
    </svg>
  );
}

export function Sprout(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 20v-8" />
      <path d="M12 12C12 9 9.5 6.5 6 6.5 6 10 8.5 12 12 12Z" />
      <path d="M12 13.5c0-2.5 2-4.5 5-4.5 0 3-2.5 4.5-5 4.5Z" />
    </svg>
  );
}

export function Sparkles(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3l1.8 4.6L18.4 9.4 13.8 11.2 12 15.8 10.2 11.2 5.6 9.4 10.2 7.6 12 3Z" />
      <path d="M18 14l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2Z" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 4h3l1.5 5L7 11a12 12 0 0 0 6 6l2-2.5 5 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function MapPin(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function Star(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor" stroke="none">
      <path d="m12 2 2.9 6 6.6.6-5 4.3 1.5 6.4L12 16.9 6 19.3l1.5-6.4-5-4.3 6.6-.6L12 2Z" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export function Quote(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor" stroke="none">
      <path d="M7 7h4v4c0 2.5-1.5 4.3-4 5v-2c1.2-.5 2-1.4 2-2.5H7V7Zm8 0h4v4c0 2.5-1.5 4.3-4 5v-2c1.2-.5 2-1.4 2-2.5h-2V7Z" />
    </svg>
  );
}

/* ---- Zoho services page: app, integration, and industry glyphs ---- */

export function Users(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.3a3 3 0 0 1 0 5.4" />
      <path d="M17 13.6a5 5 0 0 1 3.5 5.4" />
    </svg>
  );
}

export function Megaphone(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 10v4a1 1 0 0 0 1 1h2l9 4V5L7 9H5a1 1 0 0 0-1 1Z" />
      <path d="M19 9a3 3 0 0 1 0 6" />
    </svg>
  );
}

export function BarChart(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 4v16h16" />
      <path d="M8 16v-4" />
      <path d="M12 16V9" />
      <path d="M16 16v-7" />
    </svg>
  );
}

export function Code(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m9 8-4 4 4 4" />
      <path d="m15 8 4 4-4 4" />
      <path d="m13 6-2 12" />
    </svg>
  );
}

export function Kanban(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M9 4v16" />
      <path d="M15 4v16" />
    </svg>
  );
}

export function Book(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 3h10a2 2 0 0 1 2 2v14a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M8 7h6" />
      <path d="M8 11h6" />
    </svg>
  );
}

export function IdCard(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="11" r="2" />
      <path d="M6 16a3 3 0 0 1 6 0" />
      <path d="M15 10h3" />
      <path d="M15 13.5h3" />
    </svg>
  );
}

export function Headset(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M20 19a3 3 0 0 1-3 3h-3" />
    </svg>
  );
}

export function Receipt(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 3h12v18l-2-1.5L14 21l-2-1.5L10 21l-2-1.5L6 21V3Z" />
      <path d="M9 8h6" />
      <path d="M9 12h6" />
    </svg>
  );
}

export function Wallet(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18" />
      <path d="M16 14h2" />
    </svg>
  );
}

export function Box(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="m4 7.5 8 4.5 8-4.5" />
      <path d="M12 12v9" />
    </svg>
  );
}

export function Cart(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="9" cy="20" r="1.3" />
      <circle cx="17" cy="20" r="1.3" />
      <path d="M3 4h2l2.2 11h10l1.8-7H6" />
    </svg>
  );
}

export function GitBranch(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="6" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="8" r="2" />
      <path d="M6 8v8" />
      <path d="M18 10c0 4-4 4-8 4" />
    </svg>
  );
}

export function Plug(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 2v4" />
      <path d="M15 2v4" />
      <path d="M7 6h10v4a5 5 0 0 1-10 0V6Z" />
      <path d="M12 15v5" />
    </svg>
  );
}

export function Terminal(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m7 9 3 3-3 3" />
      <path d="M13 15h4" />
    </svg>
  );
}

export function Database(props: IconProps) {
  return (
    <svg {...base(props)}>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  );
}

export function ShoppingBag(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 7h14l-1 13H6L5 7Z" />
      <path d="M9 7a3 3 0 0 1 6 0" />
    </svg>
  );
}

export function Cpu(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <rect x="10" y="10" width="4" height="4" rx="0.5" />
      <path d="M10 3v2M14 3v2M10 19v2M14 19v2M3 10h2M3 14h2M19 10h2M19 14h2" />
    </svg>
  );
}

export function Factory(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 21V10l5 3v-3l5 3V6l5 3v9H3Z" />
      <path d="M7 17h2M12 17h2" />
    </svg>
  );
}

export function Cross(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="4" width="16" height="16" rx="3.5" />
      <path d="M12 8.5v7M8.5 12h7" />
    </svg>
  );
}

export function Landmark(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 21h18" />
      <path d="M5 21v-9M9 21v-9M15 21v-9M19 21v-9" />
      <path d="M4 12h16" />
      <path d="m12 3 8 5H4l8-5Z" />
    </svg>
  );
}

export function GraduationCap(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m12 4 10 5-10 5L2 9l10-5Z" />
      <path d="M6 11v5c0 1.2 3 3 6 3s6-1.8 6-3v-5" />
      <path d="M22 9v5" />
    </svg>
  );
}

export function Building(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2" />
      <path d="M10 21v-3h4v3" />
    </svg>
  );
}

export function Briefcase(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </svg>
  );
}

export function Calendar(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </svg>
  );
}

/* ---- Contact / Golf / About / Legal page glyphs ---- */

export function Clock(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function Send(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M21 3 10.5 13.5" />
      <path d="M21 3 14.5 21 10.5 13.5 3 9.5 21 3Z" />
    </svg>
  );
}

export function MessageSquare(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M21 12a7 7 0 0 1-7 7H8l-4 3v-3a7 7 0 0 1 1-13h6a7 7 0 0 1 10 6Z" />
    </svg>
  );
}

export function Flag(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 21V4" />
      <path d="M5 4h11l-2 3 2 3H5" />
    </svg>
  );
}

export function Trophy(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3" />
      <path d="M10 14.5V18M14 14.5V18M8 21h8M9 21v-1.5a3 3 0 0 1 6 0V21" />
    </svg>
  );
}

export function Target(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TrendingUp(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m3 17 6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>
  );
}

export function FileText(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 3h8l5 5v13a0 0 0 0 1 0 0H6a0 0 0 0 1 0 0V3Z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  );
}

export function Lock(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export function ArrowRightCircle(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="10" />
      <path d="m12 16 4-4-4-4" />
      <path d="M8 12h8" />
    </svg>
  );
}

export function Lightbulb(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

export function Award(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="8" r="6" />
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
    </svg>
  );
}

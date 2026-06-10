import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  /** Container width behaviour; "bleed" skips the inner Container for full-bleed backgrounds. */
  bleed?: boolean;
  containerClassName?: string;
  as?: ElementType;
  id?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

/**
 * Vertical-rhythm wrapper. Applies the shared --section-padding-y token so every
 * section has consistent spacing, and wraps content in <Container> unless bleed.
 */
export function Section({
  children,
  className,
  bleed = false,
  containerClassName,
  as,
  ...rest
}: SectionProps) {
  const Tag = as ?? "section";
  return (
    <Tag
      className={cn("py-[var(--section-padding-y)]", className)}
      {...rest}
    >
      {bleed ? children : <Container className={containerClassName}>{children}</Container>}
    </Tag>
  );
}

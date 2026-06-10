import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /** Render as a different element (e.g. "section", "header"). Defaults to div. */
  as?: ElementType;
};

/**
 * The single shared layout shell. Max-width and horizontal gutters come from
 * the --container-* tokens (DESIGN.md §4) so every section aligns to one grid.
 * Never set one-off horizontal paddings on sections — wrap them in <Container>.
 */
export function Container({ children, className, as }: ContainerProps) {
  const Tag = as ?? "div";
  return (
    <Tag
      className={cn("mx-auto w-full", className)}
      style={{
        maxWidth: "var(--container-max)",
        paddingInline: "var(--container-gutter)",
      }}
    >
      {children}
    </Tag>
  );
}

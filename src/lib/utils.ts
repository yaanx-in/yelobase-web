/**
 * Join conditional class names. Lightweight `clsx`-style helper so we avoid an
 * extra dependency for the common case. Falsy values are dropped.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes safely, resolving conflicts via tailwind-merge
 * and supporting conditional classes via clsx.
 *
 * @example cn("px-4 py-2", isActive && "bg-primary")
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format a date to a human-readable string.
 * Falls back gracefully if the date is invalid.
 */
export function formatDate(
  date: string | Date,
  options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long" },
): string {
  return new Intl.DateTimeFormat("en-US", options).format(new Date(date));
}

/**
 * Truncate a string to `maxLength` characters, appending an ellipsis.
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 1) + "…";
}

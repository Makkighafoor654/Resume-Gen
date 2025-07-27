import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function: merge Tailwind classes smartly
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

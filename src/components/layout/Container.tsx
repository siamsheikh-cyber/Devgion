import { cn } from "@/lib/utils";

interface ContainerProps {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

/**
 * Responsive max-width container with consistent horizontal padding.
 * Renders as <div> by default; pass `as` to override (e.g. "section", "article").
 */
export function Container({
  as: Tag = "div",
  className,
  children,
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </Tag>
  );
}

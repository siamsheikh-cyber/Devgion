import { Container } from "@/components/layout/Container";

/**
 * Global loading UI — shown during server-side page transitions.
 * Replaced by page-level loading.tsx files if needed in sub-routes.
 */
export default function Loading() {
  return (
    <Container className="flex min-h-[60vh] items-center justify-center py-24">
      <div
        role="status"
        aria-label="Loading page"
        className="flex flex-col items-center gap-4"
      >
        {/* Simple accessible spinner */}
        <div
          aria-hidden="true"
          className="size-10 animate-spin rounded-full border-4 border-border border-t-primary"
        />
        <p className="text-sm text-muted-foreground">Loading…</p>
      </div>
    </Container>
  );
}

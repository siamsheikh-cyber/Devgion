import Link from "next/link";
import { Container } from "@/components/layout/Container";

/**
 * Custom 404 page.
 * Next.js renders this for any unmatched route.
 * Exactly one <h1> as required.
 */
export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-6xl font-extrabold text-primary" aria-hidden="true">
        404
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have moved
        or been removed.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Back to home
        </Link>
        <Link
          href="/contact"
          className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
        >
          Contact us
        </Link>
      </div>
    </Container>
  );
}

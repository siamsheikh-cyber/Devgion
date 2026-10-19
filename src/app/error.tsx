"use client";

import { useEffect } from "react";
import { Container } from "@/components/layout/Container";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Global error boundary for the app.
 * Catches unhandled errors in server and client components.
 * Must be a Client Component to use useEffect and reset.
 */
export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // TODO: send to error monitoring (e.g. Sentry) in production
    console.error(error);
  }, [error]);

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-6xl font-extrabold text-destructive" aria-hidden="true">
        ⚠️
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        An unexpected error occurred. Please try again, or contact us if the
        problem persists.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Try again
      </button>
    </Container>
  );
}

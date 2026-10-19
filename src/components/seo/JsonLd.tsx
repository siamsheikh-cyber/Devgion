/**
 * Reusable JSON-LD structured data component.
 *
 * Safely inlines a JSON-LD <script> tag without XSS risk by
 * replacing characters that could break out of the script context.
 *
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata#json-ld
 */

type JsonLdData = Record<string, unknown>;

interface JsonLdProps {
  data: JsonLdData | JsonLdData[];
}

function safeSerialize(data: JsonLdData | JsonLdData[]): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeSerialize(data) }}
    />
  );
}

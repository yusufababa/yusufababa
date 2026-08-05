import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-xs uppercase tracking-wide text-grey">404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold">Page not found</h1>
      <Link href="/" className="mt-8">
        <Button variant="secondary">Back home</Button>
      </Link>
    </Container>
  );
}

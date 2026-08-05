import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export default function ContactPage() {
  return (
    <Container className="py-24">
      <h1 className="font-display text-3xl font-semibold md:text-5xl">Contact</h1>
      <p className="mt-6 max-w-xl text-grey">Say hello — {siteConfig.email}</p>
      <a href={`mailto:${siteConfig.email}`} className="mt-8 inline-block">
        <Button variant="primary">Email me</Button>
      </a>
    </Container>
  );
}

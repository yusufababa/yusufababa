import type { Metadata } from "next";
import { spaceGrotesk, manrope, geistMono } from "@/fonts";
import { ConditionalNav } from "@/components/layout/ConditionalNav";
import { ConditionalFooter } from "@/components/layout/ConditionalFooter";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(spaceGrotesk.variable, manrope.variable, geistMono.variable)}
    >
      <body className="flex min-h-screen flex-col">
        <ConditionalNav />
        <main className="flex-1">{children}</main>
        <ConditionalFooter />
      </body>
    </html>
  );
}

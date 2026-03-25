"use client";

import { Link as HLink } from "@heroui/react";

const navItems = [
  { label: "Mac", href: "#" },
  { label: "iPad", href: "#" },
  { label: "iPhone", href: "#" },
  { label: "AirPods", href: "#" },
  { label: "Watch", href: "#" }
];

const footerColumns: Array<{ title: string; links: Array<string> }> = [
  { title: "Shop and Learn", links: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods"] },
  { title: "Account", links: ["Manage Your Apple Account", "Apple Trade In", "iCloud.com"] },
  { title: "Apple Store", links: ["Find a Store", "Genius Bar", "Today at Apple", "Group Reservations"] },
  { title: "For Business", links: ["Apple and Business", "Shop for Business", "Shop for Education"] },
  { title: "For Education", links: ["Apple and Education", "Shop for K-12", "Shop for College"] },
  { title: "For Healthcare", links: ["Apple and Healthcare", "Health on Apple", "Shop for Federal Employees"] },
  { title: "For Government", links: ["Apple and Government", "Shop for Veterans and Military", "Shop for Federal Employees"] },
  { title: "Apple Values", links: ["Accessibility", "Environment", "Inclusion and Diversity", "Privacy", "Racial Equity and Justice", "Supply Chain Innovation"] }
];

function FooterLink({ label }: { label: string }) {
  return (
    <HLink
      href="#"
      className="text-sm/6 text-foreground/70 no-underline hover:text-foreground/90 hover:underline hover:underline-offset-2"
    >
      {label}
    </HLink>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <header
        className="sticky top-0 z-50 border-b border-foreground/10"
        style={{ backgroundColor: "var(--background)" }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="text-sm font-semibold tracking-wide text-foreground/90">Lynq</div>
          </div>

          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <HLink
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/70 no-underline hover:text-foreground/95 hover:underline hover:underline-offset-4"
              >
                {item.label}
              </HLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <section className="py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="text-5xl font-semibold tracking-tight text-foreground/95 md:text-6xl">
              Lynq Case
            </div>
            <div className="mt-4 text-xl font-medium text-foreground/70 md:text-2xl">
              power up your phone
            </div>

            <div className="mt-8">
              <HLink
                href="#"
                isDisabled
                className="cursor-not-allowed text-base font-medium text-foreground/50 no-underline underline decoration-foreground/20 underline-offset-4"
              >
                learn more
              </HLink>
              <div className="mt-2 text-xs font-medium text-foreground/45">
                unavailable in your region
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-foreground/10" style={{ backgroundColor: "var(--background)" }}>
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title} className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wide text-foreground/55">
                  {col.title}
                </div>
                <div className="space-y-2">
                  {col.links.map((label) => (
                    <FooterLink key={label} label={label} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-foreground/10 pt-6 md:flex-row md:items-center md:justify-between">
            <div className="text-xs font-medium text-foreground/50">
              Copyright © 2026 Lynq Inc. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-foreground/55">
              <HLink href="#" className="no-underline hover:underline hover:underline-offset-2">
                Privacy Policy
              </HLink>
              <span className="opacity-40">|</span>
              <HLink href="#" className="no-underline hover:underline hover:underline-offset-2">
                Terms of Use
              </HLink>
              <span className="opacity-40">|</span>
              <HLink href="#" className="no-underline hover:underline hover:underline-offset-2">
                Sales and Refunds
              </HLink>
              <span className="opacity-40">|</span>
              <HLink href="#" className="no-underline hover:underline hover:underline-offset-2">
                Legal
              </HLink>
              <span className="opacity-40">|</span>
              <HLink href="#" className="no-underline hover:underline hover:underline-offset-2">
                Site Map
              </HLink>
            </div>
            <div className="text-xs font-medium text-foreground/50">United States</div>
          </div>
        </div>
      </footer>
    </div>
  );
}


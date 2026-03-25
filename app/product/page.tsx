"use client";

import { Badge, Button, Card, Link as HLink } from "@heroui/react";

const navItems = [
  { label: "LynqBook", href: "#" },
  { label: "LynqPad", href: "#" },
  { label: "LynqPhone", href: "/product" },
  { label: "LynqBuds", href: "#" },
  { label: "LynqWatch", href: "#" }
];

const footerColumns: Array<{ title: string; links: Array<string> }> = [
  { title: "Lynq Shop", links: ["All products", "LynqBook", "LynqPad", "LynqPhone", "LynqBuds", "LynqWatch"] },
  { title: "Support", links: ["Help Center", "Repairs & Warranty", "Trade-in", "Status updates"] },
  { title: "Company", links: ["About Lynq", "Careers", "Press", "Sustainability"] },
  { title: "Developers", links: ["APIs", "Docs", "Changelog", "Community"] },
  { title: "Legal", links: ["Usage terms", "Data privacy", "Cookie choices", "Accessibility"] }
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

export default function ProductPage() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/70 backdrop-blur-xl">
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
            <Badge color="accent" variant="soft" className="mb-4 w-fit">
              Product details
            </Badge>

            <div className="flex flex-wrap items-center gap-3">
              <div className="text-5xl font-semibold tracking-tight text-foreground/95 md:text-6xl">
                Lynq Case
              </div>
              <div className="text-base font-medium text-foreground/50">
                power accessory
              </div>
            </div>

            <div className="mt-4 text-xl font-medium text-foreground/70 md:text-2xl">
              power up your phone
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <Button variant="primary" onPress={() => {}} className="w-fit">
                Shop Lynq Case
              </Button>

              <div className="w-fit">
                <Button
                  isDisabled
                  variant="ghost"
                  className="h-auto min-h-0 w-fit bg-transparent px-0 py-0 cursor-not-allowed text-base font-medium text-foreground/50 underline decoration-foreground/20 underline-offset-4"
                >
                  learn more
                </Button>
                <div className="mt-2 text-xs font-medium text-foreground/45">
                  unavailable in your region
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-20">
          <div className="rounded-3xl border border-foreground/10 bg-gradient-to-b from-foreground/5 to-transparent p-6 md:p-10">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-2xl font-semibold tracking-tight text-foreground/95 md:text-3xl">
                  Built for everyday power
                </div>
                <div className="mt-2 text-sm font-medium text-foreground/65 md:text-base">
                  A minimal, clean case that feels effortless and keeps your phone ready.
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge color="success" variant="soft">
                  Fast-ready
                </Badge>
                <Badge color="accent" variant="soft">
                  Slim fit
                </Badge>
                <Badge color="warning" variant="soft">
                  Drop-ready
                </Badge>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { title: "LynqCharge", desc: "A smarter power flow that starts when you need it." },
                { title: "Mag-safe alignment", desc: "Snap-on stability with a clean, minimal feel." },
                { title: "Protection layer", desc: "Guarded edges designed for the real world." }
              ].map((f) => (
                <Card key={f.title} variant="secondary" className="h-full">
                  <Card.Header>
                    <Card.Title>{f.title}</Card.Title>
                    <Card.Description>{f.desc}</Card.Description>
                  </Card.Header>
                  <Card.Content>
                    <div className="text-sm font-medium text-foreground/60">
                      Designed to look great, built to keep going.
                    </div>
                  </Card.Content>
                  <Card.Footer className="pt-0">
                    <Button variant="ghost" className="px-0" isDisabled>
                      Details
                    </Button>
                  </Card.Footer>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="grid gap-6 md:grid-cols-2 md:items-stretch">
            <Card variant="tertiary" className="overflow-hidden">
              <div className="p-6">
                <Badge color="accent" variant="soft" className="mb-3 w-fit">
                  Lynq Ecosystem
                </Badge>
                <Card.Header className="px-0">
                  <Card.Title className="text-2xl">Power that syncs</Card.Title>
                  <Card.Description>
                    Keep your devices coordinated: from charging behavior to quick actions.
                  </Card.Description>
                </Card.Header>
                <Card.Footer className="mt-4 flex items-center gap-3">
                  <Button onPress={() => {}} variant="secondary">
                    See compatibility
                  </Button>
                  <Button isDisabled variant="ghost">
                    Coming soon
                  </Button>
                </Card.Footer>
              </div>
            </Card>

            <Card variant="secondary" className="overflow-hidden">
              <div className="p-6">
                <Badge color="success" variant="soft" className="mb-3 w-fit">
                  Clean design
                </Badge>
                <Card.Header className="px-0">
                  <Card.Title className="text-2xl">Minimal on the outside</Card.Title>
                  <Card.Description>
                    Soft-touch finish, tidy button placement, and a look that stays out of the way.
                  </Card.Description>
                </Card.Header>
                <Card.Content>
                  <ul className="mt-4 space-y-2 text-sm font-medium text-foreground/65">
                    <li>• Matte feel with easy grip</li>
                    <li>• Slim silhouette for pocket comfort</li>
                    <li>• Smooth edges for everyday handling</li>
                  </ul>
                </Card.Content>
                <Card.Footer className="mt-4">
                  <Button variant="ghost" isDisabled>
                    Learn sizing
                  </Button>
                </Card.Footer>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-foreground/10 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {footerColumns.map((col) => (
              <div key={col.title} className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wide text-foreground/55">
                  {col.title}
                </div>
                <div className="space-y-2">
                  {col.links.map((label) => (
                    <span key={label} className="block">
                      <FooterLink label={label} />
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-foreground/10 pt-6 md:flex-row md:items-center md:justify-between">
            <div className="text-xs font-medium text-foreground/50">© 2026 Lynq. All rights reserved.</div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-foreground/55">
              <HLink href="#" className="no-underline hover:underline hover:underline-offset-2">
                Data privacy
              </HLink>
              <span className="opacity-40">|</span>
              <HLink href="#" className="no-underline hover:underline hover:underline-offset-2">
                Usage terms
              </HLink>
              <span className="opacity-40">|</span>
              <HLink href="#" className="no-underline hover:underline hover:underline-offset-2">
                Support refunds
              </HLink>
              <span className="opacity-40">|</span>
              <HLink href="#" className="no-underline hover:underline hover:underline-offset-2">
                Accessibility
              </HLink>
              <span className="opacity-40">|</span>
              <HLink href="#" className="no-underline hover:underline hover:underline-offset-2">
                Contact
              </HLink>
            </div>
            <div className="text-xs font-medium text-foreground/50">United States</div>
          </div>
        </div>
      </footer>
    </div>
  );
}


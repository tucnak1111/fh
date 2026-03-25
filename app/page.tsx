"use client";

import { Badge, Button, Link as HLink } from "@heroui/react";

const navItems = [
  { label: "LynqBook", href: "#" },
  { label: "LynqPad", href: "#" },
  { label: "LynqPhone", href: "#" },
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

export default function Page() {
  return (
    <div className="min-h-screen">
      <header
        className="sticky top-0 z-50 border-b border-foreground/10 bg-background/70 backdrop-blur-xl"
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

          <HLink href="/account" className="no-underline">
            <Badge
              color="accent"
              variant="soft"
              className="cursor-pointer hover:text-foreground/95"
            >
              User
            </Badge>
          </HLink>
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

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  variant="primary" isDisabled
                  onPress={() => {}}
                  className="px-6"
                >
                  Shop Lynq Case
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  isDisabled
                  variant="secondary"
                >
                  learn more
                </Button>
                <div className="text-xs font-medium text-foreground/45">
                  unavailable in your region
                </div>
              </div>
            </div>
          </div>
        </section>

        <div aria-hidden="true" className="my-14 border-t border-foreground/10" />

        <section className="pb-16 md:pb-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="text-4xl font-semibold tracking-tight text-foreground/95 md:text-5xl">
                LynqCharge
              </div>
              <div className="mt-3 text-base font-medium text-foreground/65 md:text-lg">
                Fast-ready charging with tidy cable moments. Designed to feel like it belongs.
              </div>

              <div className="mt-7 flex flex-col gap-4">
                <Button isDisabled variant="primary" onPress={() => {}} className="w-fit">
                  Shop LynqCharge
                </Button>
                <div className="flex items-center gap-4">
                  <Button
                    isDisabled
                    variant="secondary"
                  >
                    learn more
                  </Button>
                  <div className="text-xs font-medium text-foreground/45">
                    unavailable in your region
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-foreground/10 bg-gradient-to-br from-foreground/8 via-transparent to-foreground/10 p-8">
              <div className="absolute -right-10 -top-10 size-40 rounded-full bg-accent/15 blur-2xl" />
              <div className="absolute -bottom-12 -left-12 size-56 rounded-full bg-success/10 blur-2xl" />
              <div className="relative aspect-[4/3] w-full rounded-2xl bg-background/40 backdrop-blur-sm border border-foreground/10" />
              <div className="relative mt-5 flex flex-wrap gap-2">
               
              </div>
            </div>
          </div>
        </section>

        <div aria-hidden="true" className="my-14 border-t border-foreground/10" />

        <section className="pb-16 md:pb-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1">

              <div className="text-4xl font-semibold tracking-tight text-foreground/95 md:text-5xl">
                LynqBuds
              </div>
              <div className="mt-3 text-base font-medium text-foreground/65 md:text-lg">
                Crisp audio, comfortable fit, and a minimal case that looks good anywhere.
              </div>

              <div className="mt-7 flex flex-col gap-4">
                <Button isDisabled variant="primary" onPress={() => {}} className="w-fit">
                  Shop LynqBuds
                </Button>
                <div className="flex items-center gap-4">
                  <Button
                    isDisabled
                    variant="secondary"
                  >
                    learn more
                  </Button>
                  <div className="text-xs font-medium text-foreground/45">
                    unavailable in your region
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 relative overflow-hidden rounded-[28px] border border-foreground/10 bg-gradient-to-br from-foreground/8 via-transparent to-foreground/10 p-8">
              <div className="absolute -right-10 -top-10 size-40 rounded-full bg-success/15 blur-2xl" />
              <div className="absolute -bottom-12 -left-12 size-56 rounded-full bg-accent/10 blur-2xl" />
              <div className="relative aspect-[4/3] w-full rounded-2xl bg-background/40 backdrop-blur-sm border border-foreground/10" />
              <div className="relative mt-5 flex flex-wrap gap-2">
              </div>
            </div>
          </div>
        </section>

        <div aria-hidden="true" className="my-14 border-t border-foreground/10" />

        <section className="pb-16 md:pb-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="text-4xl font-semibold tracking-tight text-foreground/95 md:text-5xl">
                LynqWatch
              </div>
              <div className="mt-3 text-base font-medium text-foreground/65 md:text-lg">
                Quick actions and gentle notifications—built to stay out of the way until you need it.
              </div>

              <div className="mt-7 flex flex-col gap-4">
                <Button isDisabled variant="primary" onPress={() => {}} className="w-fit">
                  Shop LynqWatch
                </Button>
                <div className="flex items-center gap-4">
                  <Button
                    isDisabled
                    variant="secondary"
                  >
                    learn more
                  </Button>
                  <div className="text-xs font-medium text-foreground/45">
                    unavailable in your region
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-foreground/10 bg-gradient-to-br from-foreground/8 via-transparent to-foreground/10 p-8">
              <div className="absolute -right-10 -top-10 size-40 rounded-full bg-warning/15 blur-2xl" />
              <div className="absolute -bottom-12 -left-12 size-56 rounded-full bg-accent/10 blur-2xl" />
              <div className="relative aspect-[4/3] w-full rounded-2xl bg-background/40 backdrop-blur-sm border border-foreground/10" />
              <div className="relative mt-5 flex flex-wrap gap-2">
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-foreground/10" style={{ backgroundColor: "var(--background)" }}>
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
            <div className="text-xs font-medium text-foreground/50">
              © 2026 Lynq. All rights reserved.
            </div>
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


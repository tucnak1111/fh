"use client";

import { Badge, Button, Card, Link as HLink } from "@heroui/react";

const navItems = [
  { label: "LynqBook", href: "#" },
  { label: "LynqPad", href: "#" },
  { label: "LynqPhone", href: "/product" },
  { label: "LynqBuds", href: "#" },
  { label: "LynqWatch", href: "#" }
];

export default function AccountPage() {
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

          <div className="flex items-center gap-3">
            <Badge color="accent" variant="soft">
              Account
            </Badge>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-14">
        <Card>
          <Card.Header>
            <Card.Title>Lynq Account</Card.Title>
            <Card.Description>Sample page for now.</Card.Description>
          </Card.Header>

          <Card.Content className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge color="success" variant="soft">
                Demo user
              </Badge>
              <span className="text-sm font-medium text-foreground/65">
                Sign-in UI will go here.
              </span>
            </div>

            <div className="text-sm font-medium text-foreground/65">
              Next: connect real authentication and user settings.
            </div>
          </Card.Content>

          <Card.Footer className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <HLink href="/" className="no-underline">
              <Button variant="secondary">Back to landing</Button>
            </HLink>
            <Button isDisabled variant="ghost">
              Manage subscription
            </Button>
          </Card.Footer>
        </Card>
      </main>
    </div>
  );
}


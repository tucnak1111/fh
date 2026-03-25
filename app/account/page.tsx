"use client";

import React from "react";
import {
  Avatar,
  Badge,
  Button,
  Checkbox,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Link as HLink,
  TextField,
} from "@heroui/react";

const navItems = [
  { label: "LynqBook", href: "#" },
  { label: "LynqPad", href: "#" },
  { label: "LynqPhone", href: "/product" },
  { label: "LynqBuds", href: "#" },
  { label: "LynqWatch", href: "#" }
];

export default function AccountPage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formError, setFormError] = React.useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email") || "");
    const password = String(formData.get("password") || "");

    // Placeholder submit handler for now
    if (!email || !password) {
      setFormError("Please fill out all fields.");
      return;
    }

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setIsSubmitting(false);
    alert(`Signed in as ${email} (demo)`);
  };

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
            <div className="flex items-center gap-2 rounded-full px-2 py-1">
              <Badge.Anchor>
                <Avatar size="sm">
                  <Avatar.Fallback>U</Avatar.Fallback>
                </Avatar>
                <Badge color="accent" size="sm">
                  U
                </Badge>
              </Badge.Anchor>
              <span className="text-sm font-medium text-foreground/70">Account</span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-14">
        <Card className="overflow-hidden">
          <Card.Header className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <Card.Title>Sign in</Card.Title>
              <Card.Description>
                Demo login form for your Lynq account. No real authentication is wired yet.
              </Card.Description>
            </div>
            <Badge color="accent" variant="soft" className="w-fit">
              Account access
            </Badge>
          </Card.Header>

          <Card.Content>
            <Form
              className="flex w-full flex-col gap-4 md:max-w-[420px]"
              onSubmit={onSubmit}
            >
              <div className="space-y-4">
                <TextField
                  name="email"
                  type="email"
                  isRequired
                  validate={(value) => {
                    const v = value.trim();
                    if (!v) return "Email is required.";
                    if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v)
                    ) {
                      return "Enter a valid email address.";
                    }
                    return null;
                  }}
                >
                  <Label>Email</Label>
                  <Input placeholder="john@example.com" />
                  <FieldError />
                </TextField>

                <TextField
                  name="password"
                  type="password"
                  isRequired
                  validate={(value) => {
                    if (!value) return "Password is required.";
                    if (value.length < 8) return "Password must be at least 8 characters.";
                    return null;
                  }}
                >
                  <Label>Password</Label>
                  <Input placeholder="Enter your password" type="password" autoComplete="current-password" />
                  <Description className="text-xs font-medium text-foreground/55">
                    Use any password (demo).
                  </Description>
                  <FieldError />
                </TextField>

                <div className="flex items-center justify-between gap-4">
                  <Checkbox name="remember" value="on">
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Content>
                      <Label>Remember me</Label>
                    </Checkbox.Content>
                  </Checkbox>

                  <HLink href="#" className="text-sm font-medium text-foreground/70 no-underline hover:underline hover:underline-offset-2">
                    Forgot password?
                  </HLink>
                </div>

                {formError ? (
                  <div className="rounded-2xl border border-danger/30 bg-danger/5 px-4 py-3 text-sm font-medium text-danger">
                    {formError}
                  </div>
                ) : null}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button
                  type="submit"
                  variant="primary"
                  isDisabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? "Signing in..." : "Sign in"}
                </Button>

                <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
                  <HLink href="/" className="no-underline">
                    <Button type="button" variant="secondary" className="w-full sm:w-auto">
                      Back to landing
                    </Button>
                  </HLink>
                </div>
              </div>
            </Form>
          </Card.Content>
        </Card>
      </main>
    </div>
  );
}


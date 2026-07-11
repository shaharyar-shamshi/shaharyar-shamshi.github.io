import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "About", href: "about" },
  { name: "Experience", href: "experience" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Open Source", href: "opensource" },
  { name: "Contact", href: "contact" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-background transition-shadow",
        scrolled ? "border-b border-foreground/80" : "border-b border-transparent"
      )}
    >
      <nav className="container mx-auto flex h-14 items-center justify-between px-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-base font-bold tracking-tight"
        >
          Shaharyar Shamshi
        </button>

        <div className="hidden items-center md:flex">
          {navItems.map((item, i) => (
            <div key={item.href} className="flex items-center">
              {i > 0 && <span className="mx-1 text-border" aria-hidden>|</span>}
              <button
                onClick={() => go(item.href)}
                className={cn(
                  "px-2 py-2 font-mono text-xs font-medium uppercase tracking-widest transition-colors",
                  active === item.href
                    ? "text-brand"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
              </button>
            </div>
          ))}
          <div className="ml-3 border-l border-border pl-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center text-foreground hover:bg-accent"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container mx-auto flex flex-col divide-y divide-border px-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => go(item.href)}
                className="py-3 text-left font-mono text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

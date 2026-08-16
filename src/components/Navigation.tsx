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
    <header className="fixed inset-x-0 top-[18px] z-50 flex justify-center px-4">
      <nav
        className={cn(
          "flex h-[58px] w-full max-w-3xl items-center justify-between rounded-pill border border-border/60 bg-background/80 px-3 backdrop-blur-lg transition-shadow duration-300",
          scrolled ? "shadow-float" : "shadow-soft"
        )}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="rounded-pill px-3 py-2 font-display text-sm font-semibold tracking-tight"
        >
          Shaharyar Shamshi
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => go(item.href)}
              className={cn(
                "rounded-pill px-3 py-2 text-sm font-medium transition-colors",
                active === item.href
                  ? "bg-brand-soft text-brand"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.name}
            </button>
          ))}
          <div className="ml-1 pl-1">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-pill text-foreground hover:bg-accent"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="absolute inset-x-4 top-[74px] rounded-card border border-border/60 bg-background/95 shadow-float backdrop-blur-lg md:hidden">
          <div className="flex flex-col divide-y divide-border px-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => go(item.href)}
                className="py-3 text-left text-sm font-medium text-muted-foreground hover:text-foreground"
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

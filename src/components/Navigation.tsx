import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Open Source", href: "#opensource" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-5xl rounded-full border ${isScrolled
        ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-elegant border-white/20 dark:border-white/10"
        : "bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-transparent shadow-none"
        } px-6`}
    >
      <div className="flex items-center justify-between h-16">
        {/* Logo/Name */}
        <button
          onClick={() => scrollToSection("#hero")}
          className="text-xl font-display font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          Shaharyar Shamshi
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              onClick={() => scrollToSection(item.href)}
              className="font-medium text-sm rounded-full hover:bg-primary/10 hover:text-primary transition-colors h-9 px-4"
            >
              {item.name}
            </Button>
          ))}
          <div className="ml-auto pl-2 border-l border-border/50">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-full"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 p-4 rounded-3xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl animate-fade-in-up md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                className="justify-start font-medium rounded-xl h-12"
              >
                {item.name}
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

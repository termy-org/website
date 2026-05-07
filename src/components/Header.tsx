import { Link } from "@tanstack/react-router";
import { Heart, Menu, Moon, Sun, X } from "lucide-react";
import { type JSX, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Download", href: "/#download" },
  { label: "Docs", to: "/docs" },
  { label: "GitHub", href: "https://github.com/lassejlv/termy", external: true },
];

const linkClass =
  "text-sm text-muted-foreground hover:text-foreground transition-colors";

const mobileLinkClass =
  "block py-2 text-base text-muted-foreground hover:text-foreground transition-colors";

export function Header(): JSX.Element {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function closeMobileMenu(): void {
    setIsMobileMenuOpen(false);
  }

  function toggleMobileMenu(): void {
    setIsMobileMenuOpen((open) => !open);
  }

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    function onKeyDown(event: KeyboardEvent): void {
      if (event.key === "Escape") closeMobileMenu();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-2 text-foreground"
          >
            <img
              src="/termy_icon.png"
              alt=""
              width={24}
              height={24}
              className="rounded-md"
            />
            <span className="text-sm font-medium">Termy</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.to ? (
                <Link key={link.label} to={link.to} className={linkClass}>
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className={linkClass}
                  {...(link.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  {link.label}
                </a>
              )
            )}
            <div className="w-px h-4 bg-border/50" />
            
            <a
              href="https://github.com/sponsors/lassejlv"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Heart className="w-4 h-4" />
              <span>Sponsor</span>
            </a>

            <button
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={theme === "light" ? "Dark mode" : "Light mode"}
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="md:hidden text-muted-foreground hover:text-foreground"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
            onClick={closeMobileMenu}
          />
          <div className="fixed top-14 left-0 right-0 z-50 bg-background border-b border-border px-5 py-4 md:hidden">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) =>
                link.to ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    className={mobileLinkClass}
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className={mobileLinkClass}
                    onClick={closeMobileMenu}
                    {...(link.external
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </a>
                )
              )}
              <div className="my-2 h-px bg-border/50" />
              <a
                href="https://github.com/sponsors/lassejlv"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 py-2 text-base text-muted-foreground"
                onClick={closeMobileMenu}
              >
                <Heart className="w-4 h-4" />
                Sponsor
              </a>
              <button
                onClick={() => {
                  toggleTheme();
                  closeMobileMenu();
                }}
                className="flex items-center gap-2 py-2 text-base text-muted-foreground"
              >
                {theme === "light" ? (
                  <>
                    <Moon className="w-4 h-4" /> Dark mode
                  </>
                ) : (
                  <>
                    <Sun className="w-4 h-4" /> Light mode
                  </>
                )}
              </button>
            </nav>
          </div>
        </>
      )}
    </>
  );
}

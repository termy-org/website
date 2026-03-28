import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import type { JSX } from "react";
import { Header } from "@/components/Header";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout(): JSX.Element {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 py-6 px-5">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <img
              src="/termy_icon.png"
              alt=""
              width={16}
              height={16}
              className="rounded"
            />
            <span>Termy</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/docs" className="hover:text-foreground transition-colors">
              Docs
            </Link>
            <a
              href="https://github.com/lassejlv/termy"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

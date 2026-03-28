import { createFileRoute, Link } from "@tanstack/react-router";
import type { JSX } from "react";
import { Sidebar } from "@/components/docs/Sidebar";
import { TableOfContents } from "@/components/docs/TableOfContents";
import { getDocsByCategory, sortDocCategories } from "@/lib/docs";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/docs/")({
  component: DocsPage,
});

function DocsPage(): JSX.Element {
  const docsByCategory = getDocsByCategory();
  const categories = sortDocCategories(Object.keys(docsByCategory));

  return (
    <section className="pt-24 pb-20 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-8">
          {/* Sidebar */}
          <Sidebar currentSlug="" />

          {/* Main content */}
          <main className="flex-1 min-w-0 max-w-2xl">
            <h1 className="text-2xl font-semibold mb-2">Documentation</h1>
            <p className="text-muted-foreground mb-10">
              Everything you need to get started with Termy.
            </p>

            {/* Doc grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {categories.map((category) =>
                docsByCategory[category].map((doc) => (
                  <Link
                    key={doc.slug}
                    to="/docs/$"
                    params={{ _splat: doc.slug }}
                    className={cn(
                      "block p-4 rounded-xl border border-border/50",
                      "hover:border-foreground/20 hover:bg-secondary/30",
                      "transition-all group"
                    )}
                  >
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">
                      {category}
                    </span>
                    <h3 className="font-medium mt-1 group-hover:text-foreground transition-colors">
                      {doc.title}
                    </h3>
                    {doc.description && (
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {doc.description}
                      </p>
                    )}
                  </Link>
                ))
              )}
            </div>
          </main>

          {/* Right spacer for balance */}
          <div className="hidden xl:block w-64 shrink-0" />
        </div>
      </div>
    </section>
  );
}

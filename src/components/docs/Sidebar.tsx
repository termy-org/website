import { ChevronDown, ChevronRight, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { getDocsByCategory, getAllDocs, sortDocCategories } from "@/lib/docs";
import { cn } from "@/lib/utils";
import { SearchDialog } from "./SearchDialog";

interface SidebarProps {
  currentSlug: string;
}

const SIDEBAR_EXPANDED_CATEGORIES_KEY = "termy.docs.sidebar.expandedCategories";

export function Sidebar({ currentSlug }: SidebarProps) {
  const docsByCategory = getDocsByCategory();
  const categories = sortDocCategories(Object.keys(docsByCategory));
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Load expanded state
  useEffect(() => {
    let saved: Record<string, boolean> = {};
    try {
      const raw = window.localStorage.getItem(SIDEBAR_EXPANDED_CATEGORIES_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as unknown;
        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
          saved = Object.fromEntries(
            Object.entries(parsed).filter(
              (entry): entry is [string, boolean] =>
                typeof entry[0] === "string" && typeof entry[1] === "boolean"
            )
          );
        }
      }
    } catch {
      saved = {};
    }
    setExpandedCategories(saved);
  }, []);

  // Initialize categories as expanded
  useEffect(() => {
    setExpandedCategories((previous) => {
      const next: Record<string, boolean> = { ...previous };
      for (const category of categories) {
        if (!(category in next)) {
          next[category] = true;
        }
      }
      return next;
    });
  }, [categories]);

  // Save expanded state
  useEffect(() => {
    try {
      window.localStorage.setItem(
        SIDEBAR_EXPANDED_CATEGORIES_KEY,
        JSON.stringify(expandedCategories)
      );
    } catch {
      // Ignore storage write failures.
    }
  }, [expandedCategories]);

  // Global keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function toggleCategory(category: string): void {
    setExpandedCategories((previous) => ({
      ...previous,
      [category]: !previous[category],
    }));
  }

  return (
    <>
      <aside className="hidden lg:block w-64 shrink-0">
        <nav className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-3">
          {/* Search Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="w-full flex items-center gap-3 px-3 py-2.5 mb-6 bg-secondary rounded-lg text-muted-foreground hover:text-foreground transition-colors group"
          >
            <Search className="w-4 h-4" />
            <span className="flex-1 text-sm text-left">Search...</span>
            <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] bg-background rounded border border-border">
              ⌘K
            </kbd>
          </button>

          {/* Categories */}
          <div className="space-y-5">
            {categories.map((category) => (
              <div key={category}>
                <button
                  type="button"
                  onClick={() => toggleCategory(category)}
                  className="mb-2 flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-left text-xs font-medium text-muted-foreground uppercase tracking-wide hover:bg-secondary/50 transition-colors"
                >
                  <span>{category}</span>
                  {expandedCategories[category] !== false ? (
                    <ChevronDown className="h-3.5 w-3.5" />
                  ) : (
                    <ChevronRight className="h-3.5 w-3.5" />
                  )}
                </button>
                {expandedCategories[category] !== false && (
                  <ul className="space-y-0.5">
                    {docsByCategory[category].map((doc) => (
                      <li key={doc.slug}>
                        <Link
                          to="/docs/$"
                          params={{ _splat: doc.slug }}
                          className={cn(
                            "block text-sm py-1.5 px-3 rounded-lg transition-colors",
                            currentSlug === doc.slug
                              ? "bg-foreground/10 text-foreground font-medium"
                              : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                          )}
                        >
                          {doc.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </nav>
      </aside>

      <SearchDialog
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        currentSlug={currentSlug}
      />
    </>
  );
}

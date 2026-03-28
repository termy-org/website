import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Search, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getAllDocs } from "@/lib/docs";
import { cn } from "@/lib/utils";

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlug?: string;
}

interface SearchResult {
  doc: ReturnType<typeof getAllDocs>[number];
  matchType: "title" | "content";
  snippet?: string;
}

export function SearchDialog({ isOpen, onClose, currentSlug }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const allDocs = useMemo(() => getAllDocs(), []);

  // Filter results
  const results = useMemo(() => {
    if (!query.trim()) return [];

    const q = query.toLowerCase().trim();
    const queryWords = q.split(/\s+/);

    const searchResults: SearchResult[] = [];

    for (const doc of allDocs) {
      const titleLower = doc.title.toLowerCase();
      const contentLower = doc.content.toLowerCase();

      const titleMatch = queryWords.every((word) => titleLower.includes(word));

      let contentMatch = false;
      let snippet: string | undefined;

      if (!titleMatch) {
        contentMatch = queryWords.every((word) => contentLower.includes(word));

        if (contentMatch) {
          const firstWord = queryWords[0];
          const index = contentLower.indexOf(firstWord);
          if (index !== -1) {
            const start = Math.max(0, index - 50);
            const end = Math.min(doc.content.length, index + 100);
            snippet =
              (start > 0 ? "..." : "") +
              doc.content.slice(start, end).replace(/\n/g, " ") +
              (end < doc.content.length ? "..." : "");
          }
        }
      }

      if (titleMatch || contentMatch) {
        searchResults.push({
          doc,
          matchType: titleMatch ? "title" : "content",
          snippet,
        });
      }
    }

    return searchResults.sort((a, b) => {
      if (a.matchType === "title" && b.matchType !== "title") return -1;
      if (b.matchType === "title" && a.matchType !== "title") return 1;
      return 0;
    });
  }, [query, allDocs]);

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (results.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % results.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        const selected = results[selectedIndex];
        if (selected) {
          navigate({ to: "/docs/$", params: { _splat: selected.doc.slug } });
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex, navigate, onClose]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;
    const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-foreground/20 rounded px-0.5 font-medium">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Dialog */}
          <div className="fixed left-1/2 top-[15%] -translate-x-1/2 z-50 w-full max-w-xl px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ 
                duration: 0.2,
                ease: [0.16, 1, 0.3, 1] // ease-out-expo
              }}
              className="bg-card border border-border rounded-xl shadow-2xl overflow-hidden"
            >
              {/* Search Input */}
              <div className="flex items-center gap-3 px-4 py-4 border-b border-border">
                <Search className="w-5 h-5 text-muted-foreground" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search documentation..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-base"
                />
                <div className="flex items-center gap-2">
                  <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs text-muted-foreground bg-secondary rounded">
                    <span>ESC</span>
                  </kbd>
                  <button
                    onClick={onClose}
                    className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Results */}
              <motion.div 
                className="max-h-[60vh] overflow-y-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.05, duration: 0.15 }}
              >
                {query.trim() === "" ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="p-8 text-center"
                  >
                    <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                    <p className="text-muted-foreground">
                      Start typing to search documentation
                    </p>
                    <p className="text-sm text-muted-foreground/60 mt-1">
                      Use arrow keys to navigate, Enter to select
                    </p>
                  </motion.div>
                ) : results.length === 0 ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-8 text-center"
                  >
                    <p className="text-muted-foreground">No results found</p>
                    <p className="text-sm text-muted-foreground/60 mt-1">
                      Try different keywords
                    </p>
                  </motion.div>
                ) : (
                  <ul className="py-2">
                    {results.map((result, index) => (
                      <motion.li 
                        key={result.doc.slug}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03 }}
                      >
                        <Link
                          to="/docs/$"
                          params={{ _splat: result.doc.slug }}
                          onClick={onClose}
                          className={cn(
                            "block px-4 py-3 mx-2 rounded-lg transition-colors",
                            selectedIndex === index
                              ? "bg-foreground/10"
                              : "hover:bg-secondary"
                          )}
                          onMouseEnter={() => setSelectedIndex(index)}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={cn(
                                "text-[10px] px-1.5 py-0.5 rounded font-medium uppercase",
                                result.matchType === "title"
                                  ? "bg-foreground/10 text-foreground"
                                  : "bg-secondary text-muted-foreground"
                              )}
                            >
                              {result.matchType}
                            </span>
                            {result.doc.category && (
                              <span className="text-xs text-muted-foreground">
                                {result.doc.category}
                              </span>
                            )}
                          </div>
                          <h4 className="font-medium text-foreground">
                            {highlightMatch(result.doc.title, query)}
                          </h4>
                          {result.doc.description && (
                            <p className="text-sm text-muted-foreground line-clamp-1 mt-0.5">
                              {result.doc.description}
                            </p>
                          )}
                          {result.snippet && (
                            <p className="text-xs text-muted-foreground/70 line-clamp-2 mt-1.5 font-mono">
                              {highlightMatch(result.snippet, query)}
                            </p>
                          )}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </motion.div>

              {/* Footer */}
              {results.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="px-4 py-3 border-t border-border bg-secondary/30 text-xs text-muted-foreground flex items-center justify-between"
                >
                  <span>
                    {results.length} result{results.length !== 1 ? "s" : ""}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-secondary rounded text-[10px]">↑↓</kbd>
                      <span>Navigate</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-secondary rounded text-[10px]">↵</kbd>
                      <span>Select</span>
                    </span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

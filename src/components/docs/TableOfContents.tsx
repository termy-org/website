import { useEffect, useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const clickedIdRef = useRef<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Initialize active ID from URL hash
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && headings.some(h => h.id === hash)) {
      setActiveId(hash);
    } else if (headings.length > 0) {
      // Default to first heading
      setActiveId(headings[0].id);
    }
  }, [headings]);

  // Set up intersection observer
  useEffect(() => {
    if (headings.length === 0) return;

    // Disconnect previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Find all heading elements
    const elements = headings
      .map(h => document.getElementById(h.id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    // Create observer with multiple thresholds
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // If we just clicked a link, don't update from observer immediately
        if (clickedIdRef.current) {
          return;
        }

        // Find the entry that's most visible in the viewport
        const visibleEntries = entries.filter(e => e.isIntersecting);
        
        if (visibleEntries.length > 0) {
          // Use the first visible one (highest on page)
          const firstVisible = visibleEntries.sort((a, b) => {
            const aTop = a.boundingClientRect.top;
            const bTop = b.boundingClientRect.top;
            return aTop - bTop;
          })[0];
          
          setActiveId(firstVisible.target.id);
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    elements.forEach(el => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [headings]);

  // Handle scroll to detect bottom of page
  useEffect(() => {
    if (headings.length === 0) return;

    const handleScroll = () => {
      // Skip if we recently clicked
      if (clickedIdRef.current) return;

      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      
      // If we're at the bottom, highlight the last heading
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 50;
      
      if (isAtBottom) {
        setActiveId(headings[headings.length - 1].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    const element = document.getElementById(id);
    if (!element) return;

    // Set clicked ref to prevent observer from overriding
    clickedIdRef.current = id;
    setActiveId(id);

    // Update URL hash without jump
    window.history.pushState(null, "", `#${id}`);

    // Smooth scroll
    const headerOffset = 100; // Account for sticky header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    // Clear clicked ref after scroll animation
    setTimeout(() => {
      clickedIdRef.current = null;
    }, 600);
  }, []);

  if (headings.length === 0) {
    return <div className="hidden xl:block w-60 shrink-0" />;
  }

  return (
    <aside className="hidden xl:block w-60 shrink-0">
      <nav className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
        <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
          On this page
        </h3>
        <ul className="space-y-1 border-l border-border/50">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                onClick={(e) => handleClick(e, heading.id)}
                className={cn(
                  "block text-sm py-1 pl-3 transition-all border-l-2 -ml-[2px]",
                  heading.level === 2 ? "" : "pl-5",
                  activeId === heading.id
                    ? "text-foreground font-medium border-foreground"
                    : "text-muted-foreground hover:text-foreground border-transparent"
                )}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

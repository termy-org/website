import { Link, createFileRoute, notFound, useLocation } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { useEffect, useMemo, useState, type JSX, type ReactNode } from "react";
import Markdown from "react-markdown";
import type { Components } from "react-markdown";
import { Sidebar } from "@/components/docs/Sidebar";
import { TableOfContents } from "@/components/docs/TableOfContents";
import {
  extractHeadings,
  getAllDocs,
  getDocBySlug,
  type Doc,
} from "@/lib/docs";
import { generateSlug, proseClasses } from "@/lib/utils";

export const Route = createFileRoute("/docs/$")({
  component: DocPage,
  loader: ({ params }) => {
    const slug = params._splat ?? "";
    const doc = getDocBySlug(slug);

    if (!doc) {
      throw notFound();
    }
    return doc;
  },
});

function getAdjacentDocs(currentSlug: string, docs: Doc[]) {
  const currentIndex = docs.findIndex((doc) => doc.slug === currentSlug);
  if (currentIndex === -1) return { prevDoc: null, nextDoc: null };
  return {
    prevDoc: currentIndex > 0 ? docs[currentIndex - 1] : null,
    nextDoc: currentIndex < docs.length - 1 ? docs[currentIndex + 1] : null,
  };
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightText(text: string, query: string): ReactNode {
  const trimmedQuery = query.trim();
  if (!trimmedQuery) return text;
  const regex = new RegExp(`(${escapeRegex(trimmedQuery)})`, "gi");
  const parts = text.split(regex);
  if (parts.length === 1) return text;

  return parts.map((part, index) => {
    if (index % 2 === 0) return part;
    return (
      <mark key={index} className="bg-foreground/20 rounded px-0.5">
        {part}
      </mark>
    );
  });
}

function wrapHighlightedChildren(children: ReactNode, query: string): ReactNode {
  if (!query.trim()) return children;
  if (typeof children === "string") return highlightText(children, query);
  if (Array.isArray(children)) {
    return children.map((child, index) =>
      typeof child === "string" ? (
        <span key={index}>{highlightText(child, query)}</span>
      ) : (
        child
      )
    );
  }
  return children;
}

function createMarkdownComponents(query: string, slug: string): Components {
  const HeadingWithLink = ({ 
    Tag, 
    children 
  }: { 
    Tag: "h2" | "h3" | "h4"; 
    children: ReactNode 
  }): JSX.Element => {
    const id = generateSlug(String(children));
    const content = wrapHighlightedChildren(children, query);
    const [copied, setCopied] = useState(false);
    
    const handleCopyLink = () => {
      const url = `${window.location.origin}/docs/${slug}#${id}`;
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <Tag id={id} className="scroll-mt-24 font-semibold group flex items-center gap-2">
        {content}
        <button
          onClick={handleCopyLink}
          className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground"
          title={copied ? "Copied!" : "Copy link to section"}
        >
          {copied ? (
            <span className="text-xs">Copied!</span>
          ) : (
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          )}
        </button>
      </Tag>
    );
  };

  return {
    h2: ({ children }) => <HeadingWithLink Tag="h2" children={children} />,
    h3: ({ children }) => <HeadingWithLink Tag="h3" children={children} />,
    h4: ({ children }) => <HeadingWithLink Tag="h4" children={children} />,
    p: ({ children }) => <p>{wrapHighlightedChildren(children, query)}</p>,
    li: ({ children }) => <li>{wrapHighlightedChildren(children, query)}</li>,
    strong: ({ children }) => <strong>{wrapHighlightedChildren(children, query)}</strong>,
    em: ({ children }) => <em>{wrapHighlightedChildren(children, query)}</em>,
    pre: ({ children }) => {
      const [copied, setCopied] = useState(false);
      
      let content = "";
      if (
        children &&
        typeof children === "object" &&
        "props" in children &&
        children.props &&
        typeof children.props === "object" &&
        "children" in children.props
      ) {
        const codeChildren = children.props.children;
        content = typeof codeChildren === "string" ? codeChildren : codeChildren.join("");
      }

      const handleCopy = () => {
        navigator.clipboard.writeText(content.replace(/\n$/, ""));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      };

      return (
        <div className="relative group my-4">
          <button
            onClick={handleCopy}
            className="absolute right-2 top-2 text-xs text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity min-w-[50px] text-right"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <pre className="bg-secondary rounded-lg p-4 overflow-x-auto text-sm m-0">{children}</pre>
        </div>
      );
    },
    code: ({ children }) => (
      <code className="bg-secondary px-1.5 py-0.5 rounded text-sm">{children}</code>
    ),
  };
}

function DocPage(): JSX.Element {
  const doc = Route.useLoaderData();
  const location = useLocation();
  const allDocs = getAllDocs();
  const { prevDoc, nextDoc } = getAdjacentDocs(doc.slug, allDocs);
  const headings = extractHeadings(doc.content);

  // Get search query from URL if present
  const searchParams = new URLSearchParams(location.search);
  const highlightQuery = searchParams.get("q") || "";

  // Handle hash scroll on page load
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location.hash]);

  const markdownComponents = useMemo(
    () => createMarkdownComponents(highlightQuery, doc.slug),
    [highlightQuery, doc.slug]
  );

  return (
    <section className="pt-24 pb-20 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-8">
          {/* Sidebar */}
          <Sidebar currentSlug={doc.slug} />

          {/* Main content */}
          <main className="flex-1 min-w-0 max-w-2xl">
            {/* Mobile back link */}
            <Link
              to="/docs"
              className="lg:hidden inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <ChevronLeft className="w-4 h-4" />
              All docs
            </Link>

            {/* Highlight indicator */}
            {highlightQuery && (
              <div className="mb-4 text-sm text-muted-foreground">
                Highlighting: <span className="font-medium">{highlightQuery}</span>
              </div>
            )}

            {/* Header */}
            <div className="mb-8">
              {doc.category && (
                <span className="text-xs text-muted-foreground uppercase tracking-wide">
                  {doc.category}
                </span>
              )}
              <h1 className="text-2xl font-semibold mt-1">{doc.title}</h1>
              {doc.description && <p className="mt-2 text-muted-foreground">{doc.description}</p>}
            </div>

            {/* Content */}
            <div className={`${proseClasses} max-w-none`}>
              <Markdown 
                components={markdownComponents} 
                rehypePlugins={[rehypeHighlight]}
                remarkPlugins={[remarkGfm]}
              >
                {doc.content}
              </Markdown>
            </div>

            {/* Prev/Next navigation */}
            <div className="mt-12 pt-8 border-t border-border/30 flex justify-between gap-4">
              {prevDoc ? (
                <Link
                  to="/docs/$"
                  params={{ _splat: prevDoc.slug }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  ← {prevDoc.title}
                </Link>
              ) : (
                <span />
              )}
              {nextDoc ? (
                <Link
                  to="/docs/$"
                  params={{ _splat: nextDoc.slug }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {nextDoc.title} →
                </Link>
              ) : (
                <span />
              )}
            </div>
          </main>

          {/* TOC */}
          <TableOfContents headings={headings} />
        </div>
      </div>
    </section>
  );
}

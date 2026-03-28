import { createFileRoute } from "@tanstack/react-router";
import { useGitHubRelease } from "@/hooks/useGitHubRelease";
import { Features } from "@/components/Features";
import { Download } from "@/components/Download";
import { Github } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const { release, loading, error } = useGitHubRelease();

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="w-full flex flex-col items-center text-center pt-40 pb-24">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-5 max-w-lg">
          Yes A Terminal. Blazingly fast and lightweight.
        </h1>

        <p className="text-lg text-muted-foreground max-w-sm mb-10 leading-relaxed">
          8ms startup, 18MB RAM. The crab approves.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#download"
            className="inline-flex items-center px-6 py-2.5 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-80 transition-opacity"
          >
            Download
          </a>
          <a
            href="https://github.com/lassejlv/termy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </section>

      {/* Features */}
      <Features />

      {/* Download */}
      <Download release={release} loading={loading} error={error} />
    </div>
  );
}

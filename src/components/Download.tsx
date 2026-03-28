import { ExternalLink, Info } from "lucide-react";
import { useEffect, useState, type JSX } from "react";
import { AppleIcon, LinuxIcon, WindowsIcon } from "@/components/platform-icons";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import {
  classifyAssets,
  formatBytes,
  type Asset,
  type Release,
} from "@/hooks/useGitHubRelease";
import { formatDate } from "@/lib/utils";

interface DownloadProps {
  release: Release | null;
  loading: boolean;
  error: string | null;
}

const platforms = [
  { key: "mac" as const, label: "macOS", icon: AppleIcon },
  { key: "windows" as const, label: "Windows", icon: WindowsIcon },
  { key: "linux" as const, label: "Linux", icon: LinuxIcon },
] satisfies { key: "mac" | "windows" | "linux"; label: string; icon: JSX.Element }[];

function getPrimaryAsset(assets: Asset[]): Asset | null {
  return assets[0] ?? null;
}

function getDetectedPlatform(): "mac" | "windows" | "linux" | null {
  if (typeof navigator === "undefined") return null;
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.includes("mac")) return "mac";
  if (userAgent.includes("win")) return "windows";
  if (userAgent.includes("linux")) return "linux";
  return null;
}

export function Download({ release, loading, error }: DownloadProps): JSX.Element {
  const classified = release?.assets ? classifyAssets(release.assets) : null;
  const [detectedPlatform, setDetectedPlatform] = useState<"mac" | "windows" | "linux" | null>(null);

  useEffect(() => {
    setDetectedPlatform(getDetectedPlatform());
  }, []);

  return (
    <section id="download" className="py-24 px-5 border-t border-border/30">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-semibold tracking-tight mb-2">
          Download
        </h2>
        <p className="text-muted-foreground mb-10">
          Free and open source.
        </p>

        {loading && (
          <div className="flex justify-center py-8">
            <Spinner />
          </div>
        )}

        {error && (
          <div className="p-4 rounded-lg border border-destructive/50 bg-destructive/10">
            <p className="text-sm text-destructive">{error}</p>
          </div>
        )}

        {!loading && !error && release && (
          <div className="space-y-6">
            {/* Platform buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {platforms.map((platform) => {
                const assets = classified?.[platform.key] ?? [];
                const primary = getPrimaryAsset(assets);
                if (!primary) return null;

                return (
                  <a
                    key={platform.key}
                    href={primary.browser_download_url}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-colors",
                      detectedPlatform === platform.key
                        ? "bg-foreground text-background border-foreground hover:opacity-90"
                        : "bg-background text-foreground border-border hover:border-foreground/30"
                    )}
                  >
                    <span className="[&_svg]:w-4 [&_svg]:h-4 [&_img]:w-4 [&_img]:h-4">
                      {platform.icon}
                    </span>
                    {platform.label}
                  </a>
                );
              })}
            </div>

            {/* Version */}
            <p className="text-xs text-muted-foreground font-mono">
              {release.tag_name} · {release.published_at && formatDate(release.published_at)}
            </p>

            {/* Links */}
            <div className="flex items-center justify-center gap-4 text-sm">
              <a
                href={release.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                Release notes
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Installation notes */}
            <details className="group">
              <summary className="flex items-center justify-center gap-1 text-xs text-muted-foreground/60 cursor-pointer hover:text-muted-foreground transition-colors">
                <Info className="w-3 h-3" />
                Installation notes
              </summary>
              <p className="mt-3 text-xs text-muted-foreground/60 leading-relaxed max-w-sm mx-auto">
                Not code signed yet. On macOS, run{" "}
                <code className="font-mono text-foreground/60">
                  sudo xattr -d com.apple.quarantine /Applications/Termy.app
                </code>{" "}
                if blocked.
              </p>
            </details>
          </div>
        )}
      </div>
    </section>
  );
}

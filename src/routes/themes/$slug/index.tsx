import { Link, createFileRoute } from "@tanstack/react-router";
import type { JSX } from "react";
import { useEffect, useMemo, useState } from "react";
import {
  type Theme,
  type ThemePalette,
  type ThemeVersion,
  fallbackPalette,
  fetchThemeWithVersions,
} from "@/lib/theme-store";

export const Route = createFileRoute("/themes/$slug/")({
  component: ThemeDetailPage,
});

function buildThemeInstallHref(slug: string): string {
  return `termy://store/theme-install?slug=${encodeURIComponent(slug)}`;
}

function ThemePreview({ palette }: { palette: ThemePalette }): JSX.Element {
  const colors = [
    [palette.black, palette.red, palette.green, palette.yellow, palette.blue, palette.magenta, palette.cyan, palette.white],
    [palette.bright_black, palette.bright_red, palette.bright_green, palette.bright_yellow, palette.bright_blue, palette.bright_magenta, palette.bright_cyan, palette.bright_white],
  ];

  return (
    <div
      className="rounded-xl overflow-hidden font-mono text-sm"
      style={{ background: palette.background }}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: palette.bright_black }}>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full" style={{ background: palette.red }} />
          <div className="w-3 h-3 rounded-full" style={{ background: palette.yellow }} />
          <div className="w-3 h-3 rounded-full" style={{ background: palette.green }} />
        </div>
      </div>
      <div className="p-4 space-y-3" style={{ color: palette.foreground }}>
        <div style={{ color: palette.green }}>$ neofetch</div>
        <div style={{ color: palette.blue }}>OS: macOS</div>
        <div style={{ color: palette.magenta }}>Shell: zsh</div>
        <div style={{ color: palette.cyan }}>Terminal: Termy</div>
        <div className="pt-2 space-y-1">
          {colors.map((row, i) => (
            <div key={i} className="flex gap-1">
              {row.map((color, j) => (
                <div key={j} className="flex-1 h-6 rounded" style={{ background: color }} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ThemeDetailPage(): JSX.Element {
  const { slug } = Route.useParams();
  const [theme, setTheme] = useState<Theme | null>(null);
  const [versions, setVersions] = useState<ThemeVersion[]>([]);
  const [palette, setPalette] = useState<ThemePalette>(fallbackPalette);
  const [loading, setLoading] = useState(true);

  const latestFileUrl = useMemo(() => {
    return theme?.fileUrl ?? versions[0]?.fileUrl ?? null;
  }, [theme, versions]);

  useEffect(() => {
    fetchThemeWithVersions(slug)
      .then((res) => {
        setTheme(res.theme);
        setVersions(res.versions);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  useEffect(() => {
    if (!latestFileUrl) return;
    fetch(latestFileUrl)
      .then((r) => r.json())
      .then((json) => setPalette({ ...fallbackPalette, ...(json as ThemePalette) }))
      .catch(() => setPalette(fallbackPalette));
  }, [latestFileUrl]);

  if (loading) {
    return (
      <section className="pt-24 pb-16 px-5">
        <div className="max-w-3xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-secondary rounded w-48" />
            <div className="h-64 bg-secondary rounded-xl" />
          </div>
        </div>
      </section>
    );
  }

  if (!theme) {
    return (
      <section className="pt-24 pb-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground">Theme not found</p>
          <Link to="/themes" className="text-foreground hover:underline mt-4 inline-block">
            ← Back to themes
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-24 pb-16 px-5">
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <Link
          to="/themes"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block"
        >
          ← Themes
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-semibold tracking-tight">{theme.name}</h1>
          {theme.description && (
            <p className="text-lg text-muted-foreground mt-2">{theme.description}</p>
          )}
          <p className="text-sm text-muted-foreground mt-3">
            by @{theme.githubUsernameClaim}
            {theme.latestVersion && (
              <span className="ml-3 text-xs font-mono">{theme.latestVersion}</span>
            )}
          </p>
        </div>

        {/* Preview */}
        <div className="mb-8">
          <ThemePreview palette={palette} />
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <a
            href={buildThemeInstallHref(theme.slug)}
            className="inline-flex items-center px-6 py-2.5 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-80 transition-opacity"
          >
            Install in Termy
          </a>
          {latestFileUrl && (
            <a
              href={latestFileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-5 py-2.5 border border-border text-sm font-medium rounded-full hover:bg-secondary transition-colors"
            >
              Download JSON
            </a>
          )}
        </div>

        {/* Versions */}
        {versions.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Version History</h2>
            <div className="space-y-2">
              {versions.map((version) => (
                <div
                  key={version.id}
                  className="flex items-center justify-between py-3 border-b border-border/50"
                >
                  <div>
                    <span className="font-medium">{version.version}</span>
                    <span className="text-sm text-muted-foreground ml-3">
                      {new Date(version.publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                  {version.fileUrl && (
                    <a
                      href={version.fileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Download
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

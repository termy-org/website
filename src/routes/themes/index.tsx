import { Link, createFileRoute } from "@tanstack/react-router";
import type { JSX } from "react";
import { useEffect, useMemo, useState } from "react";
import {
  type AuthUser,
  type Theme,
  type ThemePalette,
  fallbackPalette,
  fetchThemes,
  fetchCurrentUser,
  getThemeLoginUrl,
} from "@/lib/theme-store";

export const Route = createFileRoute("/themes/")({
  component: ThemeStorePage,
});

function buildThemeInstallHref(slug: string): string {
  return `termy://store/theme-install?slug=${encodeURIComponent(slug)}`;
}

function ThemeColorSwatch({ fileUrl }: { fileUrl: string | null }): JSX.Element {
  const [palette, setPalette] = useState<ThemePalette | null>(null);

  useEffect(() => {
    if (!fileUrl) return;
    fetch(fileUrl)
      .then((res) => res.json() as Promise<ThemePalette>)
      .then((json) => setPalette({ ...fallbackPalette, ...json }))
      .catch(() => setPalette(null));
  }, [fileUrl]);

  const colors = palette ?? fallbackPalette;
  const swatchColors = [colors.black, colors.red, colors.green, colors.yellow, colors.blue, colors.magenta, colors.cyan, colors.white];

  return (
    <div
      className="flex items-end gap-1 p-3 h-24"
      style={{ background: colors.background ?? fallbackPalette.background }}
    >
      {swatchColors.map((color, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm"
          style={{
            backgroundColor: color ?? fallbackPalette.black,
            height: `${30 + ((i * 17) % 50)}%`,
          }}
        />
      ))}
    </div>
  );
}

function ThemeStorePage(): JSX.Element {
  const [themes, setThemes] = useState<Theme[]>([]);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const loginUrl = useMemo(() => getThemeLoginUrl("/themes"), []);
  
  const filteredThemes = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return themes;
    return themes.filter((theme) =>
      [theme.name, theme.description].join(" ").toLowerCase().includes(query)
    );
  }, [searchQuery, themes]);

  useEffect(() => {
    Promise.all([fetchThemes(), fetchCurrentUser().catch(() => null)])
      .then(([themesResult, userResult]) => {
        setThemes(themesResult);
        setUser(userResult);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="pt-24 pb-16 px-5">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Themes</h1>
            <p className="text-muted-foreground mt-1">
              Community themes for Termy
            </p>
          </div>
          <div className="flex items-center gap-3">
            {!user ? (
              <a
                href={loginUrl}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Login
              </a>
            ) : (
              <span className="text-sm text-muted-foreground">
                @{user.githubLogin}
              </span>
            )}
            <Link
              to="/add"
              className="inline-flex items-center px-4 py-2 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-80 transition-opacity"
            >
              Add Theme
            </Link>
          </div>
        </div>

        {/* Search */}
        <div className="max-w-md mb-8">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search themes..."
            className="w-full px-4 py-2.5 bg-secondary rounded-xl border-0 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
          />
        </div>

        {/* Themes Grid */}
        {loading ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-xl bg-secondary/50 h-40 animate-pulse" />
            ))}
          </div>
        ) : filteredThemes.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              {searchQuery ? "No themes match your search" : "No themes yet"}
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredThemes.map((theme) => (
              <div
                key={theme.id}
                className="group rounded-xl border border-border/50 bg-card overflow-hidden hover:border-foreground/20 transition-colors"
              >
                <Link to="/themes/$slug" params={{ slug: theme.slug }}>
                  <ThemeColorSwatch fileUrl={theme.fileUrl} />
                </Link>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Link
                        to="/themes/$slug"
                        params={{ slug: theme.slug }}
                        className="font-medium hover:text-foreground transition-colors"
                      >
                        {theme.name}
                      </Link>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        @{theme.githubUsernameClaim}
                      </p>
                    </div>
                    {theme.latestVersion && (
                      <span className="text-[10px] text-muted-foreground font-mono">
                        {theme.latestVersion}
                      </span>
                    )}
                  </div>
                  {theme.description && (
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-1">
                      {theme.description}
                    </p>
                  )}
                  <a
                    href={buildThemeInstallHref(theme.slug)}
                    className="inline-flex items-center mt-3 text-sm font-medium text-foreground hover:opacity-80 transition-opacity"
                  >
                    Install
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

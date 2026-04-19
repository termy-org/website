import type { JSX } from "react";
import type { Contributor } from "@/hooks/useContributors";
import { ActivityChart } from "@/components/ActivityChart";

interface ContributorCardProps {
  contributor: Contributor;
  rank: number;
}

function getTotalAdditions(contributor: Contributor): number {
  return contributor.weeks.reduce((sum, week) => sum + week.a, 0);
}

function getTotalDeletions(contributor: Contributor): number {
  return contributor.weeks.reduce((sum, week) => sum + week.d, 0);
}

function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`;
  return n.toString();
}

export function ContributorCard({ contributor, rank }: ContributorCardProps): JSX.Element | null {
  const author = contributor.author;
  if (!author) return null;

  const additions = getTotalAdditions(contributor);
  const deletions = getTotalDeletions(contributor);

  return (
    <div className="bg-card/30 border border-border/40 rounded-xl p-5 transition-colors hover:border-primary/20 hover:bg-card/60">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-muted-foreground tabular-nums">
          {String(rank).padStart(2, "0")}
        </span>
        <img
          src={author.avatar_url}
          alt={author.login}
          width={48}
          height={48}
          className="rounded-full"
          loading="lazy"
        />
        <div className="min-w-0 flex-1">
          <a
            href={author.html_url}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-foreground hover:text-primary transition-colors truncate block"
          >
            {author.login}
          </a>
          <div className="flex items-center gap-3 text-sm text-muted-foreground mt-0.5 font-mono tabular-nums">
            <span>{contributor.total} commits</span>
            <span className="text-foreground/60">+{formatNumber(additions)}</span>
            <span className="text-foreground/40">−{formatNumber(deletions)}</span>
          </div>
        </div>
      </div>

      <ActivityChart weeks={contributor.weeks} />
    </div>
  );
}

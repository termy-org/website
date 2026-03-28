import { createFileRoute, Link } from "@tanstack/react-router";
import type { JSX } from "react";
import { ContributorCard } from "@/components/ContributorCard";
import { Spinner } from "@/components/ui/spinner";
import { useContributors } from "@/hooks/useContributors";

export const Route = createFileRoute("/contributors/")({
  component: ContributorsPage,
});

function ContributorsPage(): JSX.Element {
  const { data: contributors, isLoading, error } = useContributors();
  const hasContributors = !isLoading && !error && Boolean(contributors);

  return (
    <section className="pt-24 pb-16 px-5">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link 
            to="/" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight mt-4">Contributors</h1>
          <p className="mt-1 text-muted-foreground">
            People who make Termy possible.
          </p>
        </div>

        {isLoading && (
          <div className="flex justify-center py-12">
            <Spinner />
          </div>
        )}

        {error && (
          <div className="p-4 rounded-lg border border-destructive/50 bg-destructive/10 text-center">
            <p className="text-sm text-destructive">
              Could not load contributors.
            </p>
          </div>
        )}

        {hasContributors && contributors && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {contributors.map((contributor) => (
              contributor.author && (
                <ContributorCard
                  key={contributor.author.id}
                  contributor={contributor}
                  rank={0}
                  index={0}
                />
              )
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

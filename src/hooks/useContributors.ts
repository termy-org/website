import { useQuery, type UseQueryResult } from "@tanstack/react-query";

export interface ContributorWeek {
  w: number;
  a: number;
  d: number;
  c: number;
}

export interface ContributorAuthor {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

export interface Contributor {
  total: number;
  weeks: ContributorWeek[];
  author: ContributorAuthor | null;
}

const CONTRIBUTORS_URL =
  "https://api.github.com/repos/lassejlv/termy/stats/contributors";

async function fetchContributors(): Promise<Contributor[]> {
  const headers = { Accept: "application/vnd.github+json" };

  let res = await fetch(CONTRIBUTORS_URL, { headers });
  let retries = 0;
  while (res.status === 202 && retries < 3) {
    retries++;
    await new Promise((r) => setTimeout(r, 2000));
    res = await fetch(CONTRIBUTORS_URL, { headers });
  }

  if (!res.ok) {
    throw new Error(`Failed to load contributors (${res.status})`);
  }

  const contributors: Contributor[] = await res.json();
  return contributors
    .filter((c) => c.author !== null)
    .sort((a, b) => b.total - a.total);
}

const CONTRIBUTORS_STALE_TIME = 5 * 60_000;
const CONTRIBUTORS_GC_TIME = 30 * 60_000;

export function useContributors(): UseQueryResult<Contributor[], Error> {
  return useQuery({
    queryKey: ["github-contributors"],
    queryFn: fetchContributors,
    staleTime: CONTRIBUTORS_STALE_TIME,
    gcTime: CONTRIBUTORS_GC_TIME,
  });
}

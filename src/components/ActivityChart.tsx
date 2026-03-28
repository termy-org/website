interface ActivityChartProps {
  weeks: { w: number; a: number; d: number; c: number }[];
}

export function ActivityChart({ weeks }: ActivityChartProps) {
  // Show last 16 weeks of activity
  const recentWeeks = weeks.slice(-16);
  const maxCommits = Math.max(...recentWeeks.map((w) => w.c), 1);

  return (
    <div className="flex items-end gap-1 h-8">
      {recentWeeks.map((week, i) => {
        const height = Math.max((week.c / maxCommits) * 100, 10);
        return (
          <div
            key={i}
            className="flex-1 bg-foreground/20 rounded-sm"
            style={{ height: `${height}%`, minHeight: 2 }}
            title={`${week.c} commits`}
          />
        );
      })}
    </div>
  );
}

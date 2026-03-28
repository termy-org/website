const stats = [
  { value: "8ms", label: "startup" },
  { value: "18MB", label: "memory" },
  { value: "GPU", label: "accelerated" },
];

export function StatsBar() {
  return (
    <div className="flex items-center justify-center gap-8 text-sm">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <span className="font-medium">{stat.value}</span>
          <span className="text-muted-foreground ml-1">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

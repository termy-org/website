import type { JSX } from "react";
import { Zap, Settings, Monitor, Palette, Gauge, Split } from "lucide-react";

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: "Fast",
    description: "GPU-accelerated rendering with instant startup.",
  },
  {
    icon: Settings,
    title: "Configurable",
    description: "One TOML file. Full control over everything.",
  },
  {
    icon: Monitor,
    title: "Native",
    description: "Runs natively on macOS, Windows, and Linux.",
  },
  {
    icon: Palette,
    title: "Themable",
    description: "Built-in themes or create your own.",
  },
  {
    icon: Gauge,
    title: "Lightweight",
    description: "18MB memory footprint. No Electron bloat.",
  },
  {
    icon: Split,
    title: "Powerful",
    description: "Splits, tabs, and multiplexing built-in.",
  },
];

function FeatureItem({ feature }: { feature: Feature }): JSX.Element {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-secondary mb-4">
        <feature.icon className="w-5 h-5 text-foreground" />
      </div>
      <h3 className="text-sm font-medium mb-1">{feature.title}</h3>
      <p className="text-sm text-muted-foreground">{feature.description}</p>
    </div>
  );
}

export function Features(): JSX.Element {
  return (
    <section id="features" className="py-24 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-2">
            Features
          </h2>
          <p className="text-muted-foreground">Everything you need in a terminal.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature) => (
            <FeatureItem key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

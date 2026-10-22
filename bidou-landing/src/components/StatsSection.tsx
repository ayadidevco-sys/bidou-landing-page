interface StatsSectionProps {
  readonly stats: readonly {
    value: string;
    label: string;
    description: string;
    color: 'primary' | 'tertiary' | 'secondary';
  }[];
}

export default function StatsSection({ stats }: Readonly<StatsSectionProps>) {
  return (
    <section className="w-full px-margin md:px-space-xl py-space-lg bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md">
          {stats.map((stat, index) => (
            <div key={index} className="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm flex flex-col gap-space-xs items-center text-center">
              <span className={`text-3xl font-extrabold leading-tight tracking-tight text-${stat.color}`}>
                {stat.value}
              </span>
              <span className="font-bold text-sm text-on-surface">{stat.label}</span>
              <p className="text-xs text-on-surface-variant leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

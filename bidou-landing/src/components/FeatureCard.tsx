interface FeatureCardProps {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly accentColor: string;
}

export default function FeatureCard({ title, description, icon, accentColor }: Readonly<FeatureCardProps>) {
  return (
    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md border border-outline-variant/20">
      <div className={`w-12 h-12 rounded-full ${accentColor} flex items-center justify-center text-2xl`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-on-surface">{title}</h3>
      <p className="text-sm text-on-surface-variant leading-relaxed">{description}</p>
    </div>
  );
}

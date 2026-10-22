interface HeroSectionProps {
  readonly title: string;
  readonly subtitle: string;
  readonly ctaPrimary: string;
  readonly ctaSecondary: string;
  readonly mockupImage: string;
  readonly badges: readonly { icon: string; title: string; subtitle: string }[];
}

export default function HeroSection({ title, subtitle, ctaPrimary, ctaSecondary, mockupImage, badges }: Readonly<HeroSectionProps>) {
  return (
    <section className="relative w-full overflow-hidden px-margin md:px-space-xl py-space-xl lg:py-24">
      {/* Ambient Background Glows */}
      <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-primary-fixed/40 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-tertiary-fixed/60 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-space-xl relative z-10">
        {/* Left Column */}
        <div className="flex-1 flex flex-col items-start gap-space-md text-left">
          <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-primary-fixed/60 shadow-sm">
            <span className="text-sm font-bold tracking-tight">Disponible dès maintenant sur Android & Google Play</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl text-on-surface font-extrabold tracking-tight leading-tight">
            {title}
          </h1>
          
          <p className="text-base text-on-surface-variant max-w-xl leading-relaxed">
            {subtitle}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-space-md pt-space-xs w-full sm:w-auto">
            <a href="#download" className="flex items-center justify-center gap-space-sm h-[54px] px-space-lg rounded-full bg-primary-container text-on-primary shadow-md hover:bg-primary transition-all active:scale-95">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.793 12 3.61 22.186a2.38 2.38 0 0 1-.61-.914c-.167-.478-.256-1.01-.256-1.583V4.31c0-.573.089-1.105.256-1.583.153-.339.362-.647.61-.913zm11.3 11.3l2.453 2.453-11.83 6.83 9.377-9.283zm0-2.228L5.532 1.603l11.83 6.83-2.453 2.453zm1.127 1.114l3.193-1.844c1.026-.593 1.026-1.564 0-2.157l-3.193-1.844-2.229 2.228 2.229 2.617z"></path>
              </svg>
              <div className="flex flex-col text-left leading-none">
                <span className="text-xs uppercase tracking-wider opacity-90">Disponible sur Android 8.0+</span>
                <span className="font-bold">{ctaPrimary}</span>
              </div>
            </a>
            <a href="#features" className="flex items-center justify-center gap-space-xs h-[54px] px-space-lg rounded-full bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container-low transition-all">
              <span>{ctaSecondary}</span>
            </a>
          </div>
          
          {/* Social Proof */}
          <div className="flex flex-wrap items-center gap-space-md pt-space-xs text-on-surface-variant text-sm">
            <div className="flex items-center gap-1 text-primary">
              <span className="font-bold text-on-surface">4.9 / 5</span>
              <span>(120+ avis Google Play)</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
            <span>100% Gratuit au lancement</span>
          </div>
        </div>
        
        {/* Right Mockup Column */}
        <div className="flex-1 relative w-full flex justify-center items-center py-space-md">
          <div className="w-[340px] sm:w-[420px] lg:w-[460px] aspect-square rounded-full bg-gradient-to-tr from-primary-fixed-dim/40 via-surface-container to-tertiary-fixed/50 absolute"></div>
          
          <div className="relative z-10 w-[270px] sm:w-[320px] rounded-xl shadow-xl overflow-hidden bg-surface-container-lowest p-2">
            <img alt="Bidou app dashboard" className="w-full h-auto rounded-lg object-cover shadow-sm" src={mockupImage} />
          </div>
          
          {/* Floating Badges */}
          {badges.map((badge, index) => (
            <div 
              key={index}
              className={`absolute z-20 bg-surface-container-lowest/95 backdrop-blur-md px-space-md py-space-xs rounded-full shadow-md flex items-center gap-space-xs
                ${index === 0 ? '-top-3 left-2 sm:left-4' : ''}
                ${index === 1 ? 'bottom-12 -left-4 sm:left-2' : ''}
                ${index === 2 ? 'top-1/3 -right-2 sm:-right-4' : ''}
              `}
            >
              <div className="w-7 h-7 rounded-full bg-tertiary-fixed flex items-center justify-center text-xs">
                {badge.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-on-surface">{badge.title}</span>
                <span className="text-[11px] text-tertiary">{badge.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

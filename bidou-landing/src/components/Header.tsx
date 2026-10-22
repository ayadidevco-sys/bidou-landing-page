interface HeaderProps {
  readonly logo: string;
  readonly brandName: string;
  readonly navItems: readonly { label: string; href: string }[];
}

export default function Header({ logo, brandName, navItems }: Readonly<HeaderProps>) {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(41,35,31,0.06)]">
      <div className="h-20 w-full px-margin md:px-space-xl max-w-7xl mx-auto flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-sm">
          <img alt="Bidou logo" className="h-8 w-auto object-contain" src={logo} />
          <span className="text-2xl font-bold text-on-surface tracking-tight">{brandName}</span>
        </div>
        <nav className="hidden lg:flex items-center gap-space-md">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-bold text-sm text-on-surface-variant hover:text-on-surface transition-colors px-space-sm py-space-xs rounded-full"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#download"
          className="inline-flex items-center justify-center h-[46px] px-space-lg rounded-full bg-primary-container text-on-primary font-bold text-sm shadow-sm hover:opacity-95 active:scale-95 transition-all"
        >
          Télécharger sur Google Play
        </a>
      </div>
    </header>
  );
}

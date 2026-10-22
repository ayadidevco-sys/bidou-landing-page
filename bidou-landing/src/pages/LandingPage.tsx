import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import FeatureCard from '../components/FeatureCard';
import { navigationItems, heroData, statsData, featuresData, logoUrl } from '../data/mockData';

interface LandingPageProps {}

export default function LandingPage(_props: Readonly<LandingPageProps>) {
  return (
    <div className="w-full min-h-screen bg-background">
      <Header 
        logo={logoUrl}
        brandName="Bidou"
        navItems={navigationItems}
      />
      
      <main className="w-full pt-20">
        <HeroSection 
          title={heroData.title}
          subtitle={heroData.subtitle}
          ctaPrimary={heroData.ctaPrimary}
          ctaSecondary={heroData.ctaSecondary}
          mockupImage={heroData.mockupImage}
          badges={heroData.badges}
        />
        
        <StatsSection stats={statsData} />
        
        {/* Features Section */}
        <section id="features" className="w-full px-margin md:px-space-xl py-space-xl lg:py-24">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-space-xs">
              <span className="text-sm uppercase tracking-wider text-primary font-bold">Un quotidien simplifié</span>
              <h2 className="text-3xl font-bold text-on-surface">
                Tout le nécessaire pour comprendre et accompagner votre chiot
              </h2>
              <p className="text-sm text-on-surface-variant">
                Des fonctionnalités concrètes créées pour soulager la charge mentale des nouveaux maîtres sans complexité inutile.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
              {featuresData.map((feature, index) => (
                <FeatureCard 
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  accentColor={feature.accentColor}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="w-full px-margin md:px-space-xl py-space-xl lg:py-24 bg-gradient-to-br from-primary to-primary-container">
          <div className="max-w-4xl mx-auto text-center flex flex-col gap-space-lg items-center">
            <div className="w-16 h-16 rounded-full bg-on-primary/10 flex items-center justify-center text-4xl">
              🐕
            </div>
            <h2 className="text-4xl font-extrabold text-on-primary">
              Prêt à vivre la plus belle aventure avec votre chiot ?
            </h2>
            <p className="text-lg text-on-primary/90 max-w-2xl">
              Téléchargez Bidou gratuitement et commencez à accompagner votre compagnon avec bienveillance et confiance.
            </p>
            <a href="#download" className="flex items-center justify-center gap-space-sm h-14 px-8 rounded-full bg-surface text-primary font-bold shadow-lg hover:shadow-xl transition-all active:scale-95">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.793 12 3.61 22.186a2.38 2.38 0 0 1-.61-.914c-.167-.478-.256-1.01-.256-1.583V4.31c0-.573.089-1.105.256-1.583.153-.339.362-.647.61-.913zm11.3 11.3l2.453 2.453-11.83 6.83 9.377-9.283zm0-2.228L5.532 1.603l11.83 6.83-2.453 2.453zm1.127 1.114l3.193-1.844c1.026-.593 1.026-1.564 0-2.157l-3.193-1.844-2.229 2.228 2.229 2.617z"></path>
              </svg>
              Télécharger sur Google Play
            </a>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="w-full px-margin md:px-space-xl py-space-lg bg-surface-container-low border-t border-outline-variant/20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-space-md text-sm text-on-surface-variant">
            <div className="flex items-center gap-space-xs">
              <img alt="Bidou logo" className="h-6 w-auto" src={logoUrl} />
              <span className="font-bold text-on-surface">Bidou</span>
            </div>
            <p>© 2026 Bidou. L'application bienveillante de son quotidien.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

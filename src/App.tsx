import { Suspense, lazy } from 'react';
import Footer from './components/layout/Footer';

// Lazy load sections for better performance
const HeroSection = lazy(() => import('./components/sections/HeroSection/HeroSection'));
const DiferenciaisSection = lazy(() => import('./components/sections/DiferenciaisSection/DiferenciaisSection'));
const PortfolioSection = lazy(() => import('./components/sections/PortfolioSection/PortfolioSection'));
const MoldesSection = lazy(() => import('./components/sections/MoldesSection/MoldesSection'));
const GaseificadasSection = lazy(() => import('./components/sections/GaseificadasSection/GaseificadasSection'));
const PreformasSection = lazy(() => import('./components/sections/PreformasSection/PreformasSection'));
const ClientesSection = lazy(() => import('./components/sections/ClientesSection/ClientesSection'));
const PersonalizacaoSection = lazy(() => import('./components/sections/PersonalizacaoSection/PersonalizacaoSection'));
const FormSection = lazy(() => import('./components/sections/FormSection/FormSection'));
const CTAFinalSection = lazy(() => import('./components/sections/CTAFinalSection/CTAFinalSection'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-primary-purple border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-white text-lg">Carregando...</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<LoadingSpinner />}>
        {/* Hero Section - Dark Background (Section 1) */}
        <HeroSection />
        
        {/* Diferenciais Section - Light Background (Section 2) */}
        <DiferenciaisSection />
        
        {/* Portfolio Section - Dark Background (Section 3) */}
                <PortfolioSection />
        
        
        {/* Preformas Section - Light Background (Section 4) */}
        <PreformasSection />
        
        {/* Clientes Section - Dark Background (Section 5) */}
        <ClientesSection />
        
        {/* Personalização Section - Light Background (Section 6) */}
                <PersonalizacaoSection />

        {/* Moldes Section - Dark Background */}
        <MoldesSection />

        {/* Gaseificadas Section - Light Background */}
        <GaseificadasSection />
        
        {/* Form Section - Dark Background (Section 7) */}
        <FormSection />
        
        {/* CTA Final Section - Light Background (Section 8) */}
        <CTAFinalSection />
        
        {/* Footer - Dark Background */}
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

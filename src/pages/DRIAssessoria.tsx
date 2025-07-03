import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import DRIHeader from '@/components/layout/DRIHeader';
import DRIFooter from '@/components/layout/DRIFooter';
import DRIHero from '@/components/sections/DRIHero';
import DRIWhatsAppFloat from '@/components/ui/DRIWhatsAppFloat';
import LazySection from '@/components/ui/LazySection';

// Lazy load das seções não críticas
const DRIAbout = lazy(() => import('@/components/sections/DRIAbout'));
const DRIServices = lazy(() => import('@/components/sections/DRIServices'));
const DRIPlans = lazy(() => import('@/components/sections/DRIPlans'));
const DRITestimonials = lazy(() => import('@/components/sections/DRITestimonials'));
const DRILocation = lazy(() => import('@/components/sections/DRILocation'));
const DRIContact = lazy(() => import('@/components/sections/DRIContact'));

const LoadingFallback = () => (
  <div className="h-20 flex items-center justify-center">
    <div className="animate-pulse text-muted-foreground">Carregando...</div>
  </div>
);

const DRIAssessoria = () => {
  return (
    <>
      <Helmet>
        <title>D.R.I ASSESSORIA EMPRESARIAL - Seu Sucesso Nossa Prioridade Sempre</title>
        <meta name="description" content="Empresa há mais de 25 anos no mercado, especializada em Simples Nacional e MEI. Oferecemos serviços de contabilidade, recursos humanos, folha de pagamento e abertura de empresas em Embu das Artes - SP." />
        <meta name="keywords" content="contabilidade, simples nacional, MEI, micro empreendedor, recursos humanos, folha pagamento, abertura empresa, embu das artes, assessoria empresarial" />
        <meta name="author" content="D.R.I ASSESSORIA EMPRESARIAL" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="D.R.I ASSESSORIA EMPRESARIAL - Seu Sucesso Nossa Prioridade Sempre" />
        <meta property="og:description" content="Empresa há mais de 25 anos no mercado, especializada em Simples Nacional e MEI. Oferecemos serviços completos de contabilidade e assessoria empresarial." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="D.R.I ASSESSORIA EMPRESARIAL - Seu Sucesso Nossa Prioridade Sempre" />
        <meta name="twitter:description" content="Empresa há mais de 25 anos no mercado, especializada em Simples Nacional e MEI." />
        <meta name="twitter:image" content="/og-image.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AccountingService",
            "name": "D.R.I ASSESSORIA EMPRESARIAL",
            "description": "Empresa há mais de 25 anos no mercado, especializada em Simples Nacional e MEI",
            "url": "/",
            "telephone": "+55-11-91991-9022",
            "email": "DRICONTABIL238@GMAIL.COM",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "AVENIDA ELIAS YAZBEK 675 CONJ 01",
              "addressLocality": "EMBU DAS ARTES",
              "addressRegion": "SP",
              "postalCode": "06803-000",
              "addressCountry": "BR"
            },
            "areaServed": "São Paulo",
            "serviceType": ["Contabilidade", "Simples Nacional", "MEI", "Recursos Humanos", "Folha de Pagamento"],
            "slogan": "SEU SUCESSO NOSSA PRIORIDADE SEMPRE"
          })}
        </script>
      </Helmet>
      
      <div className="relative min-h-screen bg-background">
        {/* Header */}
        <DRIHeader />
        
        {/* Main Content */}
        <main className="relative">
          <section id="inicio">
            <DRIHero />
          </section>
          
          <section id="sobre">
            <LazySection fallback={<LoadingFallback />} threshold={0.2}>
              <Suspense fallback={<LoadingFallback />}>
                <DRIAbout />
              </Suspense>
            </LazySection>
          </section>
          
          <section id="servicos">
            <LazySection fallback={<LoadingFallback />} threshold={0.2}>
              <Suspense fallback={<LoadingFallback />}>
                <DRIServices />
              </Suspense>
            </LazySection>
          </section>
          
          <section id="planos">
            <LazySection fallback={<LoadingFallback />} threshold={0.2}>
              <Suspense fallback={<LoadingFallback />}>
                <DRIPlans />
              </Suspense>
            </LazySection>
          </section>
          
          <section id="depoimentos">
            <LazySection fallback={<LoadingFallback />} threshold={0.2}>
              <Suspense fallback={<LoadingFallback />}>
                <DRITestimonials />
              </Suspense>
            </LazySection>
          </section>
          
          <section id="localizacao">
            <LazySection fallback={<LoadingFallback />} threshold={0.2}>
              <Suspense fallback={<LoadingFallback />}>
                <DRILocation />
              </Suspense>
            </LazySection>
          </section>
          
          <section id="contato">
            <LazySection fallback={<LoadingFallback />} threshold={0.2}>
              <Suspense fallback={<LoadingFallback />}>
                <DRIContact />
              </Suspense>
            </LazySection>
          </section>
        </main>
        
        {/* WhatsApp Floating Button */}
        <DRIWhatsAppFloat />
        
        {/* Footer */}
        <DRIFooter />
      </div>
    </>
  );
};

export default DRIAssessoria;
import { ArrowRight, Clock, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const DRIHero = () => {
  const vantaRef = useRef<HTMLElement>(null);
  const vantaEffect = useRef<any>(null);

  const handleContactClick = () => {
    const element = document.querySelector('#contato');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511919919022?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20de%20contabilidade.', '_blank');
  };

  useEffect(() => {
    if (vantaRef.current && (window as any).VANTA) {
      vantaEffect.current = (window as any).VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x1fff,
        backgroundColor: 0x4a,
        points: 17.00,
        maxDistance: 33.00,
        spacing: 17.00
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <section 
      ref={vantaRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center px-4 py-2 bg-primary/10 text-white rounded-full text-sm font-medium mb-6"
            >
              <Award className="w-4 h-4 mr-2" />
              25 anos de experiência no mercado
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              D.R.I. ASSESSORIA
              <span className="block mt-2" style={{ color: '#476d98' }}>EMPRESARIAL</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-white mb-4 font-medium"
            >
              SEU SUCESSO NOSSA PRIORIDADE SEMPRE
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-white mb-8 leading-relaxed"
            >
              Especializada em Simples Nacional e MEI, prestando informação e direcionamento ao empresário há mais de 25 anos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 h-auto"
              >
                <img src="/lovable-uploads/cb022330-83fa-4f2f-8c4e-329817a37119.png" alt="WhatsApp" className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </Button>
              
              <Button
                onClick={handleContactClick}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4 h-auto"
              >
                Nossos Serviços
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Clock className="w-5 h-5 text-white mr-2" />
                  <span className="text-2xl font-bold text-white">25+</span>
                </div>
                <p className="text-sm text-white/80">Anos no mercado</p>
              </div>
              
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Users className="w-5 h-5 text-white mr-2" />
                  <span className="text-2xl font-bold text-white">1000+</span>
                </div>
                <p className="text-sm text-white/80">Clientes atendidos</p>
              </div>
              
              <div className="text-center lg:text-left col-span-2 lg:col-span-1">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Award className="w-5 h-5 text-white mr-2" />
                  <span className="text-2xl font-bold text-white">100%</span>
                </div>
                <p className="text-sm text-white/80">Dedicação</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-background rounded-2xl p-6 shadow-lg border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Simples Nacional</h3>
                  <p className="text-sm text-white/80">Especialização em enquadramento e gestão</p>
                </div>

                <div className="bg-background rounded-2xl p-6 shadow-lg border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">MEI</h3>
                  <p className="text-sm text-white/80">Apoio completo ao microempreendedor</p>
                </div>

                <div className="bg-background rounded-2xl p-6 shadow-lg border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Folha de Pagamento</h3>
                  <p className="text-sm text-white/80">Gestão completa de RH</p>
                </div>

                <div className="bg-background rounded-2xl p-6 shadow-lg border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Assessoria</h3>
                  <p className="text-sm text-white/80">Orientação estratégica empresarial</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DRIHero;
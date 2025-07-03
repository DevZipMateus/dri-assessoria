import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

const DRILocation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleDirectionsClick = () => {
    const address = "AVENIDA ELIAS YAZBEK 675 CONJ 01, EMBU DAS ARTES, SP, 06803-000";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  const locationInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Endereço",
      content: "AVENIDA ELIAS YAZBEK 675 CONJ 01",
      subtitle: "CEP 06803-000 - EMBU DAS ARTES - SP"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horário de Funcionamento",
      content: "Segunda a Sexta: 8h às 18h",
      subtitle: "Sábado: 8h às 12h"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      content: "(11) 91991-9022",
      subtitle: "WhatsApp e Ligações"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4 mr-2" />
            Nossa Localização
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Venha nos Visitar em 
            <span className="text-primary"> Embu das Artes</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nosso escritório está estrategicamente localizado em Embu das Artes, 
            oferecendo fácil acesso para empresários de toda a região.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {locationInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    <p className="text-foreground font-medium mb-1">
                      {info.content}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {info.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-4"
            >
              <Button
                onClick={handleDirectionsClick}
                size="lg"
                className="bg-primary hover:bg-accent text-primary-foreground w-full sm:w-auto"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Como Chegar
              </Button>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-card rounded-2xl p-4 border border-border shadow-lg">
              <div className="aspect-video bg-secondary/20 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.8447449089776!2d-46.858267625054676!3d-23.64876126723089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b6f9f0f9b1b%3A0x1234567890abcdef!2sAv.%20Elias%20Yazbek%2C%20675%20-%20Jardim%20Independencia%2C%20Embu%20das%20Artes%20-%20SP%2C%2006803-000!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização D.R.I ASSESSORIA EMPRESARIAL"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            {/* Location Card Overlay */}
            <div className="absolute top-8 left-8 bg-card/95 backdrop-blur-sm rounded-lg p-4 border border-border shadow-lg max-w-xs">
              <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 text-primary mr-2" />
                <span className="font-semibold text-foreground text-sm">D.R.I ASSESSORIA</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Av. Elias Yazbek, 675 - Conj 01<br />
                Embu das Artes - SP
              </p>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Atendimento Presencial ou Online
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Oferecemos flexibilidade total: você pode nos visitar em nosso escritório 
              ou ser atendido remotamente via WhatsApp, email ou videoconferência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open('https://wa.me/5511919919022?text=Gostaria%20de%20agendar%20uma%20visita%20ao%20escritório.', '_blank')}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Agendar Visita
              </Button>
              <Button
                onClick={() => window.open('https://wa.me/5511919919022?text=Gostaria%20de%20um%20atendimento%20online.', '_blank')}
                className="bg-primary hover:bg-accent text-primary-foreground"
              >
                Atendimento Online
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DRILocation;
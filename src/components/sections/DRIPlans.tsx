import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

const DRIPlans = () => {
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

  const handleContactClick = () => {
    window.open(
      'https://wa.me/5511919919022?text=Olá!%20Gostaria%20de%20conhecer%20os%20planos%20e%20serviços%20da%20D.R.I%20ASSESSORIA%20EMPRESARIAL.',
      '_blank'
    );
  };

  const plans = [
    {
      name: "MEI - Microempreendedor",
      description: "Ideal para microempreendedores individuais",
      price: "Consulte valores",
      icon: <Star className="w-6 h-6" />,
      popular: false,
      features: [
        "Declaração anual do MEI",
        "Emissão de DAS mensal",
        "Orientação tributária",
        "Suporte via WhatsApp",
        "Controle de faturamento",
        "Relatórios mensais"
      ]
    },
    {
      name: "Simples Nacional",
      description: "Para pequenas e médias empresas",
      price: "Consulte valores",
      icon: <Zap className="w-6 h-6" />,
      popular: true,
      features: [
        "Contabilidade completa",
        "Apuração de impostos",
        "Folha de pagamento",
        "Declarações obrigatórias",
        "Planejamento tributário",
        "Suporte prioritário",
        "Relatórios gerenciais",
        "Consultoria empresarial"
      ]
    },
    {
      name: "Assessoria Completa",
      description: "Solução completa para empresas em crescimento",
      price: "Consulte valores",
      icon: <Check className="w-6 h-6" />,
      popular: false,
      features: [
        "Todos os serviços anteriores",
        "Abertura de empresa",
        "Sistemas de gestão",
        "RH completo",
        "Consultoria estratégica",
        "Atendimento presencial",
        "Suporte 24/7",
        "Relatórios personalizados"
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Nossos Planos
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Escolha o Plano Ideal para 
            <span className="text-primary"> Sua Empresa</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções personalizadas para cada tipo de empresa. 
            Entre em contato para conhecer os valores e condições especiais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`relative bg-background rounded-2xl p-8 border-2 hover:shadow-xl transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary shadow-lg scale-105' 
                  : 'border-border hover:border-primary/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Mais Popular
                  </div>
                </div>
              )}

              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-6 ${
                plan.popular ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
              }`}>
                {plan.icon}
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>

              <p className="text-muted-foreground mb-4">
                {plan.description}
              </p>

              <div className="mb-6">
                <div className="text-2xl font-bold text-primary mb-1">
                  {plan.price}
                </div>
                <div className="text-sm text-muted-foreground">
                  Valores personalizados
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={handleContactClick}
                className={`w-full ${
                  plan.popular 
                    ? 'bg-primary hover:bg-accent text-primary-foreground' 
                    : 'bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary'
                }`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                Solicitar Orçamento
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-muted-foreground mb-6">
              Criamos soluções personalizadas para atender às necessidades específicas da sua empresa.
            </p>
            <Button
              onClick={handleContactClick}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Falar com Especialista
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DRIPlans;
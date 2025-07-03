import { motion } from 'framer-motion';
import { Award, Users, Clock, Target } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const DRIAbout = () => {
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

  const features = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "25 Anos de Experiência",
      description: "Mais de duas décadas prestando serviços de excelência no mercado contábil."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Especialização em MEI",
      description: "Expertise em Microempreendedor Individual e orientação empresarial completa."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Simples Nacional",
      description: "Especialistas em enquadramento e gestão do regime tributário Simples Nacional."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Foco no Cliente",
      description: "Seu sucesso é nossa prioridade sempre, com atendimento personalizado."
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Sobre a Empresa
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Tradição e Excelência em 
              <span className="text-primary"> Contabilidade</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A <strong>D.R.I ASSESSORIA EMPRESARIAL</strong> está há mais de 25 anos no mercado, 
              consolidando-se como uma referência em serviços contábeis e assessoria empresarial.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nossa especialização em <strong>Simples Nacional</strong> e <strong>MEI</strong> nos 
              permite oferecer orientação especializada e direcionamento estratégico para 
              empresários que buscam crescimento sustentável e conformidade fiscal.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-background rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Anos de Mercado</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary mb-1">1000+</div>
                <div className="text-sm text-muted-foreground">Clientes Atendidos</div>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-background p-6 rounded-xl border border-border hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">Nossa Missão</h3>
            <p className="text-lg text-primary font-semibold mb-4">
              "SEU SUCESSO NOSSA PRIORIDADE SEMPRE"
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Prestamos informação qualificada e direcionamento estratégico ao empresário, 
              proporcionando soluções completas em contabilidade, recursos humanos e 
              gestão empresarial com foco no crescimento sustentável do seu negócio.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DRIAbout;
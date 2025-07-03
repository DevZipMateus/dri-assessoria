import { motion } from 'framer-motion';
import { 
  FileText, 
  Users, 
  Calculator, 
  Building, 
  Briefcase, 
  BarChart3,
  FileCheck,
  Settings
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

const DRIServices = () => {
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

  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Área Fiscal",
      description: "Gestão completa das obrigações fiscais, apuração de impostos e planejamento tributário personalizado para sua empresa.",
      features: ["Apuração de impostos", "Declarações fiscais", "Planejamento tributário"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Recursos Humanos",
      description: "Administração completa de pessoal, desde admissões até demissões, com total conformidade legal.",
      features: ["Admissões e demissões", "Contratos de trabalho", "Gestão de benefícios"]
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Folha de Pagamento",
      description: "Processamento completo da folha de pagamento, cálculos trabalhistas e geração de guias.",
      features: ["Cálculo de salários", "13º salário e férias", "Geração de guias"]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Abertura de Empresas",
      description: "Processo completo de abertura, alteração e encerramento de empresas com agilidade e segurança.",
      features: ["Constituição de empresas", "Alterações contratuais", "Baixa de empresas"]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Simples Nacional e MEI",
      description: "Especialização em enquadramento e gestão do Simples Nacional e Microempreendedor Individual.",
      features: ["Enquadramento no Simples", "Gestão de MEI", "Orientação tributária"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Sistemas de Gestão",
      description: "Implementação e suporte de sistemas de gestão empresarial para otimizar seus processos.",
      features: ["ERP empresarial", "Controle financeiro", "Relatórios gerenciais"]
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Emissor de Notas Fiscais",
      description: "Sistema completo para emissão de notas fiscais eletrônicas com integração total.",
      features: ["NFe e NFCe", "Integração contábil", "Backup automático"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "eGestor",
      description: "Plataforma completa de gestão empresarial com funcionalidades integradas para seu negócio.",
      features: ["Gestão financeira", "Controle de estoque", "Relatórios em tempo real"]
    }
  ];

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
            <Briefcase className="w-4 h-4 mr-2" />
            Nossos Serviços
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Soluções Completas para 
            <span className="text-primary"> Sua Empresa</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços contábeis e empresariais, 
            com foco em qualidade, agilidade e total conformidade legal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20 group"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-1">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-xs text-muted-foreground flex items-center">
                    <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Precisa de Mais Informações?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nossa equipe está pronta para atender suas necessidades específicas. 
              Entre em contato e descobra como podemos ajudar sua empresa a crescer.
            </p>
            <Button
              onClick={handleContactClick}
              size="lg"
              className="bg-primary hover:bg-accent text-primary-foreground px-8 py-3"
            >
              Solicitar Orçamento
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DRIServices;
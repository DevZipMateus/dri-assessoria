import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const DRITestimonials = () => {
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

  // Depoimentos fictícios baseados no perfil da empresa
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Proprietária - Loja de Roupas",
      content: "A D.R.I tem sido fundamental para o sucesso da minha empresa. Com mais de 25 anos de experiência, eles realmente entendem as necessidades do pequeno empresário. O atendimento é excepcional!",
      rating: 5
    },
    {
      name: "João Santos",
      role: "MEI - Serviços de Informática",
      content: "Como MEI, sempre tive dificuldades com a parte contábil. A equipe da D.R.I me orientou desde o início e hoje tenho total tranquilidade. Recomendo para todos os microempreendedores!",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Sócia - Empresa de Consultoria",
      content: "Trabalho com a D.R.I há mais de 10 anos. Eles acompanharam todo o crescimento da nossa empresa. Profissionais competentes e sempre atualizados com as mudanças na legislação.",
      rating: 5
    },
    {
      name: "Carlos Oliveira",
      role: "Diretor - Empresa Familiar",
      content: "A assessoria da D.R.I foi decisiva para o enquadramento da nossa empresa no Simples Nacional. Isso representou uma economia significativa em impostos. Excelente trabalho!",
      rating: 5
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
            <Star className="w-4 h-4 mr-2" />
            Depoimentos
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            O que Nossos Clientes 
            <span className="text-primary"> Dizem Sobre Nós</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mais de 25 anos de experiência e centenas de empresários satisfeitos. 
            Veja alguns depoimentos dos nossos clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 relative"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary" />
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-yellow-400 fill-current mr-2" />
              <span className="text-2xl font-bold text-foreground">4.9/5.0</span>
            </div>
            <p className="text-muted-foreground">
              Média de satisfação baseada em centenas de avaliações de clientes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DRITestimonials;
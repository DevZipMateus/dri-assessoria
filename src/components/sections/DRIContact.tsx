import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const DRIContact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppSubmit = () => {
    const { name, email, phone, company, message } = formData;
    
    if (!name || !email || !message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, email e mensagem.",
        variant: "destructive"
      });
      return;
    }

    const whatsappMessage = `Olá! Meu nome é ${name}.
${company ? `Empresa: ${company}` : ''}
Email: ${email}
${phone ? `Telefone: ${phone}` : ''}

Mensagem: ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/5511919919022?text=${encodedMessage}`, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para continuar a conversa."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      content: "(11) 91991-9022",
      action: () => window.open('tel:+5511919919022', '_self'),
      color: "text-blue-600"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      content: "Atendimento Rápido",
      action: () => window.open('https://wa.me/5511919919022?text=Olá!%20Gostaria%20de%20mais%20informações.', '_blank'),
      color: "text-green-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "DRICONTABIL238@GMAIL.COM",
      action: () => window.open('mailto:DRICONTABIL238@GMAIL.COM', '_self'),
      color: "text-red-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horário",
      content: "Seg-Sex: 8h-18h | Sáb: 8h-12h",
      action: () => {},
      color: "text-orange-600"
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
            <MessageCircle className="w-4 h-4 mr-2" />
            Entre em Contato
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Fale Conosco e Transforme 
            <span className="text-primary"> Seu Negócio</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atender você! Entre em contato através de qualquer 
            um dos nossos canais ou envie uma mensagem diretamente pelo formulário.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-background border border-border rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Envie sua Mensagem
            </h3>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nome *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(11) 99999-9999"
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Empresa
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Nome da empresa"
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Conte-nos como podemos ajudar sua empresa..."
                  rows={4}
                  className="bg-background border-border"
                />
              </div>

              <Button
                onClick={handleWhatsAppSubmit}
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar via WhatsApp
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Ao enviar, você será redirecionado para o WhatsApp para continuar a conversa.
              </p>
            </div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  onClick={method.action}
                  className={`bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${
                    method.action ? 'cursor-pointer hover:border-primary/30' : ''
                  }`}
                >
                  <div className={`${method.color} mb-4`}>
                    {method.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {method.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {method.content}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="bg-background border border-border rounded-xl p-6"
            >
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Nosso Endereço
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    AVENIDA ELIAS YAZBEK 675 CONJ 01<br />
                    CEP 06803-000 - EMBU DAS ARTES - SP
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/10"
            >
              <h4 className="text-lg font-bold text-foreground mb-2">
                Atendimento Personalizado
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Cada empresa tem suas particularidades. Oferecemos soluções 
                personalizadas para atender suas necessidades específicas.
              </p>
              <Button
                onClick={() => window.open('https://wa.me/5511919919022?text=Gostaria%20de%20um%20atendimento%20personalizado.', '_blank')}
                className="w-full bg-primary hover:bg-accent text-primary-foreground"
              >
                Falar com Especialista
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DRIContact;
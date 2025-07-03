import { Mail, Phone, MapPin } from 'lucide-react';

const DRIFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">D.R.I ASSESSORIA EMPRESARIAL</h3>
            <p className="text-primary-foreground/80 mb-4">
              SEU SUCESSO NOSSA PRIORIDADE SEMPRE
            </p>
            <p className="text-primary-foreground/70 text-sm">
              Empresa há mais de 25 anos no mercado, especializada em Simples Nacional e MEI.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-primary-foreground/80" />
                <span className="text-primary-foreground/80 text-sm">(11) 91991-9022</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-primary-foreground/80" />
                <span className="text-primary-foreground/80 text-sm">DRICONTABIL238@GMAIL.COM</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-primary-foreground/80 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  AVENIDA ELIAS YAZBEK 675 CONJ 01<br />
                  CEP 06803-000 EMBU DAS ARTES - SP
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li>• Área Fiscal</li>
              <li>• Recursos Humanos</li>
              <li>• Folha de Pagamento</li>
              <li>• Abertura de Empresas</li>
              <li>• Simples Nacional e MEI</li>
              <li>• Sistemas de Gestão</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 D.R.I ASSESSORIA EMPRESARIAL. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default DRIFooter;
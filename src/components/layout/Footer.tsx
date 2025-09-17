import React from 'react';
import { Container } from '../ui/Container/Container';
import { Facebook, Instagram, Linkedin, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
                       <footer className="bg-gradient-footer text-white">
      <Container>
                <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
          {/* Company Info */}
          <div>
                        <img src="/images/logoinovapet/logo-site.png" alt="InovaPet Logo" className="w-56 mb-4" />
            <p className="text-gray-400 mb-4">
              Líder em embalagens PET, transformando o futuro da indústria com inovação e qualidade.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/inovapetoficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/inovapetoficial/?hl=pt-br" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://br.linkedin.com/company/inovapet" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#diferenciais" className="text-gray-400 hover:text-primary-purple transition-colors">Diferenciais</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-primary-purple transition-colors">Produtos</a></li>
              <li><a href="#preformas" className="text-gray-400 hover:text-primary-purple transition-colors">Preformas</a></li>
              <li><a href="#clientes" className="text-gray-400 hover:text-primary-purple transition-colors">Clientes</a></li>
              <li><a href="#personalizacao" className="text-gray-400 hover:text-primary-purple transition-colors">Personalização</a></li>
              <li><a href="#moldes" className="text-gray-400 hover:text-primary-purple transition-colors">Exclusivos</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary-purple transition-colors">Fale Conosco</a></li>
            </ul>
          </div>


          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-4">
              {/* Fábrica */}
              <li>
                <p className="font-semibold text-white mb-2">Fábrica</p>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-purple flex-shrink-0 mt-0.5" />
                  <p className="text-gray-400 text-sm">
                    Avenida Calombé, 3525 C quadra 13/ lote 30, Chácara - Rio Petrópolis
                  </p>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Phone className="w-5 h-5 text-primary-purple flex-shrink-0 mt-0.5" />
                  <p className="text-gray-400 text-sm">21 99452 7706</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
                <div className="py-6 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} InovaPet Embalagens. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacidade" className="text-gray-400 hover:text-primary-purple transition-colors">
                Política de Privacidade
              </a>
              <a href="#termos" className="text-gray-400 hover:text-primary-purple transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

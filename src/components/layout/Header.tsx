import React, { useState } from 'react';
import { Container } from '../ui/Container/Container';
import { Button } from '../ui/Button/Button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Diferenciais', href: '#diferenciais' },
  { name: 'Produtos', href: '#produtos' },
  { name: 'Preformas', href: '#preformas' },
  { name: 'Clientes', href: '#clientes' },
  { name: 'Personalização', href: '#personalizacao' },
  { name: 'Exclusivos', href: '#moldes' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-6">
      <Container>
        <div className="flex justify-between items-center">
          <a href="#">
                                    <img src="/images/logoinovapet/logo-site.png" alt="InovaPet Logo" className="w-48 md:w-80" />
          </a>
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-xs text-white/90 font-light hover:text-white transition-colors">
                  {link.name}
                </a>
              ))}
            </nav>
            <Button as="a" href="#contact" className="bg-gradient-primary">
              Fale Conosco
            </Button>
          </div>
          <div className="lg:hidden">
            <Button variant="ghost" className="text-white" onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-footer h-screen flex flex-col p-8">
              <div className="flex justify-between items-center mb-12">
                <img src="/images/logoinovapet/logo-site.png" alt="InovaPet Logo" className="w-48" />
                <Button variant="ghost" className="text-white" onClick={() => setIsMenuOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col items-center gap-8">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-xl text-white/90 font-light hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Button as="a" href="#contact" className="bg-gradient-primary mt-8" onClick={() => setIsMenuOpen(false)}>
                  Fale Conosco
                </Button>
              </nav>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;

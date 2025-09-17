import React from 'react';
import { Container } from '../../ui/Container/Container';
import { Button } from '../../ui/Button/Button';
import { Shield } from 'lucide-react';

const ModelosExclusivosSection: React.FC = () => {
  return (
    <section id="modelos-exclusivos" className="py-20 bg-exclusivas-bg bg-cover bg-center">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mt-2 mb-4">
            <span className="gradient-text">Soluções exclusivas</span>
            <br />
            para o seu negócio
          </h2>
          <p className="mt-4 text-lg text-gray-600">Tecnologia, design e resistência em cada detalhe das embalagens.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: Para Bebidas Especiais */}
          <div className="bg-primary-50/40 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-600 mb-4">Para Bebidas Especiais</h3>
            <img src="/images/exclusivas/gas.png" alt="Garrafas para bebidas com gás" className="mx-auto my-6 h-80 object-contain" />
            <div className="text-gray-600 mb-6 space-y-3">
              <p>
                Garrafa PET resistente à <strong>pressão</strong>, ideal para kombucha e bebidas <strong>gaseificadas</strong>.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm">
                <Shield className="w-5 h-5 text-primary-700" />
                <span>Segurança e qualidade premium garantidas até 3 Bar.</span>
              </div>
            </div>
            <Button variant="primary">Solicitar Orçamento</Button>
          </div>

          {/* Card 2: Desenvolvimento de Moldes */}
          <div className="bg-primary-50/40 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-600 mb-4">Desenvolvimento de Moldes</h3>
            <img src="/images/exclusivas/molde.png" alt="Garrafas âmbar personalizadas" className="mx-auto my-6 h-80 object-contain" />
            <p className="text-gray-600 mb-6">
              Modelos sob medida <strong>criados em 3D</strong>, com usinagem de <strong>alta precisão</strong>. Soluções exclusivas para marcas que buscam <strong>destaque real</strong>.
            </p>
            <Button variant="primary">Quero meu Projeto Exclusivo</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ModelosExclusivosSection;

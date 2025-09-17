import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../ui/Container/Container';
import { Button } from '../../ui/Button/Button';
import { openWhatsApp } from '../../../utils/whatsappUtils';
import { Sticker, PackageCheck, WandSparkles, Gauge } from 'lucide-react';
import { fadeInUp } from '../../../utils/animations';

const features = [
  {
    icon: Sticker,
    title: 'Rotulagem Automática',
    description: 'Garrafas já saem rotuladas e prontas para envase, economizando tempo e mão de obra.'
  },
  {
    icon: PackageCheck,
    title: 'Solução Turnkey Completa',
    description: 'Receba garrafa + tampa + rótulo em um único pedido.'
  },
  {
    icon: WandSparkles,
    title: 'Tipos de Rotulagem',
    description: 'Escolha entre diferentes estilos de rótulos conforme sua necessidade'
  },
  {
    icon: Gauge,
    title: 'Agilidade e Eficiência',
    description: 'Menos etapas internas, mais velocidade para colocar o produto no mercado.'
  }
];

const PersonalizacaoSection: React.FC = () => {
  return (
        <section id="personalizacao" className="py-8 md:py-12 relative bg-cover bg-center bg-no-repeat bg-personalizacao-bg">
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-primary-purple font-semibold text-sm uppercase tracking-wider">
            Personalização
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mt-2 mb-4">
            Sua <span className="gradient-text">Embalagem</span> do seu jeito
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Sua marca merece uma embalagem que se destaque.
          <br />Entregamos a solução completa: garrafa, tampa e rótulo personalizado.
          <br />Você só precisa envasar seu produto e acelerar seus resultados.
          </p>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative text-center"
          >
            <img 
              src="/images/personalizacao/marca.png" 
              alt="Marca Personalizada" 
              className="mx-auto"
            />
          </motion.div>

          {/* Features Grid & CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{ 
              visible: { 
                opacity: 1, 
                transition: { staggerChildren: 0.2 }
              }
            }}
            viewport={{ once: true }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={fadeInUp}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 h-full hover:scale-105 transition-transform duration-300">
                    <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center mt-4"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Processo Colaborativo
              </h3>
              <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Trabalhamos junto com você em cada etapa da personalização, 
              garantindo que sua embalagem esteja pronta para ganhar as 
              prateleiras com qualidade, praticidade e velocidade.
              </p>
              <Button size="lg" className="w-full sm:w-auto" onClick={() => openWhatsApp('5521994527706', 'Quero um projeto exclusivo para minha marca')}>
                Quero um projeto exclusivo para minha marca
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default PersonalizacaoSection;

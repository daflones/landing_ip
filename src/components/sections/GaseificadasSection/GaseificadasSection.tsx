import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../ui/Container/Container';
import { Button } from '../../ui/Button/Button';
import { openWhatsApp } from '../../../utils/whatsappUtils';
import { Check } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../../utils/animations';

const features = [
  { text: 'Suporta até 3 Bar de pressão' },
  { text: 'Transparência cristalina' },
  { text: 'Segurança e resistência garantidas' },
  { text: 'Design premium que valoriza sua bebida' }
];

const GaseificadasSection: React.FC = () => {
  return (
    <section id="gaseificadas" className="relative bg-gaseificadas-bg bg-cover bg-center pt-8 md:pt-12 pb-8 md:pb-10 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] items-center gap-8 md:gap-0">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative h-full flex items-center justify-center"
          >
            <img 
              src="/images/gaseificadas/garrafasgas.png" 
              alt="Garrafas para bebidas gaseificadas" 
              className="w-full h-auto max-w-6xl mx-auto"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10 px-6 md:px-0"
          >
            <motion.span variants={fadeInUp} className="text-sm font-bold uppercase tracking-wider text-gray-800">
              IDEAL PARA BEBIDAS COM GÁS
            </motion.span>
            <motion.h2 
              variants={fadeInUp} 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-4 leading-tight"
            >
              Garrafas para bebidas <br />
              <span className="gradient-text">Gaseificadas</span>
            </motion.h2>
            <motion.p 
              variants={fadeInUp} 
              className="text-base sm:text-lg text-gray-600 mb-8 max-w-lg"
            >
              Garrafas PET premium resistentes à pressão, ideais para kombuchá, sodas e bebidas artesanais.
            </motion.p>

            <motion.ul variants={fadeInUp} className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp}>
              <Button size="lg" variant="primary" onClick={() => openWhatsApp('5521994527706', 'Quero um orçamento de embalagens especiais para bebidas gaseificadas')}>
                Solicitar Orçamento
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default GaseificadasSection;

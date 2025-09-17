import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../ui/Container/Container';
import { Button } from '../../ui/Button/Button';
import { openWhatsApp } from '../../../utils/whatsappUtils';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { slideInFromLeft, slideInFromRight } from '../../../utils/animations';

const benefits = [
  'Redução de até 50% no espaço de armazenamento',
  'Transporte mais eficiente e econômico',
  'Qualidade consistente em toda produção',
  'Flexibilidade para diferentes formatos',
  'Menor pegada de carbono',
  'Rastreabilidade completa do lote'
];

const PreformasSection: React.FC = () => {
  return (
        <section 
      id="preformas"
      className="py-12 lg:py-16 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/preformas/preformas-bg.jpg')" }}
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-primary-purple font-semibold text-sm uppercase tracking-wider">
              Solução Completa
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6">
              Preformas PET de <span className="gradient-text">Alta Performance</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8">
              Fornecemos preformas de alta qualidade que garantem economia, 
              praticidade e excelência no processo de sopro das suas embalagens.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" onClick={() => openWhatsApp('5521994527706', 'Gostaria de solicitar o Catálogo de Preformas')}>
                Solicitar Catálogo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" size="lg" onClick={() => openWhatsApp('5521994527706', 'Gostaria de mais informações sobre as Preformas')}>
                Falar com Especialista
              </Button>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="/images/preformas/preformas.png" 
              alt="Preformas PET da InovaPet" 
              className="w-full h-auto object-contain"
            />

            {/* Stats Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute bottom-2 left-2 sm:-bottom-4 sm:-left-4 bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-4 sm:p-6 text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold gradient-text">15+</div>
              <div className="text-white">Modelos Disponíveis</div>
            </motion.div>

                      </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default PreformasSection;

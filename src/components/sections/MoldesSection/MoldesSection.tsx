import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../ui/Container/Container';
import { Button } from '../../ui/Button/Button';
import { openWhatsApp } from '../../../utils/whatsappUtils';
import { CheckCircle } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../../utils/animations';

const features = [
  { text: 'Modelos sob medida com design exclusivo' },
  { text: 'Desenvolvimento em 3D de alta precisão' },
  { text: 'Usinagem avançada com máxima qualidade' },
  { text: 'Soluções que fazem sua marca se destacar no mercado' }
];

const MoldesSection: React.FC = () => {
  return (
    <section id="moldes" className="relative bg-moldes-bg bg-cover bg-center py-16 md:py-2 overflow-hidden text-white">
      <Container>
        <div className="grid md:grid-cols-2 items-center">
          {/* Content Section */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10"
          >
            <motion.span variants={fadeInUp} className="text-sm font-semibold uppercase tracking-wider text-white/70">
              MOLDES
            </motion.span>
            <motion.h2 
              variants={fadeInUp} 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2 mb-4 leading-tight"
            >
              Moldes Exclusivos <br /> para <span className="gradient-text">Marcas Únicas</span>
            </motion.h2>
            <motion.p 
              variants={fadeInUp} 
              className="text-lg sm:text-xl text-white/80 mb-8 max-w-lg"
            >
              Projetos personalizados com tecnologia 3D e usinagem de alta precisão para dar vida às suas ideias.
            </motion.p>

            <motion.ul variants={staggerContainer} className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.li key={index} variants={fadeInUp} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary-400 flex-shrink-0" />
                  <span className="font-medium">{feature.text}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp}>
              <Button size="lg" variant="primary" onClick={() => openWhatsApp('5521994527706', 'Quero uma embalagem com um molde exclusivo')}>
                Quero meu Projeto Exclusivo
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative h-full flex items-center justify-center mt-12 md:mt-20 md:-ml-40"
          >
            <img 
              src="/images/moldes/molde.png" 
              alt="Molde exclusivo para garrafas PET" 
              className="w-full h-auto max-w-xl mx-auto"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default MoldesSection;

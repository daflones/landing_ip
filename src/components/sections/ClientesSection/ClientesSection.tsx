import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../ui/Container/Container';
import { fadeInUp } from '../../../utils/animations';
import { Button } from '../../ui/Button/Button';
import { openWhatsApp } from '../../../utils/whatsappUtils';
import { Download, ArrowRight } from 'lucide-react';


const logos = [
  { id: '1', name: 'Azulim', logo: '/images/clientes_secao/azulim.png' },
  { id: '2', name: 'Face', logo: '/images/clientes_secao/face.png' },
  { id: '3', name: 'Guaraplus', logo: '/images/clientes_secao/guaraplus-logo.png' },
  { id: '4', name: 'Hearst', logo: '/images/clientes_secao/hearst.png' },
  { id: '5', name: 'Maguary', logo: '/images/clientes_secao/maguary.png' },
  { id: '6', name: 'Outback', logo: '/images/clientes_secao/outback.png' },
  { id: '7', name: 'Bellavista', logo: '/images/clientes_secao/bellavista.png' },
  { id: '8', name: 'Hidro', logo: '/images/clientes_secao/hidro.png' },
  { id: '9', name: 'Nosso Chope', logo: '/images/clientes_secao/nossochope.png' },
  { id: '10', name: 'Risso', logo: '/images/clientes_secao/risso.png' },
  { id: '11', name: 'Teresopolis', logo: '/images/clientes_secao/teresopolis.png' },
  { id: '12', name: 'Trigo', logo: '/images/clientes_secao/trigo.png' }
];

const ClientesSection: React.FC = () => {
  return (
        <section id="clientes" className="py-12 md:py-20 relative bg-cover bg-center bg-no-repeat bg-clientes-bg">

      <Container className="relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-white font-semibold text-sm uppercase tracking-wider">
            CLIENTES
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            Marcas que confiam na <span className="gradient-text">InovaPet</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
          As maiores marcas do Brasil confiam na InovaPet para levar qualidade e inovação até seus consumidores.
          </p>
        </motion.div>

        
        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-10 items-center justify-items-center">
            {logos.map((logo) => (
              <motion.div
                key={logo.id}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="h-20 flex items-center justify-center opacity-70 transition-opacity"
              >
                <img src={logo.logo} alt={logo.name} className="max-h-full max-w-full object-contain" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-lg sm:text-xl text-white/80 mb-8">
            Sua empresa pode ser a próxima. Fale com um consultor hoje mesmo.
          </p>
          <Button variant="primary" size="lg" onClick={() => openWhatsApp('5521994527706', 'Quero conhecer as soluções da InovaPet')}>
            <Download className="mr-3 h-5 w-5" />
            Quero conhecer as soluções da InovaPet
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </motion.div>

      </Container>
    </section>
  );
};

export default ClientesSection;

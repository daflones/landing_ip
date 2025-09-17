import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../ui/Container/Container';
import { Button } from '../../ui/Button/Button';
import { openWhatsApp } from '../../../utils/whatsappUtils';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { fadeInUp } from '../../../utils/animations';

const benefits = [
  'Orçamento em menos de 24 horas',
  'Entrega garantida no prazo',
  'Suporte técnico especializado',
  'Garantia de qualidade'
];

const CTAFinalSection: React.FC = () => {
  return (
        <section className="section-padding bg-cta-bg bg-cover bg-center relative overflow-hidden">
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
                              <div className="bg-gradient-primary opacity-95 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Pronto para Transformar suas Embalagens?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Junte-se a mais de 10.000 empresas que já revolucionaram 
                suas embalagens com a InovaPet
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="group"
                  onClick={() => openWhatsApp('5521994527706', 'Gostaria de um orçamento')}
                >
                  Solicitar Orçamento Agora
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-500"
                  onClick={() => openWhatsApp('5521994527706', 'Gostaria de agendar uma reunião com um vendedor especialista')}
                >
                  Agendar Reunião com Especialista
                </Button>
              </div>

              <div className="mt-8 flex items-center justify-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm">Atendimento Online</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Resposta Imediata</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTAFinalSection;

import React from 'react';
import { motion } from 'framer-motion';
import { Box, Infinity, PenTool, TestTube, TrendingUp, Truck } from 'lucide-react';
import { Container } from '../../ui/Container/Container';
import { Button } from '../../ui/Button/Button';
import { openWhatsApp } from '../../../utils/whatsappUtils';
import { DiferencialCard } from './DiferencialCard';
import { staggerContainer } from '../../../utils/animations';

const diferenciais = [
  {
    id: '1',
    title: 'Solução Turnkey Completa',
    description: 'Receba a embalagem pronta: garrafa + tampa + rótulo. Você só precisa envasar e focar no crescimento do seu produto.',
    icon: Box,
    gradient: 'bg-gradient-to-br from-purple-500 to-purple-700',
    stats: [
      { label: 'Soluções Completas Entregues', value: '+3.000' },
      { label: 'de clientes que reduzem etapas de produção', value: '99%' }
    ]
  },
  {
    id: '2',
    title: 'Preformas Sob Medida',
    description: 'Nosso carro-chefe: preformas desenvolvidas com precisão, ideais para sopradores que exigem consistência e eficiência.',
    icon: TestTube,
    gradient: 'bg-gradient-to-br from-green-500 to-green-700',
    stats: [
      { label: 'de preformas produzidas/ano', value: '+5 milhões' },
      { label: 'compatibilidade com sopradores', value: '100%' }
    ]
  },
  {
    id: '3',
    title: 'Personalização Total',
    description: 'Escolha cores, formatos, logos e rótulos exclusivos. Cada detalhe pensado para transmitir a identidade da sua marca.',
    icon: PenTool,
    gradient: 'bg-gradient-to-br from-blue-500 to-blue-700',
    stats: [
      { label: 'projetos personalizados', value: '+500' },
      { label: 'Aprovação', value: '100%' }
    ]
  },
  {
    id: '4',
    title: 'Economia Garantida',
    description: 'Redução significativa nos custos de produção sem comprometer a qualidade. Melhor custo-benefício do mercado.',
    icon: TrendingUp,
    gradient: 'bg-gradient-to-br from-orange-500 to-orange-700',
    stats: [
      { label: 'no custo médio de produção', value: '-25%' },
      { label: 'aumento no ROI dos clientes', value: '+35%' }
    ]
  },
  {
    id: '5',
    title: 'Flexibilidade Máxima',
    description: 'Atendemos desde pequenos empreendedores até grandes indústrias, com produção rápida e lotes sob medida.',
    icon: Infinity,
    gradient: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
    stats: [
      { label: 'anos atendendo múltiplos segmentos', value: '8+' },
      { label: 'lotes produzidos sob demanda', value: '4.4k+' }
    ]
  },
  {
    id: '6',
    title: 'Cobertura Nacional',
    description: 'Logística eficiente: frota própria, transportadoras parceiras e retirada direta em nossa fábrica.',
    icon: Truck,
    gradient: 'bg-gradient-to-br from-teal-500 to-teal-700',
    stats: [
      { label: 'estados atendidos', value: '+18' },
      { label: 'de rastreabilidade nas entregas', value: '100%' }
    ]
  }
];

const DiferenciaisSection: React.FC = () => {
  return (
        <section 
      id="diferenciais"
      className="py-6 md:py-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/diferenciais/diferenciais-bg.jpg')" }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-primary-purple font-semibold text-sm uppercase tracking-wider">
            Por que escolher a InovaPet
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mt-2 mb-4">
            <span className="gradient-text">Soluções completas</span>
            <br />
            para todos os tipos de negócio
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-5xl mx-auto">
            Há mais de 8 anos no mercado, a InovaPet se consolidou como especialista em<br />
            embalagens PET sob medida. Investimos constantemente em tecnologia, personalização<br />
            e inovação, entregando soluções que unem qualidade premium e flexibilidade total.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {diferenciais.map((item, index) => (
            <DiferencialCard
              key={item.id}
              {...item}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button onClick={() => openWhatsApp('5521994527706', 'Gostaria de Solicitar uma Solução Completa para minha Empresa')} size="lg" variant="primary">
            Quero uma solução completa para minha empresa
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default DiferenciaisSection;

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../ui/Container/Container';
import { Button } from '../../ui/Button/Button';
import { downloadCatalog } from '../../../utils/downloadCatalog';
import { openWhatsApp } from '../../../utils/whatsappUtils';
import { Package, Users, Calendar, Truck, Headphones, FlaskConical, Factory } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import Header from '../../layout/Header';

const metrics = [
  { value: 20, suffix: ' milhões+', label: 'Embalagens Fabricadas', icon: Package, width: 'w-[320px]' },
  { value: 10000, suffix: '    mil+', label: 'Clientes Atendidos', icon: Users, width: 'w-[240px]' },
  { value: 18, suffix: '', label: 'Estados Atendidos', icon: Users, width: 'w-[200px]' },
  { value: 8, suffix: '+', label: 'Anos de Experiência', icon: Calendar, width: 'w-[360px]' }
];

const features = [
  { icon: '/images/icons/plastic.svg', text: 'Garrafas Personalizadas' },
  { icon: '/images/icons/drink.svg', text: 'Serviço de Rotulagem' },
  { icon: FlaskConical, text: 'Preformas: Ideal para sopradores' },
  { icon: Factory, text: 'Produção em larga escala ou pequenos lotes' },
  { icon: Truck, text: 'Entrega Rápida' },
  { icon: Headphones, text: 'Suporte contínuo' }
];

const clients = [
  { name: 'OUTBACK', logo: '/images/clients/outback.png' },
  { name: 'MAGUARY', logo: '/images/clients/maguary.png' },
  { name: 'GuaraPlus', logo: '/images/clients/guaraplus-logo.png' },
  { name: 'azulim', logo: '/images/clients/azulim.png' },
  { name: 'Face', logo: '/images/clients/face.png' },
  { name: 'Hearst', logo: '/images/clients/hearst.png' }
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-footer overflow-hidden">
      <Header />
      {/* Background Bottles Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero/bottles-bg.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-purple/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-lilac/10 rounded-full blur-3xl animate-float animation-delay-400" />
      </div>

      <Container className="relative z-10 h-full flex flex-col justify-center pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-start lg:items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            A embalagem perfeita
              <br />
              <span className="text-white">para o seu produto</span>
              <br />
              <span className="gradient-text">começa aqui</span>
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed">
              Garrafas, tampas, rótulos e preformas com tecnologia de 
              ponta para bebidas, alimentos, cosméticos, limpeza e fármacos.
              Atendemos desde pequenos empreendedores até grandes indústrias.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="lg" onClick={() => openWhatsApp('5521994527706', 'Gostaria de solicitar um Orçamento')}>
                Solicitar Orçamento
              </Button>
              <Button variant="outline-light" size="lg" onClick={downloadCatalog}>
              Baixar Catálogo Completo
              </Button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-white/80 justify-center lg:justify-start">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                                    {typeof feature.icon === 'string' ? (
                    <img src={feature.icon} alt={feature.text} className="w-6 h-6 brightness-0 invert" />
                  ) : (
                    <feature.icon className="w-5 h-5 text-primary-lilac" />
                  )}
                  <span className="text-sm">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Metrics Grid */}
          <div className="flex justify-center lg:justify-start mt-8 lg:mt-0">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 gap-4 lg:flex lg:flex-col lg:gap-4"
            >
              <div className="lg:flex lg:gap-4 grid grid-cols-2 col-span-2 gap-4">
                {metrics.slice(0, 2).map((metric, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl p-5 text-center min-h-[110px] hover:bg-white/12 transition-all duration-300 w-full lg:${metric.width}`}
                  >
                    <div className="w-8 h-8 mx-auto mb-3 text-blue-300 opacity-80">
                      <metric.icon className="w-full h-full" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-1 leading-none">
                      {metric.value}{metric.suffix}
                    </div>
                    <div className="text-xs text-white/60 leading-tight font-medium">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
              <div className="lg:flex lg:gap-4 grid grid-cols-2 col-span-2 gap-4">
                {metrics.slice(2, 4).map((metric, index) => (
                  <motion.div
                    key={index + 2}
                    variants={fadeInUp}
                    className={`bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl p-5 text-center min-h-[110px] hover:bg-white/12 transition-all duration-300 w-full lg:${metric.width}`}
                  >
                    <div className="w-8 h-8 mx-auto mb-3 text-blue-300 opacity-80">
                      <metric.icon className="w-full h-full" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-1 leading-none">
                      {metric.value}{metric.suffix}
                    </div>
                    <div className="text-xs text-white/60 leading-tight font-medium">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 pt-6"
        >
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            {clients.map((client, index) => (
              <div key={index} className={`${client.name === 'MAGUARY' ? 'h-15' : 'h-10'} flex items-center`}>
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className={`${client.name === 'MAGUARY' ? 'h-15' : 'h-10'} w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300`}
                  onLoad={() => console.log(`Logo loaded: ${client.name}`)}
                  onError={(e) => {
                    console.error(`Failed to load logo: ${client.name} - ${client.logo}`);
                    // Fallback to text if image doesn't load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-white/70 font-medium text-sm tracking-wide uppercase">${client.name}</span>`;
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroSection;

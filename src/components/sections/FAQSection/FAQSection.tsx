import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../../ui/Container/Container';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { fadeInUp } from '../../../utils/animations';

interface FAQItem {
  question: string;
  answer: string;
  keywords: string[];
}

const faqData: FAQItem[] = [
  {
    question: "Quais tipos de embalagens PET a InovaPet produz?",
    answer: "Produzimos uma linha completa de embalagens PET incluindo garrafas PET para bebidas, embalagens para cosméticos, produtos de limpeza, alimentos e farmacêuticos. Oferecemos desde pequenos frascos de 50ml até garrafas de 5 litros, todas personalizáveis conforme sua necessidade.",
    keywords: ["embalagens PET", "garrafas PET", "tipos embalagens"]
  },
  {
    question: "Como funciona o processo de personalização das garrafas PET?",
    answer: "Nosso processo de personalização inclui desenvolvimento 3D, criação de moldes exclusivos, rotulagem automática e acabamentos especiais. Trabalhamos junto com você desde o conceito até a produção final, garantindo que sua embalagem PET reflita perfeitamente sua marca.",
    keywords: ["garrafas PET personalizadas", "personalização embalagens", "moldes exclusivos"]
  },
  {
    question: "Qual a diferença entre preformas PET e garrafas PET prontas?",
    answer: "Preformas PET são semi-acabados que passam pelo processo de sopro para formar a garrafa final. Elas oferecem vantagens como redução de 50% no espaço de armazenamento, transporte mais eficiente e flexibilidade para diferentes formatos. Garrafas PET prontas já vêm no formato final, ideais para quem não possui equipamento de sopro.",
    keywords: ["preformas PET", "diferença preformas garrafas", "processo sopro"]
  },
  {
    question: "A InovaPet atende pequenas empresas ou apenas grandes indústrias?",
    answer: "Atendemos desde pequenos empreendedores até grandes indústrias. Temos soluções flexíveis que se adaptam ao seu volume de produção, seja para lotes pequenos de teste ou grandes volumes industriais. Nosso objetivo é democratizar o acesso a embalagens PET de qualidade.",
    keywords: ["pequenas empresas", "grandes indústrias", "volumes produção"]
  },
  {
    question: "Quais segmentos podem usar as embalagens PET da InovaPet?",
    answer: "Nossas embalagens PET atendem diversos segmentos: bebidas (água, sucos, refrigerantes), cosméticos (shampoos, cremes), produtos de limpeza (detergentes, amaciantes), alimentos (óleos, molhos) e farmacêuticos. Cada segmento tem especificações técnicas específicas que dominamos.",
    keywords: ["segmentos embalagens PET", "bebidas cosméticos", "aplicações PET"]
  },
  {
    question: "Como solicitar orçamento para embalagens PET personalizadas?",
    answer: "Para solicitar orçamento, preencha nosso formulário online com suas especificações ou entre em contato diretamente. Fornecemos orçamentos detalhados em até 24 horas, incluindo desenvolvimento, produção e prazos de entrega. Também oferecemos consultoria gratuita para escolha da melhor solução.",
    keywords: ["orçamento embalagens PET", "como solicitar", "consultoria gratuita"]
  },
  {
    question: "Qual o prazo de entrega das embalagens PET?",
    answer: "Os prazos variam conforme o tipo de produto: embalagens padrão têm entrega em 7-15 dias, produtos personalizados levam 20-30 dias (incluindo desenvolvimento de molde), e preformas PET são entregues em 10-20 dias. Oferecemos também serviço expresso para urgências.",
    keywords: ["prazo entrega", "tempo produção", "entrega expressa"]
  },
  {
    question: "As embalagens PET da InovaPet são sustentáveis?",
    answer: "Sim, todas nossas embalagens PET são 100% recicláveis e produzidas com foco na sustentabilidade. Utilizamos resinas PET de alta qualidade que podem ser recicladas múltiplas vezes. Também oferecemos consultoria para otimizar o design visando menor impacto ambiental.",
    keywords: ["embalagens sustentáveis", "PET reciclável", "sustentabilidade"]
  },
  {
    question: "A InovaPet oferece serviço de rotulagem nas embalagens?",
    answer: "Oferecemos serviço completo de rotulagem automática, incluindo desenvolvimento de arte, impressão e aplicação. Trabalhamos com diferentes tipos de rótulos: adesivos, sleeve, hot stamping e serigrafia. Sua embalagem sai pronta para envase, economizando tempo e recursos.",
    keywords: ["rotulagem embalagens", "serviço rotulagem", "tipos rótulos"]
  },
  {
    question: "Quais são os diferenciais da InovaPet no mercado de embalagens?",
    answer: "Nossos principais diferenciais incluem: mais de 8 anos de experiência, tecnologia de ponta, capacidade para projetos exclusivos, atendimento em 18 estados, produção flexível (pequenos e grandes lotes), consultoria especializada e compromisso com prazos. Somos referência em inovação e qualidade.",
    keywords: ["diferenciais InovaPet", "vantagens competitivas", "por que escolher"]
  }
];

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-purple font-semibold text-sm uppercase tracking-wider">
            Perguntas Frequentes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Tudo sobre <span className="gradient-text">Embalagens PET</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as principais dúvidas sobre embalagens PET, 
            garrafas personalizadas e preformas. Nossa expertise a seu serviço.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  aria-expanded={openItems.includes(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-primary-purple flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary-purple flex-shrink-0" />
                  )}
                </button>
                
                <AnimatePresence>
                  {openItems.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Não encontrou a resposta que procurava?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-primary text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
          >
            Fale com Nossos Especialistas
          </a>
        </motion.div>
      </Container>
    </section>
  );
};

export default FAQSection;

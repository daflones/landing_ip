import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Container } from '../../ui/Container/Container';
import { Button } from '../../ui/Button/Button';
import { Send, Phone, MapPin } from 'lucide-react';
import { fadeInUp } from '../../../utils/animations';
import { supabase } from '../../../lib/supabaseClient';

const formSchema = z.object({
  nome: z.string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome muito longo'),
  empresa: z.string()
    .min(1, 'Empresa é obrigatória'),
  email: z.string()
    .email('Email inválido'),
  telefone: z.string()
    .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Formato: (11) 99999-9999'),
  documento: z.string()
    .regex(/^(\d{11}|\d{14})$/, 'CPF ou CNPJ inválido'),
  segmento: z.enum(['bebidas', 'alimentos', 'cosmeticos', 'limpeza', 'outros']),
  aceiteTermos: z.boolean()
    .refine(val => val === true, 'Você deve aceitar os termos')
});

type FormData = z.infer<typeof formSchema>;

const FormSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    console.log('Form submitted with data:', data);
    setIsSubmitting(true);
    setErrorMessage('');
    setSubmitSuccess(false);

    try {
      console.log('Attempting to save to Supabase...');
      
      // Check for existing CNPJ first - only check if CNPJ is provided and not empty
      if (data.documento && data.documento.trim() !== '' && data.documento.replace(/\D/g, '').length >= 11) {
        console.log('Checking CNPJ:', data.documento);
        const { data: existingCnpj, error: cnpjError } = await supabase
          .from('clientes')
          .select('id')
          .eq('cnpj', data.documento)
          .limit(1);
          
        if (cnpjError) {
          console.error('Error checking CNPJ:', cnpjError);
        }
          
        if (existingCnpj && existingCnpj.length > 0) {
          console.log('CNPJ already exists');
          setErrorMessage('CNPJ já está cadastrado no sistema.');
          setIsSubmitting(false);
          return;
        }
        console.log('CNPJ is unique');
      }
      
      // Check for existing WhatsApp - check both whatsapp and telefone fields
      if (data.telefone && data.telefone.trim() !== '' && data.telefone.replace(/\D/g, '').length >= 10) {
        console.log('Checking WhatsApp/Telefone:', data.telefone);
        
        // Check both whatsapp and telefone columns for duplicates
        const { data: existingWhatsapp, error: whatsappError } = await supabase
          .from('clientes')
          .select('id, whatsapp, telefone')
          .or(`whatsapp.eq.${data.telefone},telefone.eq.${data.telefone}`)
          .limit(1);
          
        if (whatsappError) {
          console.error('Error checking WhatsApp/Telefone:', whatsappError);
        }
        
        console.log('WhatsApp/Telefone check result:', existingWhatsapp);
          
        if (existingWhatsapp && existingWhatsapp.length > 0) {
          console.log('WhatsApp/Telefone already exists:', existingWhatsapp);
          setErrorMessage('WhatsApp já está cadastrado no sistema.');
          setIsSubmitting(false);
          return;
        }
        console.log('WhatsApp/Telefone is unique');
      }
      
      console.log('No duplicates found, proceeding with insert...');
      
      // Prepare data for insertion, only include non-empty values
      const insertData: any = {
        nome_contato: data.nome,
        profile: '4042931c-0d14-46e8-8809-1a4d3ce99f25',
        formulario_site: true
      };

      // Only add fields if they have values
      if (data.empresa && data.empresa.trim() !== '') {
        insertData.nome_empresa = data.empresa;
      }
      if (data.email && data.email.trim() !== '') {
        insertData.email = data.email;
      }
      if (data.telefone && data.telefone.trim() !== '') {
        insertData.whatsapp = data.telefone;
      }
      if (data.documento && data.documento.trim() !== '') {
        insertData.cnpj = data.documento;
      }
      if (data.segmento && data.segmento.trim() !== '') {
        insertData.segmento_cliente = data.segmento;
      }

      console.log('Final insert data:', insertData);

      const { error } = await supabase
        .from('clientes')
        .insert(insertData);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('Data saved successfully to Supabase');
      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Check if it's a duplicate key error
      const errorMsg = (error as any)?.message || '';
      if (errorMsg.includes('duplicate key value violates unique constraint')) {
        if (errorMsg.includes('cnpj')) {
          setErrorMessage('CNPJ já está cadastrado no sistema.');
        } else if (errorMsg.includes('whatsapp')) {
          setErrorMessage('WhatsApp já está cadastrado no sistema.');
        } else {
          setErrorMessage('Dados já cadastrados no sistema.');
        }
      } else {
        setErrorMessage('Erro ao enviar formulário. Tente novamente.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return `(${numbers}`;
    if (numbers.length <= 6) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 10) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  return (
        <section 
      id="contact"
      className="py-6 md:py-10 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/form/form-bg.jpg')" }}
    >

      <Container className="relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <span className="text-white font-semibold text-sm uppercase tracking-wider">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-2">
            Solicite seu <span className="gradient-text">Orçamento</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Preencha o formulário e receba uma proposta personalizada 
            em até 24 horas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="glass-effect rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-white mb-3 text-lg">Fábrica</h4>
                  <div className="flex items-start gap-4 mb-3">
                    <MapPin className="w-5 h-5 text-primary-300 flex-shrink-0 mt-1" />
                    <p className="text-white/80">
                      Avenida Calombé, 3525 C quadra 13/ lote 30, Chácara - Rio Petrópolis
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-primary-300 flex-shrink-0 mt-1" />
                    <p className="text-white/80">21 99452 7706</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-white/60 text-sm mb-4">Horário de Atendimento</p>
                <p className="text-white font-medium">Segunda a Sexta: 8h às 18h</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glass-effect rounded-2xl p-8 h-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nome */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Nome Completo *
                  </label>
                  <input
                    {...register('nome')}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-primary-purple transition-colors"
                    placeholder="Seu nome"
                  />
                  {errors.nome && (
                    <p className="text-red-400 text-sm mt-1">{errors.nome.message}</p>
                  )}
                </div>

                {/* Empresa */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Empresa *
                  </label>
                  <input
                    {...register('empresa')}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-primary-purple transition-colors"
                    placeholder="Nome da empresa"
                  />
                  {errors.empresa && (
                    <p className="text-red-400 text-sm mt-1">{errors.empresa.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    E-mail *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-primary-purple transition-colors"
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Telefone */}
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-300 mb-2">
                    WhatsApp *
                  </label>
                  <input
                    {...register('telefone')}
                    onChange={(e) => {
                      e.target.value = formatPhone(e.target.value);
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-primary-purple transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                  {errors.telefone && (
                    <p className="text-red-400 text-sm mt-1">{errors.telefone.message}</p>
                  )}
                </div>

                {/* CPF/CNPJ */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    CPF/CNPJ *
                  </label>
                  <input
                    {...register('documento')}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-primary-purple transition-colors"
                    placeholder="000.000.000-00"
                  />
                  {errors.documento && (
                    <p className="text-red-400 text-sm mt-1">{errors.documento.message}</p>
                  )}
                </div>

                {/* Segmento */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Segmento *
                  </label>
                  <select
                    {...register('segmento')}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-primary-purple transition-colors"
                  >
                    <option value="" className="bg-gray-800">Selecione</option>
                    <option value="bebidas" className="bg-gray-800">Bebidas</option>
                    <option value="alimentos" className="bg-gray-800">Alimentos</option>
                    <option value="cosmeticos" className="bg-gray-800">Cosméticos</option>
                    <option value="limpeza" className="bg-gray-800">Limpeza</option>
                    <option value="outros" className="bg-gray-800">Outros</option>
                  </select>
                  {errors.segmento && (
                    <p className="text-red-400 text-sm mt-1">{errors.segmento.message}</p>
                  )}
                </div>


                {/* Termos */}
                <div className="md:col-span-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      {...register('aceiteTermos')}
                      type="checkbox"
                      className="w-5 h-5 rounded border-white/20 bg-white/10 text-primary-purple focus:ring-primary-purple"
                    />
                    <span className="text-white/80 text-sm">
                      Aceito receber comunicações da InovaPet e concordo com os termos de privacidade
                    </span>
                  </label>
                  {errors.aceiteTermos && (
                    <p className="text-red-400 text-sm mt-1">{errors.aceiteTermos.message}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                {errorMessage && (
                  <div className="mb-4 p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400">
                    {errorMessage}
                  </div>
                )}
                
                {submitSuccess && (
                  <div className="mb-4 p-4 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400">
                    Formulário enviado com sucesso! Em breve, nossa equipe entrará em contato com você.
                  </div>
                )}
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                >
                  {!isSubmitting && (
                    <>
                      Enviar Solicitação
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default FormSection;

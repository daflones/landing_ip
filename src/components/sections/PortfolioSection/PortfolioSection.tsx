import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../ui/Button/Button';
import { downloadCatalog } from '../../../utils/downloadCatalog';
import { openWhatsApp } from '../../../utils/whatsappUtils';
import { Container } from '../../ui/Container/Container';
import { PortfolioCarousel } from './PortfolioCarousel';
import { fadeInUp } from '../../../utils/animations';

const portfolioItems = [
  {
    id: 'gp102',
    title: '500ml Azeite',
    category: 'Alimentos',
    image: '/images/produtos/GP102.png',
    description: 'Capacidade: 500ml, Bocal: 28mm, Peso: 33g/38g, Cores: Cristal/Verde/Ambar, Fardo: 200 unidades.',
    capacity: '500ml',
    reference: 'GP102'
  },
  {
    id: 'gp003_farmaco',
    title: '1L Farmaco',
    category: 'Farmácia',
    image: '/images/produtos/GP003.png',
    description: 'Capacidade: 1000ml, Bocal: 28/1810, Peso: 33g/38g/48g, Cores: Cristal/Ambar/Branco, Fardo: 84 unidades.',
    capacity: '1000ml',
    reference: 'GP003'
  },
  {
    id: 'gp025_farmaco',
    title: '500ml Farmaco',
    category: 'Farmácia',
    image: '/images/produtos/GP025.png',
    description: 'Capacidade: 500ml, Bocal: 28/1810, Peso: 22g/25g/28g/33g, Cores: Cristal/Ambar/Branco, Fardo: 128 unidades.',
    capacity: '500ml',
    reference: 'GP025'
  },
  {
    id: 'gp115',
    title: '500ml Soro',
    category: 'Farmácia',
    image: '/images/produtos/GP115.png',
    description: 'Capacidade: 500ml, Bocal: 28mm, Peso: 21g, Cores: Cristal, Fardo: 306 unidades.',
    capacity: '500ml',
    reference: 'GP115'
  },
  {
    id: 'gp116',
    title: '1L Soro',
    category: 'Farmácia',
    image: '/images/produtos/GP116.png',
    description: 'Capacidade: 1000ml, Bocal: 28mm, Peso: 30g, Cores: Cristal, Fardo: 221 unidades.',
    capacity: '1000ml',
    reference: 'GP116'
  },
  {
    id: 'gp057c',
    title: '2L Quadrada Cosmético',
    category: 'Cosméticos',
    image: '/images/produtos/GP057C.png',
    description: 'Capacidade: 2000ml, Bocal: 38mm, Peso: 42g/48g, Cores: Cristal, Fardo: 55 unidades.',
    capacity: '2000ml',
    reference: 'GP057C'
  },
  {
    id: 'gp003_cosmetico',
    title: '1L Farmaco',
    category: 'Cosméticos',
    image: '/images/produtos/GP003.png',
    description: 'Capacidade: 1000ml, Bocal: 28/1810, Peso: 33g/38g/48g, Cores: Cristal/Branco/Ambar, Fardo: 84 unidades.',
    capacity: '1000ml',
    reference: 'GP003'
  },
  {
    id: 'gp025_cosmetico',
    title: '500ml Farmaco',
    category: 'Cosméticos',
    image: '/images/produtos/GP025.png',
    description: 'Capacidade: 500ml, Bocal: 28/1810, Peso: 22g/25g/28g/33g, Cores: Cristal/Ambar/Branco, Fardo: 120 unidades.',
    capacity: '500ml',
    reference: 'GP025'
  },
  {
    id: 'gp038_cosmetico',
    title: '500ml Cilíndrica',
    category: 'Cosméticos',
    image: '/images/produtos/GP038.png',
    description: 'Capacidade: 500ml, Bocal: 28/1810, Peso: 33g, Cores: Cristal/Branco/Ambar/Preto, Fardo: 88 unidades.',
    capacity: '500ml',
    reference: 'GP038'
  },
    {
    id: 'gp063',
    title: '1L Cilreto',
    category: 'Cosméticos',
    image: '/images/produtos/GP063.png',
    description: 'Capacidade: 1000ml, Bocal: 28/1810, Peso: 48g, Cores: Cristal/Branco/Verde/Ambar/Preto, Fardo: 100 unidades.',
    capacity: '1000ml',
    reference: 'GP063'
  },
  {
    id: 'gp114',
    title: '500ml Cilreto',
    category: 'Cosméticos',
    image: '/images/produtos/GP114.png',
    description: 'Capacidade: 500ml, Bocal: 28/1810, Peso: 33g, Cores: Cristal/Branco/Verde/Ambar, Fardo: 190 unidades.',
    capacity: '500ml',
    reference: 'GP114'
  },
  {
    id: 'gp054',
    title: '500ml Sabonete',
    category: 'Cosméticos',
    image: '/images/produtos/GP054.png',
    description: 'Capacidade: 500ml, Bocal: 28/1810, Peso: 25g/28g/33g, Cores: Cristal/Branco/Ambar, Fardo: 120 unidades.',
    capacity: '500ml',
    reference: 'GP054'
  },
  {
    id: 'gp091',
    title: '300ml Cibaulado',
    category: 'Cosméticos',
    image: '/images/produtos/GP091.png',
    description: 'Capacidade: 300ml, Bocal: 28/1810, Peso: 25g/28g/33g, Cores: Variadas, Fardo: 100 unidades.',
    capacity: '300ml',
    reference: 'GP091'
  },
  {
    id: 'gp113',
    title: '200ml Cilreto',
    category: 'Cosméticos',
    image: '/images/produtos/GP113.png',
    description: 'Capacidade: 200ml, Bocal: 24/410/415, Peso: 17g/21g, Cores: Variadas, Fardo: 165 unidades.',
    capacity: '200ml',
    reference: 'GP113'
  },
  {
    id: 'gp083',
    title: '250ml Sabonete',
    category: 'Cosméticos',
    image: '/images/produtos/GP083.png',
    description: 'Capacidade: 250ml, Bocal: 28/1810, Peso: 18g, Cores: Cristal, Fardo: 126 unidades.',
    capacity: '250ml',
    reference: 'GP083'
  },
  {
    id: 'gp015',
    title: '200ml Cilíndrica',
    category: 'Cosméticos',
    image: '/images/produtos/GP015.png',
    description: 'Capacidade: 200ml, Bocal: 28/1810, Peso: 18g, Cores: Cristal, Fardo: 81 unidades.',
    capacity: '200ml',
    reference: 'GP015'
  },
  {
    id: 'gp092',
    title: '120/140ml Oval',
    category: 'Cosméticos',
    image: '/images/produtos/GP092.png',
    description: 'Capacidade: 120/140ml, Bocal: 24/410/415, Peso: 17g/21g, Cores: Variadas, Fardo: 180 unidades.',
    capacity: '120/140ml',
    reference: 'GP092'
  },
  {
    id: 'gp075',
    title: 'Pote 100g',
    category: 'Cosméticos',
    image: '/images/produtos/GP075.png',
    description: 'Capacidade: 100ml, Bocal: 60mm, Peso: 16.5g, Cores: Variadas, Fardo: 144 unidades.',
    capacity: '100g',
    reference: 'GP075'
  },
  {
    id: 'gp076',
    title: 'Pote 150g',
    category: 'Cosméticos',
    image: '/images/produtos/GP076.png',
    description: 'Capacidade: 150ml, Bocal: 60mm, Peso: 16.5g, Cores: Variadas, Fardo: 144 unidades.',
    capacity: '150g',
    reference: 'GP076'
  },
  {
    id: 'gp077',
    title: 'Pote 250g',
    category: 'Cosméticos',
    image: '/images/produtos/GP077.png',
    description: 'Capacidade: 250ml, Bocal: 60mm, Peso: 16.5g, Cores: Variadas, Fardo: 112 unidades.',
    capacity: '250g',
    reference: 'GP077'
  },
  {
    id: 'gp086',
    title: '120ml Cibaulado',
    category: 'Cosméticos',
    image: '/images/produtos/GP086.png',
    description: 'Capacidade: 120ml, Bocal: 24/410/415, Peso: 13g/17g, Cores: Variadas, Fardo: 165 unidades.',
    capacity: '120ml',
    reference: 'GP086'
  },
  {
    id: 'gp080',
    title: '100ml Cilreto',
    category: 'Cosméticos',
    image: '/images/produtos/GP080.png',
    description: 'Capacidade: 100ml, Bocal: 24/410/415, Peso: 14g, Cores: Variadas, Fardo: 224 unidades.',
    capacity: '100ml',
    reference: 'GP080'
  },
  {
    id: 'gp032',
    title: '100ml Cilíndrica',
    category: 'Cosméticos',
    image: '/images/produtos/GP032.png',
    description: 'Capacidade: 100ml, Bocal: 28/1881, Peso: 15g, Cores: Cristal/Ambar, Fardo: 169 unidades.',
    capacity: '100ml',
    reference: 'GP032'
  },
  {
    id: 'gp079',
    title: '60ml Cibaulado',
    category: 'Cosméticos',
    image: '/images/produtos/GP079.png',
    description: 'Capacidade: 60ml, Bocal: 24/410, Peso: 13g/17g, Cores: Variadas, Fardo: 315 unidades.',
    capacity: '60ml',
    reference: 'GP079'
  },
  {
    id: 'gp008',
    title: '5L Quadrada Frisada',
    category: 'Limpeza',
    image: '/images/produtos/GP008.png',
    description: 'Capacidade: 5000ml, Bocal: 48mm, Peso: 81.5g/86g, Cores: Cristal/Branco/Verde, Fardo: 56 unidades.',
    capacity: '5000ml',
    reference: 'GP008'
  },
  {
    id: 'gp039_2l',
    title: '2L Frisada',
    category: 'Limpeza',
    image: '/images/produtos/GP039.png',
    description: 'Capacidade: 2000ml, Bocal: 28/1810, Peso: 33g/37g, Cores: Cristal/Branco/Verde, Fardo: 130 unidades.',
    capacity: '2000ml',
    reference: 'GP039'
  },
  {
    id: 'gp004',
    title: '2L Gotas',
    category: 'Limpeza',
    image: '/images/produtos/GP004.png',
    description: 'Capacidade: 2000ml, Bocal: 38mm/43mm, Peso: 32g/45g, Cores: Cristal/Natural, Fardo: 108 unidades.',
    capacity: '2000ml',
    reference: 'GP004'
  },
  {
    id: 'gp014',
    title: '2L Quadrada',
    category: 'Limpeza',
    image: '/images/produtos/GP014.png',
    description: 'Capacidade: 2000ml, Bocal: 48mm, Peso: 81.5g/86g, Cores: Cristal/Branco/Natural/Verde, Fardo: 110 unidades.',
    capacity: '2000ml',
    reference: 'GP014'
  },
  {
    id: 'gp039_2l_b',
    title: '2L Frisada',
    category: 'Limpeza',
    image: '/images/produtos/GP039.png',
    description: 'Capacidade: 2000ml, Bocal: 38mm, Peso: 40g, Cores: Cristal, Fardo: 130 unidades.',
    capacity: '2000ml',
    reference: 'GP039'
  },
  {
    id: 'gp053',
    title: '1L Alcool Standard',
    category: 'Limpeza',
    image: '/images/produtos/GP053.png',
    description: 'Capacidade: 1000ml, Bocal: 28mm, Peso: 30g/33g/38g, Cores: Branco/Natural, Fardo: 208 unidades.',
    capacity: '1000ml',
    reference: 'GP053'
  },
  {
    id: 'gp002',
    title: '1L Frisada',
    category: 'Limpeza',
    image: '/images/produtos/GP002.png',
    description: 'Capacidade: 1000ml, Bocal: 28/1810, 28/1881, Peso: 33g, Cores: Cristal/Branco/Verde, Fardo: 105 unidades.',
    capacity: '1000ml',
    reference: 'GP002'
  },
  {
    id: 'gp19',
    title: '1L Oval',
    category: 'Limpeza',
    image: '/images/produtos/GP019.png',
    description: 'Capacidade: 1000ml, Bocal: 28mm, Peso: 38g, Cores: Cristal, Fardo: 80 unidades.',
    capacity: '1000ml',
    reference: 'GP19'
  },
  {
    id: 'gp103',
    title: '500ml Multiuso',
    category: 'Limpeza',
    image: '/images/produtos/GP103.png',
    description: 'Capacidade: 500ml, Bocal: 28mm, Peso: 20.5g, Cores: Cristal/Cores, Fardo: 162 unidades.',
    capacity: '500ml',
    reference: 'GP103'
  },
  {
    id: 'gp026_limpeza',
    title: '500ml Gotas',
    category: 'Limpeza',
    image: '/images/produtos/GP026B.png',
    description: 'Capacidade: 500ml, Bocal: 28/1810, Peso: 18g, Cores: Cristal, Fardo: 64 unidades.',
    capacity: '500ml',
    reference: 'GP026'
  },
  {
    id: 'gp007',
    title: '500ml Frisada',
    category: 'Limpeza',
    image: '/images/produtos/GP007.png',
    description: 'Capacidade: 500ml, Bocal: 28/1810, Peso: 25g, Cores: Cristal, Fardo: 180 unidades.',
    capacity: '500ml',
    reference: 'GP007'
  },
  {
    id: 'gp020',
    title: '500ml Oval',
    category: 'Limpeza',
    image: '/images/produtos/GP020.png',
    description: 'Capacidade: 500ml, Bocal: 28mm, Peso: 25g, Cores: Cristal, Fardo: 64 unidades.',
    capacity: '500ml',
    reference: 'GP020'
  },
  {
    id: 'gp021',
    title: '500ml Detergente',
    category: 'Limpeza',
    image: '/images/produtos/GP021.png',
    description: 'Capacidade: 500ml, Bocal: 28mm, Peso: 15g, Cores: Cristal/Natural, Fardo: 200 unidades.',
    capacity: '500ml',
    reference: 'GP021'
  },
  {
    id: 'gp012',
    title: '1L Quadrada',
    category: 'Bebidas Sucos',
    image: '/images/produtos/GP012.png',
    description: 'Capacidade: 1000ml, Bocal: 38mm, Peso: 28g/33g/40g, Cores: Cristal, Fardo: 100 unidades.',
    capacity: '1000ml',
    reference: 'GP012'
  },
  {
    id: 'gp028',
    title: '1L Cilíndrica',
    category: 'Bebidas Sucos',
    image: '/images/produtos/GP028.png',
    description: 'Capacidade: 1000ml, Bocal: 38mm, Peso: 28g/33g, Cores: Cristal, Fardo: 100 unidades.',
    capacity: '1000ml',
    reference: 'GP028'
  },
  {
    id: 'gp006',
    title: '500ml Quadrada',
    category: 'Bebidas Sucos',
    image: '/images/produtos/GP006.png',
    description: 'Capacidade: 500ml, Bocal: 38mm, Peso: 19g/24g/28g/33g, Cores: Cristal, Fardo: 100 unidades.',
    capacity: '500ml',
    reference: 'GP006'
  },
  {
    id: 'gp038',
    title: '1L Aditivo',
    category: 'Farmácia',
    image: '/images/produtos/GP038B.png',
    description: 'Capacidade: 1000ml, Bocal: 28mm, Peso: 38g, Cores: Cristal, Fardo: 96 unidades.',
    capacity: '1000ml',
    reference: 'GP038'
  },
  {
    id: 'gp011',
    title: '300ml Quadrada',
    category: 'Bebidas Sucos',
    image: '/images/produtos/GP011.png',
    description: 'Capacidade: 300ml, Bocal: 38mm, Peso: 17g/19g/24g/28g/33g, Cores: Cristal, Fardo: 120 unidades.',
    capacity: '300ml',
    reference: 'GP011'
  },
  {
    id: 'gp026',
    title: '500ml Frisada',
    category: 'Bebidas Sucos',
    image: '/images/produtos/GP026.png',
    description: 'Capacidade: 500ml, Bocal: 38mm, Peso: 19g, Cores: Cristal, Fardo: 180 unidades.',
    capacity: '500ml',
    reference: 'GP026'
  },
  {
    id: 'gp023',
    title: '400ml Quadrada',
    category: 'Bebidas Sucos',
    image: '/images/produtos/GP023.png',
    description: 'Capacidade: 400ml, Bocal: 38mm, Peso: 17g/19g, Cores: Cristal, Fardo: 100 unidades.',
    capacity: '400ml',
    reference: 'GP023'
  },
  {
    id: 'gp035',
    title: '250ml Cilíndrica',
    category: 'Bebidas Sucos',
    image: '/images/produtos/GP035.png',
    description: 'Capacidade: 250ml, Bocal: 38mm, Peso: 17g/19g, Cores: Cristal, Fardo: 126 unidades.',
    capacity: '250ml',
    reference: 'GP035'
  },
  {
    id: 'gp031',
    title: '300ml Cilíndrica Lisa Alta',
    category: 'Bebidas Sucos',
    image: '/images/produtos/GP031.png',
    description: 'Capacidade: 300ml, Bocal: 38mm, Peso: 17g/19g, Cores: Cristal, Fardo: 100 unidades.',
    capacity: '300ml',
    reference: 'GP031'
  },
  {
    id: 'gp005',
    title: '300ml Quadrada Baixa',
    category: 'Bebidas Sucos',
    image: '/images/produtos/GP005.png',
    description: 'Capacidade: 300ml, Bocal: 38mm, Peso: 19g/24g/28g/33g, Cores: Cristal/Azul, Fardo: 90 unidades.',
    capacity: '300ml',
    reference: 'GP005'
  },
  {
    id: 'gp047',
    title: '1L Frisada',
    category: 'Bebidas Sucos',
    image: '/images/produtos/GP047.png',
    description: 'Capacidade: 1000ml, Bocal: 28mm, Peso: 30g/33g/38g, Cores: Cristal, Fardo: 208 unidades.',
    capacity: '1000ml',
    reference: 'GP047'
  },
  {
    id: 'gp027',
    title: '300ml Frisada',
    category: 'Bebidas Sucos',
    image: '/images/produtos/GP027.png',
    description: 'Capacidade: 300ml, Bocal: 28mm, Peso: 13,5g/15g, Cores: Cristal, Fardo: 100 unidades.',
    capacity: '300ml',
    reference: 'GP027'
  },
  {
    id: 'gp040p',
    title: '2L Cilíndrica',
    category: 'Bebidas Gaseificadas',
    image: '/images/produtos/GP040P.png',
    description: 'Capacidade: 2000ml, Bocal: 28mm, Peso: 42g/48g, Cores: Cristal/Ambar/Verde, Fardo: 140 unidades.',
    capacity: '2000ml',
    reference: 'GP040P'
  },
  {
    id: 'gp55',
    title: '1L Growler',
    category: 'Bebidas Gaseificadas',
    image: '/images/produtos/GP55.png',
    description: 'Capacidade: 1000ml, Bocal: 28mm, Peso: 33g/38g/48g, Cores: Cristal/Ambar/Verde, Fardo: 40 unidades.',
    capacity: '1000ml',
    reference: 'GP55'
  },
  {
    id: 'gp074c',
    title: '600ml Cerveja Champ',
    category: 'Bebidas Gaseificadas',
    image: '/images/produtos/GP074C.png',
    description: 'Capacidade: 600ml, Bocal: 28mm, Peso: 33g/40g, Cores: Cristal/Ambar/Verde, Fardo: 120 unidades.',
    capacity: '600ml',
    reference: 'GP074C'
  },
  {
    id: 'gp074p',
    title: '600ml Cerveja Peta',
    category: 'Bebidas Gaseificadas',
    image: '/images/produtos/GP074P.png',
    description: 'Capacidade: 600ml, Bocal: 28mm, Peso: 33g/40g, Cores: Cristal/Ambar/Verde, Fardo: 120 unidades.',
    capacity: '600ml',
    reference: 'GP074P'
  },
  {
    id: 'gp018g',
    title: '500ml Cilíndrica',
    category: 'Bebidas Gaseificadas',
    image: '/images/produtos/GP018G.png',
    description: 'Capacidade: 500ml, Bocal: 28mm, Peso: 25g/28g/33g, Cores: Cristal, Fardo: 100 unidades.',
    capacity: '500ml',
    reference: 'GP018G'
  },
  {
    id: 'gp016g',
    title: '300ml Cilíndrica Baixa',
    category: 'Bebidas Gaseificadas',
    image: '/images/produtos/GP016G.png',
    description: 'Capacidade: 300ml, Bocal: 28mm, Peso: 22g/25g/29g, Cores: Cristal, Fardo: 88 unidades.',
    capacity: '300ml',
    reference: 'GP016G'
  },
  {
    id: 'gp046',
    title: '300ml Ice',
    category: 'Bebidas Gaseificadas',
    image: '/images/produtos/GP046.png',
    description: 'Capacidade: 300ml, Bocal: 28mm, Peso: 15g/21g, Cores: Cristal/Ambar/Verde, Fardo: 160 unidades.',
    capacity: '300ml',
    reference: 'GP046'
  },
  {
    id: 'gp096',
    title: '300ml Cilbala',
    category: 'Bebidas Gaseificadas',
    image: '/images/produtos/GP096.png',
    description: 'Capacidade: 300ml, Bocal: 28mm, Peso: 15g/21g, Cores: Cristal, Fardo: 171 unidades.',
    capacity: '300ml',
    reference: 'GP096'
  },
  {
    id: 'gp097',
    title: '350ml Cilbaba',
    category: 'Bebidas Gaseificadas',
    image: '/images/produtos/GP097.png',
    description: 'Capacidade: 350ml, Bocal: 28mm, Peso: 21g, Cores: Cristal, Fardo: 171 unidades.',
    capacity: '350ml',
    reference: 'GP097'
  },
  {
    id: 'gp124',
    title: '500ml Cilbala',
    category: 'Bebidas Gaseificadas',
    image: '/images/produtos/GP124.png',
    description: 'Capacidade: 500ml, Bocal: 28mm, Peso: 30g/33g, Cores: Cristal, Fardo: 88 unidades.',
    capacity: '500ml',
    reference: 'GP124'
  },
  {
    id: 'gp098',
    title: '1L Cilbala',
    category: 'Bebidas Gaseificadas',
    image: '/images/produtos/GP098.png',
    description: 'Capacidade: 1000ml, Bocal: 28mm, Peso: 30g/33g, Cores: Cristal, Fardo: 208 unidades.',
    capacity: '1000ml',
    reference: 'GP098'
  },
  {
    id: 'gp071',
    title: '500ml Água Peta',
    category: 'Bebidas Gaseificadas',
    image: '/images/produtos/GP071.png',
    description: 'Capacidade: 500ml, Bocal: 28mm, Peso: 20.5g, Cores: Cristal, Fardo: 180 unidades.',
    capacity: '500ml',
    reference: 'GP071'
  },
  {
    id: 'gp048',
    title: '1.5L Inova Champ',
    category: 'Bebidas Alcoólicas',
    image: '/images/produtos/GP048.png',
    description: 'Capacidade: 1500ml, Bocal: 28mm, Peso: 42g/48g, Cores: Cristal/Ambar/Verde, Fardo: 154 unidades.',
    capacity: '1500ml',
    reference: 'GP048'
  },
  {
    id: 'gp043c',
    title: '1L Inova Champ',
    category: 'Bebidas Alcoólicas',
    image: '/images/produtos/GP043C.png',
    description: 'Capacidade: 1000ml, Bocal: 28mm, Peso: 42g/48g, Cores: Cristal, Fardo: 208 unidades.',
    capacity: '1000ml',
    reference: 'GP043C'
  },
  {
    id: 'gp043p',
    title: '1L Inova Peta',
    category: 'Bebidas Alcoólicas',
    image: '/images/produtos/GP043P.png',
    description: 'Capacidade: 1000ml, Bocal: 28mm, Peso: 42g/48g, Cores: Cristal/Ambar/Verde, Fardo: 208 unidades.',
    capacity: '1000ml',
    reference: 'GP043P'
  },
  {
    id: 'gp001',
    title: '1L Inova Champ',
    category: 'Bebidas Alcoólicas',
    image: '/images/produtos/GP001.png',
    description: 'Capacidade: 1000ml, Bocal: 28/1810, Peso: 33g/37g, Cores: Cristal/Amber/Verde, Fardo: 208 unidades.',
    capacity: '1000ml',
    reference: 'GP001'
  },
  {
    id: 'gp042p',
    title: '900ml Inova Peta',
    category: 'Bebidas Alcoólicas',
    image: '/images/produtos/GP042P.png',
    description: 'Capacidade: 900ml, Bocal: 28mm, Peso: 33g/38g/42g/48g, Cores: Cristal/Ambar/Verde, Fardo: 208 unidades.',
    capacity: '900ml',
    reference: 'GP042P'
  },
  {
    id: 'gp073',
    title: '500ml Corote',
    category: 'Bebidas Alcoólicas',
    image: '/images/produtos/GP073.png',
    description: 'Capacidade: 500ml, Bocal: 28mm, Peso: 15g, Cores: Cristal, Fardo: 105 unidades.',
    capacity: '500ml',
    reference: 'GP073'
  },
  {
    id: 'gp022',
    title: '100ml Quadrada',
    category: 'Alimentos',
    image: '/images/produtos/GP022.png',
    description: 'Capacidade: 100ml, Bocal: 28mm/38mm, Peso: 13g/15g/19g, Cores: Cristal, Fardo: 168 unidades.',
    capacity: '100ml',
    reference: 'GP022'
  },
  {
    id: 'gpo',
    title: '70ml Cilíndrica',
    category: 'Alimentos',
    image: '/images/produtos/GP0.png',
    description: 'Capacidade: 70ml, Bocal: 38mm, Peso: 13g/20g, Cores: Cristal, Fardo: 195 unidades.',
    capacity: '70ml',
    reference: 'GPO'
  },
  {
    id: 'gp033_shots',
    title: '60ml Quadrada',
    category: 'Alimentos',
    image: '/images/produtos/GP033.png',
    description: 'Capacidade: 60ml, Bocal: 26mm, Peso: 10g/13g, Cores: Cristal, Fardo: 255 unidades.',
    capacity: '60ml',
    reference: 'GP033'
  },
  {
    id: 'gp010',
    title: '200ml Quadrada',
    category: 'Alimentos',
    image: '/images/produtos/GP010.png',
    description: 'Capacidade: 200ml, Bocal: 38mm, Peso: 17g, Cores: Cristal, Fardo: 143 unidades.',
    capacity: '200ml',
    reference: 'GP010'
  },
  {
    id: 'gp001_limpeza',
    title: '1L Gotas',
    category: 'Limpeza',
    image: '/images/produtos/GP001B.png',
    description: 'Capacidade: 1000ml, Bocal: 28mm, Peso: 33g/37g, Cores: Cristal, Fardo: 80 unidades.',
    capacity: '1000ml',
    reference: 'GP001'
  },
  {
    id: 'gp028_cosmeticos',
    title: '1L Cilíndrica',
    category: 'Cosméticos',
    image: '/images/produtos/GP028.png',
    description: 'Capacidade: 1000ml, Bocal: 28mm, Peso: 23g/33g, Cores: Cristal/Branco/Ambar, Fardo: 104 unidades.',
    capacity: '1000ml',
    reference: 'GP028'
  },
  {
    id: 'gp038_sucos',
    title: '500ml Cilíndrica',
    category: 'Bebidas Sucos',
    image: '/images/produtos/GP038.png',
    description: 'Capacidade: 500ml, Bocal: 28mm, Peso: 28g/33g, Cores: Cristal, Fardo: 100 unidades.',
    capacity: '500ml',
    reference: 'GP038'
  },
  {
    id: 'gp071_sucos',
    title: '500ml Água',
    category: 'Bebidas Sucos',
    image: '/images/produtos/GP071.png',
    description: 'Capacidade: 500ml, Bocal: 28mm, Peso: 15g, Cores: Cristal/Azul, Fardo: 180 unidades.',
    capacity: '500ml',
    reference: 'GP071'
  },
  {
    id: 'gp022_shots',
    title: '100ml Quadrada',
    category: 'Bebidas Shots',
    image: '/images/produtos/GP022.png',
    description: 'Capacidade: 100ml, Bocal: 28mm/38mm, Peso: 13g/15g/19g, Cores: Cristal, Fardo: 168 unidades.',
    capacity: '100ml',
    reference: 'GP022'
  },
  {
    id: 'gpo_shots',
    title: '70ml Cilíndrica',
    category: 'Bebidas Shots',
    image: '/images/produtos/GP0.png',
    description: 'Capacidade: 70ml, Bocal: 38mm, Peso: 13g/20g, Cores: Cristal, Fardo: 195 unidades.',
    capacity: '70ml',
    reference: 'GPO'
  },
  {
    id: 'gp033_alimentos',
    title: '60ml Quadrada',
    category: 'Bebidas Shots',
    image: '/images/produtos/GP033.png',
    description: 'Capacidade: 60ml, Bocal: 26mm, Peso: 10g/13g, Cores: Cristal, Fardo: 255 unidades.',
    capacity: '60ml',
    reference: 'GP033'
  },
  {
    id: 'gp010_shots',
    title: '200ml Quadrada',
    category: 'Bebidas Shots',
    image: '/images/produtos/GP010.png',
    description: 'Capacidade: 200ml, Bocal: 38mm, Peso: 17g, Cores: Cristal, Fardo: 143 unidades.',
    capacity: '200ml',
    reference: 'GP010'
  },
  {
    id: 'gp033_reduzido',
    title: '60ml Quadrada (reduzido)',
    category: 'Bebidas Shots',
    image: '/images/produtos/GP033_reduzido.png',
    description: 'Capacidade: 60ml, Bocal: 26mm (reduzido), Peso: 10g, Cores: Cristal, Fardo: 255 unidades.',
    capacity: '60ml',
    reference: 'GP033'
  }
];

const categories = ['Todos', 'Bebidas Sucos', 'Bebidas Gaseificadas', 'Bebidas Alcoólicas', 'Bebidas Shots', 'Alimentos', 'Farmácia', 'Cosméticos', 'Limpeza'];

const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredItems = selectedCategory === 'Todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
        <section
      id="produtos"
      className="py-8 md:py-12 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/portfolio/portfolio-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-dark opacity-10" />
      <Container className="relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="text-white font-semibold text-sm uppercase tracking-wider">
            Nosso Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
          Embalagens PET para<span className="gradient-text"> Diferentes Mercados</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Da água mineral aos cosméticos premium, nossas embalagens PET são desenvolvidas 
            com tecnologia de ponta para atender diversos segmentos
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-4 mb-6"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm sm:px-6 sm:py-2 sm:text-base rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-primary text-white shadow-lg scale-105'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <PortfolioCarousel items={filteredItems} />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button onClick={downloadCatalog} size="lg" variant="primary" className="w-full sm:w-auto">
            Baixar Catálogo Completo
          </Button>
                    <Button onClick={() => openWhatsApp('5521994527706', 'Gostaria de mais informações sobre as embalagens')} size="lg" variant="secondary-outline" className="mt-4 sm:mt-0 sm:ml-4 w-full sm:w-auto">
            Falar com um Especialista
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default PortfolioSection;

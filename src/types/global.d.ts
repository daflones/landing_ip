export interface MetricData {
  value: number;
  suffix: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export interface DiferencialItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  stats?: { label: string; value: string }[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'bebidas' | 'alimentos' | 'cosmeticos' | 'limpeza';
  image: string;
  description: string;
  capacity: string;
  material: string;
  client?: string;
}

export interface FormData {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  documento: string;
  segmento: 'bebidas' | 'alimentos' | 'cosmeticos' | 'limpeza' | 'outros';
  volume: '0-1000' | '1000-5000' | '5000-10000' | '10000+';
  mensagem?: string;
  aceiteTermos: boolean;
}

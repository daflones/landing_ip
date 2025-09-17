import React from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from '../../../hooks/useCountUp';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
  delay?: number;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  value,
  suffix,
  label,
  icon: Icon,
  delay = 0
}) => {
  const { targetRef, isIntersecting } = useIntersectionObserver();
  const count = useCountUp(value, 2000, isIntersecting);

  return (
    <motion.div
      ref={targetRef as any}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-primary-900/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <Icon className="w-8 h-8 text-primary-purple" />
        <div className="text-3xl font-bold text-white">
          {count}{suffix}
        </div>
      </div>
      <p className="text-white/80 text-sm">{label}</p>
    </motion.div>
  );
};

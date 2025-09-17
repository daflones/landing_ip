import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../../utils/cn';

interface DiferencialCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  stats?: { label: string; value: string }[];
  delay?: number;
}

export const DiferencialCard: React.FC<DiferencialCardProps> = ({
  title,
  description,
  icon: Icon,
  gradient,
  stats,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div className="relative bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-6 h-full flex flex-col transition-all duration-300 group-hover:bg-white/30 group-hover:border-white/40">
        <div className={cn("w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg", gradient)}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed flex-grow mb-4">{description}</p>
        
        {stats && (
          <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/30">
            {stats.map((stat, index) => (
              <div key={index} className="text-left">
                <div className="text-2xl font-bold mb-1 gradient-text">{stat.value}</div>
                <div className="text-xs text-gray-700 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

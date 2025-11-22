import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Code2, Cpu, Server, LineChart, Database } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Auditoría de Seguridad',
    description: 'Análisis de vulnerabilidades, limpieza de malware y fortificación de sistemas empresariales.',
    icon: ShieldCheck,
    category: 'Support',
  },
  {
    id: '2',
    title: 'Desarrollo Web & Apps',
    description: 'Creación de plataformas modernas con React, Node.js y arquitecturas escalables.',
    icon: Code2,
    category: 'Development',
  },
  {
    id: '3',
    title: 'Consultoría Tecnológica',
    description: 'Asesoría estratégica, implementación de metodologías Agile y transformación digital.',
    icon: LineChart,
    category: 'Consulting',
  },
  {
    id: '4',
    title: 'Integración de APIs',
    description: 'Conexión robusta entre sistemas, pasarelas de pago y servicios de terceros.',
    icon: Server,
    category: 'Development',
  },
  {
    id: '5',
    title: 'Arquitectura de Software',
    description: 'Diseño de sistemas distribuidos, microservicios y optimización de bases de datos.',
    icon: Database,
    category: 'Consulting',
  },
  {
    id: '6',
    title: 'Soluciones Blockchain',
    description: 'Implementación de contratos inteligentes y consultoría en activos digitales.',
    icon: Cpu,
    category: 'Development',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Soluciones integrales diseñadas para escalar tu negocio y asegurar tu infraestructura digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-electric-500/50 transition-all duration-300 overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-600/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-electric-600/20 transition-colors">
                  <service.icon className="w-6 h-6 text-slate-300 group-hover:text-electric-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-electric-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-cyan-400/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-slate-800/50 border border-slate-700 text-electric-500 text-sm font-semibold mb-6">
              Innovación Digital IT
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight mb-6">
              Soluciones y <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-500 to-cyan-400">
                Asistencias Remotas
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl">
              Democratizamos la tecnología para empresas y startups. Desde auditorías de seguridad hasta desarrollo de software a medida, impulsamos tu transformación digital con expertos globales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/1234567890" // Replace with actual number
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-electric-600 hover:bg-electric-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-electric-600/30 hover:shadow-electric-600/50"
              >
                <MessageCircle className="w-5 h-5" />
                Contactar por WhatsApp
              </a>
              <a
                href="#services"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white font-medium rounded-lg backdrop-blur-sm border border-slate-700 hover:border-slate-600 transition-all"
              >
                Ver Servicios
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
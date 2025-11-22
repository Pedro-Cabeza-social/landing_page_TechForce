import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'who'>('mission');

  const content = {
    mission: {
      title: 'Nuestra Misión',
      text: 'Democratizar el acceso a tecnologías de vanguardia, permitiendo que empresas de todos los tamaños puedan competir en un mercado globalizado mediante soluciones robustas, seguras y escalables.',
    },
    vision: {
      title: 'Nuestra Visión',
      text: 'Ser referentes latinoamericanos en consultoría tecnológica remota, reconocidos por nuestra excelencia técnica, agilidad en la respuesta y capacidad para resolver problemas complejos de manera innovadora.',
    },
    who: {
      title: 'Quiénes Somos',
      text: 'Somos un colectivo de ingenieros, desarrolladores y arquitectos de software apasionados por el código limpio y la eficiencia. TechForge nació de la necesidad de brindar soporte IT de alta calidad sin barreras geográficas.',
    },
  };

  return (
    <section id="about" className="py-24 bg-slate-900/30 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content Area */}
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">
              Sobre Tech<span className="text-electric-500">Forge</span>
            </h2>
            
            <div className="flex gap-4 mb-8 border-b border-slate-800">
              {(['mission', 'vision', 'who'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-sm font-medium transition-colors relative ${
                    activeTab === tab ? 'text-electric-400' : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {tab === 'mission' ? 'Misión' : tab === 'vision' ? 'Visión' : 'Equipo'}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-electric-500"
                    />
                  )}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">{content[activeTab].title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">
                  {content[activeTab].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Visual/Stats Area */}
          <div className="relative">
            <div className="absolute inset-0 bg-electric-500/10 blur-3xl rounded-full"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="bg-slate-800/50 backdrop-blur p-6 rounded-2xl border border-slate-700">
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-sm text-slate-400">Proyectos Entregados</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur p-6 rounded-2xl border border-slate-700">
                  <div className="text-3xl font-bold text-electric-400 mb-1">99%</div>
                  <div className="text-sm text-slate-400">Satisfacción Cliente</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-800/50 backdrop-blur p-6 rounded-2xl border border-slate-700">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">24/7</div>
                  <div className="text-sm text-slate-400">Soporte Crítico</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur p-6 rounded-2xl border border-slate-700">
                  <div className="text-3xl font-bold text-white mb-1">10+</div>
                  <div className="text-sm text-slate-400">Años de Experiencia</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
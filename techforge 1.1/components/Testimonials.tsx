import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative bg-slate-950 p-10 rounded-2xl border border-slate-800 shadow-xl">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-electric-600 p-3 rounded-full shadow-lg shadow-electric-600/40">
            <Quote className="w-6 h-6 text-white fill-current" />
          </div>
          
          <blockquote className="mt-6">
            <p className="text-xl md:text-2xl text-slate-200 font-light italic leading-relaxed">
              "La capacidad de TechForge para diagnosticar y resolver problemas críticos en nuestra infraestructura de red fue impresionante. Su enfoque remoto es tan eficiente como tenerlos en la oficina."
            </p>
          </blockquote>
          
          <div className="mt-8 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 overflow-hidden mb-3">
                 <img src="https://picsum.photos/100/100?random=user" alt="User" />
            </div>
            <div className="text-white font-bold">Ing. Jose Temistocles</div>
            <div className="text-electric-400 text-sm font-medium">CTO, Infraestructuras Latam</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
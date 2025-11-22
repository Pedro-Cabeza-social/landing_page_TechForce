import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { PortfolioProject } from '../types';

const projects: PortfolioProject[] = [
  {
    id: '1',
    title: 'Plataforma Refrigeración Industrial',
    description: 'Sistema IoT para monitoreo en tiempo real de cadenas de frío. Alertas automatizadas y reportes de eficiencia energética.',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    githubUrl: 'https://github.com',
    tags: ['IoT', 'React', 'AWS', 'MQTT'],
  },
  {
    id: '2',
    title: 'Digitalización AgroTech',
    description: 'App móvil offline-first para gestión de cultivos y trazabilidad de cosecha. Integración con sensores de humedad.',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    githubUrl: 'https://github.com',
    tags: ['React Native', 'Firebase', 'Node.js'],
  },
  {
    id: '3',
    title: 'API Gateway Financiero',
    description: 'Middleware de alta seguridad para procesamiento de transacciones bancarias con arquitectura de microservicios.',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    githubUrl: 'https://github.com',
    tags: ['Go', 'Docker', 'Kubernetes'],
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-slate-400">
            Innovación aplicada en casos de éxito reales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-electric-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-electric-900/20"
            >
              <div className="relative overflow-hidden h-48">
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-electric-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white hover:text-electric-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Ver Código</span>
                    </a>
                  )}
                  <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors ml-auto">
                    <ExternalLink className="w-4 h-4" />
                    <span>Detalles</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
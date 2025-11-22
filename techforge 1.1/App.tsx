import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

// Lazy load components to improve initial load time (Performance Optimization)
const Services = React.lazy(() => import('./components/Services'));
const About = React.lazy(() => import('./components/About'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const Contact = React.lazy(() => import('./components/Contact'));

const LoadingFallback = () => (
  <div className="py-20 flex justify-center items-center">
    <div className="w-8 h-8 border-4 border-electric-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-electric-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        
        <Suspense fallback={<LoadingFallback />}>
          <Services />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Portfolio />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Testimonials />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default App;
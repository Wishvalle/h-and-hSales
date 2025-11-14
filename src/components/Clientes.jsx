import { useState, useEffect } from 'react';
import TransMolinaIMG from '../assets/images/clients/claudio_TransMolina.jpg';
import TracasaIMG from '../assets/images/clients/minor_Tracasa.jpg';
import TransMolina from '../assets/images/clients/transMolina.jpg';
import SeymaTour from '../assets/images/clients/seymaTour.jpg';

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const testimonials = [
  {
    name: 'Christian',
    company: 'Chispa Tours',
    quote: 'Compramos un bus y el rendimiento de este ha sido excelente. Además, el soporte post-venta es de primera calidad. ¡Gracias!',
    imageUrl: 'https://placehold.co/100x100/cbd5e1/1e293b?text=C',
    imageBus: TransMolinaIMG
  },
  {
    name: 'Claudio Molina',
    company: 'Trans Molina',
    quote: 'La atención en H&H Auto Sales fue excepcional. Nos ayudaron a elegir el bus perfecto para nuestras rutas turísticas. ¡Totalmente recomendados!',
    imageUrl: 'https://placehold.co/100x100/cbd5e1/1e293b?text=CM',
    imageBus: TransMolina
  },
  {
    name: 'Minor Campos',
    company: 'Tracasa',
    quote: 'La calidad de los buses que ofrecen es increíble. Una gran inversión para nuestra empresa.',
    imageUrl: 'https://placehold.co/100x100/cbd5e1/1e293b?text=MC',
    imageBus: TracasaIMG
  },
  {
    name: 'Seyma Tours',
    company: 'Seyma Tours',
    quote: 'Estamos muy satisfechos con nuestro nuevo bus adquirido en H&H Auto Sales. Ha mejorado significativamente nuestra flota y la experiencia de nuestros clientes.',
    imageUrl: 'https://placehold.co/100x100/cbd5e1/1e293b?text=ST',
    imageBus: SeymaTour
  }
];

export const Clientes = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };
  

  useEffect(() => {
    // Si el mouse está sobre el carrusel o no hay suficientes testimonios, no hacer nada.
    if (isHovering || testimonials.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar o cuando isHovering cambia
  }, [isHovering, activeIndex]); // Re-ejecutar el efecto si isHovering cambia
  

     

  return (
    <section id="clientes" className="py-20 bg-blue-hh overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Lo que dicen nuestros clientes</h2>
          <p className="text-slate-300 mt-2">La satisfacción de nuestros clientes es nuestra mayor prioridad.</p>
        </div>

        <div className="relative w-full flex justify-center items-center">
          {/* Botón Anterior */}
          <button 
            onClick={handlePrev} 
            className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-slate-700/50 hover:bg-slate-700 rounded-full text-white transition-colors"
            aria-label="Anterior testimonio"
          >
            <ChevronLeftIcon />
          </button>

          {/* Contenedor del Carrusel */}
          <div className="w-full max-w-6xl h-[500px] relative">
            {testimonials.map((testimonial, index) => {
              const offset = index - activeIndex;
              const isVisible = Math.abs(offset) <= 1;

              let transform = `translateX(${offset * 100}%) scale(0.8) rotateY(${offset > 0 ? '' : '-'}45deg)`;
              let opacity = '0';
              let zIndex = 0;

              if (offset === 0) {
                transform = 'translateX(0) scale(1)';
                opacity = '1';
                zIndex = 10;
              } else if (offset === 1) {
                transform = 'translateX(60%) scale(0.8)';
                opacity = '0.5';
                zIndex = 5;
              } else if (offset === -1) {
                transform = 'translateX(-60%) scale(0.8)';
                opacity = '0.5';
                zIndex = 5;
              }
              
              if (!isVisible) {
                 transform = offset > 0 ? 'translateX(100%) scale(0.8)' : 'translateX(-100%) scale(0.8)';
                 opacity = '0';
              }

              return (
                <div
                  key={index}
                  className="absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out"
                  style={{ transform, opacity, zIndex, perspective: '1000px' }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="w-full h-full flex items-center justify-center p-4 md:p-0">
                    <div className="bg-slate-400 rounded-xl shadow-2xl w-full max-w-2xl mx-auto p-8 flex flex-col items-center text-center">
                      <img src={testimonial.imageBus} alt="Bus del cliente" className="w-full h-70 object-cover rounded-lg mb-6 shadow-lg" />
                      <p className="text-slate-800 italic text-lg mb-6">"{testimonial.quote}"</p>
                      <div className="flex items-center mt-auto">
                        <img src={testimonial.imageUrl} alt={`Foto de ${testimonial.name}`} className="w-14 h-14 rounded-full mr-4 border-2 border-blue-hh-light shadow-md"/>
                        <div>
                          <h4 className="font-bold text-black text-lg">{testimonial.name}</h4>
                          <p className="text-slate-800 text-sm">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Botón Siguiente */}
          <button 
            onClick={handleNext} 
            className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-slate-700/50 hover:bg-slate-700 rounded-full text-white transition-colors"
            aria-label="Siguiente testimonio"
          >
            <ChevronRightIcon />
          </button>
        </div>

        {/* Puntos de Navegación */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${activeIndex === index ? 'bg-blue-hh-lighter' : 'bg-slate-600 hover:bg-slate-500'}`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
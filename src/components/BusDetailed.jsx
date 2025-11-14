import React, { useEffect } from 'react';
import { BusCarousel } from './BusCarousel';
import Logo from '../assets/images/handh.svg';

const CloseIcon = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const BusDetailed = ({ bus, onClose }) => {

    if (!bus) return null;

  const whatsppNumber = "50689166060";
  const messageTemplate = `Buenas H&H Auto Sales, me gustaría saber más sobre el modelo ${bus.name} de tipo: ${bus.motor}, que vi en la página web.`;
  const encodedMessage = encodeURIComponent(messageTemplate);
  const whatsappLink = `https://wa.me/${whatsppNumber}?text=${encodedMessage}`;  

  // Evita que el scroll de la página de fondo funcione cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 bg-black/30 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={onClose} // Cierra el modal si se hace clic en el fondo
    >
      
      <div 
        className="bg-white text-gray-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto relative"
        onClick={e => e.stopPropagation()} // Evita que el clic dentro del modal lo cierre
      >
        {/* Encabezado del Modal */}
            <header className='bg-white backdrop-blur-md sticky top-0 z-50' >
              <div className="grid grid-cols-2 sm:grid-cols-3 items-center mx-auto px-8 pt-4">
                <div className='flex justify-start'>
                  <img src={Logo} alt={`Logo de la marca`} className="w-35 h-auto object-contain" />
                </div>
                <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900">{bus.name}</h2>
                <button onClick={onClose} className=" absolute top-4 right-2 text-2xl text-gray-500 hover:text-gray-800">
                    <CloseIcon className="h-8 w-8" />
                </button>
            </div>
            </header>

        <div className="p-8">
          
          <p className="text-gray-600 mb-6 text-justify">{bus.description}</p>
          
          {/* Carrusel de Imágenes */}
          <div className="mb-6">
              <BusCarousel images={bus.imageUrl} />
          </div>
          
          {/* Tabla de Especificaciones */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Especificaciones</h3>
              {/* Tabla de Especificaciones
                <div className="mt-4">
                  <img src={bus.imageSpecs} alt={`Especificaciones de ${bus.name}`} className="w-full h-auto rounded-lg shadow-md" />
                </div> */}
              
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <tbody>
                    <tr className="border-b last:border-b-0">
                      <td className="py-3 pr-4 font-semibold capitalize text-gray-600">Tamaño </td>
                      <td className="py-3 text-gray-800">{bus.size}</td>
                    </tr>
                    <tr className="border-b last:border-b-0">
                      <td className="py-3 pr-4 font-semibold capitalize text-gray-600">Motor </td>
                      <td className="py-3 text-gray-800">{bus.motor.charAt(0).toUpperCase() + bus.motor.slice(1)}</td>
                    </tr>
                    <tr className="border-b last:border-b-0">
                      <td className="py-3 pr-4 font-semibold capitalize text-gray-600">Categoria </td>
                      <td className="py-3 text-gray-800">{bus.category.charAt(0).toUpperCase() + bus.category.slice(1)}</td>
                    </tr>
                  {bus.specs && Object.entries(bus.specs[0]).map(([key, value]) => (
                    <tr key={key} className="border-b last:border-b-0">
                      <td className="py-3 pr-4 font-semibold capitalize text-gray-600">{key.replace(/_/g, ' ')}</td>
                      <td className="py-3 text-gray-800">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pie del Modal */}
          <div className="mt-8 flex justify-between items-center">
            <button 
              onClick={onClose}
              className="bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg hover:bg-gray-400 transition-colors"
            >
              Cerrar
            </button>
            <a href={whatsappLink} onClick={onClose} className="bg-blue-hh text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-hh-light transition-colors">
              Contactar para cotizar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

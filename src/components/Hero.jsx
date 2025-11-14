import BusVideo from '../assets/video/busesHyH.mp4';

export const Hero = () => (
  <section id="inicio" className="relative text-white overflow-hidden h-screen min-h-[500px] flex items-center justify-center">
    
    <video src={BusVideo} autoPlay muted loop playsInline disablePictureInPicture className="absolute inset-0 w-full h-full object-cover z-0"></video>
    <div className='absolute top-0 left-0 w-full h-screen bg-black opacity-60 z-10'> </div>

    <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 text-shadow-lg">
        Su Socio de Confianza en Transporte
      </h1>
      <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-8 text-shadow">
        Descubra nuestra selección de buses nuevos de las mejores marcas. Comprometidos con la calidad y brindar el mejor servicio para su empresa.
      </p>
      <a href="#buses" className="bg-blue-hh hover:bg-blue-hh-light text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 inline-block transform hover:scale-105 shadow-lg">
        Ver Catálogo
      </a>
    </div>
  </section>
);


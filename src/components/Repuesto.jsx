import bosch from '../assets/images/spareparts/bosch.png'
import cummins from '../assets/images/spareparts/cummins.png'
import fleetguard from '../assets/images/spareparts/fleetguard.png'
import wabco from '../assets/images/spareparts/wabco.png'
import zf from '../assets/images/spareparts/zf.png'
import fast from '../assets/images/spareparts/fast.png'
import sachs from '../assets/images/spareparts/sachs.png'
import voith from '../assets/images/spareparts/voith.png'
import telma from '../assets/images/spareparts/telma.png'
import gates from '../assets/images/spareparts/gater.png'

const sparePartBrands = [
    { name: 'BOSCH', logoUrl: bosch },
    { name: 'Cummins', logoUrl: cummins },
    { name: 'Fleetguard', logoUrl: fleetguard },
    { name: 'WABCO', logoUrl: wabco },
    { name: 'ZF', logoUrl: zf },
    { name: 'Fast', logoUrl: fast },
    { name: 'Sachs', logoUrl: sachs },
    { name: 'Voith', logoUrl: voith },
    { name: 'Telma', logoUrl: telma },
    { name: 'Gates', logoUrl: gates },
];

export const Repuesto = () => (
  <section id="repuestos" className="bg-sky-50 text-zinc-950">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Repuestos de Calidad para sus Buses</h2>   
        <p className="text-slate-800 mt-2">También contamos con una amplia gama de repuestos originales y compatibles para mantener su flota en óptimas condiciones.</p>   
        <p className="text-slate-800 mt-2">Escribanos y pregunte por su repuesto favorito.</p>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {sparePartBrands.map((brand) => (
            <div key={brand.name} className="bg-slate-400 rounded-lg p-4 flex justify-center items-center h-28 shadow-lg transition-transform duration-300 hover:scale-105">
              <img 
                src={brand.logoUrl} 
                alt={`Logo ${brand.name}`} 
                className="max-h-16 w-auto object-contain" 
                onError={(e) => { 
                  // Fallback por si la imagen no carga
                  e.target.onerror = null; 
                  e.target.src = `https://placehold.co/200x100/ffffff/1e40af?text=${brand.name}&font=sans`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
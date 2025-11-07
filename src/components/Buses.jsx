import { useState, useEffect, useRef, useMemo } from 'react';
import { busesBrands } from './Bus';
import { BusDetailed } from './BusDetailed';

// Asegúrate de que las marcas tengan un logoUrl por defecto si no lo tienen

const busBrands = busesBrands.map(brand => ({
  ...brand,
  logoUrl: brand.logoUrl || 'https://placehold.co/200x100/ffffff/000000?text=Logo+No+Disponible'
}));

console.log(busBrands);


export const Buses = () => {

    const [selectedBrand, setSelectedBrand] = useState(busBrands[0]);
    const [selectedMotor, setSelectedMotor] = useState('combustion');
    const [selectedCategory, setSelectedCategory] = useState('todos');
    const [modalOpen, setModalOpen] = useState(false);
    const [modalModel, setModalModel] = useState(null);
    const resultsRef = useRef(null); 
    const isInitialMount = useRef(true);

    // Maneja el clic en una marca
    const handleBrandClick = (brand) => {
        setSelectedBrand(brand);
        // Al cambiar de marca, no se resetea el motor, solo la categoría.
        setSelectedCategory('todos');
    };

    const handleMotorClick = (motor) => {
        setSelectedMotor(motor);
        setSelectedCategory('todos');
    };

    const handleOpenModal = (model) => {
      setModalModel(model);
      setModalOpen(true);
    };

    const handleCloseModal = () => {
      setModalOpen(false);
      setModalModel(null);
    };

    //Opciones para los filtros de tipo combustible/electrico y el tipo de bus

    const categoryOptions1 = {
        asiastar: {
            combustion: {
                todos: 'Todos',
                interurbano: 'Interurbano',
                urbano: 'Urbano',
                microbus: 'Microbús'
            },
            electrico: {
                todos: 'Todos',
                interurbano: 'Interurbano',
                urbano: 'Urbano'
            }
        },
        mudan: {
            todos: 'Todos',
            combustion: {
                todos: 'Todos',
                interurbano: 'Interurbano'
            },
            electrico: {
                todos: 'Todos',
                interurbano: 'Interurbano'
            }
        }
    };

    // Filtra los modelos según la marca y el tipo seleccionados
    const categoryOptions = useMemo(() => {
    if (!selectedBrand || !selectedMotor) return {};
    const categoryNames = { interurbano: 'Interurbano', urbano: 'Urbano', microbus: 'Microbús' };
    const categories = new Set(selectedBrand.models.filter(model => model.motor === selectedMotor).map(model => model.category));
    const dynamicOptions = { todos: 'Todos' };
    categories.forEach(cat => { dynamicOptions[cat] = categoryNames[cat] || cat; });
    return dynamicOptions;
  }, [selectedBrand, selectedMotor]);

  const filteredModels = selectedBrand && selectedMotor
    ? selectedBrand.models.filter(model => model.motor === selectedMotor && (selectedCategory === 'todos' || model.category === selectedCategory))
    : [];

    useEffect(() => {
    // Si es el montaje inicial del componente, no hacemos nada.
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    // Si hay una referencia al contenedor de resultados, hacemos scroll.
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedMotor, selectedCategory]);
  
    return (
      <section id='buses' className='py-20 bg-sky-50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>

        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-zinc-950'>Nuestro Catálogo de Buses</h2>
          
        </div>

          
          
        <div className='min-h-[400px]'>
          <h3 className='text-2xl font-bold text-center text-zinc-950 mb-12 '>Modelos {selectedBrand.name}</h3>
          {selectedBrand &&  (
            <div className='animate-fade-in'>
              
              {selectedMotor && (
                <div className='animate-fade-in' ref={resultsRef}>

                  <div className='flex flex-col md:flex-row gap-8'>


                    <aside className='md:w-1/4 lg:w-1/5 md:sticky md:top-24 md:self-start' >
                      <p className='text-slate-800 mt-2 mb-4'>1. Seleccione una marca.</p>
                      <div>
                        
                        <div className='flex justify-center flex-wrap gap-4 mb-12'>
                          
                          {busBrands.map((brand) => (
                            <button
                              key={brand.id}
                              onClick={() => handleBrandClick(brand)}
                              className={`p-2 bg-blue-hh rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-blue-hh-lighter focus:outline-none ${selectedBrand?.id === brand.id ? 'ring-2 ring-blue-hh scale-110' : ''}`}
                            >
                              <img src={brand.logoUrl} alt={`Logo ${brand.name}`} className='h-12 md:h-16 object-contain' />
                            </button>
                            
                          ))}
                          
                        </div>
                      </div>

                      <p className='text-slate-800 mt-2'>2. Seleccione el tipo de motor.</p>
                      <h4 className='text-lg font-semibold text-zinc-950 mb-4'>Tipo de Motor</h4>
                      <div className='flex flex-row flex-wrap md:flex-col gap-2'>
                  
                        <button onClick={() => handleMotorClick('combustion')} className={`w-full text-left p-3 rounded-md font-semibold transition-colors ${selectedMotor === 'combustion' ? 'bg-blue-hh text-white' : 'bg-slate-400 text-slate-900 hover:bg-slate-300'}`}>Combustión</button>
                        <button onClick={() => handleMotorClick('electrico')} className={`w-full text-left p-3 rounded-md font-semibold transition-colors ${selectedMotor === 'electrico' ? 'bg-blue-hh text-white' : 'bg-slate-400 text-slate-900 hover:bg-slate-300'}`}>Eléctrico</button>
                        
                      </div>
                      <p className='text-slate-800 mt-2'>3. Filtre por categoría.</p>
                      <h4 className='text-lg font-semibold text-zinc-950 mb-4'>Categoría de Bus</h4>
                      <div className='flex flex-row flex-wrap md:flex-col gap-2'>
                        {Object.entries(categoryOptions).map(([key, value]) => (
                          <button
                            key={key}
                            onClick={() => setSelectedCategory(key)}
                            className={`w-full text-left p-3 rounded-md font-semibold transition-colors duration-200 ${selectedCategory === key ? 'bg-blue-hh text-white font-bold' : 'bg-slate-400 text-slate-900 hover:bg-slate-300'}`}
                          >
                            {value}
                          </button>
                        ))}
                      </div>
                    </aside>
                      
                      {/* aqui agreegar el filtro de tamano */}
                    <main className='flex-1'>
                      {filteredModels.length > 0 ? (
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                          {filteredModels.map((model) => (
                            <div key={model.id} className='bg-blue-hh rounded-xl overflow-hidden shadow-lg flex flex-col transform transition-transform duration-300 hover:translate-y-[-5px]'>
                              <img src={model.imageUrl[0]} alt={`Bus ${model.name}`} className='w-full h-56 object-cover' />
                              <div className='p-6 flex flex-col'>
                                <h4 className='text-xl font-bold text-white mb-2'>{model.name}</h4>
                                <p className='text-slate-300 mb-4 flex-grow'>{model.description}</p>
                                
                                <ul className='text-slate-300 space-y-2'> {/* cambiar estos 3 li */}
                                  
                                  {model.specs && Object.entries(model.specs[0]).map(([key, value]) => (
                                    <li key={key} className='flex items-start'>
                                      <span className='text-blue-300 mr-2 mt-1'>✓</span>
                                      
                                      <div>
                                        <span className='font-semibold capitalize'>{key.replace(/_/g, ' ')}: </span>
                                        <span className='text-slate-300'>{value}</span>
                                        
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                                
                                <div className='flex justify-center mt-4'>
                                  <button onClick={() => handleOpenModal(model)} className='px-6 py-2 rounded-md font-semibold transition-colors bg-blue-hh-light text-white hover:bg-blue-hh-lighter'>Ver más detalles</button>
                                  
                                </div>
                                
                              </div>
                            </div>
                          ))}
                          
                        </div>
                      ) : (
                        <div className='flex items-center justify-center h-full bg-slate-900 rounded-lg p-8'>
                            <p className='text-slate-400 text-lg text-center'>No hay modelos de {selectedBrand.name} que coincidan con los filtros seleccionados.</p>
                        </div>
                      )}
                      {modalOpen && modalModel && (
                        
                              <BusDetailed bus={modalModel} onClose={handleCloseModal} />
                            
                        )
                      }
                    </main>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
    )
};
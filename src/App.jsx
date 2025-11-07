import { useEffect } from 'react'
import {Header} from './components/Header'
import {Hero} from './components/Hero'
import {Buses} from './components/Buses'
import {Clientes} from './components/Clientes'
import {Contacto} from './components/Contacto'
import {Footer} from './components/Footer'
import { Repuesto } from './components/Repuesto'

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <div className="bg-slate-900">
        <Header />
        <main>
          <Hero />
          <Buses />
          <Repuesto/>
          <Clientes />
          <Contacto />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App

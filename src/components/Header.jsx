import { useState } from 'react';

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: '#buses', text: 'Buses' },
    { href: '#clientes', text: 'Clientes' },
    { href: '#contacto', text: 'Contacto' },
  ];

  return (
    <header className="bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold text-white">
            H&H <span className="text-blue-600">Auto Sales</span>
          </a>
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-medium">
                {link.text}
              </a>
            ))}  
            {/* Create a link for each nav and establishes the hover color. */}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div> {/* This is the navigation menu. */}

      {/* Mobile menu, show/hide based on menu state. */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-slate-800">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-slate-200 hover:text-blue-400 transition-colors duration-300 text-lg">
                {link.text}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

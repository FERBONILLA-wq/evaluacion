// App.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link
import fer_fondo from './assets/fondo_2.webp';
import perfilImagen from './assets/ferr.jpg'; // Asegúrate de tener esta imagen en tu carpeta de assets

const App = () => {
  const [isMenuAtaquesOpen, setIsMenuAtaquesOpen] = useState(false);
  const [isMenuConfidencialidadOpen, setIsMenuConfidencialidadOpen] = useState(false);
  const [isMenuPrincipiosOpen, setIsMenuPrincipiosOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [typingKey, setTypingKey] = useState(0);

  // Reiniciar la animación de texto
  useEffect(() => {
    const interval = setTimeout(() => {
      setTypingKey(prevKey => prevKey + 1); // Reinicia el key para volver a iniciar la animación
    }, 12000); // Ajusta el tiempo para controlar el ciclo completo de la animación

    return () => clearTimeout(interval);
  }, [typingKey]);

  return (
    <div className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${fer_fondo})` }}>
      {/* Overlay Box */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Navbar */}
      <header className="relative z-10 flex flex-col md:flex-row justify-between items-center p-4 bg-black bg-opacity-50 rounded-lg shadow-lg mx-4 my-0">
        <div className="flex items-center mb-4 md:mb-0">
          <h1 className="text-white text-3xl font-bold">7°A</h1>
        </div>
        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
          <Link to="/" className="text-pink-500">Home</Link>

          {/* Ataques cibernéticos */}
          <div className="relative">
            <button
              onClick={() => setIsMenuAtaquesOpen(!isMenuAtaquesOpen)}
              className="text-white hover:text-pink-500"
            >
              Ataques cibernéticos <span className="text-sm">▼</span>
            </button>
            {isMenuAtaquesOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-white text-black rounded shadow-lg z-20">
                <Link to="/seccion1" onClick={() => setIsMenuAtaquesOpen(false)} className="block px-4 py-2 hover:bg-pink-500 hover:text-white">17 ejemplos..</Link>
              </div>
            )}
          </div>

          {/* Confidencialidad de la información */}
          <div className="relative">
            <button
              onClick={() => setIsMenuConfidencialidadOpen(!isMenuConfidencialidadOpen)}
              className="text-white hover:text-pink-500"
            >
              Confidencialidad de la información <span className="text-sm">▼</span>
            </button>
            {isMenuConfidencialidadOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-white text-black rounded shadow-lg z-20">
                <Link to="/seccion2" onClick={() => setIsMenuConfidencialidadOpen(false)} className="block px-4 py-2 hover:bg-pink-500 hover:text-white">13 ejemplos...</Link>
              </div>
            )}
          </div>

          {/* Principios de seguridad */}
          <div className="relative">
            <button
              onClick={() => setIsMenuPrincipiosOpen(!isMenuPrincipiosOpen)}
              className="text-white hover:text-pink-500"
            >
              Principios de seguridad <span className="text-sm">▼</span>
            </button>
            {isMenuPrincipiosOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-20">
                <Link to="/seccion3" onClick={() => setIsMenuPrincipiosOpen(false)} className="block px-4 py-2 hover:bg-pink-500 hover:text-white">6 ejemplos...</Link>
              </div>
            )}
          </div>
        </nav>
        <button 
          onClick={() => setIsProfileModalOpen(true)} // Abre el modal al hacer clic
          className="mt-4 md:mt-0 text-white border border-white py-2 px-4 rounded-full hover:bg-pink-500 hover:border-transparent transition duration-300 hover:shadow-lg"
        >
          Perfil
        </button>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        {/* Typing effect */}
        <div key={typingKey}>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-pink-500">
            SEGURIDAD DE LA INFORMACIÓN <br /> BONILLA DOMÍNGUEZ MARÍA FERNANDA
          </h2>
        </div>
        <p className="text-white text-base md:text-lg max-w-2xl mb-4">
          La seguridad de la información es un conjunto de procedimientos y herramientas que protegen la información confidencial de una empresa. Su objetivo es evitar que la información sea utilizada de forma indebida, accedida de manera no autorizada, interrumpida o destruida.
        </p>
        <button  onClick={() => setIsProfileModalOpen(true)} // Abre el modal al hacer clic 
        className="flex items-center space-x-2 bg-pink-500 text-white py-3 px-6 rounded-full hover:bg-white hover:text-pink-500 transition duration-300 hover:shadow-lg">
          <span>Profile</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7-7" />
          </svg>
        </button>
      </main>

      {/* Modal de Perfil */}
      {isProfileModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-70 absolute inset-0" onClick={() => setIsProfileModalOpen(false)}></div>
          <div className="bg-white rounded-lg p-4 max-w-sm w-full z-50"> {/* Cambiado a un tamaño más pequeño */}
            <div className="flex flex-col items-center">
              <img 
                src={perfilImagen} 
                alt="Perfil de Bonilla Domínguez" 
                className="rounded-full w-32 h-32 mb-4" // Caja redonda
              />
              <h3 className="text-xl font-semibold">Bonilla Domínguez María Fernanda</h3>
              <p className="text-md">Carrera: Tecnologías de la Información</p>
              <p className="text-md">Grado: 7 Grupo: A</p>
              <p className="mt-4 text-center">
                Objetivo: Soy estudiante de la Universidad Tecnológica de Durango (UTD) y tengo como objetivo culminar mis estudios en ingeniería, con la intención de especializarme en ciberseguridad y contribuir al desarrollo de soluciones innovadoras en el campo de la tecnología.
              </p>
              <button 
                onClick={() => setIsProfileModalOpen(false)} 
                className="mt-4 bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-white hover:text-pink-500 transition duration-300"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

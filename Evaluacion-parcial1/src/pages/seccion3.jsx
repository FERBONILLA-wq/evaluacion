/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const principiosSeguridad = [
    {
        titulo: 'Accesibilidad',
        descripcion: 'Facilita el acceso a la información a las personas autorizadas, garantizando que los recursos estén disponibles cuando se necesiten.',
        eficiencia: 'Eficiencia: 93%',
    },
    {
        titulo: 'Confidencialidad',
        descripcion: 'Asegura que la información sea accesible solo a quienes están autorizados a conocerla, protegiendo los datos sensibles de accesos no autorizados.',
        eficiencia: 'Eficiencia: 95%',
    },
    {
        titulo: 'Disponibilidad',
        descripcion: 'Garantiza que la información y los recursos estén disponibles para su uso cuando sea necesario, evitando interrupciones en el acceso.',
        eficiencia: 'Eficiencia: 92%',
    },
    {
        titulo: 'Autenticación',
        descripcion: 'Proceso que verifica la identidad de un usuario, sistema o entidad, asegurando que solo las personas autorizadas puedan acceder a la información.',
        eficiencia: 'Eficiencia: 94%',
    },
    {
        titulo: 'Integridad',
        descripcion: 'Asegura que la información se mantenga completa y sin alteraciones, permitiendo que los datos sean precisos y fiables en todo momento.',
        eficiencia: 'Eficiencia: 97%',
    },
    {
        titulo: 'Control de acceso',
        descripcion: 'Conjunto de políticas y procedimientos que limitan el acceso a la información a personas autorizadas, protegiendo los activos de información de accesos no deseados.',
        eficiencia: 'Eficiencia: 91%',
    },
];

const Seccion3 = () => {
    // Configuración del carrusel de react-slick
    const settings = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        appendDots: (dots) => (
            <div>
                <ul style={{ margin: '0px' }}>{dots}</ul>
            </div>
        ),
        customPaging: (i) => (
            <div className="bg-sky-500 w-3 h-3 rounded-full"></div> // Cambiamos los puntitos a azul cielo
        ),
        arrows: true,
        prevArrow: <div className="slick-prev bg-sky-500 rounded-full w-8 h-8 text-white"></div>, // Flecha anterior azul cielo
        nextArrow: <div className="slick-next bg-sky-500 rounded-full w-8 h-8 text-white"></div>, // Flecha siguiente azul cielo
    };

    return (
        <div className="relative h-screen p-8 bg-black">
            {/* Header */}
            <header className="flex flex-col md:flex-row justify-between items-center p-4 bg-white bg-opacity-60 rounded-lg shadow-lg mb-8">
                <div className="flex items-center mb-4 md:mb-0">
                    <h1 className="text-black text-3xl font-bold">Principios de Seguridad de la Información</h1>
                </div>
                <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
                    <Link to="/" className="text-pink-800">Home</Link>
                    <Link to="/seccion1" className="text-pink-800">Sección 1</Link>
                    <Link to="/seccion2" className="text-pink-800">Sección 2</Link>
                </nav>
            </header>

            {/* Contenido principal */}
            <div className="p-6 bg-white bg-opacity-60 rounded-lg shadow-lg overflow-hidden"> {/* Caja blanca alrededor del carrusel */}
                {/* Carrusel */}
                <div className="w-full mt-8"> {/* Ajustado el margen superior */}
                    <Slider {...settings}>
                        {principiosSeguridad.map((item, index) => (
                            <div
                                key={index}
                                className="mx-2" // Añadir margen horizontal
                                style={{
                                    height: '350px',
                                    display: 'flex',
                                    justifyContent: 'center', // Centrar la tarjeta
                                }}
                            >
                                <div
                                    className="p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-gradient-to-r from-pink-800 to-purple-800"
                                    // Espacio entre las tarjetas y color azul rey
                                    style={{
                                        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.5)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        position: 'relative',
                                        zIndex: 1,
                                        width: '100%', // Asegúrate que ocupe el espacio del contenedor
                                        maxWidth: '400px', // Tamaño máximo para las tarjetas
                                    }}
                                >
                                    <h3 className="text-2xl font-semibold mb-2 text-white">{item.titulo}</h3>
                                    <p className="text-lg text-white mb-4">{item.descripcion}</p>
                                    <p className="text-md text-yellow-300 font-semibold">{item.eficiencia}</p> {/* Porcentaje de eficiencia */}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Seccion3;

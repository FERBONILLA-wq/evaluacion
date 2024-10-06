/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const confidencialidad = [
    {
        titulo: 'Ley General de Protección de Datos',
        descripcion: 'Regula el tratamiento de datos personales en posesión de los particulares, buscando proteger la privacidad de los individuos y su derecho a la autodeterminación informativa.',
        eficiencia: 'Eficiencia: 95%',
    },
    {
        titulo: 'Ley de Propiedad Industrial',
        descripcion: 'Protege los derechos de invenciones y marcas, fomentando la innovación y resguardando a los creadores mediante la protección de sus derechos sobre la propiedad industrial.',
        eficiencia: 'Eficiencia: 92%',
    },
    {
        titulo: 'Ley Federal de Derechos de Autor',
        descripcion: 'Proporciona protección a los autores sobre sus obras, garantizando el reconocimiento y la remuneración justa por el uso de sus trabajos y promoviendo la creación artística.',
        eficiencia: 'Eficiencia: 98%',
    },
    {
        titulo: 'Ley Federal de Datos Personales',
        descripcion: 'Establece principios y derechos en el tratamiento de datos personales, asegurando su protección y uso responsable por parte de entidades y particulares en el manejo de información.',
        eficiencia: 'Eficiencia: 90%',
    },
    {
        titulo: 'Código Penal Federal',
        descripcion: 'Incluye disposiciones sobre delitos que afectan la privacidad y protección de datos, estableciendo sanciones para quienes vulneren derechos de las personas en el manejo de su información.',
        eficiencia: 'Eficiencia: 88%',
    },
    {
        titulo: 'Ley General de Transparencia',
        descripcion: 'Garantiza el derecho de acceso a información pública, promoviendo la transparencia en el manejo de recursos y el acceso a información que sea relevante para la ciudadanía.',
        eficiencia: 'Eficiencia: 91%',
    },
    {
        titulo: 'Criptografía Simétrica',
        descripcion: 'Método de cifrado que utiliza una única clave para encriptar y desencriptar la información, proporcionando una buena seguridad en la transmisión de datos de manera rápida y eficiente.',
        eficiencia: 'Eficiencia: 97%',
    },
    {
        titulo: 'Criptografía Asimétrica',
        descripcion: 'Método de cifrado que utiliza un par de claves, una pública y una privada, asegurando la confidencialidad y autenticidad de la información en la comunicación digital de manera segura.',
        eficiencia: 'Eficiencia: 95%',
    },
    {
        titulo: 'Cifrado por Bloques y por Flujo',
        descripcion: 'El cifrado por bloques divide los datos en partes fijas y los encripta; mientras que el cifrado por flujo procesa datos en flujos continuos, ofreciendo diferentes niveles de seguridad y velocidad.',
        eficiencia: 'Eficiencia: 89%',
    },
    {
        titulo: 'Criptoanálisis',
        descripcion: 'Técnica de analizar cifrados para descubrir claves o acceder a información sin autorización, siendo fundamental para evaluar la seguridad de los sistemas criptográficos existentes y su eficacia.',
        eficiencia: 'Eficiencia: 90%',
    },
];

const Seccion2 = () => {
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
                    <h1 className="text-black text-3xl font-bold">Confidencialidad de la Información</h1>
                </div>
                <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
                    <Link to="/" className="text-pink-800">Home</Link>
                    <Link to="/seccion1" className="text-pink-800">Sección 1</Link>
                    <Link to="/seccion3" className="text-pink-800">Sección 3</Link>
                </nav>
            </header>

            {/* Contenido principal */}
            <div className="p-6 bg-white bg-opacity-60 rounded-lg shadow-lg overflow-hidden"> {/* Caja blanca alrededor del carrusel */}
                {/* Carrusel */}
                <div className="w-full mt-8"> {/* Ajustado el margen superior */}
                    <Slider {...settings}>
                        {confidencialidad.map((item, index) => (
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

export default Seccion2;

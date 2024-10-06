/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ataques = [
    {
        titulo: 'DDoS',
        descripcion: 'Un ataque de denegación de servicio distribuido que sobrecarga un servidor, haciéndolo inaccesible. Esto puede causar interrupciones severas en la disponibilidad de servicios en línea, afectando negocios y usuarios durante horas o días. Es un problema común para empresas que dependen de su presencia en Internet.',
        porcentaje: 80,
    },
    {
        titulo: 'Ordenador Zombie',
        descripcion: 'Una computadora infectada que es controlada por un atacante para realizar acciones sin el conocimiento del propietario. Estas computadoras son comúnmente utilizadas en ataques masivos, como el envío de spam o en redes de bots para realizar fraudes en línea, lo que representa una amenaza creciente para la ciberseguridad.',
        porcentaje: 60,
    },
    {
        titulo: 'Ciberdelincuente',
        descripcion: 'Un individuo que comete delitos a través de Internet, como el robo de información personal o la distribución de malware. Estos criminales utilizan diversas tácticas, como phishing y ataques de ingeniería social, para engañar a las víctimas y lograr sus objetivos ilícitos, a menudo obteniendo grandes ganancias. ',
        porcentaje: 70,
    },
    {
        titulo: 'Botmaster',
        descripcion: 'El operador de una red de bots que controla múltiples computadoras infectadas para llevar a cabo ataques cibernéticos. Estos ataques pueden incluir DDoS, phishing o minería de criptomonedas sin consentimiento, generando daños significativos y ganancias para el atacante, además de dificultar la identificación de los responsables.',
        porcentaje: 75,
    },
    {
        titulo: 'Botnet',
        descripcion: 'Una red de computadoras infectadas que son controladas por un atacante para realizar tareas maliciosas como el envío masivo de spam o la realización de fraudes a gran escala. Estas redes pueden ser utilizadas para comprometer servidores, realizar ataques DDoS o incluso robar información confidencial de las víctimas. ',
        porcentaje: 85,
    },
    {
        titulo: 'Ransomware',
        descripcion: 'Un tipo de malware que cifra los archivos de la víctima y exige un rescate para desbloquearlos. Este tipo de ataque ha afectado a empresas, gobiernos y usuarios particulares, causando pérdidas financieras significativas y subrayando la importancia de mantener copias de seguridad y protocolos de seguridad actualizados. ',
        porcentaje: 90,
    },
    {
        titulo: 'Disclaimer',
        descripcion: 'Un aviso legal que aclara que el uso de la información puede ser riesgoso y que el autor no asume responsabilidades. Es esencial que los usuarios comprendan que la información sobre ciberseguridad puede variar en precisión, y que su implementación incorrecta podría llevar a vulnerabilidades adicionales en sus sistemas. ',
        porcentaje: 30,
    },
    {
        titulo: 'The Morris Worm',
        descripcion: 'Uno de los primeros gusanos informáticos que se propagó rápidamente en 1988, causando problemas en miles de computadoras conectadas a Internet. Este ataque reveló vulnerabilidades críticas en la red y llevó a la creación de mejores medidas de seguridad, impactando la forma en que las organizaciones abordaron la ciberseguridad en los años posteriores. ',
        porcentaje: 50,
    },
    {
        titulo: 'Ciberwarfare',
        descripcion: 'Conflictos que involucran ataques cibernéticos entre naciones, diseñados para desestabilizar al enemigo y afectar infraestructuras críticas. Estos ataques pueden incluir robo de datos, sabotaje de sistemas, y desinformación, lo que pone de manifiesto la importancia de la ciberdefensa en la seguridad nacional y en el ámbito internacional. ',
        porcentaje: 70,
    },
    {
        titulo: 'Stuxnet',
        descripcion: 'Un gusano informático diseñado específicamente para sabotear el programa nuclear de Irán, destacando la ciberseguridad industrial. Considerado como uno de los ataques más sofisticados de la historia, Stuxnet mostró cómo los ciberataques pueden ser utilizados como herramientas de guerra para alcanzar objetivos estratégicos sin recurrir a la fuerza militar. ',
        porcentaje: 95,
    },
    {
        titulo: 'Moonlight Maze',
        descripcion: 'Una serie de intrusiones cibernéticas que se dirigieron a varias agencias gubernamentales de EE. UU. a finales de los 90. Este ataque, atribuido a actores estatales, comprometió sistemas críticos y reveló la vulnerabilidad de las infraestructuras gubernamentales, impulsando un cambio hacia un enfoque más proactivo en la ciberseguridad. ',
        porcentaje: 60,
    },
    {
        titulo: 'Opetarin Aurora',
        descripcion: 'Un ataque cibernético dirigido a la infraestructura crítica de EE. UU. y Canadá entre 2007 y 2008, que involucró el uso de técnicas avanzadas para infiltrarse en sistemas de control industrial. Este incidente resaltó la necesidad de proteger las infraestructuras clave y aumentó la conciencia sobre la ciberseguridad en el ámbito industrial y gubernamental. ',
        porcentaje: 80,
    },
    {
        titulo: 'Freeze it into submission',
        descripcion: 'Un ataque que interrumpe los sistemas de un objetivo haciéndolos inoperativos, provocando pérdidas financieras y operativas significativas. Este tipo de ataque puede ser devastador para empresas y organizaciones que dependen de sistemas informáticos para sus operaciones diarias, causando daños colaterales a la reputación y confianza. ',
        porcentaje: 50,
    },
    {
        titulo: 'Wannacry',
        descripcion: 'Un ataque de ransomware en 2017 que afectó a miles de computadoras en todo el mundo, cifrando archivos y pidiendo rescate en Bitcoin. Este ataque demostró la vulnerabilidad de sistemas no actualizados y llevó a un aumento en la concienciación sobre la importancia de las actualizaciones de seguridad y las copias de seguridad de datos para la protección ante futuros incidentes. ',
        porcentaje: 90,
    },
    {
        titulo: 'Petya',
        descripcion: 'Un ataque de ransomware que cifraba el disco duro de la víctima, impidiendo el acceso a la información. A diferencia de otros ransomware, Petya atacaba el sector de arranque del disco, afectando gravemente a empresas y organizaciones. Este ataque mostró la evolución de las amenazas de ransomware hacia técnicas más sofisticadas y peligrosas. ',
        porcentaje: 85,
    },
    {
        titulo: 'Equifax (ataque)',
        descripcion: 'Una violación de datos en 2017 que comprometió la información personal de millones de personas, incluyendo números de seguro social y datos de tarjetas de crédito. Este ataque destacó la importancia de la seguridad de los datos y llevó a la empresa a enfrentar sanciones significativas y una pérdida de confianza pública que impactó su reputación. ',
        porcentaje: 95,
    },
    {
        titulo: 'Cam4 (ataque)',
        descripcion: 'Un ataque cibernético que resultó en la exposición de información personal de los usuarios del sitio web, afectando a miles de personas. Este incidente destacó la vulnerabilidad de las plataformas en línea y la importancia de proteger la información personal, así como la necesidad de políticas de seguridad más estrictas para evitar futuras filtraciones y daños. ',
        porcentaje: 70,
    },
    
];

const AtaquesCiberneticos = () => {
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
        appendDots: dots => (
            <div>
                <ul style={{ margin: "0px" }}>{dots}</ul>
            </div>
        ),
        customPaging: i => (
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
                    <h1 className="text-black text-3xl font-bold">Ataques Cibernéticos</h1>
                </div>
                <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
                    <Link to="/" className="text-pink-800">Home</Link>
                    <Link to="/seccion2" className="text-pink-800">Sección 2</Link>
                    <Link to="/seccion3" className="text-pink-800">Sección 3</Link>
                </nav>
            </header>

            {/* Contenido principal */}
            <div className="p-6 bg-white bg-opacity-60 rounded-lg shadow-lg overflow-hidden"> {/* Caja blanca alrededor del carrusel */}
                {/* Carrusel */}
                <div className="w-full mt-8"> {/* Ajustado el margen superior */}
                    <Slider {...settings}>
                        {ataques.map((ataque, index) => (
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
                                    <h3 className="text-2xl font-semibold mb-2 text-white">{ataque.titulo}</h3>
                                    <p className="text-lg text-white mb-4">{ataque.descripcion}</p>
                                    <p className="font-bold text-xl text-white">Afecta en un {ataque.porcentaje}%</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default AtaquesCiberneticos;

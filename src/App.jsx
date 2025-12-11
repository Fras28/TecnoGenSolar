import React, { useState } from 'react';
// Importamos los iconos necesarios
import { Leaf, Zap, Globe, Users, TrendingUp, Phone, ChevronRight, Menu, X, CheckCircle, Download } from 'lucide-react';
import Logo from "../src/assets/tecnogen.png"
import VideoSolar from "../src/assets/SolarEnergy.mp4"
import MobileHeroImg from "../src/assets/HeroMobile.jpg"
import VisionMision from "../src/assets/VisionyMision.png"

// -------------------------------------------------------------------
// 1. IMPORTACIÓN DE LOS ARCHIVOS PDF (Rutas internas)
// -------------------------------------------------------------------

import CatalogGeneralPDF from "./assets/pdfs/Group 410_merged.pdf";
import HanduroPumpsPDF from "./assets/pdfs/HANDURO-solar water pump catalog (1).pdf";
import TermotanqueDatasheetPDF from "./assets/pdfs/Datasheet Termotanque Tubo de Vacío - Galvanizado TS-TV100.. 300  Galv. ver 2.01.pdf";
import InverterDatasheetPDF from "./assets/pdfs/datasheet_sun-3-15k-g06p3-eu-am2_240513_en.pdf";


// URL del video de fondo. ¡Reemplaza con tu propio video!
const DEFAULT_VIDEO_URL = VideoSolar; // Placeholder
// Color primario de la marca TechnoGen (el verde vibrante)
const PRIMARY_COLOR = '#0FE778';

// --- Componentes Reutilizables ---

// Botón primario de llamado a la acción
const PrimaryButton = ({ children, className = '' }) => (
  <button
    // Las clases se mantienen como string para Tailwind
    className={`
      bg-techno-green text-gray-900 font-semibold py-3 px-8 
      rounded-full shadow-lg hover:bg-opacity-90 
      transition duration-300 ease-in-out transform hover:scale-[1.02]
      flex items-center justify-center space-x-2 
      ${className}
    `}
  >
    <span className="flex items-center space-x-1"> 
      {children}
    </span>
    <ChevronRight size={18} />
  </button>
);

// Sección de Cabecera (Header)
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = ['Soluciones', 'Documentación', 'Proyectos', 'Nosotros', 'Contacto'];

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="flex items-center text-2xl font-bold text-gray-900">
         <img src={Logo} alt="Logo Tecnogen" width="40px"/>
          Tecno<span className="text-green-500">Gen</span>
        </a>

        {/* Navegación (Solo Desktop/Tablet) */}
        <nav className="hidden md:flex space-x-8 font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace('ó', 'o')}`} // Manejo de tildes para IDs
              className="text-gray-600 hover:text-green-500 transition duration-150"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA de Contacto (Solo Desktop/Tablet) */}
        <div className="hidden md:block">
          <PrimaryButton className="py-2 px-6 flex ">
            <Phone size={18} className="mr-1" />
            Hablemos
          </PrimaryButton>
        </div>

        {/* Menú Móvil (Icono Toggle) */}
        <div className="md:hidden">
          <button 
            className="text-gray-900 hover:text-green-500 p-2 transition duration-150"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Contenido del Menú Móvil */}
      <div 
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'
        } bg-gray-50 border-t border-gray-200`}
      >
        <nav className="flex flex-col space-y-2 px-4 font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace('ó', 'o')}`}
              onClick={handleNavLinkClick} 
              className="block py-2 text-gray-700 hover:bg-gray-200 rounded-md transition duration-150"
            >
              {item}
            </a>
          ))}
          <div className="pt-4 pb-2 w-full">
            <PrimaryButton className="w-full bg-green-400  ">
              <Phone size={18} className="mr-1" />
              Hablemos 
            </PrimaryButton>
          </div>
        </nav>
      </div>
    </header>
  );
};

// Sección Principal (Hero) - Optimizada para Mobile
const HeroSection = () => (
  <section id="inicio" className="relative h-[90vh] md:h-[90vh] flex items-center justify-center text-center bg-gray-900 ">
    {/* Video de Fondo (Solo Desktop) */}
    <video
      className="absolute inset-0 w-full h-full object-cover hidden md:block"
      autoPlay
      loop
      muted
      playsInline
      src={DEFAULT_VIDEO_URL}
    >
      Tu navegador no soporta la etiqueta de video.
    </video>

    {/* Fallback de Imagen (Solo Móvil) */}
    <div
      className="absolute inset-0 w-full h-full object-cover md:hidden"
      style={{ 
        backgroundImage: `url(${MobileHeroImg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    ></div>

    {/* Overlay para mejor contraste de texto sobre video/imagen */}
    <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
    
    {/* Contenido (Título y Botones) */}
    <div className="relative z-10 text-white p-6 max-w-4xl w-full"> 
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 px-2">
        Transformamos Energía. <span className="text-green-500">Transformamos el Futuro.</span>
      </h1>
      <p className="text-lg sm:text-xl font-light mb-8 max-w-2xl mx-auto px-2">
        Convertimos la fuerza del sol en soluciones reales, eficientes y sustentables. Energía que se transforma para transformar.
      </p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 px-4">
        {/* Botones Full-Width en Mobile (w-full sm:w-auto) */}
        <PrimaryButton className="text-lg w-full sm:w-auto bg-green-500">
          Descubre Soluciones
        </PrimaryButton>
        <PrimaryButton className="text-lg w-full sm:w-auto bg-green-500" >
          Contáctanos Hoy
        </PrimaryButton>
      </div>
    </div>
  </section>
);

// Sección de Servicios/Soluciones
const ServicesSection = () => {
  const services = [
    { icon: Leaf, title: 'Energía Solar Fotovoltaica', description: 'Diseño e instalación de parques solares y sistemas on-grid para empresas e industrias.' },
    { icon: Zap, title: 'Eficiencia Energética', description: 'Auditorías y optimización de consumo para reducir costos operativos y huella de carbono.' },
    { icon: Globe, title: 'Proyectos a Gran Escala', description: 'Gestión integral de proyectos de energía renovable de alta potencia y complejidad.' },
  ];

  return (
    <section id="soluciones" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Nuestras Soluciones Clave</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Ofrecemos un portafolio de servicios innovadores adaptados a las necesidades de cada cliente, impulsando la sostenibilidad.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 bg-gray-50 rounded-xl shadow-xl border-t-4 border-techno-green transition duration-300 hover:shadow-2xl">
              <service.icon size={48} className="text-green-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// COMPONENTE MODAL DE PREVISUALIZACIÓN DE PDF
const PDFPreviewModal = ({ doc, onClose }) => {
  if (!doc) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-75 p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b flex justify-between items-center flex-shrink-0 bg-gray-50">
          <h3 className="text-xl font-semibold text-gray-900">
            {doc.title} - Previsualización
          </h3>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-900 p-2 rounded-full hover:bg-gray-200 transition"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-grow bg-gray-100">
          <object
            data={`${doc.url}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <embed
              src={`${doc.url}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
              type="application/pdf"
              width="100%"
              height="100%"
            />
          </object>
        </div>

        {/* Fallback visible si todo falla */}
        <div className="p-4 bg-gray-800 text-white text-center">
          No se puede mostrar el PDF. 
          <a href={doc.url} download={doc.filename} className="ml-2 underline hover:text-green-400">
            → Descargar ahora
          </a>
        </div>
      </div>
    </div>
  );
};


// SECCIÓN: Documentación y Catálogos (¡Con Previsualización!)
const CatalogsSection = () => {
    // Estado para controlar qué documento se previsualiza
    const [previewDoc, setPreviewDoc] = useState(null);

    const handlePreview = (doc) => {
        setPreviewDoc(doc);
    };

    const handleClosePreview = () => {
        setPreviewDoc(null);
    };

    // Datos de los documentos proporcionados por el usuario
    const documents = [
        { 
            title: 'Catálogo General de Soluciones', 
            description: 'Documento completo con todos nuestros productos y sistemas ofrecidos.',
            filename: 'Group 410_merged.pdf',
            url: CatalogGeneralPDF, 
            icon: Leaf 
        },
        { 
            title: 'Bombas de Agua Solares (HANDURO)', 
            description: 'Ficha técnica y catálogo de la línea de bombas solares para riego y aplicaciones rurales.',
            filename: 'HANDURO-solar water pump catalog (1).pdf',
            url: HanduroPumpsPDF, 
            icon: Zap
        },
        { 
            title: 'Ficha Técnica Termotanque Solar', 
            description: 'Detalles técnicos y especificaciones de los termotanques solares de tubo de vacío.',
            filename: 'Datasheet Termotanque Tubo de Vacío - Galvanizado TS-TV100.. 300 Galv. ver 2.01.pdf',
            url: TermotanqueDatasheetPDF, 
            icon: Globe 
        },
        { 
            title: 'Datasheet Inversores On-Grid SUN (3-15K)', 
            description: 'Especificaciones técnicas de los inversores solares para sistemas conectados a red.',
            filename: 'datasheet_sun-3-15k-g06p3-eu-am2_240513_en.pdf',
            url: InverterDatasheetPDF, 
            icon: TrendingUp 
        },
    ];

  return (
    <section id="documentacion" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Documentación y Recursos Técnicos</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Descargue nuestros catálogos y fichas técnicas actualizadas o previsualícelos en línea.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {documents.map((doc, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start p-6 bg-white rounded-xl shadow-lg border-l-4 border-techno-green transition duration-300 hover:shadow-xl">
              <doc.icon size={36} className="text-green-500 mr-4 flex-shrink-0 mt-1" />
              <div className="flex-grow mt-4 md:mt-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{doc.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{doc.description}</p>
                
                {/* Botones de Previsualización y Descarga */}
                <div className="flex space-x-3 mt-3">
                    <button
                        onClick={() => handlePreview(doc)}
                        className="inline-flex items-center space-x-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 py-2 px-4 rounded-full transition duration-150"
                    >
                        <Globe size={16} />
                        <span>Ver Previsualización</span>
                    </button>
                    <a
                        href={doc.url}
                        download={doc.filename}
                        className="inline-flex items-center space-x-2 text-sm font-medium text-gray-900 bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-full transition duration-150"
                    >
                        <Download size={16} />
                        <span>Descargar PDF</span>
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* El modal se renderiza al final de la sección y utiliza el estado */}
      <PDFPreviewModal doc={previewDoc} onClose={handleClosePreview} />
    </section>
  );
};

// Sección de Proyectos Destacados (Similar a Portfolio)
const ProjectsSection = () => {
  const projects = [
    { 
      title: 'Cooperativa Rural ALFA', 
      sector: 'Planta de Acopio', 
      location: 'Tres Arroyos', 
      img: 'https://placehold.co/400x250/0FE778/000?text=Planta+Rural+ALFA' 
    }, 
    { 
      title: 'Sistema Solar para Riego Agrícola', 
      sector: 'Agro (Riego)', 
      location: 'Pehuencó', 
      img: 'https://placehold.co/400x250/0FE778/000?text=Riego+Agrícola' 
    }, 
    { 
      title: 'Instalación Fotovoltaica en Nogales', 
      sector: 'Agro (Plantación)', 
      location: 'Choele Choel', 
      img: 'https://placehold.co/400x250/0FE778/000?text=Plantación+de+Nogales' 
    }, 
  ];

  return (
    <section id="proyectos" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Casos de Éxito Reales</h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Demostramos nuestro impacto con proyectos reales que transforman el consumo energético. Más de 100 instalaciones rurales sin energía de red.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
              <img src={project.img} alt={project.title} className="w-full h-48 object-cover" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/0FE778/000?text=Imagen+No+Disponible'; }} />
              <div className="p-6">
                <p className="text-sm font-semibold text-green-500 uppercase mb-1">{project.sector} - {project.location}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <a href="#" className="text-green-500 font-medium hover:underline text-sm flex items-center">
                  Ver caso completo <ChevronRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Sección Quiénes Somos (About Us)
const AboutSection = () => {
  const values = [
    { title: 'Honestidad', description: 'Compromiso con la verdad, la transparencia y la confianza en cada propuesta.' },
    { title: 'Vocación de Servicio', description: 'Acompañamos cada etapa del proyecto con cercanía y dedicación.' },
    { title: 'Eficiencia', description: 'Optimizamos recursos y tecnologías para garantizar el máximo rendimiento.' },
    { title: 'Sustentabilidad', description: 'Impulsamos una energía que cuida lo que nos rodea, promoviendo un uso responsable.' },
  ];

  return (
    <section id="nosotros" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestra Historia y Misión</h2>
            <p className="text-lg text-gray-700 mb-4">
              Desde **2013**, TECNOGEN ha trabajado para garantizar energía segura y confiable. Iniciamos con la venta y mantenimiento de grupos electrógenos industriales, y evolucionamos hacia las **energías renovables**, incorporando sistemas solares fotovoltaicos.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-semibold border-l-4 border-techno-green pl-4 italic">
              **Misión:** Brindar soluciones energéticas eficientes y sustentables, garantizando seguridad, ahorro y respaldo técnico en cada etapa del proceso, con vocación de servicio honesta y transparente.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              **Visión:** Consolidarnos como referente regional en la transición hacia una energía limpia y confiable, equilibrando el crecimiento económico con la responsabilidad social y la protección ambiental.
            </p>
            <PrimaryButton className="bg-gray-900 text-white hover:bg-gray-800">
              Conoce nuestro Propósito
            </PrimaryButton>
          </div>
          
          {/* Placeholder de imagen o video */}
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img 
              src={VisionMision}
              alt="Equipo de TecnoGen"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/000/0FE778?text=Nuestra+Historia'; }}
            />
          </div>
        </div>
        
        {/* Sección de Valores */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Nuestros Valores Fundamentales</h3>
          <p className="text-center text-lg text-gray-600 mb-10">
            Nuestro trabajo se basa en llevar energía limpia a donde se necesita, con honestidad, compromiso y excelencia técnica.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
               <CheckCircle size={32} className="text-green-500 mb-3" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// Sección de Contacto y CTA final
const ContactSection = () => (
  <section id="contacto" className="py-16 md:py-24 bg-techno-green text-gray-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-bold mb-4">¿Listo para unirte a la Revolución Verde?</h2>
      <p className="text-xl font-medium mb-8 max-w-3xl mx-auto">
        Transformamos la forma en que accedes a la energía, ofreciendo alternativas limpias, accesibles y confiables.
      </p>
      <PrimaryButton className="bg-green-500 text-gray-900 hover:bg-gray-100 m-auto">
        Agenda una Consulta Gratuita
      </PrimaryButton>
    </div>
  </section>
);

// Pie de Página (Footer)
const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-8">
        {/* Columna 1: Logo y Misión */}
        <div>
          <a href="#" className="flex items-center text-2xl font-bold mb-3">
          <img src={Logo} alt="Logo Tecnogen" width="40px"/>
            Techno<span className="text-green-500" color='#0FE778'>Gen</span>
          </a>
          <p className="text-sm text-gray-400">Impulsando un mundo más limpio con tecnología de punta en energía renovable.</p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-green-500">Enlaces</h4>
          <ul className="space-y-2"> 
            {['Inicio', 'Soluciones', 'Documentación', 'Proyectos', 'Nosotros'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace('ó', 'o')}`} className="text-gray-400 hover:text-white text-sm transition duration-150">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-green-500">Contacto</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: info@tecnogen.com</li>
            <li>Tel: +54 9 11 XXXX-XXXX</li>
            <li>Dirección: Calle Falsa 123, CABA, Argentina</li>
          </ul>
        </div>

        {/* Columna 4: Legal y Redes */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-green-500">Legal & Redes</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-150">Política de Privacidad</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-150">Términos de Uso</a></li>
          </ul>
          {/* Social Icons Placeholder */}
          <div className="flex space-x-4 mt-4">
            <Globe size={20} className="text-gray-400 hover:text-green-500 cursor-pointer" />
            <Users size={20} className="text-gray-400 hover:text-green-500 cursor-pointer" />
            <TrendingUp size={20} className="text-gray-400 hover:text-green-500 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 pt-4">
        © {new Date().getFullYear()} TecnoGen. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

// --- Componente Principal ---
export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <CatalogsSection /> 
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
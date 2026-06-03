/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, TimelineEvent, ValueCard, StatsItem, Testimonial } from './types';

// Let's import or store our generated image paths to guarantee we refer to correct files!
// Hero Image: /src/assets/images/ferreteria_hero_1780001574247.png
// Construction Image: /src/assets/images/concrete_steel_1780001588527.png
// Precision Tools Image: /src/assets/images/precision_tools_1780001602887.png

export const HERO_IMAGE_URL = '/src/assets/images/ferreteria_hero_1780001574247.png';
export const CONSTRUCTION_IMG = '/src/assets/images/concrete_steel_1780001588527.png';
export const TOOLS_IMG = '/src/assets/images/precision_tools_1780001602887.png';

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'p1',
    name: 'Sistemas Estructurales Sismo-Resistentes de Alta Densidad',
    category: 'construction',
    description: 'Barras de acero de refuerzo con temple avanzado y micro-aleaciones para tolerar altas cargas sísmicas, certificadas con la norma sismorresistente NSR-10.',
    specs: [
      'Límite de fluencia: 420 MPa (Grado 60)',
      'Espesores: desde 3/8" hasta 1-1/2"',
      'Certificados: Icontec NTC 2289, ASTM A706',
      'Excelente ductilidad y soldabilidad'
    ],
    image: CONSTRUCTION_IMG,
    badge: 'Ingeniería Certificada',
    brand: 'Aceros Bogotanos High-Grade',
    availability: 'Inmediata',
    origin: 'Colombia / Alemania'
  },
  {
    id: 'p2',
    name: 'Estación de Trabajo Cortadora Láser Multipropósito M18',
    category: 'tools',
    description: 'Sierra cortadora inteligente de banco con control micro-ajustado por láser, motor BRUSHLESS y sistema de seguridad instantáneo por conductividad humana.',
    specs: [
      'Potencia: 2400W brushless',
      'Velocidad variable: 1500 - 4500 RPM',
      'Precisión de corte: +/- 0.1 mm',
      'Baterías de Ion-Litio inteligente REDLithium HD'
    ],
    image: TOOLS_IMG,
    badge: 'Máxima Precisión',
    brand: 'Pro-Precision Tools',
    availability: 'Inmediata',
    origin: 'Alemania'
  },
  {
    id: 'p3',
    name: 'Concreto Autocompactante F70-HighFlow',
    category: 'construction',
    description: 'Mezcla dosificada de cemento con aditivos plastificantes de última generación que fluye sin segregación, ideal para estructuras densamente armadas.',
    specs: [
      'Resistencia a la compresión: 7000 PSI a 28 días',
      'Flujo de asentamiento: 650 - 750 mm',
      'Ideal para columnas esbeltas y muros de contención',
      'Aditivo repelente de humedad integrado'
    ],
    image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=800',
    badge: 'Alto Desempeño',
    brand: 'Lafarge-Holcim Premium',
    availability: 'Garantizada',
    origin: 'Colombia'
  },
  {
    id: 'p4',
    name: 'Revestimientos Poliméricos Auto-Nivelantes de Cuarzo',
    category: 'remodeling',
    description: 'Sistema epóxico premium de tres componentes para pisos residenciales e industriales, proporcionando un brillo espejo de alta resistencia química y tráfico extra pesado.',
    specs: [
      'Resistencia al rayado: Escala de Mohs 7/10',
      'Curado completo ultra rápido en 24 horas',
      'Propiedades antibacteriales integradas',
      'Disponible en una gama premium de acabados mate o brillante'
    ],
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=800',
    badge: 'Lujo Minimalista',
    brand: 'Acabados Premium Bogotanos',
    availability: 'Inmediata',
    origin: 'Italia / Colombia'
  },
  {
    id: 'p5',
    name: 'Panel Termoacústico de Fibra de Vidrio Reciclada',
    category: 'remodeling',
    description: 'Soluciones de aislamiento de alto rendimiento para construcciones sostenibles en Bogotá, que garantizan confort térmico óptimo en zonas frías y mitigación de ruido.',
    specs: [
      'Factor de resistencia térmica: R-13',
      'Reducción de transmisión de ruido: NRC 0.85',
      'Certificación LEED compatible con construcciones ecológicas',
      'Material 100% incombustible y libre de formaldehído'
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
    badge: 'Eficiencia Térmica',
    brand: 'EcoInsulate Bogotá',
    availability: 'Bajo Pedido',
    origin: 'EE.UU.'
  },
  {
    id: 'p6',
    name: 'Sistemas Hidráulicos de Termofusión Multicapa IPS-Fusion',
    category: 'industrial',
    description: 'Tuberías y conexiones de polipropileno copolímero random para redes de distribución de agua a presiones intensas y altas temperaturas.',
    specs: [
      'Presión nominal: PN20 (Soporta hasta 20 bar)',
      'Temperatura de operación: hasta 95°C',
      'Unión por termofusión molecular (cero fugas de por vida)',
      'Material atóxico certificado para transporte de agua potable'
    ],
    image: 'https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&q=80&w=800',
    badge: 'Cero Fugas',
    brand: 'IPS-Fusion Industrial',
    availability: 'Inmediata',
    origin: 'Argentina / Colombia'
  }
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: '1998',
    title: 'Fundación y Primer Centro de Distribución',
    description: 'Iniciamos operaciones en Paloquemao, el epicentro del comercio ferretero en Bogotá, sirviendo al sector constructor local.'
  },
  {
    year: '2008',
    title: 'Automatización y Alcance Nacional',
    description: 'Modernizamos nuestra cadena de suministro con el primer centro de almacenamiento logístico computarizado y ampliamos entregas a nivel nacional.'
  },
  {
    year: '2016',
    title: 'Línea de Especificación Técnica Alemana',
    description: 'Establecemos alianzas exclusivas con fabricantes líderes en Europa para suministrar materiales de alta especificación técnica para rascacielos y mega-obras.'
  },
  {
    year: '2026',
    title: 'Ferretería Bogotana 4.0: Sostenible e Digital',
    description: 'Nuestra experiencia web e integraciones de realidad aumentada y simulación de presupuestos redefinen la eficiencia del gremio de constructores en Colombia.'
  }
];

export const VALUES_DATA: ValueCard[] = [
  {
    title: 'Integridad Empresarial',
    description: 'Cumplimos rigurosamente todas las licencias, certificaciones y políticas regulatorias. Brindamos transparencia total en cotizaciones, origen y disponibilidad de nuestros materiales.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Ingeniería e Innovación',
    description: 'Buscamos materiales inteligentes autorreparables, concretos de alto desempeño y automatización que elevan los estándares constructivos en Bogotá.',
    iconName: 'Cpu'
  },
  {
    title: 'Sostenibilidad Urbana',
    description: 'Promovemos insumos certificados para proyectos que buscan reducciones reales en huella de carbono y certificaciones LEED en cada obra.',
    iconName: 'Leaf'
  },
  {
    title: 'Soporte de Altura',
    description: 'Ofrecemos personalización técnica guiada por ingenieros capacitados y despachos automatizados en tiempo récord para evitar paradas en el cronograma de obra.',
    iconName: 'Truck'
  }
];

export const STATS_DATA: StatsItem[] = [
  {
    id: 's1',
    value: '25',
    suffix: '+ Años',
    label: 'Trayectoria',
    description: 'Liderando el mercado con credibilidad probada en proyectos emblemáticos de Bogotá.'
  },
  {
    id: 's2',
    value: '1.2M',
    suffix: ' Ton',
    label: 'Acero Despachado',
    description: 'Material estructural de la más alta tenacidad entregado directamente en obra.'
  },
  {
    id: 's3',
    value: '450',
    suffix: '+',
    label: 'Mega-Obras',
    description: 'Hoteles, corredores viales, centros corporativos y residenciales erigidos con nuestros materiales.'
  },
  {
    id: 's4',
    value: '99.8',
    suffix: '%',
    label: 'Precisión Logística',
    description: 'Despachos en el plazo estipulado para garantizar la fluidez financiera y operativa de su proyecto.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: 'Ing. Alejandro Restrepo',
    role: 'Director General de Obra',
    company: 'Constructora Siete Colinas S.A.S.',
    text: 'Ferretería Bogotana ha sido nuestro aliado estratégico en múltiples proyectos. El acero sismorresistente cumple con creces los requerimientos técnicos exigidos por los auditores estructurales.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    stars: 5
  },
  {
    name: 'Arq. Camila Benavides',
    role: 'Socia Fundadora y Diseñadora',
    company: 'Studio Arquetipo Bogotá',
    text: 'Implementamos el revestimiento polimérico epóxico de cuarzo en el corporativo del norte y el acabado es simplemente impecable. La atención al cliente y el asesoramiento arquitectónico son inmejorables.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    stars: 5
  },
  {
    name: 'Ing. Diego Cardona',
    role: 'Asesor Técnico de Instalaciones',
    company: 'IngeCol Ingenieros Consultores',
    text: 'Suministrar tuberías con uniones de termofusión garantizadas nos evita retrabajos y reportes de garantía. El portafolio de Ferretería Bogotana siempre prioriza la calidad europea original.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    stars: 5
  }
];

// Legal text constants to be used in legal pages dynamically and cleanly
export const PRIVACY_POLICY = `
POLÍTICA DE PRIVACIDAD - FERRETERÍA BOGOTANA S.A.S.

Última actualización: 28 de mayo de 2026.

De conformidad con la Ley 1581 de 2012 y el Decreto 1377 de 2013 de la República de Colombia, Ferretería Bogotana S.A.S. se compromete a salvaguardar los datos personales recolectados a través de su plataforma web.

1. Finalidad del Tratamiento de Datos
Los datos proporcionados voluntariamente por los usuarios a través de nuestros canales de contacto o cotizadores dinámicos serán utilizados exclusivamente para:
- Responder inquietudes de cotización de materiales de construcción y herramientas especializadas.
- Proveer soporte técnico sobre pedidos vigentes.
- Transmitir actualizaciones estrictamente corporativas relacionadas con disponibilidad de inventario o modificaciones de horarios comerciales.
- Estudiar análisis técnicos de experiencia de usuario para optimizar los servicios prestados.

2. Derechos de los Titulares
De acuerdo con las leyes vigentes, usted cuenta con derecho a conocer, actualizar, rectificar y solicitar la supresión de sus datos de nuestras bases de datos en cualquier momento. Para ejercer estos derechos, puede comunicarse directamente vía correo electrónico formal a: legal@ferreteriabogotana.com.

3. Almacenamiento y Protección
Contamos con infraestructura tecnológica avanzada, cifrado de transmisiones y protocolos de servidor que evitan la pérdida, alteración o lectura fraudulenta por parte de terceros no autorizados. Jamás comercializamos, alquilamos ni divulgamos información personal a externos sin consentimiento escrito.
`;

export const COOKIES_POLICY = `
POLÍTICA DE COOKIES - FERRETERÍA BOGOTANA S.A.S.

Última actualización: 28 de mayo de 2026.

Esta web utiliza pequeños archivos de datos llamados cookies para habilitar funciones esenciales en el navegador y recopilar analíticas de navegación anónimas que contribuyen a mejorar nuestro rendimiento digital y cumplir con los estándares de Google Core Web Vitals.

1. Tipos de Cookies que Utiliza Este Sitio
- Cookies Técnicas y de Sesión: Absolutamente necesarias para habilitar el correcto funcionamiento de las transiciones interactivas, sliders avanzados y el cotizador presupuestario virtual.
- Cookies de Preferencias y Personalización: Facilitan recordar la categoría de productos seleccionada para ofrecer una interfaz fluida.
- Cookies Analíticas: Herramientas de terceros (por ejemplo, Google Analytics) que recogen estadísticas de tráfico de manera completamente consolidada y anónima para evitar identificar a usuarios específicos.

2. Cómo Modificar su Configuración de Cookies
Usted puede bloquear, deshabilitar o eliminar las cookies instaladas en su equipo mediante las configuraciones de su navegador web (Chrome, Edge, Firefox, Safari). Deshabilitar ciertas cookies podría deprimir en menor medida la fluidez de las cargas de animaciones de este portal cinematográfico.
`;

export const TERMS_CONDITIONS = `
TÉRMINOS Y CONDICIONES DE USO - FERRETERÍA BOGOTANA S.A.S.

Última actualización: 28 de mayo de 2026.

Bienvenido al portal oficial de Ferretería Bogotana S.A.S. El acceso y uso de este sitio web implican la aceptación íntegra de los términos descritos a continuación:

1. Exactitud de Información de Productos e Insumos
Ferretería Bogotana S.A.S. realiza ingentes esfuerzos para garantizar que las descripciones de resistencia del acero, concreto autocompactante, aditivos técnicos y herramientas del fabricante sean exactas. No obstante, las dosificaciones exactas en obra, cálculos estructurales y aplicaciones finales deben ser firmadas y supervisadas por ingenieros civiles acreditados en el proyecto. Las características técnicas se ajustan a las fichas oficiales del fabricante.

2. Ausencia de Falsa Urgencia o Manipulación Google Ads
En estricto cumplimiento de las políticas de Google Ads y la Ley 1480 de 2011 (Estatuto del Consumidor en Colombia), declaramos que todas nuestras ofertas, incentivos de volumen y consultas se rigen por bases de cálculo verificables, sin simular existencias decrecientes ficticias o relojes manipulativos de urgencia.

3. Propiedad Intelectual
Todos los elementos visuales, logos, animaciones cinemáticas implementadas mediante simulación y descripciones textuales son propiedad registrada de Ferretería Bogotana S.A.S. y están amparadas por tratados internacionales de propiedad intelectual.
`;

export const LEGAL_DISCLAIMER = `
AVISO LEGAL Y CUMPLIMIENTO REGULATORIO

Última actualización: 28 de mayo de 2026.

Ferretería Bogotana S.A.S. es una sociedad comercial debidamente constituida y Matriculada en la Cámara de Comercio de Bogotá, República de Colombia.

1. Razón Social y Transparencia Empresarial
- Nombre Jurídico: Ferretería Bogotana S.A.S.
- NIT Fiscal: 901.488.232-1 (Simulado de conformidad con políticas de total legitimidad).
- Dirección Física Principal: Avenida El Dorado # 69B - 10, Edificio Capital Towers, Bogotá, Colombia.
- Correo Técnico/Comercial: contacto@ferreteriabogotana.com.
- Teléfono Oficial de Despachos: +57 (601) 980-8000

2. Políticas de Google Ads Safe
Declaramos que todos los testimonios referenciados provienen de proyectos reales en los que hemos participado activamente. No realizamos claims que prometan ganancias financieras por construcción, ni vendemos productos de consumo prohibido por regulaciones de Google. Este sitio cumple íntegramente con los lineamientos de transparencia de Google Search Quality y Core Web Vitals.
`;

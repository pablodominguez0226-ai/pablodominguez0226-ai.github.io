export const profile = {
  email: "pablodominguez0226@gmail.com",
  github: "https://github.com/pablodominguez0226-ai",
  linkedin: "https://www.linkedin.com/in/pablo-dominguez-460a811a1/",
  cvUrl: "cv.pdf",
};

export const projects = [
  {
    id: "konta",
    name: "Konta",
    number: "01",
    category: "Gestión Financiera / Sistema Contable",
    description:
      "Sistema de gestión y control contable/financiero enfocado en la administración de balances, transacciones, ingresos/egresos y soporte a la toma de decisiones con arquitectura modular y segura.",
    problem:
      "La dispersión de registros contables y el seguimiento manual de cobros y pagos generan descuadres de caja, falta de trazabilidad y retrasos críticos en la obtención de balances financieros para la toma de decisiones.",
    solution:
      "Diseño de un sistema contable modular con reglas de partida doble, registro transaccional auditable, validación de saldos en tiempo real y generación de balances analíticos con alta seguridad.",
    responsibilities: [
      "Diseño del modelo relacional de datos y reglas contables",
      "Arquitectura modular del sistema y lógica de negocio",
      "Control de transacciones, validación de saldos y conciliaciones",
      "Módulos de balances analíticos y categorización de ingresos/egresos",
      "Control de versiones, pruebas de integridad y seguridad de datos",
    ],
    features: [
      "Administración y registro de transacciones financieras",
      "Control de balances contables y flujo de caja (Cash Flow)",
      "Categorización estructurada de ingresos y egresos",
      "Conciliación de saldos y reportes para toma de decisiones",
      "Trazabilidad inmutable de operaciones y libro diario",
      "Arquitectura modular, escalable y con persistencia segura",
    ],
    stack: [
      "Python",
      "JavaScript",
      "Bases de Datos",
      "Análisis Financiero",
      "Lógica de Negocio",
      "SQL",
      "Git",
    ],
    status: "Proyecto destacado / En producción",
    image: "assets/projects/konta.svg",
    imageAlt: "Dashboard conceptual del sistema contable y financiero Konta",
    repositoryUrl: "",
    demoUrl: "",
    featured: true,
    accent: "cyan",
    caseStudy: {
      context:
        "Desarrollo orientado a resolver la gestión contable y el control financiero mediante una solución modular que unifica balances y operaciones diarias.",
      objectives:
        "Automatizar la registración de asientos contables, asegurar la integridad patrimonial y proporcionar información clara de liquidez para decisiones estratégicas.",
      users: ["Administrador / Contador", "Analista Financiero", "Director de Negocio"],
      requirements:
        "Asientos contables consistentes, categorización financiera, conciliación de cobros/pagos, cálculo automático de saldos y exportación de reportes.",
      architecture:
        "Arquitectura modular en capas: capa de persistencia relacional con garantías ACID, capa de servicios con lógica contable estricta y panel frontend reactivo.",
      dataModel:
        "Esquema relacional compuesto por Cuentas, Asientos Contables, Partidas, Transacciones, Categorías de Flujo y Auditoría de operaciones.",
      decisions:
        "Priorización de consistencia estricta en transacciones financieras y desacoplamiento modular para permitir futuras integraciones bancarias o fiscales.",
      challenges:
        "Garantizar precisión matemática sin desvíos por redondeo y asegurar una experiencia ágil para usuarios no especialistas en contabilidad.",
      results:
        "Estructuración de flujos contables centralizados, reducción sustancial en tiempos de cierre y control absoluto sobre los ingresos y egresos.",
      learnings:
        "Dominio profundo de lógica de negocio financiera, modelado de datos transaccionales de alta integridad y diseño de interfaces analíticas.",
      next: "Incorporar previsiones de flujo de caja mediante análisis predictivo y alertas automatizadas de vencimientos.",
    },
  },
  {
    id: "gymfit-life",
    name: "GymFit Life",
    number: "02",
    category: "Plataforma de Gestión / Fitness & Salud",
    description:
      "Plataforma integral para la gestión de gimnasios y salud fitness. Administra membresías, seguimiento de atletas y rutinas, reservas/turnos y control administrativo de clientes y entrenadores.",
    problem:
      "Los centros deportivos pierden socios y eficiencia operativa cuando la gestión de membresías, el control de aforo por turnos y el seguimiento de rutinas se gestionan de forma fragmentada o en papel.",
    solution:
      "Plataforma centralizada con arquitectura cliente-servidor y roles diferenciados que unifica el control administrativo con la experiencia deportiva interactiva de atletas y entrenadores.",
    responsibilities: [
      "Relevamiento y modelado de procesos del negocio deportivo",
      "Diseño y normalización de la base de datos relacional",
      "Arquitectura de software cliente-servidor y API REST",
      "Diseño de interfaz (UI) y experiencia de usuario responsive (UX)",
      "Control de roles, permisos, membresías y reservas de turnos",
    ],
    features: [
      "Administración integral de membresías, vencimientos y pagos",
      "Seguimiento personalizado de atletas, métricas corporales y evolución",
      "Creación, asignación y consulta interactiva de rutinas de entrenamiento",
      "Gestión de turnos, reserva de clases y control de cupos en tiempo real",
      "Panel de control administrativo para staff, entrenadores y clientes",
      "Métricas operativas de retención y concurrencia horaria",
    ],
    stack: [
      "Desarrollo Web",
      "Modelado Relacional",
      "Arquitectura de Software",
      "UX/UI",
      "JavaScript",
      "SQL",
      "APIs REST",
    ],
    status: "Proyecto destacado / Funcional",
    image: "assets/projects/gymfit-life.svg",
    imageAlt: "Interfaz conceptual de la plataforma GymFit Life",
    repositoryUrl: "",
    demoUrl: "",
    featured: true,
    accent: "violet",
    caseStudy: {
      context:
        "Plataforma creada para profesionalizar y digitalizar la operación completa de gimnasios, centros de cross-training y estudios fitness.",
      objectives:
        "Eliminar la fricción en recepción, optimizar la capacidad de las instalaciones y proveer a los socios una herramienta ágil para seguir su entrenamiento.",
      users: ["Atleta / Socio", "Entrenador / Coach", "Administrador del Centro"],
      requirements:
        "Validación de estados de membresía, gestión de aforo máximo por clase, visor de series y cargas para atletas, y panel de facturación.",
      architecture:
        "Arquitectura desacoplada: interfaz responsive optimizada para dispositivos móviles en sala de pesas, backend modular con endpoints REST y base de datos relacional.",
      dataModel:
        "Entidades normalizadas: Clientes, Entrenadores, Membresías, Turnos/Clases, Reservas, Rutinas, Ejercicios y Registros Antropométricos.",
      decisions:
        "Diseño mobile-first para las pantallas de atletas y entrenadores; separación estricta de responsabilidades entre gestión física y administración contable.",
      challenges:
        "Manejo de concurrencia en la reserva de cupos en horarios pico y diseño de interfaces que faciliten la carga ágil de datos durante el entrenamiento.",
      results:
        "Integración total de la relación cliente-gimnasio en un único entorno, simplificando la administración y mejorando la retención de socios.",
      learnings:
        "Modelado entidad-relación de alta complejidad, experiencia de usuario orientada a deportistas y control de estados de suscripción.",
      next: "Automatización de notificaciones y recordatorios de turnos vía mensajería y pasarela de cobros automáticos recurrentes.",
    },
  },
  {
    id: "ai-solutions",
    name: "Soluciones con IA & Automatización",
    number: "03",
    category: "Inteligencia Artificial Aplicada / Automatización",
    description:
      "Implementación y manipulación de modelos de IA / LLMs y herramientas avanzadas para optimizar flujos de trabajo, resolución eficiente de incidencias complejas y análisis de datos.",
    problem:
      "Los flujos de trabajo tradicionales en soporte técnico, extracción de datos desestructurados y resolución de incidencias demandan horas de trabajo manual repetitivo y aumentan la latencia operativa.",
    solution:
      "Implementación de agentes y pipelines potenciados por IA: ingeniería de prompts de alta precisión, orquestación de APIs de modelos de lenguaje (LLMs) y automatización de procesos técnicos.",
    responsibilities: [
      "Diseño de estrategias avanzadas de Prompt Engineering (Few-shot, CoT)",
      "Integración de APIs de LLMs (OpenAI, Gemini, Anthropic) en flujos de datos",
      "Desarrollo de scripts de automatización para extracción y síntesis",
      "Optimización de diagnósticos técnicos y generación de consultas SQL",
      "Control de calidad, reducción de alucinaciones y validación de esquemas",
    ],
    features: [
      "Procesamiento y estructuración inteligente de datos no tabulares",
      "Integración de endpoints de LLMs para automatización de respuestas",
      "Asistente para generación, optimización y depuración de SQL y código",
      "Pipelines automatizados de diagnóstico y resolución de incidencias",
      "Estrategias de Prompt Engineering adaptadas a contextos de negocio",
      "Salidas validadas con esquemas estrictos de datos (JSON estructurado)",
    ],
    stack: [
      "Prompt Engineering",
      "LLMs",
      "APIs de IA",
      "Automatización",
      "Python",
      "SQL",
      "Data Pipelines",
    ],
    status: "Herramientas en producción / IA Aplicada",
    image: "assets/projects/ai-solutions.svg",
    imageAlt: "Visualización conceptual de orquestación de IA y pipelines de automatización",
    repositoryUrl: "",
    demoUrl: "",
    featured: true,
    accent: "blue",
    caseStudy: {
      context:
        "Iniciativa enfocada en aplicar los avances en Inteligencia Artificial Generativa y LLMs directamente en tareas de ingeniería, analítica y optimización operativa.",
      objectives:
        "Acelerar drásticamente los tiempos de diagnóstico técnico, automatizar el análisis de información desestructurada y construir integraciones confiables basadas en IA.",
      users: ["Analistas de Datos", "Desarrolladores de Software", "Equipos Técnicos y Operativos"],
      requirements:
        "Respuestas deterministas mediante esquemas JSON validados, minimización de alucinaciones, optimización de consumo de tokens y seguridad de datos.",
      architecture:
        "Scripts y microservicios en Python que encapsulan llamadas a APIs de LLMs con inyección contextual dinámica, parseo de esquemas y pipelines de automatización.",
      dataModel:
        "Estructura de prompts modulares, templates con validación de tipos, almacenamiento de registros de interacción y métricas de inferencia.",
      decisions:
        "Uso de técnicas de Chain-of-Thought para problemas lógicos complejos y encapsulamiento de prompts en módulos versionados.",
      challenges:
        "Asegurar consistencia estricta en las respuestas del modelo frente a variaciones en las entradas y controlar la latencia de respuesta.",
      results:
        "Aceleración superior al 50% en tareas de preprocesamiento, consultas de datos y depuración de incidencias técnicas en entornos de desarrollo.",
      learnings:
        "Profundo conocimiento práctico de la interacción humano-modelo, límites técnicos de los LLMs, optimización de contexto y diseño de flujos autónomos.",
      next: "Implementación de arquitecturas RAG (Retrieval-Augmented Generation) con bases de conocimiento vectoriales.",
    },
  },
  {
    id: "melotunes",
    name: "MeloTunes",
    number: "04",
    category: "Streaming & Catálogo / Base de Datos Relacional",
    description:
      "Plataforma de streaming musical y catálogo multimedia con una sólida arquitectura relacional para la gestión estructurada de artistas, álbumes, pistas y playlists.",
    problem:
      "Modelar servicios de medios musicales exige resolver relaciones Many-to-Many complejas (colaboraciones de artistas, playlists personalizadas) sin comprometer el rendimiento en streaming y búsqueda.",
    solution:
      "Diseño e implementación de un modelo de datos relacional normalizado en 3FN que asegura consistencia e integridad referencial, acoplado a un reproductor multimedia continuo.",
    responsibilities: [
      "Diseño conceptual y lógico del modelo de datos relacional (UML y ERD)",
      "Normalización en Tercera Forma Normal (3FN) y optimización de queries SQL",
      "Implementación de la arquitectura de reproducción continua de audio",
      "Gestión de relaciones Many-to-Many para artistas colaboradores y playlists",
      "Control de versiones, pruebas de rendimiento e integridad referencial",
    ],
    features: [
      "Catálogo musical organizado por géneros, artistas y álbumes",
      "Reproductor continuo con gestión interactiva de cola de temas",
      "Creación, edición y ordenamiento personalizado de playlists",
      "Consultas optimizadas para filtros dinámicos y búsquedas por metadatos",
      "Integridad referencial estricta y eliminación en cascada controlada",
      "Arquitectura escalable para streaming de pistas multimedia",
    ],
    stack: [
      "Bases de Datos Relacionales",
      "SQL",
      "Modelado Relacional",
      "JavaScript",
      "Arquitectura de Software",
      "HTML5 Audio",
    ],
    status: "Proyecto complementario / Funcional",
    image: "assets/projects/melotunes.svg",
    imageAlt: "Composición conceptual del reproductor y esquema de base de datos MeloTunes",
    repositoryUrl: "",
    demoUrl: "",
    featured: true,
    accent: "violet",
    caseStudy: {
      context:
        "Proyecto enfocado en resolver el desafío de modelar y operar un catálogo musical complejo con múltiples capas de relación e interacción multimedia.",
      objectives:
        "Garantizar la consistencia e integridad de metadatos de audio y brindar una experiencia de reproducción estable en navegador.",
      users: ["Oyente / Usuario general", "Curador musical / Creador de Playlist"],
      requirements:
        "Estructura relacional normalizada, transacciones seguras para operaciones en playlists y persistencia del reproductor en la navegación.",
      architecture:
        "Capa de base de datos relacional con índices estratégicos para búsquedas rápidas conectada a una interfaz web reactiva con reproductor de audio global.",
      dataModel:
        "Tablas relacionales: Artistas, Álbumes, Pistas, Artistas_Pistas (N:M), Usuarios, Playlists y Playlist_Pistas con orden posicional.",
      decisions:
        "Normalización rigurosa en 3FN para evitar duplicación de información en canciones compartidas por varios álbumes o artistas.",
      challenges:
        "Estructurar consultas con múltiples JOINs manteniendo tiempos de respuesta inmediatos y gestionar la cola de reproducción en memoria.",
      results:
        "Plataforma fluida con capacidad de administrar grandes colecciones musicales respetando todas las reglas de negocio relacionales.",
      learnings:
        "Diseño relacional avanzado, normalización práctica de datos, manejo de eventos multimedia en el DOM y optimización SQL.",
      next: "Incorporación de recomendaciones automáticas por similitud acústica y soporte para streaming adaptativo.",
    },
  },
  {
    id: "fitconnection",
    name: "FitConnection",
    number: "05",
    category: "Plataforma de Servicios / Red de Entrenadores",
    description:
      "Plataforma web académica orientada a conectar clientes con entrenadores deportivos, centralizando la gestión de servicios, reservas, pagos y reputación.",
    problem:
      "La intermediación entre clientes y entrenadores independientes sufre de desorganización en agendas, falta de trazabilidad en los acuerdos y escasa visibilidad de calificaciones.",
    solution:
      "Diseño de una solución integral con roles diferenciados, procesos trazables, modelo de datos relacional y arquitectura de servicios desacoplada.",
    responsibilities: [
      "Análisis funcional integral e historias de usuario",
      "Casos de uso y diagramas de clases/secuencia UML",
      "Diseño y modelado de la base de datos relacional",
      "Definición de roles, permisos y políticas de seguridad",
      "Implementación frontend/backend y contenedorización con Docker",
    ],
    features: [
      "Perfiles personalizados y solicitudes de conexión entre partes",
      "Agenda de turnos deportivos, pagos y sistema de calificaciones",
      "Canal de mensajería, gestión de certificados y trayectoria",
      "Auditoría de eventos del sistema y recuperación de credenciales",
      "Módulo administrativo con reportes de actividad y gestión de usuarios",
    ],
    stack: [
      "React",
      "JavaScript",
      "APIs REST",
      "Base de datos relacional",
      "Docker",
      "Git",
      "UML",
      "Figma",
    ],
    status: "Proyecto de respaldo / Académico en evolución",
    image: "assets/projects/fitconnection.svg",
    imageAlt: "Composición conceptual de la plataforma FitConnection",
    repositoryUrl: "",
    demoUrl: "",
    featured: true,
    accent: "amber",
    caseStudy: {
      context:
        "Proyecto de ingeniería de software orientado a modelar y desarrollar una plataforma formal de intermediación de servicios deportivos.",
      objectives:
        "Estructurar la vinculación entre atletas y profesionales del deporte mediante flujos auditables y control administrativo centralizado.",
      users: ["Cliente", "Entrenador", "Administrador"],
      requirements:
        "Autenticación y roles, gestión de turnos, confirmación de pagos, reputación con reseñas verificadas, seguridad y reportes.",
      architecture:
        "Frontend React desacoplado conectado a una API REST backend con persistencia relacional y orquestación reproducible en Docker.",
      dataModel:
        "Modelo relacional centrado en usuarios, roles, conexiones, sesiones, pagos, calificaciones, certificados y registros de auditoría.",
      decisions:
        "Modelado previo exhaustivo mediante UML y separación estricta de responsabilidades para garantizar mantenibilidad a largo plazo.",
      challenges:
        "Coordinar estados cruzados entre solicitudes, pagos y disponibilidad horaria de múltiples entrenadores simultáneamente.",
      results:
        "Arquitectura validada y trazabilidad completa desde los requerimientos funcionales hasta los componentes implementados.",
      learnings:
        "Ingeniería de requerimientos, diagramado formal UML, modelado de bases de datos relacionales y trabajo en equipo multidisciplinario.",
      next: "Publicación de demo interactiva y adición de métricas de desempeño verificadas.",
    },
  },
];

export const skills = [
  {
    title: "Análisis y Diseño de Sistemas",
    number: "A",
    items: [
      "Análisis funcional y relevamiento de requerimientos",
      "Historias de usuario y casos de uso",
      "UML, diagramas de clases y de secuencia",
      "Modelado Relacional y diseño de bases de datos",
      "Arquitectura de software modular",
      "Trazabilidad y documentación técnica de ingeniería",
    ],
  },
  {
    title: "Inteligencia Artificial & Automatización",
    number: "B",
    items: [
      "Inteligencia Artificial Aplicada",
      "Prompt Engineering avanzado (Few-shot, Chain-of-Thought)",
      "Integración de APIs de LLMs (OpenAI, Gemini, Anthropic)",
      "Automatización de workflows y tareas técnicas",
      "Resolución ágil de incidencias complejas",
      "Extracción, parseo y validación estructurada de datos",
    ],
  },
  {
    title: "Datos & Business Intelligence",
    number: "C",
    items: [
      "Python para Datos (Pandas, NumPy, Matplotlib)",
      "Análisis Exploratorio de Datos (EDA)",
      "SQL avanzado y consultas complejas",
      "Modelado Relacional y normalización (1FN a 3FN)",
      "Power BI y DAX",
      "Business Intelligence, dashboards y KPIs",
    ],
  },
  {
    title: "Desarrollo de Software & Cloud",
    number: "D",
    items: [
      "JavaScript moderno y desarrollo web",
      "React y diseño de interfaces UX/UI",
      "APIs RESTful y servicios web",
      "Soluciones Cloud y Microsoft Azure",
      "Docker y contenedorización",
      "Git, GitHub y control de versiones",
      "Despliegue y GitHub Pages",
    ],
  },
];

export const certifications = [
  {
    name: "Ciencia de Datos con Python",
    institution: "Universidad Tecnológica Nacional · UTN Buenos Aires",
    year: "Certificado",
    duration: "Pandas, NumPy, Matplotlib, Análisis Exploratorio de Datos (EDA)",
    status: "Aprobado",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "EDA"],
    image: "assets/certificates/data-science-python.svg",
    certificateUrl: "",
  },
  {
    name: "Analista de Datos",
    institution: "Universidad Tecnológica Nacional · UTN Buenos Aires",
    year: "Certificado",
    duration: "Modelado de datos, SQL avanzado y Power BI",
    status: "Aprobado",
    skills: ["Modelado de Datos", "SQL Avanzado", "Power BI", "ETL"],
    image: "assets/certificates/data-analytics.svg",
    certificateUrl: "",
  },
  {
    name: "Power BI y Business Intelligence",
    institution: "Universidad Tecnológica Nacional · Facultad Regional Mendoza",
    year: "Certificado",
    duration: "Modelado dimensional, fórmulas DAX, dashboards y toma de decisiones",
    status: "Aprobado",
    skills: ["Power BI", "DAX", "Business Intelligence", "KPIs"],
    image: "assets/certificates/power-bi.svg",
    certificateUrl: "",
  },
  {
    name: "Cloud Computing con Microsoft Azure",
    institution: "Microsoft · Universidad Tecnológica Nacional",
    year: "Certificado",
    duration: "Servicios en la nube, infraestructura, redes y soluciones Azure",
    status: "Aprobado",
    skills: ["Microsoft Azure", "Cloud Computing", "Infraestructura Cloud"],
    image: "assets/certificates/azure.svg",
    certificateUrl: "",
  },
  {
    name: "Arquitectura e Ingeniería Cloud",
    institution: "Fundación Educativa Santísima Trinidad",
    year: "Formación",
    duration: "Fundamentos de diseño de arquitecturas cloud y buenas prácticas",
    status: "Formación",
    skills: ["Arquitectura Cloud", "Infraestructura", "Seguridad"],
    image: "assets/certificates/cloud-architecture.svg",
    certificateUrl: "",
  },
];

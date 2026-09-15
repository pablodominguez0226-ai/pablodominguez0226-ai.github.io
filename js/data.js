export const profile = {
  email: "pablodominguez0226@gmail.com",
  github: "https://github.com/pablodominguez0226-ai",
  linkedin: "https://www.linkedin.com/in/pablo-dominguez-460a811a1/",
  cvUrl: "cv.pdf",
};

export const projects = [
  {
    id: "fitconnection",
    name: "FitConnection",
    number: "01",
    category: "Sistema web académico / Plataforma de servicios",
    description:
      "Plataforma que conecta clientes con entrenadores deportivos y centraliza la gestión de la relación de servicio.",
    problem:
      "La coordinación entre clientes, entrenadores y administradores requiere integrar perfiles, validaciones, turnos, pagos y comunicación en un mismo flujo.",
    solution:
      "Diseño de una plataforma con roles diferenciados y procesos trazables para acompañar el ciclo completo del servicio deportivo.",
    responsibilities: [
      "Análisis funcional e historias de usuario",
      "Casos de uso y diagramas UML",
      "Modelo de datos relacional",
      "Diseño de roles, seguridad y permisos",
      "Implementación frontend y backend",
      "Configuración, versionado y Docker",
    ],
    features: [
      "Perfiles y solicitudes de conexión",
      "Turnos, pagos y calificaciones",
      "Mensajería y certificados",
      "Auditoría y recuperación de contraseña",
      "Reportes de usuarios y administración",
    ],
    stack: ["React", "JavaScript", "API REST", "Base de datos relacional", "Docker", "Git", "GitHub", "UML", "Figma"],
    status: "Proyecto académico en evolución",
    image: "assets/projects/fitconnection.svg",
    imageAlt: "Composición conceptual de la plataforma FitConnection",
    repositoryUrl: "",
    demoUrl: "",
    featured: true,
    accent: "cyan",
    caseStudy: {
      context:
        "Proyecto académico orientado a modelar y construir una plataforma de intermediación de servicios deportivos.",
      objectives:
        "Unificar la vinculación entre clientes y entrenadores, estructurar los procesos principales y contemplar la operación administrativa.",
      users: ["Cliente", "Entrenador", "Administrador"],
      requirements:
        "Gestión de identidad y roles, conexiones, agenda, pagos, reputación, certificados, comunicación, seguridad, auditoría y reportes.",
      architecture:
        "Frontend React conectado a un backend mediante API REST y persistencia relacional. Los detalles del backend quedan pendientes de confirmar con el repositorio del proyecto.",
      dataModel:
        "Modelo relacional centrado en usuarios, roles, conexiones, turnos, pagos, calificaciones, certificados, mensajes y registros de auditoría.",
      decisions:
        "Separación por roles y permisos; trazabilidad de operaciones sensibles; modelado previo mediante historias, casos de uso y UML.",
      challenges:
        "Coordinar reglas de negocio entre múltiples actores y mantener consistencia en estados de conexión, turnos y pagos.",
      results:
        "Proyecto en evolución. No se publican métricas ni resultados cuantitativos hasta contar con evidencia verificable.",
      learnings:
        "Análisis integral, trazabilidad entre requerimientos y funcionalidades, diseño relacional y coordinación de frontend, backend e infraestructura.",
      next: "Completar capturas reales, confirmar tecnologías del backend y agregar URLs de repositorio y demo cuando estén disponibles.",
    },
  },
  {
    id: "fittracker",
    name: "FitTracker",
    number: "02",
    category: "Aplicación web personal / Fitness tracking",
    description:
      "Aplicación responsive para registrar entrenamientos, seguir cargas y comprender la evolución física desde cualquier dispositivo.",
    problem:
      "Los registros dispersos dificultan revisar el progreso, comparar cargas y sostener una rutina de entrenamiento consistente.",
    solution:
      "Una experiencia móvil que organiza rutinas, sesiones y métricas de evolución en un único producto.",
    responsibilities: [
      "Diseño de la experiencia responsive",
      "Implementación de la interfaz",
      "Integración con API",
      "Persistencia de datos",
      "Contenedores y acceso en red",
      "Control de versiones",
    ],
    features: [
      "Registro e historial de entrenamientos",
      "Rutinas configurables",
      "Series, repeticiones y pesos",
      "Récords personales",
      "Volumen semanal y constancia",
      "Evolución de cargas",
    ],
    stack: ["React", "Vite", "Axios", "API", "Docker Compose", "Git", "GitHub"],
    status: "Proyecto personal funcional",
    image: "assets/projects/fittracker.svg",
    imageAlt: "Composición conceptual de la aplicación FitTracker",
    repositoryUrl: "",
    demoUrl: "",
    featured: true,
    accent: "violet",
    caseStudy: {
      context:
        "Proyecto personal desarrollado para resolver una necesidad concreta de seguimiento del entrenamiento.",
      objectives:
        "Simplificar el registro durante la sesión y convertir el historial en información útil sobre constancia, volumen y progresión.",
      users: ["Persona que entrena y administra sus propias rutinas"],
      requirements:
        "Rutinas configurables, registro ágil de sesiones, historial, récords, métricas, persistencia y uso cómodo desde móvil.",
      architecture:
        "Frontend React y Vite integrado mediante Axios con un backend basado en API. Ejecución coordinada con Docker Compose.",
      dataModel:
        "Entidades para rutinas, ejercicios, sesiones, series y registros de carga. El esquema exacto debe incorporarse desde el repositorio del proyecto.",
      decisions:
        "Diseño mobile-first, separación entre cliente y API, y entorno reproducible mediante contenedores.",
      challenges:
        "Reducir fricción durante el registro y transformar datos históricos en indicadores comprensibles.",
      results:
        "Aplicación funcional en entorno propio. No se indica publicación pública porque no se proporcionó una URL verificable.",
      learnings:
        "Diseño de producto desde una necesidad real, integración cliente-servidor, persistencia y despliegue local accesible desde móviles.",
      next: "Agregar capturas reales, repositorio, documentación del modelo de datos y una demo pública si se despliega.",
    },
  },
  {
    id: "bitcoin-analytics",
    name: "Bitcoin Analytics",
    number: "03",
    category: "Data Analytics / Finanzas",
    description:
      "Caso preparado para documentar un análisis cuantitativo de la evolución histórica de Bitcoin y su perfil de riesgo.",
    problem:
      "Los movimientos de precio aislados no explican el comportamiento del activo ni permiten dimensionar retornos, volatilidad y caídas.",
    solution:
      "Pipeline reproducible de limpieza, exploración y visualización para convertir series históricas en hallazgos comunicables.",
    responsibilities: [
      "Definición del objetivo analítico",
      "Limpieza y transformación",
      "Análisis exploratorio",
      "Cálculo de retornos y volatilidad",
      "Diseño de visualizaciones",
      "Comunicación de conclusiones",
    ],
    features: [
      "Evolución histórica del precio",
      "Rendimientos por período",
      "Volatilidad",
      "Drawdowns",
      "Correlaciones si el dataset las permite",
      "Conclusiones y limitaciones",
    ],
    stack: ["Python", "pandas", "NumPy", "Matplotlib", "Jupyter Notebook"],
    status: "Caso de estudio por completar",
    image: "assets/projects/bitcoin.svg",
    imageAlt: "Gráfico conceptual para el análisis de datos de Bitcoin",
    repositoryUrl: "",
    demoUrl: "",
    featured: true,
    accent: "amber",
    caseStudy: {
      context:
        "Proyecto de análisis de datos aplicado al interés por mercados financieros y análisis cuantitativo.",
      objectives:
        "Describir el comportamiento histórico de Bitcoin mediante métricas reproducibles y visualizaciones claras.",
      users: ["Lectores interesados en análisis de datos financieros", "Revisores técnicos"],
      requirements:
        "Dataset con fuente documentada, tratamiento de faltantes, análisis temporal, retornos, volatilidad, drawdowns y conclusiones.",
      architecture:
        "Notebook o flujo de análisis en Python. La fuente de datos y la estructura final quedan pendientes hasta incorporar los archivos reales.",
      dataModel:
        "Serie temporal con fecha, precio y, si la fuente lo ofrece, apertura, máximo, mínimo y volumen.",
      decisions:
        "Separar datos originales de datos procesados y documentar supuestos para garantizar reproducibilidad.",
      challenges:
        "Evitar conclusiones causales no respaldadas y comunicar métricas financieras sin presentar el trabajo como recomendación de inversión.",
      results:
        "Pendiente de completar con dataset, notebook, gráficos y conclusiones verificables.",
      learnings:
        "Se completará al incorporar el análisis real.",
      next: "Agregar fuente del dataset, período analizado, notebook, capturas, conclusiones y URL del repositorio.",
    },
  },
];

export const skills = [
  {
    title: "Análisis y diseño",
    number: "A",
    items: [
      "Análisis funcional", "Relevamiento de requerimientos", "Historias de usuario",
      "Casos de uso", "UML", "Diagramas de clases y actividad",
      "Modelado entidad-relación", "Diseño de bases de datos",
      "Arquitectura de sistemas", "Trazabilidad", "Documentación técnica",
    ],
  },
  {
    title: "Desarrollo",
    number: "B",
    items: [
      "HTML", "CSS", "JavaScript", "React", "Vite", "APIs REST",
      "Git", "GitHub", "Docker", "Desarrollo responsive",
    ],
  },
  {
    title: "Datos",
    number: "C",
    items: [
      "Python", "pandas", "NumPy", "Matplotlib", "SQL", "Power BI", "Excel",
      "Limpieza de datos", "Análisis exploratorio", "Visualización de datos",
    ],
  },
  {
    title: "Cloud y DevOps",
    number: "D",
    items: [
      "Fundamentos de cloud computing", "Arquitectura cloud", "Microsoft Azure",
      "Docker", "Despliegue de aplicaciones", "Control de versiones", "GitHub Pages",
    ],
  },
];

export const certifications = [
  {
    name: "Ciencias de Datos con Python",
    institution: "UTN Buenos Aires",
    year: "2024",
    duration: "24 horas",
    status: "Aprobado",
    skills: ["Python", "Ciencia de datos"],
    image: "assets/certificates/data-science-python.svg",
    certificateUrl: "",
  },
  {
    name: "Data Analytics",
    institution: "Centro de Estudiantes de Ingeniería Tecnológica · UTN Buenos Aires",
    year: "Pendiente",
    duration: "20 horas · Virtual sincrónica",
    status: "Formación",
    skills: ["SQL", "Power BI"],
    image: "assets/certificates/data-analytics.svg",
    certificateUrl: "",
  },
  {
    name: "Power BI",
    institution: "UTN Mendoza",
    year: "Pendiente",
    duration: "Pendiente de confirmar",
    status: "Formación",
    skills: ["Power BI"],
    image: "assets/certificates/power-bi.svg",
    certificateUrl: "",
  },
  {
    name: "Cloud Computing con Microsoft Azure",
    institution: "Pendiente de confirmar",
    year: "Pendiente",
    duration: "Pendiente de confirmar",
    status: "Formación",
    skills: ["Azure", "Cloud computing"],
    image: "assets/certificates/azure.svg",
    certificateUrl: "",
  },
  {
    name: "Arquitectura e Ingeniería Cloud",
    institution: "Fundación Educativa Santísima Trinidad",
    year: "Pendiente",
    duration: "Pendiente de confirmar",
    status: "Formación",
    skills: ["Arquitectura cloud"],
    image: "assets/certificates/cloud-architecture.svg",
    certificateUrl: "",
  },
];

import focus1 from "../assets/projects/focusapp/image1.png";
import focus2 from "../assets/projects/focusapp/image2.png";
import focus3 from "../assets/projects/focusapp/image3.png";
import promoFocus from "../assets/projects/focusapp/promo.mp4";
import sga1 from "../assets/projects/sga/image-sga-1.png";
import sga2 from "../assets/projects/sga/image-sga-2.png";
import sga3 from "../assets/projects/sga/image-sga-3.png";
import sga4 from "../assets/projects/sga/image-sga-4.png";
import promoSGA1 from "../assets/projects/sga/01-LoginAdmin.mp4";
import promoSGA2 from "../assets/projects/sga/02-NavegacionProfesor.mp4";
import promoSGA3 from "../assets/projects/sga/03-NavegacionAlumno.mp4";




export const projects = [
    {
        slug: "focusapp",
        title: "FocusApp",
        role: "Frontend Developer",
        description: "FocusApp es una plataforma web colaborativa orientada a la comunidad fotográfica, cuyo propósito es crear un espacio digital donde fotógrafos y entusiastas de la fotografía puedan compartir, aprender y evolucionar en conjunto.",
        problem:
            "Los fotógrafos no tenían una plataforma centralizada para mostrar su trabajo, recibir feedback y crecer en comunidad.",
        objective:
            "El objetivo principal de la aplicación es fomentar la interacción constructiva entre los usuarios, impulsando el desarrollo técnico y creativo de cada miembro a través del intercambio de conocimientos, valoraciones objetivas y experiencias visuales. ",
        fun: [
            "Registro de usuarios: Los usuarios pueden crear una cuenta para subir fotos e interactuar con otros miembros.",
            "Publicación de fotos: Los usuarios pueden compartir sus fotos, que se pueden clasificar en diferentes categorías temáticas.",
            "Sistema de valoración: Los miembros de la comunidad pueden puntuar las fotos en cinco criterios: Composición, Iluminación, Adaptación técnica, Claridad y Enfoque, y Creatividad.",
            "Explorar: Los usuarios pueden explorar las fotos mejor valoradas de la comunidad, destacándose en la sección de (Descubrir)",
            "Comentarios: Los usuarios pueden dejar comentarios sobre las fotos para brindar retroalimentación constructiva.",
            "Sistema de notificaciones: Los usuarios reciben notificaciones sobre nuevos comentarios.",
        ],
        solution:
            "Desarrollé una plataforma web donde pueden subir fotos, recibir valoraciones, comentar y participar en rankings.",
        stack: ["React", "Django", "PostgreSQL", "Integracion Gemini"],
        impact: [
            "Gestión de estado de valoraciones",
            "Diseño UX intuitivo",
            "Performance en carga de imágenes",
            "Interacción constante mediante rankings",
            "Interfaz clara y accesible",
        ],
        gallery: [
            focus1,
            focus2,
            focus3,
        ],
        videos: [{
            src: promoFocus,
            title: "FocusApp Promo Video",
        },],


        repoUrl: "https://github.com/jazzzz0/FocusApp",
        demoUrl: "https://focusapp-sc.pages.dev/",


    },

    {
        slug: "sistema-gestion-academica",
        title: "Sistema de Gestión Académica",
        role: "Frontend Developer",
        description: "El Sistema de Gestión Académica (SGA) es una aplicación web desarrollada en Django que permite administrar de manera integral los procesos académicos de una institución educativa, incluyendo gestión de usuarios, estudiantes, docentes, carreras, materias e inscripciones.",
        problem:
            "La gestión de información académica era manual y propensa a errores.",
        objective:
            "Crear una plataforma digital que automatice el proceso de gestión académica.",
        fun: [
            "Sistema de autenticación basado en roles (ADMIN, TEACHER, STUDENT)",
            "Gestión completa de usuarios con perfiles diferenciados",
            "Administración de carreras y materias",
            "Sistema de inscripciones con validaciones de negocio",
            "Control de cupos por materia",
            "Generación automática de semestres académicos",
            "Interfaz responsive y amigable",
            "Soft delete para entidades críticas",
        ],
        solution:
            "Desarrollé una interfaz intuitiva para gestionar la información académica. Utilice distintos usuarios con diferentes permisos para garantizar la seguridad de los datos. Implementé formularios dinámicos para facilitar la entrada de datos y asegurar la integridad de la información. Ademàs, integré funcionalidades de búsqueda y filtrado para mejorar la accesibilidad a los registros académicos.",

        stack: ["Django", "Python", "HTML5", "CSS3", "PostgreSQL", "Bootstrap", "JavaScript"],
        impact: [
            "Automatización del proceso académico",
            "Reducción de errores en la gestión",
            "Mejora en la experiencia del usuario",
        ],

        gallery: [
            sga1,
            sga2,
            sga3,
            sga4,
        ],

        videos: [{
            src: promoSGA1,
            title: "Login de administrador",
        },
        {
            src: promoSGA2,
            title: "Navegación profesor",
        },
        {            src: promoSGA3,
            title: "Navegación alumno",
        },],

        repoUrl: "https://github.com/jazzzz0/sistema-gestion-academica",
        demoUrl: "https://sistema-gestion-academica-2713c6fae0f2.herokuapp.com/",
    },

    {
        slug: "Hallandohuellas",
        title: "Hallando Huellas",
        role: "Frontend Developer",
        description: "Hallando Huellas es una plataforma web diseñada para ayudar a las personas a encontrar mascotas perdidas mediante perfiles detallados, códigos QR y acciones rápidas adaptadas a diferentes situaciones.",
        problem:
            "Dificultad para contactar dueños de mascotas extraviadas rápidamente.",
        objective:
            "Crear una plataforma que facilite la conexión entre personas que encuentran mascotas y sus dueños a través de perfiles, QR y acciones rápidas según la situación del usuario.",
        fun: [
            "Perfiles de mascotas: Cada mascota tiene un perfil con información de identificación.",
            "Código QR: Cada perfil tiene un código QR que facilita el contacto con el dueño.",
            "Acciones rápidas: Acciones específicas según la situación del usuario (encontrar, reportar, contactar).",
        ],
        solution:
            "Diseñé una interfaz con perfiles, QR y acciones rápidas según la situación del usuario.",
        stack: ["React", "Frontend UI", "Integración Backend"],
        impact: [
            "Diseño intuitivo para usuarios no técnicos",
            "Funcionalidades de interacción social implementadas",
            "Rendimiento optimizado en la carga de imágenes",
        ],
        repoUrl: "https://github.com/SarmientoCamila/Hallando_Huellas",
        demoUrl: "https://prototipo-hallando-huellas.vercel.app/",
    },
];
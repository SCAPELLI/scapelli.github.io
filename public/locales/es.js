export default {
    title: "Titulo en español",
    language: "Español",
    letsConnect: "Contacta conmigo",
    sections: {
        home: {
            title: "Inicio",
            descriptionHeader: "Bienvenido a mi sitio web",
            shortDescription:
                `Hola, soy <red>Sebastián</red>, 
                <red>Ingeniero en Informática</red>.`,
            description:
                `Desarrollador full stack con foco en backend y arquitectura de bases de datos.
    Actualmente lidero proyectos y equipos de desarrollo.`
        },
        aboutMe: {
            title: "Acerca de mí",
            subtitle: "Perfil profesional",

            currentJobs:
                `<red><b><h4x>Sobre mi rol</h4x></b></red>

                <b>Netv S.A.</b>  
                <i>Desarrollador Full Stack - Líder de Proyecto <b>(2024 - Actualidad)</b></i>

                Formo parte de una Software Factory especializada en <b>desarrollo SaaS</b>.
                Asumo la responsabilidad de los proyectos de punta a punta: frontend, backend, diseño de bases de datos y arquitectura e implementación en la nube.

                Lidero un equipo de desarrolladores, organizando tareas, priorizando entregas y definiendo lineamientos técnicos.
                Trabajo en conjunto con los clientes para relevar necesidades de negocio, traducirlas en requisitos funcionales y formalizarlas en documentación técnica.

                <b>Principales responsabilidades:</b>
                - Desarrollo de nuevas funcionalidades y módulos.
                - Configuración y despliegue de <b>servicios en AWS</b>.
                - Coordinación técnica del equipo.
                - Planificación y seguimiento de entregas.
                - Diseño de arquitectura y bases de datos.
                - Análisis de datos mediante consultas SQL complejas y scripts en Python utilizando ORM.
                - Comunicación directa con clientes.

                <b>Tecnologías y herramientas:</b>
                - Python (Flask, SQLAlchemy, pytest)
                - SQL avanzado y diseño de bases de datos
                - Desarrollo de APIs REST
                - Javascript, Typescript (React)
                - AWS (Elastic Beanstalk, EC2, RDS, Batch, CloudWatch, S3, Lambda)
                - Metodologías ágiles (Kanban y SCRUM)

                <br/><br/>`,
                
            college: `
                <red><b><h4x>Formación Académica</h4x></b></red>

                <b>Ingeniero en Informática <i>(Egresado 2024)</i></b> 
                <i>Universidad de Buenos Aires (UBA)</i>

                Mi formación me brindó bases sólidas en:
                - Arquitectura de Software y principios de diseño
                - Sistemas distribuidos y programación concurrente
                - Bases de datos y modelado
                - Ciencia de datos
                - Sistemas Operativos y Compiladores
                - Test Driven Development y análisis de cobertura
                - Gestión de proyectos ágiles

                Estos fundamentos forman parte activa de mi práctica profesional.

                <br/><br/>`,

            previousJobs: `
                <red><b><h4x>Experiencia Previa</h4x></b></red>

                <b>Zoo Logic S.A.</b>  
                <i>Desarrollador Visual FoxPro y .NET <b>(2023 - 2024)</b></i>
                <i>Soporte técnico <b>(2017 - 2023)</b></i>

                Ingresé en 2017 brindando soporte técnico en sistemas de facturación y punto de venta, adquiriendo una comprensión profunda de entornos productivos y necesidades reales de negocio.

                En 2024 fui transferido al área de Inteligencia y Desarrollo, trabajando tanto con tecnología legacy (Visual FoxPro) como con bibliotecas .NET en C# para integración con medios de pago, APIs externas y componentes del sistema operativo.

                Tecnologías utilizadas:
                - .NET / C#
                - SQL Server
                - Azure
                - Postman
                - Integraciones API

                <br/><br/>`,

            personalInterests: `
                <red><b><h4x>Intereses Personales</h4x></b></red>

                Disfruto aprendiendo nuevas tecnologías, buscar el margen de mejora el todo proyecto y proceso de desarrollo y proponer soluciones escalables. Valoro el desarrollo iterativo, el feedback continuo y el impacto real en el negocio.

                Este es mi oficio y continuo creciendo en el.

                Algunos de mis hobbies son: patinar, coleccionar comics, hacer running e ir a festivales de cine.
                
                <br/><br/>`
        },
        skills: {
            title: "Habilidades",
            subtitle1: "Lenguajes y Frameworks",

            subtitle2: "Más herramientas",
            subtitle3: "Experiencia ocasional",
        },
        projects: {
            title: "Proyectos",
            subtitle: "Mis trabajos",
            singularTitle: "Proyecto",
            singularTitleInProgress: "Proyecto en progreso",
            description: "Aquí hay algunos de los proyectos en los que he trabajando recientemente:",
            repository: "Repositorio",
            userManual: "Manual de usuario",
            back: "Volver",
            screenshots: "Capturas",
            technologies: "TECNOLOGÍAS",
            report: "Informe",
            wolfenstein: {
                description:
                    `Proyecto final de la materia <red>"Taller de Programación I"</red> de la carrera de Ingeniería en Informática de la UBA. 
                El proyecto consistió en desarrollar una <red>versión multijugador del juego Wolfenstein 3D</red>.
                Se desarrolló tanto el cliente como el servidor, utilizando principalmente C++.

                El <red>servidor multithreading</red> se encarga de escuchar las conexiones TCP y gestiona los hilos de ejecución para manejar las salas de juego y la comunicación entre los clientes.            
                El <red>cliente</red> se encarga de la interfaz gráfica y la comunicación con el servidor.
                
                Para la <red>lógica del BOT</red> se utilizó Lua para implementar el algoritmo de Dijkstra de caminos mínimos.
                También se desarrolló un <red>editor de mapas para diseñar los niveles del juego</red> con Qt.
                
                Algunos conceptos involucrados: 
                - Hilos
                - Sockets
                - Conexiones TCP
                - Grafos
                - Caminos mínimos
                - Mutex
                - Event loop
                - Paradigma de objetos
                - Bibliotecas SDL
                `
            },
            fiufit: {
                description:
                    `Proyecto final de la materia <red>"Taller de Programación II"</red> de la carrera de Ingeniería en Informática de la UBA. 
                El proyecto consistió en desarrollar una <red>aplicación móvil de entrenamiento personal</red> que permita a los usuarios realizar rutinas de ejercicios personalizadas y hacer un seguimiento de sus progresos.

                La aplicación fue desarrollada en <red>React Native</red> y <red>Node.js</red> para el backend. 
                Se utilizó una base de datos <red>SQL</red> para almacenar los datos de los usuarios y las rutinas de ejercicios.
                Para almacenar los multimedia se utilizó <red>Firebase</red>.
                Para autenticar a los usuarios se utilizaron <red>tokens JWT</red> propios o de Google para el caso del <red>login con Google</red>.
                Para la gestión del proyecto realizamos <red>SCRUM</red> con sprints de 2 semanas durante los cuatro meses de desarrollo.

                Algunos conceptos involucrados:
                - React Native
                - Node.js
                - SQL
                - Tokens JWT
                - Access Token y Refresh Token
                - Diseño de bases de datos
                - Arquitectura de software
                - Microservicios
                - Test Coverage
                - Metodologías ágiles
                `
            },
            streamclub: {
                description:
                    `<red>Proyecto final de la carrera</red> de Ingeniería en Informática de la UBA. 
                    
                    El proyecto consiste en una aplicación móvil para la <red>gestión de las plataformas de streaming contratadas por el usuario</red>, así como una <red>red social</red> para interactuar con otros usuarios y compartir recomendaciones de contenido.
                El usuario podrá buscar películas y series, marcar las plataformas contratadas, ver estadísticas de uso de cada una, marcar contenido como visto o pendiente de ver y recibir recomendaciones personalizadas.

                El frontend está implementado en <red>React Native</red> usando Expo. Para el backend, se utiliza una arquitectura con <red>microservicios</red> implementados en Node.js y en Python. 
                
                Se utilizan bases de datos <red>SQL</red> para almacenar los datos personales de los usuarios y sus recomendaciones, y una base de datos <red>MongoDB</red> para guardar el contenido visto o pendiente.
                Para autenticar a los usuarios, se utilizan <red>tokens JWT</red> propios, o de Google para el caso del <red>login con Google</red>.
                Para la gestión del proyecto, se realiza <red>SCRUM</red> con sprints de 2 semanas.

                Para las recomendaciones, se utilizan modelos de <red>Machine Learning</red> que predicen el contenido de interés para el usuario, basado en su historial.

                Algunos conceptos involucrados:
                - React Native
                - Node.js
                - SQL
                - Tokens JWT
                - Access Token y Refresh Token
                - Diseño de bases de datos
                - Microservicios
                - Metodologías ágiles
                - Machine Learning
                `
            },
            moviebrowser: {
                description:
                    `Proyecto final de la materia <red>"Teoría del Lenguaje"</red> de la carrera de Ingeniería en Informática de la UBA.
                El proyecto consistió en desarrollar una <red>aplicación web de búsqueda de películas</red> que permitiera a los usuarios buscar películas por título, marcar películas favoritas y exportarlas a un archivo.
                La aplicación consume la <red>API de The Movie Database</red> para obtener la información de las películas.
                Además, la información de las películas favoritas de cada usuario se almacena en <red>una base de datos SQL</red> configurada desde la misma interfaz Rails.
                El objetivo del trabajo fue investigar e interiorizarse en el <red>desarrollo de aplicaciones basadas en Ruby y en el framework Ruby on Rails</red>.
                
                Algunos conceptos involucrados:
                - Ruby
                - Ruby on Rails
                - SQL
                - Consumo de APIs`
            },
            tcp: {
                title: "UDP based File Transfer Protocol",
                description:
                    `Proyecto de la materia <red>"Introducción a los Sistemas Distribuidos"</red> de la carrera de Ingeniería en Informática de la UBA.
                En este proyecto, se creó una <red>aplicación que permite subir y descargar archivos</red> utilizando la interfaz de sockets y el protocolo de transporte UDP. 
                El principal desafío fue construir un <red>protocolo de transferencia confiable basado en UDP</red>, donde pueden surgir diversos problemas de comunicación como: pérdida o duplicación de paquetes, retrasos en la entrega y consiguiente arribo fuera de orden.
                Este tipo de problemáticas son resueltas con el protocolo TCP, por lo tanto, el desafío fue implementar un protocolo similar a TCP pero basado en UDP.

                Algunos conceptos involucrados:
                - Sockets
                - Protocolo UDP
                - Protocolo TCP
                - Protocolo IP
                - Checksum
                - Ventanas deslizantes
                - Python
                - Sniffer (Analizador de paquetes)`
            },

            homesquad: {
                description:
                    `Proyecto final de la materia <red>"Taller de Desarrollo de Proyectos I"</red> de la carrera de Ingeniería en Informática de la UBA.
                El proyecto consistió en desarrollar una <red>aplicación móvil de búsqueda de profesionales para el hogar</red>.
                El cliente puede buscar profesionales para realizar trabajos en su hogar, como plomeros, electricistas, pintores, y el profesional puede registrarse en la aplicación y ofrecer sus servicios.
                
                El proyecto estuvo enfocado en aspectos de ventas y marketing, por lo que se realizaron investigaciones de mercado, análisis de la competencia, y desarrollo de un plan de marketing.
                En la presentación final, se mostró el <red>prototipo de la aplicación</red> y se presentó el plan de inserción en el mercado junto con la proyección de ventas.

                Algunos conceptos involucrados:
                - Las 5 P del marketing
                - Las 4 C del marketing
                - TypeScript`
            },
        },
        certificates: {
            title: "Certificados",
            courses: "Cursos",
            chainlink: "Curso enfocado en la construcción, despliegue y ejecución de contratos inteligentes",
        },
        contact: {
            title: "Contacta conmigo",
        }
    }
}
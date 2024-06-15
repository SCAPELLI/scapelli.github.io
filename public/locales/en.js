export default {
    title: "Titulo en español",
    language: "Español",
    letsConnect: "Contacta conmigo",
    sections: {
        home: {
            title: "Inicio",
            descriptionHeader: "Bienvenido a mi sitio web",
            shortDescription:
                `Hola, soy <red>Sebastián</red> 
                Un <red>desarrollador de software</red> y estudiante 
                de <red>Ingeniería en Informática</red>`,
            description:
                `Con el 2024 marcando el final de mi carrera universitaria, me encuentro en la busqueda de oportunidades para seguir creciendo profesionalmente. 
                ¡Te invito a conocer más sobre mi!`
        },
        aboutMe: {
            title: "Acerca de mi",
            subtitle: "Quién soy",
            description:
                `<red><b>Mi formación profesional</b></red>
                Soy un desarrollador <red>próximo a recibirme de Ingeniero en Informática en la Universidad de Buenos Aires (UBA)</red>. Considero que, a lo largo de mi carrera, he adquirido sólidas bases para poder desempeñarme en el mercado laboral. Por destacar algunas: Programación Orientada a Objetos, Arquitectura de Software, Principios de Diseño, Buenas prácticas, Sistemas distribuidos y Programación concurrente, Bases de Datos, fundamentos de Machine Learning, fundamentos de Sistemas Operativos y Compiladores, Gestión de proyectos y Metodologías Ágiles, Test Driven Development.

                <red><b>Mi trayectoria laboral</b></red>
                Comencé a trabajar en el 2017 en Zoo Logic S.A, una empresa que brinda soluciones tecnológicas para la gestión de puntos de venta y facturación. Mi rol consistió en brindar soporte técnico a los clientes sobre los productos de la empresa. Trabajé simultáneamente durante toda mi carrera desde 2017 hasta 2023.

                En el 2024 me transfirieron al área de <red>Inteligencia y Desarrollo</red>. Actualmente, mi trabajo consiste en desarrollar e integrar bibliotecas .NET desarrolladas en C# para ser consumidas por los productos de Zoo Logic S.A. Estas bibliotecas permiten la integración de los productos de Zoo Logic con otros sistemas de terceros, como medios de pago, APIs y bibliotecas de Windows. Utilizo tecnologías como .NET, SQL Server, Postman, Azure, principalmente. También considero muy importante la comunicación con mis compañeros y el trabajo en equipo.

                <red><b>¿Qué clase de persona soy?</b></red>
                Si llegaste a leer hasta aquí, notarás que soy una persona que le gusta aprender y mejorar continuamente. <red>Este es mi oficio y quiero seguir creciendo en él</red>.
                Algunos de mis hobbies son: patinar, coleccionar comics, salir a correr e ir a festivales de cine.`
        },
        skills: {
            title: "Habilidades",
            subtitle1: "Lenguajes y Frameworks",

            subtitle2: "Más herramientas",
        },
        projects: {
            title: "Proyectos",
            subtitle: "Mis trabajos",
            singularTitle: "Proyecto",
            description: "Aquí hay algunos de los proyectos en los que he estado trabajando recientemente:",
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
                También se desarrolló un <red>editor de mapas para diseñar los niveles del juego</red> en Qt.
                
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
                Utiliza una base de datos <red>SQL</red> para almacenar los datos de los usuarios y las rutinas de ejercicios.
                Para almacenar los multimedia se utilizó <red>Firebase</red>.
                Para autenticar a los usuarios se utilizaron <red>tokens JWT</red> propios o de Google para el caso del <red>login con google</red>.
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
        contact: {
            title: "Contacto",
            description: "¿Quieres trabajar conmigo? Completa el formulario a continuación para enviarme un mensaje y me pondré en contacto contigo lo antes posible."
        }
    }
}
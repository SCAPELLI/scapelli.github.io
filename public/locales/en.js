export default {
    title: "Title in English",
    language: "English",
    letsConnect: "Let's Connect",
    sections: {
        home: {
            title: "Home",
            descriptionHeader: "",
            shortDescription:
                `Hi, I'm <red>Sebastián</red>, 
                Computer Engineer 
                and Full Stack Developer.`,
            description:
                `Specialized in backend and cloud infrastructure.
                I lead projects and development teams.`
        },
        aboutMe: {
            title: "About Me",
            subtitle: "Professional Profile",

            currentJobs:
                `<red><b><h4x>About My Role</h4x></b></red>

                <h4x><b>Netv S.A.</b></h4x>
                <b><i><red>Full Stack Developer – Project Lead </red>(2024 - Present)</b></i>

                I am part of a Software Factory specialized in <b>SaaS development</b>.
                <red>I take end-to-end responsibility for projects</red>: frontend, backend, database design, and cloud service deployment.

                <red>I lead a team of developers</red>, organizing tasks, prioritizing deliverables, and defining technical guidelines.
                <red>I work closely with clients</red> to gather business requirements, translate them into functional specifications, and formalize them into technical documentation.

                <b>Main responsibilities:</b>
                - <red>Development of new features</red> and modules.
                - Configuration and <red>deployment of <b>AWS services</b></red>.
                - Technical coordination of the team.
                - <red>Planning</red> and delivery tracking.
                - Architecture and database design.
                - Data analysis using complex SQL queries and Python scripts with ORM.
                - Direct communication with clients.

                <b>Technologies and tools:</b>
                - <red>Python</red> (Flask, SQLAlchemy, Pytest)
                - <red>MySQL</red>
                - REST API development
                - <red>JavaScript</red>, TypeScript (React, Next.js)
                - <red>AWS (Elastic Beanstalk, EC2, RDS, Batch, CloudWatch, S3, Lambda)</red>
                - Agile methodologies (Kanban and <red>Scrum</red>)

                <br/><br/>`,

            college: `
                <red><b><h4x>Education</h4x></b></red>

                <h4x><b>University of Buenos Aires (UBA)</b></h4x>
                <b><i><red>Bachelor's Degree in Computer Engineering </red>(Graduated 2024)</i></b>

                During my studies, I developed solid foundations in:
                - <red>Programming paradigms</red> (object-oriented, functional, structured)
                - <red>Software Architecture</red> and design principles (SOLID, DRY, design patterns)
                - Distributed systems and concurrent programming
                - <red>Databases</red> and data modeling
                - Introduction to <red>Data Science</red>
                - Operating Systems and Compilers
                - Test Driven Development and <red>Test Coverage Analysis</red>
                - <red>Agile project management</red>

                These foundations remain an active part of my professional practice.

                <br/><br/>`,

            previousJobs: `
                <red><b><h4x>Previous Experience</h4x></b></red>

                <h4x><b>Zoo Logic S.A.</b></h4x>
                <i><b><red>Visual FoxPro and .NET Developer </red>(2023 - 2024)</b></i>
                <i><b><red>Technical Support </red>(2017 - 2023)</b></i>

                I initially worked in the technical support area, assisting clients with billing and point-of-sale systems developed by the company.

                In 2024, I transitioned to the <red>Intelligence and Development</red> area, working with both legacy technology (Visual FoxPro) and <red>.NET in C#</red>.
                I contributed to the implementation of libraries integrating Zoo Logic systems with <red>POS devices, external APIs, and Windows libraries</red>.

                Technologies used:
                - <red>.NET / C#</red>
                - SQL Server
                - Azure
                - Postman
                - <red>API integrations</red>


                <h4x><b>Faculty of Engineering (UBA)</b></h4x>
                <i><b><red>Teaching Assistant – Algorithms and Programming I </red>(2018 - 2019)</b></i>

                I participated in grading programming assignments developed in Python, with a focus on code quality, modularization, elimination of duplicated code, and best practices.

                <br/><br/>`,

            personalInterests: `
                <red><b><h4x>Personal Interests</h4x></b></red>

                I enjoy working with new tools and continuously improving my technical skills. I consider myself detail-oriented, while always prioritizing delivery timelines and iterative software development. <red>This is my craft, and I continue growing in it.</red>
                
                Outside of work, I enjoy skating, collecting comics, running, and attending film festivals.
                <br/><br/>`
        },
        skills: {
            title: "Skills",
            subtitle1: "Languages and Frameworks",
            subtitle2: "More tools",
            subtitle3: "Occasional experience",
        },
        projects: {
            title: "Projects",
            subtitle: "My public work",
            singularTitle: "Project",
            singularTitleInProgress: "Project in Progress",
            freelanceTitle: "Freelance Project",
            description: "Here are some of the projects I've been working on recently:",
            repository: "Repository",
            userManual: "User Manual",
            back: "Back",
            screenshots: "Screenshots",
            technologies: "TECHNOLOGIES",
            report: "Report",
            lamodista: {
                description:
                    `Freelance project consisting of the development of an institutional website for the tailoring business <red>"Soluciones Textiles - La Modista"</red>.

                    The site was integrated with the <red>Google Maps JavaScript API</red> to display the store’s location and linked to the business’s <red>Google Business Profile</red> to strengthen its digital presence.

                    The application was developed using <red>Next.js</red> and deployed on <red>Vercel</red>.

                    Additionally, domain registration and configuration for the <red>.com.ar</red> domain were managed through <red>nic.ar</red>, including <red>DNS</red> record configuration and the implementation of corporate email using <red>Google Workspace</red>.

                    Key concepts involved:
                    - Next.js
                    - JavaScript
                    - Git
                    - External API integration
                    - Google Maps JavaScript API
                    - Google Business Profile
                    - Domain management (.com.ar)
                    - DNS configuration
                    - Google Workspace
                    `
            },

            wolfenstein: {
                description:
                    `Final project for the subject <red>"Programming Workshop I"</red> of the Computer Engineering career at UBA.
                The project consisted of developing a <red>multiplayer version of the game Wolfenstein 3D</red>.
                Both the client and the server were developed, mainly using C++.

                The <red>multithreading server</red> listens to TCP connections and manages execution threads to handle game rooms and communication between clients.
                The <red>client</red> handles the graphical interface and communication with the server.
                
                For the <red>BOT logic</red>, Lua was used to implement Dijkstra's shortest path algorithm.
                A <red>map editor to design game levels</red> was also developed in Qt.
                
                Some concepts involved:
                - Threads
                - Sockets
                - TCP connections
                - Graphs
                - Shortest paths
                - Mutex
                - Event loop
                - Object paradigm
                - SDL Libraries
                `
            },
            fiufit: {
                description:
                    `Final project for the subject <red>"Programming Workshop II"</red> of the Computer Engineering career at UBA.
                The project consisted of developing a <red>personal training mobile application</red> that allows users to perform personalized exercise routines and track their progress.

                The application was developed in <red>React Native</red> and <red>Node.js</red> for the backend.
                A <red>SQL database</red> was used to store user data and exercise routines.
                For multimedia storage, <red>Firebase</red> was used.
                To authenticate users, <red>JWT tokens</red> were used, either own or Google for the <red>Google login</red>.
                For project management, we used <red>SCRUM</red> with 2-week sprints for the four months of development.

                Some concepts involved:
                - React Native
                - Node.js
                - SQL
                - JWT Tokens
                - Access Token and Refresh Token
                - Database design
                - Software architecture
                - Microservices
                - Test Coverage
                - Agile methodologies
                `
            },
            streamclub: {
                description:
                    `<red>Final project for the Computer Engineering career</red> at UBA.
                    
                    The project consists of a mobile application for the <red>management of streaming platforms contracted by the user</red>, as well as a <red>social network</red> to interact with other users and share content recommendations.
                Users can search for movies and series, mark the platforms they have subscribed to, view usage statistics for each, mark content as watched or pending, and receive personalized recommendations.

                The frontend is implemented in <red>React Native</red> using Expo. For the backend, a microservices architecture is used, implemented in Node.js and Python.
                
                <red>SQL databases</red> are used to store user data and their recommendations, and a <red>MongoDB</red> database to store watched or pending content.
                To authenticate users, <red>JWT tokens</red> are used, either own or Google for the <red>Google login</red>.
                For project management, we use <red>SCRUM</red> with 2-week sprints.

                For recommendations, <red>Machine Learning models</red> are used to predict content of interest to the user, based on their history.

                Some concepts involved:
                - React Native
                - Node.js
                - SQL
                - JWT Tokens
                - Access Token and Refresh Token
                - Database design
                - Microservices
                - Agile methodologies
                - Machine Learning
                `
            },
            moviebrowser: {
                description:
                    `Final project for the subject <red>"Language Theory"</red> of the Computer Engineering career at UBA.
                The project consisted of developing a <red>movie search web application</red> that allowed users to search for movies by title, mark favorite movies, and export them to a file.
                The application consumes the <red>The Movie Database API</red> to obtain movie information.
                Additionally, the information of each user's favorite movies is stored in <red>a SQL database</red> configured from the same Rails interface.
                The objective of the work was to investigate and become familiar with the <red>development of applications based on Ruby and the Ruby on Rails framework</red>.
                
                Some concepts involved:
                - Ruby
                - Ruby on Rails
                - SQL
                - API Consumption`
            },
            tcp: {
                title: "UDP based File Transfer Protocol",
                description:
                    `Project for the subject <red>"Introduction to Distributed Systems"</red> of the Computer Engineering career at UBA.
                In this project, an <red>application that allows uploading and downloading files</red> using the sockets interface and the UDP transport protocol was created.
                The main challenge was to build a <red>reliable transfer protocol based on UDP</red>, where various communication problems such as packet loss or duplication, delivery delays, and consequent out-of-order arrival may arise.
                These issues are resolved with the TCP protocol, so the challenge was to implement a TCP-like protocol but based on UDP.

                Some concepts involved:
                - Sockets
                - UDP Protocol
                - TCP Protocol
                - IP Protocol
                - Checksum
                - Sliding windows
                - Python
                - Sniffer (Packet Analyzer)`
            },

            homesquad: {
                description:
                    `Final project for the subject <red>"Project Development Workshop I"</red> of the Computer Engineering career at UBA.
                The project consisted of developing a <red>mobile application to search for home professionals</red>.
                The client can search for professionals to perform jobs at home, such as plumbers, electricians, painters, and the professional can register in the application and offer their services.
                
                The project focused on sales and marketing aspects, so market research, competition analysis, and development of a marketing plan were conducted.
                In the final presentation, the <red>application prototype</red> was shown, and the market insertion plan along with the sales projection was presented.

                Some concepts involved:
                - The 5 Ps of marketing
                - The 4 Cs of marketing
                - TypeScript`
            },
        },
        certificates: {
            title: "Certificates",
            courses: "Courses",
            chainlink: "Course focused on the construction, deployment, and execution of smart contracts",
        },
        contact: {
            title: "Contact Me",
        }
    }
}
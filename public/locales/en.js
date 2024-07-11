export default {
    title: "Title in English",
    language: "English",
    letsConnect: "Let's Connect",
    sections: {
        home: {
            title: "Home",
            descriptionHeader: "Welcome to my website",
            shortDescription:
                `Hi, I'm <red>Sebastián</red>
                A <red>software developer</red> soon to graduate
                as a <red>Computer Engineer</red>`,
            description:
                `With 2024 marking the end of my university career, I am looking for opportunities to continue growing professionally.
                I invite you to learn more about me!`
        },
        aboutMe: {
            title: "About Me",
            subtitle: "Who I am",
            description:
                `<red><b>My Professional Background</b></red>
                I am a developer <red>about to graduate in Computer Engineering at the University of Buenos Aires (UBA)</red>. I believe that, throughout my career, I have acquired solid foundations to perform well in the job market. To highlight a few: Object-Oriented Programming, Software Architecture, Design Principles, Best Practices, Distributed Systems and Concurrent Programming, Databases, fundamentals of Machine Learning, fundamentals of Operating Systems and Compilers, Test Driven Development, Project Management and Agile Methodologies.

                <red><b>My Career Path</b></red>
                I started working in 2017 at Zoo Logic S.A, a company that provides technological solutions for point-of-sale management and invoicing. My role was to provide technical support to clients on the company's products. I worked simultaneously throughout my career from 2017 to 2023.

                In 2024 I was transferred to the <red>Intelligence and Development</red> area. Currently, my job involves developing and integrating .NET libraries developed in C# to be consumed by Zoo Logic S.A's products. These libraries enable the integration of Zoo Logic products with other third-party systems, such as payment methods, APIs, and Windows libraries. I use technologies such as .NET, SQL Server, Postman, Azure, mainly. I also consider communication with my colleagues and teamwork to be very important.

                <red><b>What kind of person am I?</b></red>
                I consider myself a person who enjoys learning, acquiring new skills, discovering new work tools, and continuously improving. I am a perfectionist in my work, but I always prioritize delivery times and iterative software development. <red>This is my profession, and I want to keep growing in it</red>.
                Some of my hobbies are: skating, collecting comics, running, and going to film festivals.`
        },
        skills: {
            title: "Skills",
            subtitle1: "Languages and Frameworks",
            subtitle2: "More tools",
            subtitle3: "Occasional experience",
        },
        projects: {
            title: "Projects",
            subtitle: "My Work",
            singularTitle: "Project",
            singularTitleInProgress: "Project in Progress",
            description: "Here are some of the projects I've been working on recently:",
            repository: "Repository",
            userManual: "User Manual",
            back: "Back",
            screenshots: "Screenshots",
            technologies: "TECHNOLOGIES",
            report: "Report",
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
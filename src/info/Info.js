import self from '../assets/img/self_crop.png'
import veltrex from '../assets/img/veltrex.png'
import chronova from '../assets/img/chronova.png'
import taskvault from '../assets/img/taskvault.png'
import devscribe from '../assets/img/devscribe.png'
import pcforge from '../assets/img/pcforge.png'
import resume from '../assets/pdfs/resume.pdf'

// ─── Accent gradient colors ───────────────────────────────────────────────────
// Use https://gradientgenerator.paytonpierce.dev/ to pick a pair you like.
export const colors = ['#f97316', '#f97316']

// ─── Layout mode ─────────────────────────────────────────────────────────────
// Set to `true` for a single scrollable page; `false` for multi-page routing.
export const singlePage = false

// ─── Your info ───────────────────────────────────────────────────────────────
export const info = {
    firstName: 'Abhin',
    lastName: 'KS',
    // initials: 'AKS', // Not used in the new Navbar.jsx
    position: 'a Full Stack Developer',
    selfPortrait: self,
    resumeUrl: resume,
    gradient: `-webkit-linear-gradient(135deg, ${colors.join(', ')})`,
    baseColor: '#27C93F',

    miniBio: [
        { emoji: '☕', text: 'fueled by coffee' },
        { emoji: '🌎', text: 'based in the INDIA' },
        { emoji: '💼', text: 'Intern at Brototype' },
        { emoji: '📧', text: 'abhin1511203@gmail.com' },
    ],

    socials: [
        { link: 'https://www.instagram.com/i_am_.abhin/', icon: 'fa-brands fa-instagram', label: 'instagram' },
        { link: 'https://github.com/Abhinks151/', icon: 'fa-brands fa-github', label: 'github' },
        { link: 'https://www.linkedin.com/in/abhin-ks/', icon: 'fa-brands fa-linkedin', label: 'linkedin' },
        {
            link: 'https://x.com/Iam__Abhin_ks',
            icon: 'fa-brands fa-x-twitter',
            label: 'X'
        }
    ],

    bio: `Hello! I'm Abhin. I’m a software engineer focused on building scalable, 
          high-performance web applications and solving real-world problems through
           thoughtful engineering. I enjoy working across the stack, from crafting clean
           interfaces to designing robust backend systems and infrastructure.`,

    skills: {
        frontend: [
            'JavaScript',
            'TypeScript',
            'React',
            'Redux',
            'Tailwind CSS',
            'ShadCn',
            'HTML5',
            'CSS3',
        ],

        backend: [
            'Node.js',
            'Express',
            'NestJS',
            'REST APIs',
            'WebSockets',
            'WebRTC',
        ],

        databases: [
            'MongoDB',
            'Mongoose',
            'PostgreSQL',
            'Prisma',
            'Redis',
        ],

        devops: [
            'Docker',
            'AWS',
            'Nginx',
            'PM2',
            'CI/CD',
            'Terraform',
            'CloudWatch',
        ],

        tools: [
            'Git',
            'GitHub',
            'Figma',
            'Postman',
        ],
    },

    hobbies: [
        { label: 'exploring new tech', emoji: '🔭' },
        { label: 'electronics', emoji: '🔌' },
        { label: 'game development', emoji: '🎮' },
        { label: 'creative coding', emoji: '🧩' },
    ],

    education: [
        {
            degree: 'Professional Training – Full Stack Development (MERN Stack)',
            institution: 'Brototype',
            term: 'Jan 2025 – Apr 2026',
            details: [
                'Completed intensive full-stack development training with hands-on experience building and deploying web applications',
                'Developed full-stack applications using modern frontend and backend technologies with a focus on scalable and maintainable code',
                'Built applications involving authentication, role-based access, payment integration, real-time communication, and third-party APIs',
                'Practiced software design principles, data structures, algorithms, database management, and backend architecture',
                'Gained practical experience with Git, cloud deployment, debugging, and collaborative software development'
            ]
        },
        {
            degree: 'Higher Secondary Education',
            institution: 'ST Johns HSS undancode',
            term: '2021 – 2023',
            details: [
                'Stream: Computer Science'
            ]
        }
    ],

    // ─── Projects ─────────────────────────────────────────────────────────────
    // Inline markup supported in `description` and `architecture`:
    //   **bold text**   → accent-coloured bold
    //   `code snippet`  → monospace pill
    // Blank lines in template strings become paragraph breaks.
    projects: {

        // Full-stack projects you spent months building
        main: [
            {
                title: 'Veltrex',
                tagline: 'Multi-tenant SaaS CNC production management platform.',
                image: veltrex,
                links: [
                    { label: 'GitHub - Backend', url: 'https://github.com/Abhinks151/veltrex_backend' },
                    { label: 'GitHub - Frontend', url: 'https://github.com/Abhinks151/veltrex_frontend' },
                    // { label: 'Live Demo', url: 'https://abhinks.site' },
                ],
                description: `
                Veltrex is a **multi-tenant SaaS platform** built for small and mid-sized
                CNC manufacturing shops to manage production planning, CNC programs,
                machine operations, maintenance, employees, and production workflows.

                The project was developed over **4+ months** and is currently features **13+ modules**
                inclusing custom gcode viewer and editor, production planning, machine operations, 
                maintenance, employees, and production workflows.
            `,
                techStack: {
                    frontend: ['React', 'TypeScript', 'TailwindCSS'],
                    backend: ['NestJS', 'Node.js', 'TypeScript', 'Prisma', 'SSE'],
                    others: ['PostgreSQL', 'Redis', 'Razorpay', 'Docker', 'AWS EC2', 'Nginx'],
                },
                architecture: `
                The backend is designed as a **modular monolith** following **Clean Architecture**,
                Repository Pattern, dependency injection, and domain-driven design principles.

                Implemented **multi-tenancy** and **role-based access control** for admins,
                supervisors, machinists, and maintenance technicians.

                The production planning engine assigns jobs based on **machine compatibility,
                job priority, deadlines, setup times, and machinist availability**.

                Built **NC program management** with version control and a program editor,
                along with production shift management using scheduled shift generation
                and job allocation through **NestJS Schedule and cron jobs**.

                Integrated **Razorpay** for lifetime purchases with webhook-based payment
                verification. Redis is used for caching frequently accessed reference data.
            `,
            },

            {
                title: 'Chronova',
                tagline: 'Full-stack e-commerce platform for selling watches.',
                image: chronova,
                links: [
                    { label: 'GitHub', url: 'https://github.com/Abhinks151/Chronova' },
                ],
                description: `
                Chronova is a **full-stack e-commerce platform** for selling watches,
                featuring user authentication, product management, shopping carts,
                orders, payments, offers, and a complete admin dashboard.

                The application includes both **customer and admin workflows**, with
                secure authentication and transactional order processing.
            `,
                techStack: {
                    frontend: ['EJS', 'JavaScript'],
                    backend: ['Node.js', 'Express.js', 'Passport.js', 'Nodemailer'],
                    others: [
                        'MongoDB',
                        'Mongoose',
                        'Razorpay',
                        'Cloudinary',
                        'JWT',
                    ],
                },
                architecture: `
                Implemented complete user workflows for browsing products, managing
                carts and wishlists, placing orders, making payments, and handling returns.

                Authentication includes **JWT authentication, OTP verification,
                Google OAuth, and secure route protection**.

                Integrated **Razorpay** with payment verification and retry handling.

                Implemented product search, filtering, wishlists, coupons, offers,
                and referral-based discounts.

                The admin dashboard supports product, category, user, order, coupon,
                and offer management.

                Used **MongoDB transactions** to prevent stock inconsistencies during
                concurrent order operations.
            `,
            },
        ],

        // Learning / exploration projects
        mini: [
            {
                title: 'TaskVault',
                tagline: 'Task management API with authentication and asynchronous data synchronization.',
                image: taskvault,
                links: [
                    { label: 'GitHub', url: 'https://github.com/Abhinks151/TaskVault' },
                ],
                description: `
                TaskVault is a **task management API** built to practice backend
                architecture, authentication, authorization, and asynchronous processing.

                It supports CRUD task operations with **JWT authentication**,
                role-based authorization, and dual-database synchronization.
            `,
                techStack: {
                    frontend: [],
                    backend: ['Node.js', 'Express', 'TypeScript', 'JWT'],
                    others: ['MongoDB', 'PostgreSQL', 'BullMQ'],
                },
                architecture: `
                The API follows **Clean Architecture**, separating controllers,
                use cases, repositories, and infrastructure concerns.

                Implemented asynchronous synchronization between **MongoDB and PostgreSQL**
                using **BullMQ**, allowing database synchronization work to be processed
                through background jobs instead of blocking API requests.
            `,
            },

            {
                title: 'DevScribe',
                tagline: 'Blog application built with React and Firebase.',
                image: devscribe,
                links: [
                    { label: 'GitHub', url: 'https://github.com/Abhinks151/DevScribe' },
                ],
                description: `
                DevScribe is a **blog application** built to gain hands-on experience
                with authentication and cloud-based application development.

                Users can authenticate and perform CRUD operations on blog content.
            `,
                techStack: {
                    frontend: ['React'],
                    backend: [],
                    others: ['Firebase Authentication', 'Cloud Firestore'],
                },
                architecture: `
                The application uses **Firebase Authentication** for user identity
                and **Cloud Firestore** as the database for storing blog content.

                Authentication state is used to protect application features and
                restrict blog management operations to authenticated users.
            `,
            },

            {
                title: 'PCForge',
                tagline: 'E-commerce platform built to learn Redux state management.',
                image: pcforge,
                links: [
                    { label: 'GitHub', url: 'https://github.com/Abhinks151/PCForge' },
                ],
                description: `
                PCForge is a simulated **e-commerce platform** built to gain practical
                experience with global state management using **Redux Toolkit**.

                The application includes product browsing, cart management, and
                Cloudinary-based image handling.
            `,
                techStack: {
                    frontend: ['React', 'Redux Toolkit'],
                    backend: ['Node.js', 'Express'],
                    others: ['MongoDB', 'Cloudinary'],
                },
                architecture: `
                The frontend uses **Redux Toolkit** to manage global application state,
                particularly product and cart-related state.

                The backend provides REST APIs using **Node.js and Express**, with
                MongoDB used for persistence and Cloudinary used for image management.
            `,
            },
        ],
    },
}
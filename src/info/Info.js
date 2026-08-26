import self from '../assets/img/self_crop.png'
import mock1 from '../assets/img/mock1.png'
import mock2 from '../assets/img/mock2.png'
import mock3 from '../assets/img/mock3.png'
import mock4 from '../assets/img/mock4.png'
import mock5 from '../assets/img/mock5.png'
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
                tagline: 'Multi-tenant SaaS workforce management platform.',
                image: mock1,
                links: [
                    { label: 'Live Demo', url: 'https://abhinks.site' },
                    { label: 'Source Code', url: 'https://github.com/Abhinks151/veltrex-frontend' },
                ],
                description: `
                    Veltrex is a **full-stack SaaS platform** built for managing workforce operations
                    across multiple organisations. It features **role-based access control**,
                    real-time updates via \`WebSockets\`, and a clean admin dashboard.

                    The project was developed over **4+ months** and is currently running in production,
                    handling multi-tenant isolation at the application layer backed by **PostgreSQL**.
                `,
                techStack: {
                    frontend: ['React', 'Redux', 'Tailwind CSS', 'ShadCn', 'TypeScript'],
                    backend: ['NestJS', 'WebSockets', 'Prisma', 'JWT', 'REST APIs'],
                    others: ['Docker', 'AWS EC2', 'Nginx', 'PM2', 'PostgreSQL', 'Redis'],
                },
                architecture: `
                    The system uses a **multi-tenant architecture** where tenants are isolated at the
                    application layer. Each request flows through a \`TenantInterceptor\` that resolves
                    the tenant context before any handler executes.

                    The **NestJS** backend follows Clean Architecture — use cases in the application
                    layer, repositories in the infrastructure layer, and controllers as thin adapters.
                    A **Redis** cache sits in front of frequently-read reference data to reduce DB load.

                    The frontend is a **React SPA** served via \`Nginx\`, communicating with the backend
                    over REST and \`WebSockets\` for live shift-status updates.
                `,
            },
            {
                title: 'Project 2',
                tagline: 'Short one-line description of your second main project.',
                image: mock2,
                links: [
                    { label: 'Live Demo', url: 'https://example.com' },
                    { label: 'Source Code', url: 'https://github.com/Abhinks151' },
                ],
                description: `
                    Replace this with a real description. Use **bold** for key ideas and \`code\`
                    for technology names or commands.
                `,
                techStack: {
                    frontend: ['React', 'TypeScript'],
                    backend: ['Node.js', 'Express'],
                    others: ['MongoDB', 'Docker'],
                },
                architecture: `
                    Describe the high-level system design here. Explain how the pieces connect
                    and any interesting **architectural decisions** you made.
                `,
            },
        ],

        // Learning / exploration projects
        mini: [
            {
                title: 'SSE Demo',
                tagline: 'Exploring Server-Sent Events with Node.js.',
                image: mock3,
                links: [
                    { label: 'Source Code', url: 'https://github.com/Abhinks151' },
                ],
                description: `
                    A minimal project built to learn **Server-Sent Events** and how they compare
                    to \`WebSockets\` for one-way real-time data streaming.
                `,
                techStack: {
                    frontend: ['HTML', 'Vanilla JS'],
                    backend: ['Node.js', 'Express'],
                    others: [],
                },
                architecture: `
                    Single **Express** server that opens an SSE stream per client. The client
                    subscribes with \`EventSource\` and receives live updates without polling.
                `,
            },
            {
                title: 'Redis Cache',
                tagline: 'Hands-on Redis caching patterns with Node.js.',
                image: mock4,
                links: [
                    { label: 'Source Code', url: 'https://github.com/Abhinks151' },
                ],
                description: `
                    Built to understand **Redis** caching strategies — cache-aside, write-through,
                    and TTL-based invalidation — in a real \`Node.js\` context.
                `,
                techStack: {
                    frontend: [],
                    backend: ['Node.js', 'Express'],
                    others: ['Redis', 'Docker'],
                },
                architecture: `
                    REST API backed by **MongoDB** with a **Redis** cache-aside layer.
                    Cache hits return in <1 ms; misses populate the cache for subsequent reads.
                `,
            },
            {
                title: 'Socket Chat',
                tagline: 'Real-time chat room with Socket.io.',
                image: mock5,
                links: [
                    { label: 'Source Code', url: 'https://github.com/Abhinks151' },
                ],
                description: `
                    A small chat application built to learn **Socket.io** room management,
                    broadcast events, and handling disconnects gracefully.
                `,
                techStack: {
                    frontend: ['React'],
                    backend: ['Node.js', 'Socket.io'],
                    others: [],
                },
                architecture: `
                    Event-driven server using **Socket.io** namespaces and rooms. Each chat room
                    is a Socket.io room; join/leave events are broadcast to all room members.
                `,
            },
        ],
    },
}
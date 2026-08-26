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

    projects: [
        { title: 'Project 1', live: 'https://paytonpierce.dev', source: 'https://github.com/paytonjewell', image: mock1 },
        { title: 'Project 2', live: 'https://paytonpierce.dev', source: 'https://github.com/paytonjewell', image: mock2 },
        { title: 'Project 3', live: 'https://paytonpierce.dev', source: 'https://github.com/paytonjewell', image: mock3 },
        { title: 'Project 4', live: 'https://paytonpierce.dev', source: 'https://github.com/paytonjewell', image: mock4 },
        { title: 'Project 5', live: 'https://paytonpierce.dev', source: 'https://github.com/paytonjewell', image: mock5 },
    ],
}
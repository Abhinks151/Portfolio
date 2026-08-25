import self from '../img/self.png'
import mock1 from '../img/mock1.png'
import mock2 from '../img/mock2.png'
import mock3 from '../img/mock3.png'
import mock4 from '../img/mock4.png'
import mock5 from '../img/mock5.png'

// ─── Accent gradient colors ───────────────────────────────────────────────────
// Use https://gradientgenerator.paytonpierce.dev/ to pick a pair you like.
export const colors = ['#f97316', '#f97316']

// ─── Layout mode ─────────────────────────────────────────────────────────────
// Set to `true` for a single scrollable page; `false` for multi-page routing.
export const singlePage = false

// ─── Your info ───────────────────────────────────────────────────────────────
export const info = {
    firstName: 'John',
    lastName: 'Smith',
    initials: 'JS',
    position: 'a Full Stack Developer',
    selfPortrait: self,
    resumeUrl: '#', // Replace with a direct link to your resume PDF
    gradient: `-webkit-linear-gradient(135deg, ${colors.join(', ')})`,
    baseColor: colors[0],

    miniBio: [
        { emoji: '☕', text: 'fueled by coffee' },
        { emoji: '🌎', text: 'based in the US' },
        { emoji: '💼', text: 'Systems Engineer at Google' },
        { emoji: '📧', text: 'johnsmith@gmail.com' },
    ],

    socials: [
        { link: 'https://facebook.com', icon: 'fa fa-facebook', label: 'facebook' },
        { link: 'https://instagram.com', icon: 'fa fa-instagram', label: 'instagram' },
        { link: 'https://github.com', icon: 'fa fa-github', label: 'github' },
        { link: 'https://linkedin.com', icon: 'fa fa-linkedin', label: 'linkedin' },
        { link: 'https://twitter.com', icon: 'fa fa-twitter', label: 'twitter' },
    ],

    bio: "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",

    skills: {
        proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
        exposedTo: ['nodejs', 'python', 'adobe illustrator'],
    },

    hobbies: [
        { label: 'reading', emoji: '📖' },
        { label: 'theater', emoji: '🎭' },
        { label: 'movies', emoji: '🎥' },
        { label: 'cooking', emoji: '🌶' },
    ],

    projects: [
        { title: 'Project 1', live: 'https://paytonpierce.dev', source: 'https://github.com/paytonjewell', image: mock1 },
        { title: 'Project 2', live: 'https://paytonpierce.dev', source: 'https://github.com/paytonjewell', image: mock2 },
        { title: 'Project 3', live: 'https://paytonpierce.dev', source: 'https://github.com/paytonjewell', image: mock3 },
        { title: 'Project 4', live: 'https://paytonpierce.dev', source: 'https://github.com/paytonjewell', image: mock4 },
        { title: 'Project 5', live: 'https://paytonpierce.dev', source: 'https://github.com/paytonjewell', image: mock5 },
    ],
}
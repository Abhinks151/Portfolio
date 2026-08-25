/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'sans-serif'],
        mono: ['Courier New', 'Courier', 'monospace'],
      },
      colors: {
        accent: '#f97316',
        muted: '#a1a1aa',
        dark: '#0d0d0d',
        light: '#f5f5f5',
        terminal: '#27242f',
      },
      animation: {
        wave: 'wave 2.5s infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
}

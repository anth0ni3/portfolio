/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{tsx, ts}',
    './pages/**/*.{tsx,ts}',
    './index.html',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        default: 'var(--default)',
        primary: 'var(--primary)',
        neutral: 'var(--neutral)',
        surface: 'var(--surface)',
        elevate: 'var(--elevate)',
        element: 'var(--element)',
        comment: 'var(--comment)',
      },
      fontFamily: {
        sans: ['Nunito Sans', ...fontFamily.sans],
      },
      minHeight: {
        xs: '20rem',
        sm: '40rem',
        md: '48rem',
        lg: '64rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#edfefe',
          100: '#d1fbfc',
          200: '#a9f5f8',
          300: '#6eebf2',
          400: '#2cd7e4',
          500: '#10bbca',
          600: '#1096aa',
          700: '#137182', // this is the main one that matches the Tresel branding
          800: '#1a6170',
          900: '#1a505f',
          950: '#0b3541',
        },
      },
      fontFamily: {
        main: 'Inter, sans-serif',
      },
    },
  },
  plugins: [],
}

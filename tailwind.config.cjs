/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
    },
    extend: {
      colors: {
        gray: {
          100: '#111111',
          200: '#222222',
        },
        light: {
          100: '#f6f4ee',
        },
        accent: {
          orange: '#904D27',
          green: '#415737',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      fontSize: {
        h1: '3.25rem',
        h2: '2.75rem',
        h3: '2.5rem',
        h4: '2.125rem',
        h5: '1.75rem',
        h6: '1.25rem',
        base: ['14px', '1.5'],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
            cinzel: ['"Cinzel Decorative"', 'serif'],
            cormorant: ['"Cormorant Garamond"', 'serif'],
          },
          colors: {
            cream: '#FFF6E9',
            gold: '#E6C28C',
          },
          textShadow: {
            sm: '1px 1px 2px rgba(0,0,0,0.25)',
            DEFAULT: '2px 2px 4px rgba(0,0,0,0.3)',
            lg: '3px 3px 6px rgba(0,0,0,0.4)',
          },
      },
    },
    plugins: [
      require('tailwindcss-textshadow')
    ],
  }
  
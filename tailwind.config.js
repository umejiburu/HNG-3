const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom-md': '70px 0 0 0',
      },
     },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        'h1': {
          fontSize: theme('fontSize.2xl'),
          
        },
        'h3': {
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.bold'),
        },
      })
    }),
    require('tailwind-scrollbar-hide')
  ],
}


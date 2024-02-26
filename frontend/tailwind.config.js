/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.overline-red-400': {
          textDecoration: 'overline',
          textDecorationColor: '#EF4444', // Red-400 color
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },

    daisyui
  ],
}

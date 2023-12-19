/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
        fontFamily: {
            'poppins': ['poppins', "sans-serif"],
            'poppinsmed': ['poppinsmed', 'sans-serif']
        },
    },
  },
  plugins: [],
}


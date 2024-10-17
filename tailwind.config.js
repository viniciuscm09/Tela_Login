/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './build/*.html',
    "../node_modules/flowbite/dist/flowbite.min.js"
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [

    require('flowbite/plugin')
  ],
  
}


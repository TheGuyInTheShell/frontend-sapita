/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
    "./node_modules/flowbite/**/*.js"
  ],
  safelist: [
    'alert-success',
    'alert-info', 
    'alert-warning', 
    'alert-error',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui")
  ],
  
}
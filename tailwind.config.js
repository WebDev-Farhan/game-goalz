/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#FF4240',
        'secondary': '#131318',
      },
    },
  },
  plugins: [require("daisyui")],
}


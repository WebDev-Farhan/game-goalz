/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#FF4240',
      },
    },
  },
  plugins: [require("daisyui")],
}


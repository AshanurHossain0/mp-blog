/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        "ubuntu": ['Ubuntu', 'sans-serif'],
        "bungee":['Bungee Spice', 'cursive'],
        "rajdhani":['Rajdhani', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


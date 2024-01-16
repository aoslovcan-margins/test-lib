/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./poc-ui/src/**/*.{js,ts,jsx,tsx}"],
  presets: [require("./poc-ui/tailwind.config.js")],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Roboto Slab', 'serif'],
    },
    extend: {
      colors: {
        color: {
          testColor: '#4D5E80'
        }
      }
     },
  },
  plugins: [],
};

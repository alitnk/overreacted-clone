/** * @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pink: {
          strong: '#d23669',
          weak: '#ffa7c4',
        }
      }
    },
  },
  plugins: [],
}
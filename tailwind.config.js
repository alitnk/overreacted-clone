/** * @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'pink': {
        DEFAULT: '#D23669',
        '50': '#F4CCD9',
        '100': '#F0BBCD',
        '200': '#E89AB4',
        '300': '#E1799B',
        '400': '#D95782',
        '500': '#D23669',
        '600': '#AA2651',
        '700': '#7C1C3B',
        '800': '#4E1225',
        '900': '#20070F'
      },
    },
    extend: {

    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
        'silkscreen': ['Silkscreen', 'sans-serif'],
        'consolas': ['consolas', 'serif'],
        'righteous': ['Righteous', 'serif'],
      },
    },
  },
  plugins: [],
}
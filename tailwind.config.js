/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        'orange':'#FDC021',
        'orange-light':'#FEC828',
        'blue-light':'#ECF7FF',
        'orange-light-2':'#FFDED4'
      }
    },
  },
  plugins: [],
}

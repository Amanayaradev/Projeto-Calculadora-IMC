/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-green': '#4CCC9B',
        'dark-green': '#399660',
        'table-green': '#EDFAFE',
        'table-select': '#FFFFFF'
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}


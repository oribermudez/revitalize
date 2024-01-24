/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('/assets/spa.jpg')",
        'relax': "url('/assets/relax.jpg')",
      },
      colors: {
        'main': '#A1BCB7', // light green
        'accent': '#2D4635', // dark green
        'secondary': '#779790', //medium green
        'black': '#000000', // all clickable text
        'grey': '#4B4B4B', // all non-clickable text
      },

  plugins: [],
}
}
}

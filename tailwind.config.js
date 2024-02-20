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
        'main': '#009B94', //medium green
        'secondary': '#A0ECD0', // light green 
        'accent': '#9DAAFF', // dark green
        'black': '#000000', // all clickable text
        'lightgrey': '#d1d5db', // all non-clickable text
        'danger': '#EF4444', // red
      },

  plugins: [],
}
}
}

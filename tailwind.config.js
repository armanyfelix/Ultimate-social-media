module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'light': '#F1F0EF ',
      'danger': '#FF5000',
    }),
    extend: {
      boxShadow: {
        inner2: 'inset 1px 3px 8px 1px rgba(255, 255, 255, 0.5)',
        blue: '0px 1px 20px 2px rgba(19, 107, 231, 0.6)',
      },
    },
  },
  plugins: [],
}

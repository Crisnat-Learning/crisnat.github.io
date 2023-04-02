module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkturquoise: "#00CED1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

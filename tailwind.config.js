module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      fondo: "#384152",
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

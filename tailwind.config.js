module.exports = {
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        grandRoyal: ['Grand Royal'],
        goldplay: ['Goldplay'],
      },
      colors: {
        'bgColor': '#FFF9E4',
        'primary': '#121212',
        'secondery': '#368F8B',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
  purge: ["./src/**/*.js", "./src/**/*.njk", "./src/**/*.svg"],
};

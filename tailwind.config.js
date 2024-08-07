module.exports = {
  content: ["./**/*.{html,js}"],

  theme: {
    extend: {
      boxShadow: {
        custom: "0 0 0 5px #c7c3c8",
      },
      backgroundImage: {
        'main-bg': "url('./src/assets/img/logo.png')",
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        blue: "#127a5b",
        whiteGray: "#F7F9FA",
      },

      maxWidth: {
        "container-sm": "540px",
        "container-md": "720px",
        "container-lg": "960px",
        "container-xl": "1016px",
        "container-2xl": "1016px",
        "container-3xl": "1016px",
        "container-4xl": "1016px",
      },
      screens: {
        xs: "0px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
        "3xl": "1600px",
        "4xl": "1920px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        comfortaa: ['Comfortaa', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

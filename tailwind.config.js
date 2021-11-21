module.exports = {
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      tablet: "768px",
      desktop: "1440px",
    },
    extend: {
      colors: {
        bord: "#D1D2D6",
        main: "#1A1B22",
        tab: "rgba(26, 27, 34, 0.5)",
        bgclr: "#F5F6F7",
        gry: "#B6BCBF",
      },
      fontFamily: {
        slab: "'Roboto Slab', serif",
        roboto: "'Roboto', sans-serif",
      },
      borderRadius: {
        bord: "100px",
      },
      maxWidth: {
        mxw: "1440px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

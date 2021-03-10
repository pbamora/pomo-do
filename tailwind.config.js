module.exports = {
  darkMode: false, // or 'media' or 'class'
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: "media",
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      gray: "#DCDDE0",
      text: "#303656",
      greenR: "#2086a5",
      greenL: "#18a09f",
      base: "#284154",
      baseDark: "#20323F",
      white: "#fff",
      text: "#4E4E4E",
      textHighligth: "#4FA6E8",
      red: "#D82D49",
      redDark: "#9B2A3D",
      green: "#2AA90C",
      greenDark: "#2B8615",
      blue: "#0C85E0",
      blueDark: "#2073B1",
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 35px 60px -15px rgba(24, 160, 159, 0.3)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      backgroundImage: {
        "background-logo": "url('/icons/background-logo.svg')",
        "background-union": "url('/icons/union.svg')",
      },
    },
    borderRadius: {
      "1xl": "0.5rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      "4xl": "2rem",
      "5xl": "3rem",
      full: "9999px",
    },
  },
  variants: {
    plugins: {
      tailwindcss: {
        config: ["./tailwindcss-config.js"],
      },
    },
  },
  plugins: [],
};

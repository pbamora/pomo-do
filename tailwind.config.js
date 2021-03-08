module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
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
    blur: {
      "10xl": "9000px",
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
      serif: ["Merriweather", "serif"],
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
    animation: ["responsive", "motion-safe", "motion-reduce"],
    plugins: {
      tailwindcss: {
        config: ["./tailwindcss-config.js"],
      },
    },
  },
  plugins: [],
};

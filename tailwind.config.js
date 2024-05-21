module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "6rem",
        xl: "7rem",
        "2xl": "4rem",
      },
    },
    fontFamily: {
      monoton: ["Monoton", "cursive"],
      satoshi: ["Satoshi", "sans-serif"],
      clash: ["Clash Display", "sans-serif"],
      infinite: ["Outfit", "sans-serif"],
      bebasneo: ["Bebas Neue", "cursive"],
    },
    extend: {
      boxShadow: {
        "3xl": "-1px 34px 47px -29px rgb(32 32 32 / 100%)",
        "4xl": " 0vw 0vw 0.5vw 0vw rgb(32 32 32 / 20%)",
        "5xl": " 0vw 0.5vw 0.5vw 0vw rgb(32 32 32 / 16%)",
        glass: "1px 5px 12px 1px rgba( 31, 38, 135, 0.37 )",
        "glass-card": "4px 4px 4px 4px rgba( 32, 32, 32, 0.37 )",
        "card-shadow": "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        "dark-shadow": "10px 10px 5px 0px rgba(130,130,130,0.75)",
      },

      colors: {
        text: "#0b1911",
        background: "#f6fbf8",
        primary: "#42c178",
        secondary: "#8edfb1",
        accent: "#62da95",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#42c178",

          secondary: "#8edfb1",

          accent: "#62da95",

          neutral: "#d9f99d",

          "base-100": "#ffffff",

          info: "#cffafe",

          success: "#00ff00",

          warning: "#00ff00",

          error: "#ff0000",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
};

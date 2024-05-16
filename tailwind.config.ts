import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      spacing: {
        "104": "26rem", // 416px
        "308": "77rem", // 1232px
      },
      colors: {
        agila: "gray-900",
      },
      fontFamily: {
        sans: ["Avenir"],
      },
      backgroundImage: {
        bookshelf: "url('~/assets/bookshelfbg.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;

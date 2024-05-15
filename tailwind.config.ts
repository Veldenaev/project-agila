import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      // colors: {
      //   agila: "gray-900",
      // },
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

import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        agila: "#dd99ff",
      },
      // fontFamily: {
      //   sans: ["var(--font-sans)", ...fontFamily.sans],
      // },
      backgroundImage: {
        bookshelf: "url('~/assets/bookshelfbg.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;

import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["var(--font-sans)", ...fontFamily.sans],
      // },
      backgroundImage: {
        'bookshelf': "url('~/assets/bookshelfbg.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;


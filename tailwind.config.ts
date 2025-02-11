import type { Config } from "tailwindcss"

const config: Config = {
  // important: true,
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-lexend), system-ui, sans-serif"],
      },
      boxShadow: {
        boxShadow_2: "0px 2px 6px 0px #00000026",
      },
      aspectRatio: {
        "3/2": "3 / 2",
        "2/3": "2 / 3",
        "65/71": "65 / 71",
        "4/5": "4 / 5",
        "6/5": "6 / 5",
        "148/169": "148 / 169",
      },
    },
    screens: {
      xs: "480px",
      // => @media (min-width: 480px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // =>	@media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // =>@media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false,
  // },
}
export default config

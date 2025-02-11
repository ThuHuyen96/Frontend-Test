/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    // "postcss-preset-env": {},
    // cssnano: {
    //   preset: "default", // Minify CSS
    // },
    "postcss-preset-env": {
      stage: 2,
      features: {
        "nesting-rules": true,
      },
      autoprefixer: {
        grid: true,
      },
    },
    cssnano: {
      preset: [
        "default",
        {
          discardComments: { removeAll: true }, // remove comment
        },
      ],
    },
  },
}

export default config

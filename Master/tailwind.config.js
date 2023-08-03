/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "2rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "4rem",
      },
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/assets/images/show/image-2.png')",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      theme: "#2FF093",
      body: "#252525",
      bodyWhite: "#ECF0F3",
      card: "#1D1C22",
      text: "#919295",
      btn: "#29282D",
      btnOpa: "#33333385",
    },
    screens: {
      sm: "380px",
      // => @media (min-width: 380px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  important: true,
  plugins: [],
});

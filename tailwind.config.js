// import konstaConfig config
// wrap config with konstaConfig config
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'class'
  theme: {
    // fontFamily: {
    //   sans: ["ui-sans-serif', 'system-ui'"],
    //   serif: ["Merriweather", "serif"],
    // },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};

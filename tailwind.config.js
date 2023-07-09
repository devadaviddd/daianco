/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        futura_bold: ["var(--font-futura-bold)"],
        magazinegrotesque_black: ["var(--font-magazinegrotesque-black)"],
        magazinegrotesque_bold: ["var(--font-magazinegrotesque-bold)"],
        magazinegrotesque_regular: ["var(--font-magazinegrotesque-regular)"],
        magazinegrotesque_thin: ["var(--font-magazinegrotesque-thin)"],
        magazinegrotesque_extralight: [
          "var(--font-magazinegrotesque-extralight)",
        ],
        magazinegrotesque_light: ["var(--font-magazinegrotesque-light)"],
        magazinegrotesque_semibold: ["var(--font-magazinegrotesque-semibold)"],
        magazinegrotesque_heavy: ["var(--font-magazinegrotesque-heavy)"],
        andantedisplay_bold: ["var(--font-andanteDisplay-bold)"],
        andantedisplay_bold_italic: ["var(--font-andanteDisplay-bold-italic)"],
        andantedisplay_demi_bold: ["var(--font-andanteDisplay-demi-bold)"],
        andantedisplay_demi_bold_italic: [
          "var(--font-andanteDisplay-demi-bold-italic)",
        ],
        andantedisplay_extralight: ["var(--font-andanteDisplay-extralight)"],
        andantedisplay_extralight_italic: [
          "var(--font-andanteDisplay-extralight-italic)",
        ],
        andantedisplay_light: ["var(--font-andanteDisplay-light)"],
        andantedisplay_light_italic: [
          "var(--font-andanteDisplay-light-italic)",
        ],
        andantedisplay_medium: ["var(--font-andanteDisplay-medium)"],
        andantedisplay_medium_italic: [
          "var(--font-andanteDisplay-medium-italic)",
        ],
        andantedisplay_regular: ["var(--font-andanteDisplay-regular)"],
        andantedisplay_regular_italic: [
          "var(--font-andanteDisplay-regular-italic)",
        ],
        andantedtext_bold: ["var(--font-andanteText-bold)"],
        andantedtext_bold_italic: ["var(--font-andanteText-bold-italic)"],
        andantedtext_demi_bold: ["var(--font-andanteText-demi-bold)"],
        andantedtext_demi_bold_italic: [
          "var(--font-andantedText-demi-bold-italic)",
        ],
        andantedtext_extralight: ["var(--font-andanteText-extralight)"],
        andantedtext_extralight_italic: [
          "var(--font-andanteText-extralight-italic)",
        ],
        andantedtext_light: ["var(--font-andanteText-light)"],
        andantedtext_light_italic: ["var(--font-andantedText-light-italic)"],
        andantedtext_medium: ["var(--font-andanteText-medium)"],
        andantedtext_medium_italic: ["var(--font-andantedText-medium-italic)"],
        andantedtext_regular: ["var(--font-andanteText-regular)"],
        andantedtext_regular_italic: ["var(--font-andanteText-regular-italic)"],
        victor: ["var(--font-victor), sans-serif"],
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};

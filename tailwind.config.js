/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "larken-bold": ["larken"],
      },
      screens: {
        xl: "1280px",
      },
    },
  },
  plugins: [require("daisyui")],
};

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
      colors: {
        primary: "#0FB4C3",
      },
    },
  },
  plugins: [require("daisyui")],
};

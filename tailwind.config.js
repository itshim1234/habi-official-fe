/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "larken-bold": ["larken"],
        giloryB: ["gilroyB"],
        giloryM: ["gilroyM"],
        giloryS: ["gilroyS"],
      },

      colors: {
        primary: "#0FB4C3",
      },
    },
  },
  plugins: [require("daisyui")],
};

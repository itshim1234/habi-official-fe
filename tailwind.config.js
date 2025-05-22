/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Samarkan: ["Samarkan Normal V2"],
        larken: ["larken", "sans-serif"],
        giloryB: ["gilroyB"],
        giloryM: ["gilroyM"],
        giloryS: ["gilroyS"],
        Dune: ["dune"],
      },

      colors: {
        primary: "#0FB4C3",
        secondary: "#ffb969",
        customGray: "#7C7C7C",
        layoutColor: "#000000",
      },
    },
    animation: {
      "infinite-scroll": "infinite-scroll 30s linear infinite",
    },
    keyframes: {
      "infinite-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
    },
  },
  plugins: [require("daisyui")],
};

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

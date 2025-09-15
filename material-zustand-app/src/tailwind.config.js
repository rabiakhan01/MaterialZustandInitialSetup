/** @type {import('tailwindcss').Config} */
export default {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        error00: "#C63A3A",
        success00: "#007D00",
        primary00: "#3E50F7",
        text00: "#262626",
        backgroundWhite: "#FFFFFF",
      },
      // screens: { break points will be here}
      // fontFamily: { font family will be here},
    },
  },
};

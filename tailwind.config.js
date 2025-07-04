export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite-react/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],  // Important for Flowbite components to work
};

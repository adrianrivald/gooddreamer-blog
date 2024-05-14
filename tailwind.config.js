/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      base: "18px",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "black-primary": "#232323",
        "purple-primary": "#6C4E9A",
        "purple-secondary": "#F7F6FA",
        "yellow-primary": "#FCD942",
        "grey-primary": "#353535",
        "grey-secondary": "#E3E3E3",
        "grey-third": "#838383",
        "red-primary": "#EB5757",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        darkYellow: "#DFDEC0",
        lightYellow: "#ECE8CB",
        customOrange: "#FF8600",
        customBlue: "#10B6CB",
      },
      fontFamily: {
        moonhouse: ["var(--font-moonhouse)"],
        lexend: ["var(--font-lexend)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

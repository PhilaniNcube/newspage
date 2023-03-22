/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
      colors: {
        "soft-orange": "hsl(35, 77%, 62%)",
        "off-white": "hsl(36, 100%, 99%)",
        "soft-red": "hsl(5, 85%, 63%)",
        "gray-blue": "hsl(233, 8%, 79%)",
        "dark-gray": "hsl(236, 13%, 42%)",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg"],
  theme: {
    extend: {
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
      },
      colors: {
        background: {
          dark: "#131415",
          light: "#F9FAFB",
        },
        mainText: {
          dark: "#FFFFFF",
          light: "#000000",
        },
        secondaryText: {
          dark: "#adb0b1",
          light: "#333333",
        },
        link: {
          dark: "#1EBED6",
          light: "#0da2b8",
        },
        border: {
          dark: "#2b3031",
          light: "#DADADA",
        },
        husky: {
          50: "#fffbeb",
          100: "#0284c7",
          200: "#fde58a",
          300: "#fbd24e",
          400: "#fabe25",
          500: "#009688",
          600: "#1A3835",
          700: "#bc560a",
          800: "#1A3835",
          900: "#0284c7",
          950: "#451a03",
        },
      },
    },
  },
  plugins: [],
};

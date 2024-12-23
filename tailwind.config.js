/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          neutral: "#FAFAFA",
          elevated: "#FFFFFF",
          muted: "#F5F5F5",
        },
        action: {
          primary: "#1570EF",
          light: "#EFF8FF",
        },
        border: {
          neutral: "#E9EAEB",
          muted: "#D5D7DA",
          highlight: "#B2DDFF",
        },
        text: {
          primary: "#181D27",
          secondary: "#414651",
          muted: "#171717",
          highlight: "#175CD3",
        },
        shadow: {
          base: "#0A0D120D",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#2B3945",

          "secondary": "#202C37",

          "accent": "#ce048e",

          "neutral": "#002657",

          "base-100": "#FAFAFA",

          "info": "#7E97DD",

          "success": "#1FC15D",

          "warning": "#E0B715",

          "error": "#F26E8D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

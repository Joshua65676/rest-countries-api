/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '300px',
      xm: '410px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
          DarkBlue: 'hsl(209, 23%, 22%)',
          VeryDarkBlue: 'hsl(207, 26%, 17%)',
          VeryDarkBlues: 'hsl(200, 15%, 8%)',
          DarkGray: 'hsl(0, 0%, 52%)',
          VeryLightGray: 'hsl(0, 0%, 98%)',
          White: 'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',
      'md': '576px',
      'lg': '800px',
      'xl': '1024px',
      '2xl': '1530px',
      'mxl': '6000px'
    },
    extend: {
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: 0},
          to: { opacity: 1}, 
        }
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}


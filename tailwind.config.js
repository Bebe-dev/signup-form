/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'tomato': 'hsl(4, 100%, 67%)',
        'darkGrey': 'hsl(234, 29%, 20%)',
        'primaryColor': 'hsl(235, 18%, 26%)',
        'grey': 'hsl(231, 7%, 60%)',
        'white': 'hsl(0, 0%, 100%)',
      },
      backgroundImage: {
        'mobile': "url('/src/Images/illustration-sign-up-mobile.svg')",
        'desktop': "url('/src/Images/illustration-sign-up-desktop.svg')",
      },
    },
  },
  plugins: [],
}


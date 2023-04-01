/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        primary1: '#FFBE34',
        primary2: '#091242',
        secoundary1: '#F4F4F4'
      },
      textColor: {
        headingFont: '#1C1F35',
        paragraphFont: '#666C89'
      },
      gradientColorStops: {
        high: '#FFB629',
        middle: '#FFDA56',
        low: '#FFD7A6'
      }
    },
  },
  plugins: [],
}

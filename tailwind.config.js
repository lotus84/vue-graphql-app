/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Manrope', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#0F2423',
      black2: '#171717',
      white: '#FFFFFF',
      green: '#1BBF55',
      gray: '#616161',
      gray2: '#BCBCBC',
    }
  },
  plugins: [],
  darkMode: 'class'
}

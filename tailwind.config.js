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
      primary: '#2A254B',
      secondary: '#4E4D93',
      grey: '#F9F9F9',
      lavender: '#EBE8F4',
      white: '#FFFFFF',
      melrose: '#CAC6DA',
      tolopea: '#1E193E',
      jam: '#DB574D',
      blue: '#0ea5e9',
      pearl: '#A29EAE',
      malachite: '#22C55E'
    }
  },
  plugins: [],
  darkMode: 'class'
}

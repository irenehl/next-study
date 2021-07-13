module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cyan': '#476072'
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
      display: ['hover'],
      animation: ['motion-safe']
    },
  },
  plugins: [],
}

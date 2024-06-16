module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'footer': '#17252a',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.5s cubic-bezier(.5,1.5,.5,1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


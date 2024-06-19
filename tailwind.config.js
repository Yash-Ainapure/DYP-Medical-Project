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
        'slide-left':{
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-right':{
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        'slide-in': 'slide-in 0.5s cubic-bezier(.5,1.5,.5,1)',
        'slide-left': 'slide-left 0.5s ease-in',
        'slide-right': 'slide-right 0.5s ease-in',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


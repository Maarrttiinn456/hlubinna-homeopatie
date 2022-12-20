/** @type {import('tailwindcss').Config} */
const plugin = require('./node_modules/tailwindcss/plugin');

module.exports = {
  content: [
    'index.html',
    'clanek.html',
    './public/**/*.{html,js}',
    './clanek/*.{html,js}',
  ],
  theme: {
    container:{
      center: true,
      padding: '2rem',
      screens: {
        lg: '1024px',
        xl: '1280px',
      }, 
    },
    colors:{
      transparent: 'transparent',
      primary: {
        text: '#195c84',
        DEFAULT: '#113E59',
        hover: '#195c84',
        active: '#113e59',
      },
      white: '#fff',
      shadow: '#d5d5d5',
      black: '#000'
    },
    fontSize: {
      xs: ['1rem'],
      sm: ['1.4rem'],
      base: ['1.6rem'],
      lg: ['1.8rem'],
      xl: ['2rem'],
      '1xl': ['2.5rem'],
      '2xl': ['3rem',],
      '4xl': ['4rem'],
      '6xl': ['5rem'], 
      '8xl': ['6rem'] ,
    },
    spacing: {
      px: '1px', 
      0: '0',
      0.5: '0.5rem',
      1: '1rem',
      1.5: '1.5rem',
      2: '2rem',
      2.5: '2.5rem',
      3: '3rem',
      3.5: '3.5rem',
      4: '4rem',
      5: '5rem',
      6: '6rem',
      7: '7rem',
      8: '8rem',
      9: '9rem', 
      10: '10rem',
      15: '15rem',
      20: '20rem',
      25: '25rem',
    },
    height: {
      px: '1px', 
      0: '0',
      0.5: '0.5rem',
      1: '1rem',
      1.5: '1.5rem',
      2: '2rem',
      2.5: '2.5rem',
      3: '3rem',
      3.5: '3.5rem',
      4: '4rem',
      5: '5rem',
      6: '6rem',
      7: '7rem',
      8: '8rem',
      9: '9rem', 
      10: '10rem',
      15: '15rem',
      20: '20rem',
      30: '30rem',
      40: '40rem',
      50: '50rem',
      60: '60rem'
    },
    maxWidth: {
      '4/5': '80%',
    },

    extend: {},  
  },

  plugins: [
    plugin(function({ addComponents, theme }) {
      
      addComponents({
        '.btn': {
          padding: '.8rem 1.6rem',
          fontWeight: '600',
          display: 'inline-flex',
          cursor: 'pointer',
        },
        '.btn-primary' : {
          background: theme('colors.primary.DEFAULT'),
          transition: '0.5s background',
 
          '&:hover': {
            background: theme('colors.primary.hover')
          },
          '&:active': {
            background: theme('colors.primary.active')
          }
        },

        '.h1': { fontSize: theme('fontSize.8xl'), fontWeight:600,},
        '.h2': { fontSize: theme('fontSize.6xl'), fontWeight:600 },
        '.h3': { fontSize: theme('fontSize.4xl'), fontWeight:600 },
        '.h4': { 
          fontSize: theme('fontSize.2xl'), 
          fontWeight:600,
        }
      })

    }),
  ],
} 
 
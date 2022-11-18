/** @type {import('tailwindcss').Config} */
const plugin = require('./node_modules/tailwindcss/plugin')

module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container:{
      center: true,
      padding: '2rem',
      screens: {
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    colors:{
      transparent: 'transparent',
      primary: {
        text: '#195c84',
        DEFAULT: '#154d6e',
        hover: '#195c84',
        active: '#113e59',
      },
      white: '#fff',
      black: '#000'
    },
    fontSize: {
      xs: ['0.75rem'],
      sm: ['0.875rem'],
      base: ['1rem'],
      lg: ['1.125rem'],
      xl: ['1.25rem'],
      '2xl': ['1.8rem',],
      '4xl': ['2.25rem'],
      '6xl': ['3.75rem'],
      '8xl': ['6rem'],
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
    },

    extend: {},
  },

  plugins: [
    plugin(function({ addComponents, addBase, theme }) {
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
        '.h1': { fontSize: theme('fontSize.6xl'), fontWeight:500,},
        '.h2': { fontSize: theme('fontSize.4xl'), fontWeight:500 },
        '.h3': { fontSize: theme('fontSize.2xl'), fontWeight:500 },
        '.h4': { fontSize: theme('fontSize.xl'), fontWeight:500 }
      })

    }),
  ],
}
 
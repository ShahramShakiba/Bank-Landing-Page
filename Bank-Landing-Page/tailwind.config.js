/** @type {import('tailwindcss').Config} */

//=> Add this plugin for Card-flipping section of Pricing
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./*.{html,js}'],

  theme: {
    extend: {
      colors: {
        'color-blob': '#A427DF',
      },
    },

    //=> Custom Container
    container: {
      center: true,

      padding: {
        DEFAULT: '50px',
        md: '90px',
      },
    },
  },

  plugins: [
    // Add this plugin for Card-flipping section of Pricing
    //=> Implementing new Static Utility Style

    plugin(({ addUtilities }) => {
      addUtilities({
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },

        '.-rotate-y-180': {
          transform: 'rotateY(-180deg)',
        },
      });
    }),
  ],
};

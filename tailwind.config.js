/** @type {import('tailwindcss').Config} */
// tailwind.config.js
// tailwind.config.js
module.exports = {
  content: ["./**/*.html"], // or wherever your HTML files live
  theme: {
    extend: {
      colors: {
        primaryBlue: "#0D0D78",
        accentGreen: "#4FE5CE",
        btnTeal: "#00A9A4",
        btnHover: "#009691",
        gray: {
          500: '#808285', // override gray-500
        },

      },
      fontFamily: {
        helveticaMedium: ['HelveticaNowDisplay-Medium'],
        helveticaBold: ['HelveticaNowDisplay-Bold'],
        textBold: ['HelveticaNowText-Bold'],
        textExtraBold: ['HelveticaNowText-ExtraBold'],
        textMedium: ['HelveticaNowText-Medium'],
        HelveticaNowTextRegular : ['HelveticaNowText-Regular'],
        rubikLight: ['Rubik-Light'],
      },
       borderWidth: {
        6: '6px',
      },
    },
  },
  plugins: [],
};
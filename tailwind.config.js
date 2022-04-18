module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black-top': '#3d3f44',
        'red-gm': '#d84b39',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '100%',
          md: '100%',
          lg: '768px',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,scss}'],
  theme: {
    extend: {
      colors: {
        primary: '#94D237',
        secondary: '#003528',
        'gradient-secondary': 'B1BBA3',
        gradient: 'linear-gradient(90deg, #164b42 20%, #b2bca4 200%)',
        tertiary: '#0E806C',
        background: '#FDFCFC',
        input: 'rgba(0, 82, 97, 0.3)',
        label: 'rgba(0, 82, 97, 0.8)',
        button: 'rgba(0, 82, 97, 0.7)',
        disabled: 'rgba(0, 82, 97, 0.4)',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/typography')],
};

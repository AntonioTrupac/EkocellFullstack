/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,scss}'],
  theme: {
    extend: {
      colors: {
        primary: '#94D237',
        secondary: '#005261',
        tertiary: '#44808A',
        background: '#FDFCFC',
        input: 'rgba(0, 82, 97, 0.3)',
        label: 'rgba(0, 82, 97, 0.8)',
        button: 'rgba(0, 82, 97, 0.7)',
      },
    },
  },
  plugins: [],
};

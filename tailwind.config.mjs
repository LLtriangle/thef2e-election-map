/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: {
          50: '#fff4ec',
          100: '#ffe7d3',
          200: '#ffcba5',
          300: '#ffa66d',
          400: '#ff7532',
          500: '#ff4f0a',
          600: '#e72f00',
          700: '#cc2102',
          800: '#a11b0b',
          900: '#821a0c',
          950: '#460904',
        },
        secondary: {
          green: '#25A55C',
          blue: '#4A8FE7',
          orange: '#F88545',
        },
        grayScale: {
          black: '#000000',
          stone: '#302C2C',
          salt: '#8888',
          gray: '#444444',
          pale: '#F5F2F2',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};

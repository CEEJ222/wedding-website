/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pinyon: ['var(--font-pinyon)'],
        spectral: ['var(--font-spectral)'],
        'instrument-sans': ['var(--font-instrument-sans)'],
      },
    },
  },
  plugins: [],
} 
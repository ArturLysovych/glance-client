import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'h1': '20px',
        'h2': '18px',
        'h3': '16px',
        'h4': '16px',
        'h5': '14px',
        'h6': '14px',
      },
      fontWeight: {
        'h1': '400',
        'h2': '400',
        'h3': '400',
        'h4': '300',
        'h5': '400',
        'h6': '300',
      },
      textDecoration: {
        'h7': 'line-through',
      },
      colors: {
        navy: '#091D9E',
        purple: '#750DC5',
        lightBlue: '#BCC5FF',
        whiteSmoke: '#F6F6F6',
        silver: '#C1C1C1',
        black: '#0C0C0C',
        gold: '#EBBA1A',
      },
    },
  },
  plugins: [],
};

export default config;

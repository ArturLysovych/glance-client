import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{vue, js, ts, jsx, tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Disket Mono', 'monospace'],
        h1: ['Roboto', '20px', 'regular'],
        h2: ['Roboto', '18px', 'regular'],
        h3: ['Roboto', '16px', 'regular'],
        h4: ['Roboto', '16px', '300'],
        h5: ['Roboto', '14px', 'regular'],
        h6: ['Roboto', '14px', '300'],
        h7: ['Roboto', '14', '300', 'line-through'],
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
}

export default config

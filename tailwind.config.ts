import type { Config } from 'tailwindcss'

const colors = {
  primary: '#1F2125',
  white: '#DAD9DC',
  gray: '#35373B',
  'light-gray': '#66686B',
  black: '#090909',
  blue: '#1D64EC',
  'light-blue': '#84A3E2',
  green: '#0B9A55',
  'blue-gray': '#808EA9',
  orange: '#EB750D',
}

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      ...colors,
    },
    extend: {},
  },
  plugins: [],
}
export default config

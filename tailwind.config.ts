import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const colors = {
  primary: '#1F2125',
  white: '#DAD9DC',
  gray: '#35373B',
  'light-gray': '#66686B',
  black: '#090909',
  blue: '#1D64EC',
  'light-blue': '#84A3E2', // blue400
  green: '#0B9A55',
  'blue-gray': '#808EA9', // slate400
  orange: '#EB750D',
}

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        md: '1rem',
        lg: '2rem',
        '2xl': '3rem',
      },
      screens: {
        md: '900px',
        lg: '1024px',
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font)', ...fontFamily.mono],
        heading: ['var(--font-heading)', ...fontFamily.mono],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'chart-show': {
          from: { 'stroke-dashoffset': '--chart-len' },
          to: { 'stroke-dashoffset': '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'chart-show': 'chart-show 2s ease-in forwards',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/container-queries'),
  ],
}
export default config

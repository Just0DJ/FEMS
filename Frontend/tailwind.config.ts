import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f7ff',
          100: '#e6effe',
          200: '#c7dbfd',
          300: '#98bbfb',
          400: '#5f93f8',
          500: '#2f6ff2',
          600: '#1f55d6',
          700: '#1742ab',
          800: '#143a8c',
          900: '#112f6e',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
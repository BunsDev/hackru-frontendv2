import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xx: '0px',
      xs: '320px',
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          100: '#203437',
          200: '#51F4FF',
          300: '#4D6F6C',
        },
        dark_blue_figma: '#1B1F23',
        orange: {
          100: '#FFB464',
          200: '#1B1F23',
        },
        brown: {
          100: '#9A654D',
          200: '#482820',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;

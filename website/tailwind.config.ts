import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'lightgreen': '#41AB4B',
      'darkgreen': '#4E774F',
      'olivegreen': '#808000',
      'midgreen': '#9DC98E',
      'primary': '#E6ECE1',
      'darkgreentext': "#174B41",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // 'primarybg': 'url("/primarybg.svg")',
      },
    },
  },
  plugins: [],
}
export default config

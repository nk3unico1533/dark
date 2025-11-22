import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          purple: 'hsl(266 83% 66%)',
          violet: 'hsl(280 91% 68%)',
          fuchsia: 'hsl(300 76% 68%)',
          cyan: 'hsl(190 100% 65%)',
          pink: 'hsl(330 81% 68%)'
        }
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
}
export default config

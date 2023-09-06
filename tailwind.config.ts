import plugin from 'tailwindcss/plugin'
import defaultTheme from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.25rem'
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--font-serif)', ...defaultTheme.fontFamily.serif]
      },
      blur: {
        xs: '2px'
      },
      keyframes: {
        'animate-blur': {
          '0%': {
            filter: 'blur(5px)'
          },
          '100%': {
            filter: 'blur(0px)'
          }
        },
        'animate-up': {
          '0%': {
            transform: `translateY(16px)`
          },
          '100%': {
            transform: 'translateY(0px)'
          }
        },
        'animate-scale': {
          '0%': {
            transform: `scale(105)`
          },
          '100%': {
            transform: 'translateY(0px)'
          }
        },
        'animate-opacity': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        }
      },
      animation: {
        enter:
          'animate-scale 0.75s ease-in-out both, animate-blur 0.75s ease-in-out both, animate-opacity 0.75s ease-in-out both',
        up: 'animate-up 0.75s ease-in-out both',
        blur: 'animate-blur 0.75s ease-in-out both, animate-opacity 0.75s ease-in-out both'
      }
    }
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value
            }
          }
        },
        {
          values: theme('transitionDelay')
        }
      )
    }),
    require('tailwind-gradient-mask-image'),
    require('@tailwindcss/typography')
  ]
}

export default config

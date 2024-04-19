import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'Nunito': ['"Nunito"', 'sans-serif'],
        'Inter': ['"Inter"', 'sans-serif'],
        'clash': ['"ClashDisplay-Bold"', 'serif'],
        'variable': ['"ClashDisplay-Variable"', 'serif'],

      },
      backgroundColor: {
        'primario': "#222831",
        'secundario': "#393E46",
        'terciario': "#00ADB5",
      },
      fill: {
        'custom-fill': "#00ADB5",
      },
      stroke: {
        'custom-stroke': "#00ADB5",
      },
      textColor: {
        'heading': "#EEEEEE",
        'paragraph': "#D24545"
      },
      borderColor:{
        'custom-border' : "#00ADB5"
      },

      keyframes: {
        infinityScroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-30rem*6))' },
        },
        infinityScrollMobile: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-95vw*6))' },
        }
      },
      animation: {
        slideInfinity: 'infinityScroll 20s infinite linear',
        slideInfinityMobile: 'infinityScrollMobile 20s infinite linear',
      },
    },
  },
  plugins: [],
} satisfies Config

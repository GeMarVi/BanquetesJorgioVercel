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
        'secundario': "#31363F",
        'terciario': "#000000",
      },
      fill: {
        'custom-fill': "#FF4848",
      },
      stroke: {
        'custom-stroke': "#FF4848",
      },
      textColor: {
        'heading': "#EEEEEE",
        'paragraph': "#00ADB5",
        'heading-1': "#C4FB6D",
        'heading-2': "#FFE227",
        'heading-3': "#0079FF",
        'heading-4': "#A555EC",
        'heading-5': "#F38EFF",
        'heading-6': "#F2613F",
        'dark': "#222831",
      },
      borderColor:{
        'custom-border' : "#FF4848"
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
        slideInfinity: 'infinityScroll 30s infinite linear',
        slideInfinityMobile: 'infinityScrollMobile 20s infinite linear',
      },
    },
  },
  plugins: [],
} satisfies Config

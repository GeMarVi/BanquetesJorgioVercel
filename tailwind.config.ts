import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'Nunito': ['"Nunito"' ,'sans-serif'],
        'Inter': ['"Inter"' , 'sans-serif'],
        'open': ['"open_sanscondensed_light"' , 'serif'],
        'clash': ['"ClashDisplay-Bold"' , 'serif'],
        'variable': ['"ClashDisplay-Variable"' , 'serif'],

      },
      backgroundColor:{
        'primario': "#CFD2C6",
        'secundario': "#B7BCA9",
        'terciario': "#B7BCA9",
      },
      textColor:{
        'heading': "#36392D",
        'paragraph': "#D24545"
      }
    },
  },
  plugins: [],
} satisfies Config

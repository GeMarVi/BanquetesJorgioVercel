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
        'primaryBg' : "#F8F6F4",
        'rojo': "#F9EFDB",
        'tercero': "#878F70",
        'secundario': "#B7BCA9",
        'azulOscuro': "#CFD2C6",
      },
      textColor:{
        'heading': "#36392D",
        'rojo': "#D24545"
      }
    },
  },
  plugins: [],
} satisfies Config

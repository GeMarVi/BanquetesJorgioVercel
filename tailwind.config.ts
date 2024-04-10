import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'title': ['"Roboto Flex"' ,'serif'],
        'monse': ['"Montserrat"' , 'serif'],
        'open': ['"open_sanscondensed_light"' , 'serif'],
      },
      backgroundColor:{
        'primaryBg' : "#F8F6F4",
        'rojo': "#D24545",
        'rojoOscuro': "#A94438",
        'opaco': "#1E293B",
        'azulOscuro': "#0A1A22",
      },
      textColor:{
        'paragraph': "#e5e7eb",
        'rojo': "#E72929"
      }
    },
  },
  plugins: [],
} satisfies Config

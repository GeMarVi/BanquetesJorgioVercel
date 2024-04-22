import type { Config } from "tailwindcss";

export default {
   content: ["./app/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            Nunito: ['"Nunito"', "sans-serif"],
            Inter: ['"Inter"', "sans-serif"],
            clash: ['"ClashDisplay-Bold"', "serif"],
            variable: ['"ClashDisplay-Variable"', "serif"],
         },
         backgroundColor: {
            primario: "#222831",
            secundario: "#31363F",
            terciario: "#FF4848",
            dark: "#000000",
         },
         fill: {
            "custom-fill": "#FF4848",
         },
         stroke: {
            "custom-stroke": "#FF4848",
         },
         textColor: {
            heading: "#EEEEEE",
            paragraph: "#00ADB5",
            dark: "#222831",
         },
         borderColor: {
            "custom-border": "#FF4848",
         },

         keyframes: {
            infinityScroll: {
               from: { transform: "translateX(0)" },
               to: { transform: "translateX(calc(-30rem*6))" },
            },
            infinityScrollMobile: {
               from: { transform: "translateX(0)" },
               to: { transform: "translateX(calc(-95vw*6))" },
            },
         },
         animation: {
            slideInfinity: "infinityScroll 35s infinite linear",
            slideInfinityMobile: "infinityScrollMobile 20s infinite linear",
         },
         transitionProperty: {
            "transform-opacity": "transform, opacity",
         },
         transitionDuration: {
            "600": "0.6s",
         },
         transitionTimingFunction: {
            "custom-cubic": "cubic-bezier(0.17, 0.55, 0.55, 1)",
         },
         delay: {
            "300": "0.4s",
         },
      },
   },
   plugins: [],
} satisfies Config;

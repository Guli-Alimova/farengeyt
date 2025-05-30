import type { Config } from "tailwindcss";

const config:Config ={
     content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
       "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:{
          primary:"#2242B4",
          secondary:"#ED553B",
          black:"#111111",
          silver:"#7A7A7A"

        },
        keyframes: {
          'float-x': {
            '0%, 100%': { transform: 'translateX(0px)' },
            '50%': { transform: 'translateX(20px)' },
          },
        },
        animation: {
          'float-x': 'float-x 4s ease-in-out infinite',
        },
       
      },
      
    },
    plugins: [],
  }
 
export default config;
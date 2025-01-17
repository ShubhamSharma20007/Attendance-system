/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        mycolor: "rgb(21 22 22 / 57%)", 
    },
    gridTemplateRows: {
      '[auto,auto,1fr]': 'auto auto 1fr',
    }, 
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
    
  ],
}
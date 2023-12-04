/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using src directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],


  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
     colors:{
       'primary': 'rgb(29, 155, 240)',
      }
    },
  },
  plugins: [
    function({addUtilities}){
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar':{
          'display': 'none',
        },
        '.no-scrollbar':{
          'ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        } 
      }
      addUtilities(newUtilities)
    }
  ]
}

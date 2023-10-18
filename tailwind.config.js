/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
    center:true,
    padding:'16px',
    },
    extend: {
      colors:{
        primary : '#0891b2',
        dark :'#0f172a',
        secondary : '#075985',
        tersier : '#5eead4',
        utama : '#65a30d',
        kedua : '#14532d',
        ketiga :'#16a34a',
        unyu : '#2e1065'
      },
      screens:{
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:'#FF0000',
        secondry:{
          100:'#00FF00',
          200:'#FFA500',

      }
      },
      fontFamily:{
        body:['Poppins']
      }
    },
  },
  plugins: [],
}


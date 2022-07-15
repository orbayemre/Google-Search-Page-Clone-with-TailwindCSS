/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors:{
        navBarIcon:"#5f6368",
        navBarText:"rgba(0,0,0,.87)",
        navBarButton:"#1a73e8",
        searchIcon:"#9aa0a6",
        searchBtn:"#3c4043",
        searchBtnBg:"#f8f9fa",
        lang:"#4d5156",
        footer:"#f2f2f2",
        footText:"#70757a"
      },
      fontFamily:{
        arial:"arial,sans-serif"
      },
      fontSize:{
        13:"13px",
        15:"15px"
      },
      width:{
        584:"584px",
      },
      height:{
        28:"28%",
        h14:"14px"
      },
      borderWidth:{
        1:"1px"
      },
      borderColor:{
        brc:"#dfe1e5",
        hr:"#dadce0"
      },
      boxShadow:{
        inputShadow:"0 1px 6px rgb(32 33 36 / 28%)",
      }
    },
  },
  plugins: [],
}

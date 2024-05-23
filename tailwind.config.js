/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {

        // Primary

        pink: "hsl( 322, 100%, 66% )",
        lightPink: "hsl( 321, 100%, 78% )",
        lightRed: "hsl( 0, 100%, 63% )",

        // Neutral

        veryDarkCyan: "hsl( 192, 100%, 9% )",
        veryPaleBlue: "hsl( 207, 100%, 98% )"

      },
      fontFamily: {
        openSans: [ "Open Sans", "sans-serif" ],
        poppins: [ "Poppins", "sans-serif" ]
      },
      fontWeight: {
        poppinsBold: "700",
        openSansRegular: "400",
        openSansSemiBold: "600",
        openSansBold: "700"
      },
    },
    screens: {
      xs: "344px",
      ss: "375px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px"
    }
  },
  plugins: [],
}


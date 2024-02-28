/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      hero: "url(src/assets/images/hero_bg.jpg)",
      about: "url(src/assets/images/about_img.jpg)",
      travel: "url(src/assets/images/travel_img.jpeg)",
      hotel: "url(src/assets/images/hotel_image.jpeg)",
      ucg: "url(src/assets/images/ucg_image.jpeg)",
    }, 
    backgroundSize: {
      about: "150%",
      cover: "cover",
      contain: "contain",
      auto: "auto"

    },
    fontFamily: {
      primary: "Nanum Gothic",
      secondary: "Noto Sans"
    }
  },
  plugins: [],
}
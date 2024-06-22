/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        oswald: ['var(--font-oswald)', 'sans-serif'],
      },
      colors: {
        "custom-lightblue": "rgb(23,171,255)",
        "custom-darkblue": "rgb(0,53,123)"
      },
      backgroundImage: {
        "header-img": "url('/assets/section1/background.webp')",
        "header-linear": "linear-gradient(90deg, rgba(6, 35, 73, 0.74) 16.84%, rgba(4, 21, 37, 0.5) 60.2%)",
        "header-linear-2": "linear-gradient(180.04deg, rgba(12, 37, 70, 0.93) -0.84%, rgba(24, 141, 249, 0.2) 103.44%)"
      },
      boxShadow: {
        "amenity-shadow": "0px 14px 34px -10px #7E7E7E50"
      },
      screens: {
        "ph": {'max': '420px'}
      }
    },
  },
  plugins: [],
};

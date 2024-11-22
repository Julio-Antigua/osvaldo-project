/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'SoftOrange': 'hsl(35, 77%, 62%)',
        'SoftRed': 'hsl(5, 85%, 63%)',
        'OffWhite': 'hsl(36, 100%, 99%)',
        'GrayishBlue': 'hsl(233, 8%, 79%)',
        'DarkGrayishBlue': 'hsl(236, 13%, 42%)',
        'VeryDarkBlue': 'hsl(240, 100%, 5%)',
        'CustomRed': 'hsl(0, 100%, 50%)',
        'CustomBlack': 'hsl(0, 0%, 0%)',
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
        freightSansProBlack: ["FreightSansProBlack", "sans-serif"],
        freightSansProBold: ["FreightSansProBold", "sans-serif"],
        freightSansProLight: ["FreightSansProLight", "sans-serif"],
        freightSansProBook: ["FreightSansProBook", "sans-serif"],
        freightSansProMedium: ["FreightSansProMedium", "sans-serif"],
        freightSansProSemibold: ["FreightSansProSemibold", "sans-serif"],
        montserratBoldItalic: ["Montserrat-BoldItalic", "sans-serif"],
        montserratBold: ["Montserrat-Bold", "sans-serif"],
        montserratMedium: ["Montserrat-Medium", "sans-serif"],
        montserratMediumItalic: ["Montserrat-MediumItalic", "sans-serif"],
        montserratSemiBold: ["Montserrat SemiBold", "sans-serif"],
      },
      screens: {
        '1xl': '1440px',
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
        slideIn: 'slideIn 2s linear infinite', // Nueva animación
        fadeInLeft: 'fadeInLeft 2s ease-in-out infinite', // Nueva animación
        fadeInUp: 'fadeInUp 2s ease-in-out infinite',
        scaleInOut: 'scaleInOut 2s ease-in-out infinite', // Animación de escalado
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '50%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(100%)', opacity: 0 },
        },
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '50%': { opacity: 1, transform: 'translateX(0)' },
          '100%': { opacity: 0, transform: 'translateX(20px)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '50%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(-20px)' },
        },
        scaleInOut: {
          '0%': { transform: 'scale(1)' },           // Tamaño original
          '50%': { transform: 'scale(1.1)' },         // Aumenta el tamaño
          '100%': { transform: 'scale(1)' },          // Vuelve al tamaño original
        },
      },
    },
  },
  plugins: [],
};

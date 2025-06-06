/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: '#FF7B00',
        Secondary: '#262626',
      },
      fontSize: {
        10: '10px',
        20: '20px',
        30: '30px',
        40: '40px',
        50: '50px',
        60: '60px',
        70: '70px',
        80: '80px',
        90: '90px',
        100: '100px'
      },
      boxShadow: {
        customized: '0px 4px 14px 0px rgba(0, 0, 0, 0.15)'
      },
      spacing: {
        "10p": '10px',
        "20p": '20px',
        "30p": '30px',
        "40p": '40px',
        "50p": '50px',
        "60p": '60px',
        "70p": '70px',
        "80p": '80px',
        "90p": '90px',
        "100p": '100px'
      },
      borderRadius: {
        "10p": '10px',
        "20p": '20px',
        "30p": '30px',
        "40p": '40px',
        "50p": '50px',
        "60p": '60px',
        "70p": '70px',
        "80p": '80px',
        "90p": '90px',
        "100p": '100px'
      },
      fontFamily: {
        Manrope: ["'Manrope' , 'sans-serif'"],
        Poppins: ["'Poppins' , 'sans-serif'"],
      }
    },
  },
  plugins: [],
}


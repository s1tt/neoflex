/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      mainColor: '#1C1C27',
      secondColor: '#FFA542',
      thirdColor: '#838383',
      fourthColor: '#FFCE7F'
    },
    fontSize: {
      s: ['13px', '15.85px'],
      m: ['15px', '18.29px'],
      l: ['17px', '20.7px'],
      xl: ['20px', '24.38px'],
      xxl: ['25px', '30.5px']
    },
    extend: {
      boxShadow: {
        card: '0px 0px 20px 0px #0000001A;'
      }
    }
  },
  plugins: []
};

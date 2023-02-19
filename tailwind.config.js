/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-black": "#1E293B",
        "inner-black": '#414042',
        'dark-blue': '#0046A1',
        'medium-blue': '#2A7CC7',
      },
      spacing: {
        sm: '8px',
        md: '60px',
        lg: '80px',
        xl: '120px',
      },
      fontSize: {

        'xxs': ['14px', { lineHeight: '21px', }],
        'xs': ['16px', { lineHeight: '28px', }],

        'ls': ['18px', { lineHeight: '24px', }],

        'sm': ['20px', { lineHeight: '30px', }],
        'normal': ['24px', { lineHeight: '28px', }],

        'base': ['48px', { lineHeight: '60px', }],
        'lg': ['60px', { lineHeight: '90px', }],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '0px',
        '2xl': '0px',
      },
      screens: {
        'sm': '100%',
        'md': '100%',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1280px',
      }
    },
  },
  plugins: [],
}
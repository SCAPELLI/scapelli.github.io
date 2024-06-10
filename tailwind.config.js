/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'customRed': '#ab1c1c',
        'customGray': '#111111',
      },
      boxShadow: {
        'custom-large': '0 0 20px rgba(0, 0, 0, 0.5)',
      },
      scale: {
        '120': '1.20',
      },
    },
    variants: {
      extend: {
        borderWidth: ['last', 'hover'],
        scale: ['hover'],
      },
    },
  },
  plugins: [],
}

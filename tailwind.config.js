module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'dt': '1215px',
      },
      colors: {
        'dell-blue': {
          100: '#6a92f8',
          200: '#5180f7',
          300: '#396df5',
          400: '#205bf4',
          500: '#0749f3',
          600: '#063ac2',
          700: '#042c92',
          800: '#031d61',
          900: '#010f31',
        },
        'casal': {
          DEFAULT: '#2B6563',
          '50': '#7FC9C6',
          '100': '#71C2C0',
          '200': '#54B6B3',
          '300': '#439E9B',
          '400': '#2B6563',
          '500': '#2B6563',
          '600': '#1A3E3C',
          '700': '#091616',
          '800': '#000000',
          '900': '#000000'
        },
        'honeysuckle': {
          DEFAULT: '#E3FF88',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#F6FFDA',
          '400': '#EDFFB1',
          '500': '#E3FF88',
          '600': '#D6FF50',
          '700': '#C9FF18',
          '800': '#AADF00',
          '900': '#7FA700'
        },
        'dell-background': '#FFFEFB'
      }
    },
  },
  plugins: [],
}
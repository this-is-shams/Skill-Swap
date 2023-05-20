/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        gray: {
          800: '#1f2937',
          900: '#111827',
        },
        calendarHeatmap: {
          '.color-github-0': { fill: '#eeeeee' },
          '.color-github-1': { fill: '#d6e685' },
          '.color-github-2': { fill: '#8cc665' },
          '.color-github-3': { fill: '#44a340' },
          '.color-github-4': { fill: '#1e6823' },
        },
      },
      spacing: {
        '0': '0',
      },
      margin: {
        '0': '0',
      },
      padding: {
        '0': '0',
      },
    },    
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      borderColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [],
}

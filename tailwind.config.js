/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F9FAFB',
        purple: {
          extra_light: '#C7A0F9',
          normal: '#7F56D9',
        },
        dark: '#1B152B',
        grey: '#7A7D9C',
        border: '#EFF0F6',
        hero_line: '#EDF0EE',
        gradientColor: '#E9D8FF',
      },
    },
  },
  plugins: [],
};

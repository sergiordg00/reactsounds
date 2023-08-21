/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00d0ea',
        'card': '#101727',
        'background': '#0c1221'
      },
    },
  },
  plugins: [],
};

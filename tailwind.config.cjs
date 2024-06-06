/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        'purple': '5px 5px 10px #d9c6f4'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};

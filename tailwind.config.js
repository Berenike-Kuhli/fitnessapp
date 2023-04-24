module.exports = {
  content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors {
      'light': '#FBFBFB',
      'medium': '#3A4151',
      'dark': '#202430'
    },
   
    bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
    bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500
,
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: (theme) => ({
        'gradient-one': `linear-gradient(to right, ${theme('colors.pink')}, ${theme('colors.orange')})`,
      }),
      {
      (theme) => ({
          'gradient-two': `linear-gradient(to right, ${theme('colors.pink')}, ${theme('colors.orange')})`,
        }),
      },
      {
(theme) => ({
          'gradient-three': `linear-gradient(to right, ${theme('colors.pink')}, ${theme('colors.orange')})`,
        }),
      },
    },
  },
  plugins: [],
};

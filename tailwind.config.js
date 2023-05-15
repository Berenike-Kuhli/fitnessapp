module.exports = {
  content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      colors: {
        'light': '#FBFBFB',
        'medium': '#3A4151',
        'dark': '#202430',
        'g1b': '#FF99C3',
        'g1a': '#FFD162',
        'g2b': '#F5FFA0',
        'g2a': '#3EF3E8',
        'g3a': '#3A4AE4',
        'g3b': '#3B85E6',
        'g3c': '#3EE4E8',
        'g3d': '#3EF3E8',

      },
      borderRadius: {
        'rounded-cus': '1.875rem'
      },
      width: {
        'w-cus': '25rem',
      }
    },
  },
  plugins: [],
};

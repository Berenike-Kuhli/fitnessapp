module.exports = {
  content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      colors: {
        'light': '#FBFBFB',
        'medium': '#3A4151',
        'dark': '#202430'
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

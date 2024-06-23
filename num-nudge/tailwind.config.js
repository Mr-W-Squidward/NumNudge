module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'bold': '0 10px 20px rgba(0, 0, 0, 0.3), 0 6px 6px rgba(0, 0, 0, 0.23)',
      },

      colors: {
        gold: '#FFD700',
        black: '#000000',
        gold2: '#F2910A',
        textgold: '#785F37',
        tan: '#cbae88',
      },
    },
  },
  plugins: [],
};

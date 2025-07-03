module.exports = {
  content: ['./src/**/*.{html,js,css}'], // Adjust paths to match your project structure
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Bleu foncé (texte du logo)
        secondary: '#F97316', // Orange vif (élément graphique)
        background: '#FFFFFF', // Blanc (fond)
        secondbg: '#E5E7EB', // Gris doux pour fonds secondaires
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
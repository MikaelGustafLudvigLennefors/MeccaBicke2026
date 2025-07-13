// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',    // Mörkt för rubriker och text
        secondary: '#ffffff',  // Bakgrunder
        accent: '#5568FE',     // Er accentfärg
        overlay: 'rgba(0,0,0,0.5)' // Hero-overlägg
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],     // Rubrikfont
        sans: ['Inter', 'sans-serif']              // Brödtext
      },
      spacing: {
        '128': '32rem', // Extra stor höjd för hero
      }
    }
  },
  plugins: []
};

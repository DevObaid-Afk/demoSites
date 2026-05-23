/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#12110f',
        charcoal: '#1c1a17',
        porcelain: '#f8f5ef',
        champagne: '#d8b46a',
        copper: '#b66a3c',
        sage: '#8fa58e',
        wine: '#76343f'
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 20px 80px rgba(216, 180, 106, 0.2)',
        soft: '0 20px 60px rgba(18, 17, 15, 0.14)'
      },
      backgroundImage: {
        'gold-line': 'linear-gradient(90deg, transparent, rgba(216,180,106,.8), transparent)'
      }
    }
  },
  plugins: []
};

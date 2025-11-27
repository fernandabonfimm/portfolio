/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode:'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width:{
        '128':'68rem'
      },
      maxWidth:{
        '128':'68rem'
      },
      screens: {
        'xs': '475px'
      },
      colors:{
        'laranja': '#e3523c', 
        'roxo': '#3c255d', 
        'verde-agua': '#00939f', 
        'azul': '#015365', 
        'verde-musgo':  '#a0c030', 
        'azul-médio': '#0069a6', 
        'azul-escuro': '#122841',
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },


  },
  plugins: [],
}

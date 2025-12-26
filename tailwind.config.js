/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        'brand-primary': 'var(--brand-primary)',
        'brand-hover': 'var(--brand-hover)',
        'surface-dark': 'var(--surface-dark)',
        'surface-footer': 'var(--surface-footer)',
        'surface-divider': 'var(--surface-divider)',
      },
      height: {
        'portfolio': '360px',
        'office-sm': '400px',
        'office': '550px',
      },
      backgroundImage: {
        'header-gradient': 'linear-gradient(180deg, transparent 30%, var(--surface-dark))',
        'footer-gradient': 'linear-gradient(180deg, var(--surface-dark) 0%, transparent)',
      },
    },
  },
  plugins: [],
}

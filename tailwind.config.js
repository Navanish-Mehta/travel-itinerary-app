/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: 'var(--primary)',
          'primary-dark': 'var(--primary-dark)',
          secondary: 'var(--secondary)',
          accent: 'var(--accent)',
          success: 'var(--success)',
          danger: 'var(--danger)',
          warning: 'var(--warning)',
          info: 'var(--info)',
        },
        backgroundColor: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
        },
        textColor: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
        },
        borderColor: {
          DEFAULT: 'var(--border-color)',
        },
      },
    },
    plugins: [],
  };
  
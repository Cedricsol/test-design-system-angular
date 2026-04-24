/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        secondary: '#64748b',
      },
    },
  },
  plugins: [],
};

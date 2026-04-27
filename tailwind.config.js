/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        content: {
          primary: '#4f46e5',
          secondary: '#64748b',
          disabled: '#94a3b8',
        },
        text: {
          primary: colors.gray[100],
          secondary: colors.gray[200],
        },
        border: colors.gray[200],
        hover: {
          primary: colors.gray[300],
          secondary: colors.gray[400],
        },
      },
    },
  },
  plugins: [],
};

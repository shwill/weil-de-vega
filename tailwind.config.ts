import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        'paper-sunk': 'var(--paper-sunk)',
        ink: 'var(--ink)',
        'ink-muted': 'var(--ink-muted)',
        oxblood: 'var(--oxblood)',
        'oxblood-hover': 'var(--oxblood-hover)',
        hairline: 'var(--hairline)',
      },
      fontFamily: {
        display: ['"Fraunces Variable"', 'Fraunces', 'Georgia', 'serif'],
        sans: [
          '"Inter Tight Variable"',
          '"Inter Tight"',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },
      maxWidth: {
        column: '640px',
      },
      fontVariantNumeric: {
        tabular: 'tabular-nums',
      },
    },
  },
  plugins: [],
} satisfies Config;

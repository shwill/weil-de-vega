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
        /* Content column width. 720px is narrow enough to feel like a printed
           card but wide enough to fit the full practice name on one display line. */
        column: '720px',
      },
      fontVariantNumeric: {
        tabular: 'tabular-nums',
      },
    },
  },
  plugins: [],
} satisfies Config;

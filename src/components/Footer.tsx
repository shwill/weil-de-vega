import { Link } from 'react-router-dom';
import { PRACTICE } from '../lib/practice';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-column px-6 py-10">
      <p className="text-center text-xs text-ink-muted md:text-sm">
        © {year} {PRACTICE.legalName} ·{' '}
        <Link
          to="/impressum"
          className="text-oxblood hover:text-oxblood-hover"
        >
          Impressum
        </Link>{' '}
        ·{' '}
        <Link
          to="/datenschutz"
          className="text-oxblood hover:text-oxblood-hover"
        >
          Datenschutz
        </Link>
      </p>
    </footer>
  );
}

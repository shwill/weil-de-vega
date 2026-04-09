import { PRACTICE } from '../lib/practice';

export function PracticeHeader() {
  return (
    <header className="px-6 pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-column">
        <h1 className="font-display text-4xl leading-[1.1] text-ink md:text-5xl">
          {PRACTICE.doctorName}
        </h1>

        <div
          className="mt-6 h-[2px] w-16 bg-oxblood"
          aria-hidden="true"
        />

        <p className="mt-6 text-lg text-ink-muted">{PRACTICE.title}</p>

        <p className="mt-3 text-xs uppercase tracking-[0.14em] text-ink-muted md:text-sm">
          {PRACTICE.address.street} · {PRACTICE.address.zip}{' '}
          {PRACTICE.address.city}
        </p>
      </div>
    </header>
  );
}

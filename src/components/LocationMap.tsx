import { useState } from 'react';
import { PRACTICE } from '../lib/practice';

export function LocationMap() {
  const [consent, setConsent] = useState(false);

  return (
    <section className="mx-auto max-w-column px-6 py-20 md:py-28">
      <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
        Standort
      </h2>

      <div className="mt-10 aspect-video border border-hairline bg-paper">
        {consent ? (
          <iframe
            src={PRACTICE.maps.embed}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Karte — Am Waldbach 5, 77654 Offenburg"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-5 px-6 py-8 text-center">
            <p className="max-w-sm text-sm leading-relaxed text-ink-muted">
              Die Karte wird von Google geladen. Beim Anzeigen werden Daten an
              Google übertragen.
            </p>
            <button
              type="button"
              onClick={() => setConsent(true)}
              className="border border-ink px-6 py-2 text-xs font-medium uppercase tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Karte laden
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

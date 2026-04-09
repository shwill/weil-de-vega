import { Link } from 'react-router-dom';
import { PRACTICE } from '../lib/practice';
import { Footer } from '../components/Footer';
import { HairlineDivider } from '../components/HairlineDivider';

function LegalRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-1 md:grid-cols-[9rem_1fr] md:gap-x-6">
      <dt className="text-xs uppercase tracking-[0.08em] text-ink-muted pt-1">
        {label}
      </dt>
      <dd className="space-y-1 text-base text-ink">{children}</dd>
    </div>
  );
}

export function Impressum() {
  return (
    <main className="min-h-screen bg-paper">
      <header className="px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-column">
          <h1 className="font-display text-4xl leading-[1.1] text-ink md:text-[56px]">
            Impressum
          </h1>
          <div className="mt-6 h-[2px] w-16 bg-oxblood" aria-hidden="true" />
          <p className="mt-6 text-sm text-ink-muted">
            Angaben gemäß § 5 TMG
          </p>
        </div>
      </header>

      <HairlineDivider />

      <section className="mx-auto max-w-column px-6 py-20 md:py-24">
        <dl className="space-y-10">
          <LegalRow label="Verantwortlich">
            <p>{PRACTICE.doctorNameLegal}</p>
          </LegalRow>

          <LegalRow label="Praxis">
            <p>Hausarztpraxis</p>
            <p>{PRACTICE.address.street}</p>
            <p>
              {PRACTICE.address.zip} {PRACTICE.address.city}
            </p>
          </LegalRow>

          <LegalRow label="Kontakt">
            <p>
              Telefon:{' '}
              <a
                href={`tel:${PRACTICE.phone.tel}`}
                className="text-oxblood hover:text-oxblood-hover"
              >
                {PRACTICE.phone.display}
              </a>
            </p>
            <p>Fax: {PRACTICE.fax.display}</p>
            <p>
              E-Mail:{' '}
              <a
                href={`mailto:${PRACTICE.email}`}
                className="text-oxblood hover:text-oxblood-hover"
              >
                {PRACTICE.email}
              </a>
            </p>
          </LegalRow>

          <LegalRow label="Berufsbezeichnung">
            <p>{PRACTICE.title}</p>
            <p className="text-ink-muted">(verliehen in Deutschland)</p>
          </LegalRow>

          <LegalRow label="Zuständige Kammer">
            <p>{PRACTICE.chamber.name}</p>
            <p>{PRACTICE.chamber.street}</p>
            <p>{PRACTICE.chamber.city}</p>
            <p>
              <a
                href={PRACTICE.chamber.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-oxblood hover:text-oxblood-hover"
              >
                aerztekammer-bw.de
              </a>
            </p>
          </LegalRow>

          <LegalRow label="Aufsichtsbehörde">
            <p>{PRACTICE.supervisoryAuthority.name}</p>
            <p>{PRACTICE.supervisoryAuthority.street}</p>
            <p>{PRACTICE.supervisoryAuthority.city}</p>
          </LegalRow>
        </dl>
      </section>

      <HairlineDivider />

      <section className="mx-auto max-w-column px-6 py-20 md:py-24">
        <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
          Haftungsausschluss
        </h2>
        <div className="mt-6 space-y-5 text-base text-ink">
          <p>
            <strong className="font-medium">Haftung für Inhalte.</strong> Die
            Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die
            Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch
            keine Gewähr übernommen werden. Als Diensteanbieter sind wir gemäß
            § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
            als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
            gespeicherte fremde Informationen zu überwachen oder nach
            Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
            hinweisen.
          </p>
          <p>
            <strong className="font-medium">Haftung für Links.</strong> Unser
            Angebot enthält ggf. Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich.
          </p>
        </div>
      </section>

      <HairlineDivider />

      <section className="mx-auto max-w-column px-6 py-20 md:py-24">
        <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
          Urheberrecht
        </h2>
        <p className="mt-6 text-base text-ink">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers.
        </p>
      </section>

      <HairlineDivider />

      <div className="mx-auto max-w-column px-6 py-10">
        <Link
          to="/"
          className="text-sm text-oxblood hover:text-oxblood-hover"
        >
          ← Zurück zur Startseite
        </Link>
      </div>

      <HairlineDivider />
      <Footer />
    </main>
  );
}

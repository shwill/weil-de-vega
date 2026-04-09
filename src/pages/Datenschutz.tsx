import { Link } from 'react-router-dom';
import { PRACTICE } from '../lib/practice';
import { Footer } from '../components/Footer';
import { HairlineDivider } from '../components/HairlineDivider';

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
      {children}
    </h2>
  );
}

export function Datenschutz() {
  return (
    <main className="min-h-screen bg-paper">
      <header className="px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-column">
          <h1 className="font-display text-4xl leading-[1.1] text-ink md:text-[56px]">
            Datenschutz­erklärung
          </h1>
          <div className="mt-6 h-[2px] w-16 bg-oxblood" aria-hidden="true" />
          <p className="mt-6 text-sm text-ink-muted">
            Informationen gemäß Art. 13 DSGVO
          </p>
        </div>
      </header>

      <HairlineDivider />

      <section className="mx-auto max-w-column px-6 py-20 md:py-24">
        <SectionHeading>Verantwortlicher</SectionHeading>
        <div className="mt-6 space-y-1 text-base text-ink">
          <p>{PRACTICE.doctorNameLegal}</p>
          <p>Hausarztpraxis</p>
          <p>{PRACTICE.address.street}</p>
          <p>
            {PRACTICE.address.zip} {PRACTICE.address.city}
          </p>
          <p className="pt-2">
            Telefon:{' '}
            <a
              href={`tel:${PRACTICE.phone.tel}`}
              className="text-oxblood hover:text-oxblood-hover"
            >
              {PRACTICE.phone.display}
            </a>
          </p>
          <p>
            E-Mail:{' '}
            <a
              href={`mailto:${PRACTICE.email}`}
              className="text-oxblood hover:text-oxblood-hover"
            >
              {PRACTICE.email}
            </a>
          </p>
        </div>
      </section>

      <HairlineDivider />

      <section className="mx-auto max-w-column px-6 py-20 md:py-24">
        <SectionHeading>Erhebung allgemeiner Informationen</SectionHeading>
        <p className="mt-6 text-base text-ink">
          Beim Aufrufen dieser Website werden keine personenbezogenen Daten
          systematisch erhoben, gespeichert oder ausgewertet. Es werden keine
          Cookies gesetzt, keine Analyse- oder Tracking-Dienste eingebunden
          und keine Inhalte von Drittanbietern vorausgeladen. Die Website wird
          als statische Seite ausgeliefert und enthält keine serverseitige
          Verarbeitung.
        </p>
      </section>

      <HairlineDivider />

      <section className="mx-auto max-w-column px-6 py-20 md:py-24">
        <SectionHeading>Google Maps (Opt-in)</SectionHeading>
        <div className="mt-6 space-y-5 text-base text-ink">
          <p>
            Auf der Startseite können Sie freiwillig eine Karte von Google Maps
            nachladen, um den Standort der Praxis einzusehen. Die Karte ist
            hinter einer Einwilligung verborgen und wird erst nach einem Klick
            auf die Schaltfläche „Karte laden" angezeigt.
          </p>
          <p>
            Erst beim Laden der Karte werden Daten an Google übertragen. Dies
            umfasst insbesondere Ihre IP-Adresse sowie technische Informationen
            zu Ihrem Browser. Die Verarbeitung erfolgt durch Google Ireland
            Ltd., Gordon House, Barrow Street, Dublin 4, Irland. Weitere
            Informationen finden Sie in den Datenschutzhinweisen von Google:{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-oxblood hover:text-oxblood-hover"
            >
              policies.google.com/privacy
            </a>
            .
          </p>
          <p>
            Rechtsgrundlage für das Laden der Karte ist Ihre Einwilligung gemäß
            Art. 6 Abs. 1 lit. a DSGVO. Die Einwilligung gilt jeweils nur für
            den aktuellen Seitenaufruf und wird nicht gespeichert.
          </p>
        </div>
      </section>

      <HairlineDivider />

      <section className="mx-auto max-w-column px-6 py-20 md:py-24">
        <SectionHeading>Ihre Rechte</SectionHeading>
        <div className="mt-6 space-y-5 text-base text-ink">
          <p>
            Sie haben gegenüber dem Verantwortlichen folgende Rechte
            hinsichtlich der Sie betreffenden personenbezogenen Daten: Recht
            auf Auskunft (Art. 15 DSGVO), Recht auf Berichtigung (Art. 16
            DSGVO), Recht auf Löschung (Art. 17 DSGVO), Recht auf Einschränkung
            der Verarbeitung (Art. 18 DSGVO), Recht auf Widerspruch gegen die
            Verarbeitung (Art. 21 DSGVO) und Recht auf Datenübertragbarkeit
            (Art. 20 DSGVO).
          </p>
          <p>
            Sie haben zudem das Recht, sich bei einer
            Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
            personenbezogenen Daten durch uns zu beschweren.
          </p>
        </div>
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

import { HOURS, type Weekday, type HourSlot } from '../lib/hours';
import { useOpenStatus } from '../hooks/useOpenStatus';

const DAY_ROWS: Array<{ key: Weekday; label: string }> = [
  { key: 'monday', label: 'Mo' },
  { key: 'tuesday', label: 'Di' },
  { key: 'wednesday', label: 'Mi' },
  { key: 'thursday', label: 'Do' },
  { key: 'friday', label: 'Fr' },
];

const pad = (n: number) => String(n).padStart(2, '0');
const formatTime = (m: number) => `${pad(Math.floor(m / 60))}:${pad(m % 60)}`;
const formatSlot = (slot: HourSlot) => `${formatTime(slot.start)}–${formatTime(slot.end)}`;

function splitSlots(slots: HourSlot[]): { morning: HourSlot | null; afternoon: HourSlot | null } {
  const morning = slots.find((s) => s.start < 12 * 60) ?? null;
  const afternoon = slots.find((s) => s.start >= 12 * 60) ?? null;
  return { morning, afternoon };
}

export function Sprechzeiten() {
  const status = useOpenStatus(HOURS);
  const isLive = status.state === 'open' || status.state === 'house-calls';
  const dotClass = isLive ? 'bg-oxblood' : 'bg-ink-muted';

  return (
    <section className="bg-paper-sunk">
      <div className="mx-auto max-w-column px-6 py-20 md:py-28">
        <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
          Sprechzeiten
        </h2>

        <p className="mt-6 flex items-center gap-3 text-base text-ink md:text-lg">
          <span
            className={`inline-block h-2 w-2 rounded-full ${dotClass}`}
            aria-hidden="true"
          />
          <span>{status.message}</span>
        </p>

        <table className="tabular mt-10 w-full border-collapse text-base">
          <tbody>
            {DAY_ROWS.map(({ key, label }) => {
              const { morning, afternoon } = splitSlots(HOURS[key]);
              return (
                <tr key={key} className="border-b border-hairline last:border-b-0">
                  <td className="w-10 py-4 text-ink-muted">{label}</td>
                  <td className="py-4 text-ink">
                    {morning
                      ? morning.kind === 'house-calls'
                        ? <em className="italic text-ink-muted">Hausbesuche</em>
                        : formatSlot(morning)
                      : <span className="text-ink-muted">—</span>}
                  </td>
                  <td className="py-4 text-right text-ink">
                    {afternoon
                      ? formatSlot(afternoon)
                      : <span className="text-ink-muted">—</span>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <p className="mt-8 text-sm italic text-ink-muted">
          Donnerstag Vormittag: Hausbesuche und Sprechzeiten nach Vereinbarung.
        </p>
      </div>
    </section>
  );
}

import type { HoursTable, Weekday } from './hours';

export type OpenState = 'open' | 'closed' | 'house-calls';

export type OpenStatus = {
  state: OpenState;
  message: string;
};

const WEEKDAY_BY_INDEX: Weekday[] = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

const WEEKDAY_DE: Record<Weekday, string> = {
  monday: 'Montag',
  tuesday: 'Dienstag',
  wednesday: 'Mittwoch',
  thursday: 'Donnerstag',
  friday: 'Freitag',
  saturday: 'Samstag',
  sunday: 'Sonntag',
};

const pad = (n: number) => String(n).padStart(2, '0');
const formatTime = (minutes: number) =>
  `${pad(Math.floor(minutes / 60))}:${pad(minutes % 60)}`;

export function getOpenStatus(now: Date, hours: HoursTable): OpenStatus {
  const todayIdx = now.getDay();
  const today = WEEKDAY_BY_INDEX[todayIdx];
  const nowMin = now.getHours() * 60 + now.getMinutes();
  const slots = hours[today];

  // 1. Currently inside a slot?
  for (const slot of slots) {
    if (nowMin >= slot.start && nowMin < slot.end) {
      if (slot.kind === 'house-calls') {
        return {
          state: 'house-calls',
          message: 'Donnerstag Vormittag · Hausbesuche & nach Vereinbarung',
        };
      }
      return {
        state: 'open',
        message: `Jetzt geöffnet · bis ${formatTime(slot.end)}`,
      };
    }
  }

  // 2. Closed. Is there a later regular slot today?
  for (const slot of slots) {
    if (slot.start > nowMin && slot.kind !== 'house-calls') {
      return {
        state: 'closed',
        message: `Öffnet heute um ${formatTime(slot.start)}`,
      };
    }
  }

  // 3. Find the next day with a regular slot.
  for (let offset = 1; offset <= 7; offset++) {
    const nextIdx = (todayIdx + offset) % 7;
    const nextDay = WEEKDAY_BY_INDEX[nextIdx];
    const firstRegular = hours[nextDay].find((s) => s.kind !== 'house-calls');
    if (firstRegular) {
      return {
        state: 'closed',
        message:
          offset === 1
            ? `Öffnet morgen um ${formatTime(firstRegular.start)}`
            : `Öffnet ${WEEKDAY_DE[nextDay]} um ${formatTime(firstRegular.start)}`,
      };
    }
  }

  return { state: 'closed', message: 'Geschlossen' };
}

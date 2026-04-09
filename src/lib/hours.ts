/** One opening window, expressed as minutes-since-midnight. */
export type HourSlot = {
  /** Inclusive start, minutes since midnight (e.g. 8*60 = 480 for 08:00). */
  start: number;
  /** Exclusive end, minutes since midnight. */
  end: number;
  /** Optional flag for non-standard slots like house-calls. */
  kind?: 'regular' | 'house-calls';
};

export type Weekday =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

export type HoursTable = Record<Weekday, HourSlot[]>;

/** Helper for readable hour literals in minutes since midnight. */
const h = (hh: number, mm: number = 0) => hh * 60 + mm;

/** Real opening hours for Hausarztpraxis Dr. Caroline Weil de Vega. */
export const HOURS: HoursTable = {
  monday: [
    { start: h(8), end: h(12) },
    { start: h(16), end: h(19) },
  ],
  tuesday: [{ start: h(8), end: h(12) }],
  wednesday: [{ start: h(8), end: h(12) }],
  thursday: [
    { start: h(8), end: h(12), kind: 'house-calls' },
    { start: h(15), end: h(18) },
  ],
  friday: [{ start: h(8), end: h(12) }],
  saturday: [],
  sunday: [],
};

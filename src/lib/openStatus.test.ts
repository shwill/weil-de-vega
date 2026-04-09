import { describe, expect, test } from 'vitest';
import type { HoursTable } from './hours';
import { getOpenStatus } from './openStatus';

// Reference week in April 2026:
//   Mo 13 · Di 14 · Mi 15 · Do 16 · Fr 17 · Sa 18 · So 19

describe('getOpenStatus', () => {
  const weilDeVegaHours: HoursTable = {
    monday: [
      { start: 8 * 60, end: 12 * 60 },
      { start: 16 * 60, end: 19 * 60 },
    ],
    tuesday: [{ start: 8 * 60, end: 12 * 60 }],
    wednesday: [{ start: 8 * 60, end: 12 * 60 }],
    thursday: [
      { start: 8 * 60, end: 12 * 60, kind: 'house-calls' },
      { start: 15 * 60, end: 18 * 60 },
    ],
    friday: [{ start: 8 * 60, end: 12 * 60 }],
    saturday: [],
    sunday: [],
  };

  test('Monday 09:00 returns open until 12:00', () => {
    const status = getOpenStatus(
      new Date('2026-04-13T09:00:00'),
      weilDeVegaHours,
    );
    expect(status.state).toBe('open');
    expect(status.message).toBe('Jetzt geöffnet · bis 12:00');
  });

  test('Monday 12:30 is closed and points to today 16:00', () => {
    const status = getOpenStatus(
      new Date('2026-04-13T12:30:00'),
      weilDeVegaHours,
    );
    expect(status.state).toBe('closed');
    expect(status.message).toBe('Öffnet heute um 16:00');
  });

  test('Monday 18:30 is open until 19:00 (second slot)', () => {
    const status = getOpenStatus(
      new Date('2026-04-13T18:30:00'),
      weilDeVegaHours,
    );
    expect(status.state).toBe('open');
    expect(status.message).toBe('Jetzt geöffnet · bis 19:00');
  });

  test('Monday 19:30 is closed and points to tomorrow 08:00', () => {
    const status = getOpenStatus(
      new Date('2026-04-13T19:30:00'),
      weilDeVegaHours,
    );
    expect(status.state).toBe('closed');
    expect(status.message).toBe('Öffnet morgen um 08:00');
  });

  test('Tuesday 14:00 is closed and points to tomorrow 08:00', () => {
    const status = getOpenStatus(
      new Date('2026-04-14T14:00:00'),
      weilDeVegaHours,
    );
    expect(status.state).toBe('closed');
    expect(status.message).toBe('Öffnet morgen um 08:00');
  });

  test('Thursday 10:00 is house-calls (Vormittag nach Vereinbarung)', () => {
    const status = getOpenStatus(
      new Date('2026-04-16T10:00:00'),
      weilDeVegaHours,
    );
    expect(status.state).toBe('house-calls');
    expect(status.message).toBe(
      'Donnerstag Vormittag · Hausbesuche & nach Vereinbarung',
    );
  });

  test('Thursday 14:30 is closed and points to today 15:00', () => {
    const status = getOpenStatus(
      new Date('2026-04-16T14:30:00'),
      weilDeVegaHours,
    );
    expect(status.state).toBe('closed');
    expect(status.message).toBe('Öffnet heute um 15:00');
  });

  test('Friday 14:00 is closed and points to Montag 08:00', () => {
    const status = getOpenStatus(
      new Date('2026-04-17T14:00:00'),
      weilDeVegaHours,
    );
    expect(status.state).toBe('closed');
    expect(status.message).toBe('Öffnet Montag um 08:00');
  });

  test('Saturday 10:00 is closed and points to Montag 08:00', () => {
    const status = getOpenStatus(
      new Date('2026-04-18T10:00:00'),
      weilDeVegaHours,
    );
    expect(status.state).toBe('closed');
    expect(status.message).toBe('Öffnet Montag um 08:00');
  });

  test('Sunday 20:00 is closed and points to tomorrow 08:00 (Montag)', () => {
    const status = getOpenStatus(
      new Date('2026-04-19T20:00:00'),
      weilDeVegaHours,
    );
    expect(status.state).toBe('closed');
    expect(status.message).toBe('Öffnet morgen um 08:00');
  });

  test('exactly at close time (12:00 Monday) is considered closed', () => {
    const status = getOpenStatus(
      new Date('2026-04-13T12:00:00'),
      weilDeVegaHours,
    );
    expect(status.state).toBe('closed');
    expect(status.message).toBe('Öffnet heute um 16:00');
  });

  test('exactly at open time (08:00 Monday) is considered open', () => {
    const status = getOpenStatus(
      new Date('2026-04-13T08:00:00'),
      weilDeVegaHours,
    );
    expect(status.state).toBe('open');
    expect(status.message).toBe('Jetzt geöffnet · bis 12:00');
  });
});

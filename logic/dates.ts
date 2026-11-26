// Helpers for 'YYYY-MM-DD' date strings. They only read the fixed demo dates, never the current time.

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

// Reads a date string as midnight UTC, so the result is the same in every time zone
function toDate(date: string): Date {
  return new Date(`${date}T00:00:00Z`);
}

export function addDays(date: string, days: number): string {
  const result = toDate(date);
  result.setUTCDate(result.getUTCDate() + days);
  return result.toISOString().slice(0, 10);
}

export function weekdayName(date: string): string {
  return WEEKDAYS[toDate(date).getUTCDay()];
}

// For example 'Tuesday 1 December'
export function formatDay(date: string): string {
  const day = toDate(date);
  return `${WEEKDAYS[day.getUTCDay()]} ${day.getUTCDate()} ${MONTHS[day.getUTCMonth()]}`;
}

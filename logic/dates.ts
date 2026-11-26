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

// For example 'Wednesday', or 'Wed' when `short` is true
export function weekdayName(date: string, short = false): string {
  const weekday = WEEKDAYS[toDate(date).getUTCDay()];
  return short ? weekday.slice(0, 3) : weekday;
}

// For example 'Tuesday 1 December', or 'Tue 1 Dec' when `short` is true
export function formatDay(date: string, short = false): string {
  const day = toDate(date);
  const weekday = WEEKDAYS[day.getUTCDay()];
  const month = MONTHS[day.getUTCMonth()];
  if (short) {
    return `${weekday.slice(0, 3)} ${day.getUTCDate()} ${month.slice(0, 3)}`;
  }
  return `${weekday} ${day.getUTCDate()} ${month}`;
}

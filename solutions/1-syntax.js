// BEGIN (write your solution here)
const WEEKENDS = {
  long: ['saturday', 'sunday'],
  short: ['sat', 'sun'],
};

export function getWeekends(format = 'long') {
  if (format === 'short') {
    return WEEKENDS.short;
  }

  return WEEKENDS.long;
}
// END

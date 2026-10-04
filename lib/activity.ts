// Active days and longest run of consecutive non-zero days in a daily-count array.
export function summarize(days: number[]) {
  let activedays = 0;
  let maxstreak = 0;
  let curr = 0;
  for (const n of days) {
    if (n > 0) {
      activedays++;
      curr++;
      maxstreak = Math.max(maxstreak, curr);
    } else curr = 0;
  }
  return { activedays, maxstreak };
}

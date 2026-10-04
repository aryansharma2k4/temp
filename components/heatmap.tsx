type HeatmapProps = {
  data: number[];
  unit: string;
  footerMessage?: string;
};

type DayData = {
  date: Date | null;
  count: number;
};

type MonthBlock = {
  label: string;
  weeks: DayData[][];
};

export type StatsProps = {
  title: string;
  unit: string; // e.g. "contributions", "submissions"
  stats: { count: number; activeDays: number; maxStreak: number; data: number[] } | null;
  footerMessage?: string;
};

const HeatmapGrid = ({ data, unit, footerMessage }: HeatmapProps) => {
  const getColor = (count: number) => {
    if (count === -1) return "bg-transparent";
    if (count === 0) return "bg-[#ededed] dark:bg-[#27272a]";

    // Light → dark gray as activity increases (inverted in dark mode).
    if (count <= 2) return "bg-[#d0d0d0] dark:bg-[#3f3f46]";
    if (count <= 5) return "bg-[#a3a3a3] dark:bg-[#71717a]";
    if (count <= 9) return "bg-[#737373] dark:bg-[#a1a1aa]";
    return "bg-[#404040] dark:bg-[#e4e4e7]";
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const startDate = new Date(today);
  startDate.setDate(today.getDate() - (data.length - 1));

  const dataMap = new Map<string, DayData>();
  data.forEach((count, index) => {
    const d = new Date(startDate);
    d.setDate(d.getDate() + index);
    dataMap.set(d.toDateString(), { date: d, count });
  });

  const monthBlocks: MonthBlock[] = [];

  for (let i = 12; i >= 0; i--) {
    const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
    const year = d.getFullYear();
    const month = d.getMonth();
    const monthLabel = d.toLocaleString('default', { month: 'short' });

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDow = new Date(year, month, 1).getDay();

    const monthData: DayData[] = [];

    for (let pad = 0; pad < startDow; pad++) {
      monthData.push({ count: -1, date: null });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const currentDay = new Date(year, month, day);
      const dateStr = currentDay.toDateString();

      if (dataMap.has(dateStr)) {
        monthData.push(dataMap.get(dateStr)!);
      } else {
        monthData.push({ count: -1, date: null });
      }
    }
    while (monthData.length % 7 !== 0) {
      monthData.push({ count: -1, date: null });
    }

    const weeks: DayData[][] = [];
    for (let k = 0; k < monthData.length; k += 7) {
      weeks.push(monthData.slice(k, k + 7));
    }

    monthBlocks.push({ label: monthLabel, weeks });
  }

  return (
    <div className="w-full flex flex-col">
      <div className="w-full overflow-x-auto pt-2 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex gap-2 w-max">
          {monthBlocks.map((month, mIndex) => (
            <div key={mIndex} className="flex flex-col gap-2">
              <div className="grid grid-rows-7 grid-flow-col gap-[2.5px]">
                {month.weeks.map((week, wIndex) => (
                  week.map((day, dIndex) => (
                    <div
                      key={`${wIndex}-${dIndex}`}
                      className={`w-[9px] h-[9px] rounded-[2px] ${getColor(day.count)}`}
                      title={day.date && day.count !== -1 ? `${day.count} ${unit} on ${day.date.toDateString()}` : ""}
                    />
                  ))
                ))}
              </div>
              <span className="text-[11px] text-neutral-400 dark:text-zinc-500 font-medium text-center">
                {month.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between w-full mt-1 text-[11px] text-neutral-400 dark:text-zinc-500">
        <span className="hidden sm:inline">{footerMessage}</span>

        <div className="flex items-center gap-2">
          <span>Less</span>
          <div className="flex gap-[2.5px]">
            {[0, 1, 2, 3, 4].map((level) => (
              <div key={level} className={`w-[9px] h-[9px] rounded-[2px] ${getColor(level)}`} />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

export const StatsCard = ({ title, unit, stats, footerMessage }: StatsProps) => {
  return (
    <div className="w-full rounded-2xl border border-neutral-200 bg-white p-5 md:p-6 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h3 className="text-base font-medium text-neutral-900 dark:text-white">{title}</h3>
        {stats && (
          <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 text-xs text-neutral-500 dark:text-zinc-400">
            <span>
              <span className="text-base font-medium text-neutral-900 dark:text-white">{stats.count.toLocaleString("en-US")}</span> {unit} in the past year
            </span>
            <span>Active days: <span className="font-medium text-neutral-900 dark:text-white">{stats.activeDays}</span></span>
            <span>Longest streak: <span className="font-medium text-neutral-900 dark:text-white">{stats.maxStreak}</span></span>
          </div>
        )}
      </div>

      {stats ? (
        <HeatmapGrid data={stats.data} unit={unit} footerMessage={footerMessage} />
      ) : (
        <p className="py-10 text-center text-sm text-neutral-500 dark:text-zinc-400">Unavailable right now.</p>
      )}
    </div>
  );
};

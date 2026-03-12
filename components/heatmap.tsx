type HeatmapProps = {
  data: number[];
  themeColor: "emerald" | "blue";
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
  count: string;
  actionText: string;
  activeDays: string;
  streakLabel: string;
  streakDays: string;
  data: number[];
  themeColor: "emerald" | "blue";
  footerMessage?: string;
};

const HeatmapGrid = ({ data, themeColor, footerMessage }: HeatmapProps) => {
  const getColor = (count: number) => {
    if (count === -1) return "bg-transparent";
    if (count === 0) return "bg-[#ebedf0] dark:bg-[#2c2c2c]";

    if (themeColor === "emerald") {
      if (count >= 1 && count <= 2) return "bg-[#9be9a8] dark:bg-[#00442a]"; 
      if (count >= 3 && count <= 5) return "bg-[#40c463] dark:bg-[#006d35]"; 
      if (count >= 6 && count <= 9) return "bg-[#30a14e] dark:bg-[#009b4d]"; 
      return "bg-[#216e39] dark:bg-[#00cc66]";                                
    } else {
      if (count >= 1 && count <= 2) return "bg-[#b6e3ff] dark:bg-[#0a3069]"; 
      if (count >= 3 && count <= 5) return "bg-[#54aeff] dark:bg-[#005cc5]";
      if (count >= 6 && count <= 9) return "bg-[#0969da] dark:bg-[#3192e6]"; 
      return "bg-[#0550ae] dark:bg-[#79c0ff]";                               
    }
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
                      title={day.date && day.count !== -1 ? `${day.count} contributions on ${day.date.toDateString()}` : ""}
                    />
                  ))
                ))}
              </div>
              <span className="text-[11px] text-[#AFB4BD] font-medium text-center">
                {month.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between w-full mt-1 text-[11px] text-[#AFB4BD]">
        <span className="italic">{footerMessage}</span>

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

export const StatsCard = ({title,count,actionText,activeDays,streakLabel,
  streakDays,data,themeColor,footerMessage}: StatsProps) => {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h2>

      <div className="rounded-xl border border-slate-200 dark:border-zinc-800/80 bg-[#f9f9f9] dark:bg-[#111111] shadow-sm p-5 md:p-6 w-full">

        <div className="flex flex-wrap items-baseline gap-4 md:gap-6 text-xs text-[#AFB4BD] mb-5">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-medium text-slate-900 dark:text-white leading-none">{count}</span>
            <span className="text-sm text-slate-500 dark:text-[#AFB4BD]">{actionText}</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span>Total active days:</span>
            <span className="font-medium text-slate-900 dark:text-white">{activeDays}</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span>{streakLabel}:</span>
            <span className="font-medium text-slate-900 dark:text-white">{streakDays}</span>
          </div>
        </div>

        <HeatmapGrid data={data} themeColor={themeColor} footerMessage={footerMessage} />

      </div>
    </section>
  );
};
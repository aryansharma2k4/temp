import { StatsCard } from "@/components/heatmap";
import getleetcodemap , {LeetCodeStats} from "@/lib/leetcode-calender"

export default async function StatsPage() {

  const leetcodedata = await getleetcodemap()

  const assignleetcodedata : LeetCodeStats = leetcodedata || {
    maxstreak: 0,
    activedays: 0,
    totalsubmissions: 0,
    finalArray: Array(365).fill(0)
  }

  const generateDummyData = () =>
    Array.from({ length: 365 }, () => {
      const rand = Math.random();
      if (rand > 0.9) return Math.floor(Math.random() * 2) + 3;
      if (rand > 0.7) return 2;
      if (rand > 0.4) return 1;
      return 0;
    });
  const githubHeatmapData = generateDummyData();

  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-12 space-y-12">
      
      <StatsCard 
        title="Competitive Programming"
        count={String(assignleetcodedata.totalsubmissions)}
        actionText="submissions in the past year"
        activeDays={String(assignleetcodedata.activedays)}
        streakLabel="Max streak"
        streakDays={String(assignleetcodedata.maxstreak)}
        data={assignleetcodedata.finalArray}
        themeColor="emerald"
        footerMessage="Solving problems, one test case at a time."
      />

      <StatsCard 
        title="Development Activity"
        count="1,204"
        actionText="commits in the past year"
        activeDays="284"
        streakLabel="Longest streak"
        streakDays="14"
        data={githubHeatmapData}
        themeColor="blue"
        footerMessage="Building, shipping, and pushing to production."
      />
    </div>
  );
}
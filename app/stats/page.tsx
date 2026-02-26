import { StatsCard } from "@/components/heatmap";

export default function StatsPage() {
  const generateDummyData = () =>
    Array.from({ length: 365 }, () => {
      const rand = Math.random();
      if (rand > 0.9) return Math.floor(Math.random() * 2) + 3;
      if (rand > 0.7) return 2;
      if (rand > 0.4) return 1;
      return 0;
    });

  const cpHeatmapData = generateDummyData();
  const githubHeatmapData = generateDummyData();

  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-12 space-y-12">
      
      <StatsCard 
        title="Competitive Programming"
        count="445"
        actionText="submissions in the past year"
        activeDays="144"
        streakLabel="Max streak"
        streakDays="39"
        data={cpHeatmapData}
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
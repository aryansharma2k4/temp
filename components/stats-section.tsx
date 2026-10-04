import { StatsCard } from "@/components/heatmap";
import getgithubmap from "@/lib/github-calender";

export default async function StatsSection() {
  const git = await getgithubmap();

  return (
    <StatsCard
      title="Development activity"
      unit="contributions"
      stats={git && { count: git.totalcontribution, activeDays: git.activedays, maxStreak: git.maxstreak, data: git.finalArray }}
      footerMessage="GitHub contributions"
    />
  );
}

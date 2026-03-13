import { StatsCard } from "@/components/heatmap";
import getcpmap , {cpStats} from "@/lib/merge-calender";
import getgithubmap , {GithubStats} from "@/lib/github-calender";

export default async function StatsPage() {

  const gitdata = await getgithubmap()

  const cpdata = await getcpmap()

  const assignleetcodedata : cpStats = cpdata || {
    maxstreak: 0,
    activedays: 0,
    totalsubmissions: 0,
    lcrating: 0,
    cfrating: 0,
    finalArray: Array(365).fill(0)
  }

  const assigngitdata : GithubStats = gitdata || {
    maxstreak: 0,
    activedays: 0,
    totalcontribution: 0,
    finalArray: Array(365).fill(0)
  }
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
        count={String(assigngitdata.totalcontribution)}
        actionText="commits in the past year"
        activeDays={String(assigngitdata.activedays)}
        streakLabel="Longest streak"
        streakDays={String(assigngitdata.maxstreak)}
        data={assigngitdata.finalArray}
        themeColor="blue"
        footerMessage="Building, shipping, and pushing to production."
      />
    </div>
  );
}
import { summarize } from "./activity";

export type GithubStats = {
    maxstreak: number;
    activedays: number;
    totalcontribution: number;
    finalArray: number[];
};

export default async function getgithubmap(): Promise<GithubStats | null>{
    try {
        const query = `query {
            user(login: "DharaniTharan06"){
                contributionsCollection {
                    contributionCalendar {
                        totalContributions
                        weeks {
                            contributionDays {
                                contributionCount
                                date
                            }
                        }
                    }
                }
            }
        }`;
        const res = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }),
            next: { revalidate: 3600 }
        });

        if(!res.ok) throw new Error(`Response status : ${res.status}`);

        const data = await res.json();
        const calender = data.data.user.contributionsCollection.contributionCalendar
        const weeks = calender.weeks;
        const totalcontribution = calender.totalContributions;

        const now = new Date();
        const todaySeconds = Math.floor(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()) / 1000);
        const todayDay = Math.floor(todaySeconds / 86400);
        const finalArray = Array(365).fill(0);
        for (const week of weeks) {
            for (const day of week.contributionDays) {
                const count = day.contributionCount;
                const dateStr = day.date;
                const [year, month, dayNum] = dateStr.split('-');
                const daySeconds = Math.floor(Date.UTC(Number(year), Number(month) - 1, Number(dayNum)) / 1000);
                const subDay = Math.floor(daySeconds / 86400);
                
                const daysAgo = todayDay - subDay;
                const ind = 364 - daysAgo;

                if (ind >= 0 && ind < 365) finalArray[ind] = count;
            }
        }
        return { ...summarize(finalArray), totalcontribution, finalArray };
    } catch (error) {
        return null;
    }   
}
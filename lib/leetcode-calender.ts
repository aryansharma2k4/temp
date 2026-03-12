export type LeetCodeStats = {
  maxstreak: number;
  activedays: number;
  totalsubmissions: number;
  finalArray: number[];
};

export default async function getleetcodemap(): Promise<LeetCodeStats | null>{
    try {
        const res = await fetch("https://alfa-leetcode-api.onrender.com/DharaniTharanD/calendar",{
            next: { revalidate: 3600 },
        })

        if(!res.ok) throw new Error(`Response status : ${res.status}`);

        const data = await res.json();

        const maxstreak = data.streak;
        const activedays = data.totalActiveDays;
        const calender =JSON.parse(data.submissionCalendar);

        const now = new Date();
        const utcMidnight = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
        const todaySeconds = Math.floor(utcMidnight.getTime() / 1000);

        const SecondInDay = 86400;
        let totalsubmissions = 0;

        const finalArray = Array(365).fill(0);
        for(let i = 0; i<365;i++){
            const Indextime = todaySeconds - (364-i)*SecondInDay;
            finalArray[i] = calender[String(Indextime)] || 0;
            totalsubmissions += finalArray[i];
        }
        return {maxstreak , activedays , totalsubmissions , finalArray}
    } catch (error) {
        return null;
    }   
}
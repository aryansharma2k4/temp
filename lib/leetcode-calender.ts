export type LeetCodeStats = {
  maxstreak: number;
  activedays: number;
  totalsubmissions: number;
  rating: number;
  finalArray: number[];
};

export default async function getleetcodemap(): Promise<LeetCodeStats | null>{
    try {
        const [calendarres , contestres] = await Promise.all([
            fetch("https://alfa-leetcode-api.onrender.com/DharaniTharanD/calendar",{ next: { revalidate: 3600 } }),
            fetch("https://alfa-leetcode-api.onrender.com/DharaniTharanD/contest",{ next: { revalidate: 3600 } })
        ]);

        if(!calendarres.ok || !contestres.ok) throw new Error(`Response status : 
        ${(!calendarres.ok)?calendarres.status : contestres.status}`);

        const cdata = await contestres.json();
        const rating = Math.floor(cdata?.contestRating || 0);

        const data = await calendarres.json();
        const maxstreak = data.streak;
        const activedays = data.totalActiveDays;
        const calender =JSON.parse(data.submissionCalendar);

        const now = new Date();
        const todaySeconds = Math.floor(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())/1000);

        const SecondInDay = 86400;
        let totalsubmissions = 0;

        const finalArray = Array(365).fill(0);
        for(let i = 0; i<365;i++){
            const Indextime = todaySeconds - (364-i)*SecondInDay;
            finalArray[i] = calender[String(Indextime)] || 0;
            totalsubmissions += finalArray[i];
        }
        return {maxstreak , activedays , totalsubmissions , rating , finalArray}
    } catch (error) {
        return null;
    }   
}
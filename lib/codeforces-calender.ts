export type CodeforcesStats = {
  maxstreak: number;
  activedays: number;
  totalsubmissions: number;
  rating: number;
  finalArray: number[];
};

export default async function getcodeforcesmap():  Promise<CodeforcesStats | null>{
    try {
        const [statusRes, infoRes] = await Promise.all([
            fetch("https://codeforces.com/api/user.status?handle=Thegost", { next: { revalidate: 3600 } }),
            fetch("https://codeforces.com/api/user.info?handles=Thegost", { next: { revalidate: 3600 } })
        ]);

        if(!statusRes.ok || !infoRes.ok) throw new Error(`Response status : ${!statusRes.ok?statusRes.status : infoRes.status}`);

        const idata = await infoRes.json()
        const rating = idata.result[0]?.rating || 0;

        const data = await statusRes.json();
        const submissions = data.result;

        const now = new Date();
        const todaySeconds = Math.floor(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()) / 1000);
        const today = Math.floor(todaySeconds / 86400)

        let totalsubmissions = 0;
        const finalArray = Array(365).fill(0);
        for (let i = 0; i < submissions.length; i++) {
            const sub = submissions[i];
            if (sub.verdict === "OK" || sub.verdict==="WRONG_ANSWER") {
                const daysAgo = today - Math.floor(sub.creationTimeSeconds/86400);
                const ind = 364 - daysAgo;
                if (ind >= 0 && ind < 365) {
                    finalArray[ind]++;
                    totalsubmissions++;
                }
            }
        }
        let activedays = 0;
        let maxstreak = 0
        let currstreak = 0
        for(let i=0;i<365;i++){
            if(finalArray[i]>0){
                currstreak++;
                activedays++;
                maxstreak = Math.max(maxstreak,currstreak)
            }else currstreak = 0;
        }
        return {maxstreak , activedays , totalsubmissions , rating , finalArray}
    } catch (error) {
        return null;
    }   
}
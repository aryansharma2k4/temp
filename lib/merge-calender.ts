import getcodeforcesmap  from "./codeforces-calender";
import getleetcodemap from "./leetcode-calender";

export type cpStats = {
    maxstreak: number;
    activedays: number;
    totalsubmissions: number;
    lcrating: number;
    cfrating: number;
    finalArray: number[];
}

export default async function getcpmap() : Promise<cpStats | null> {
    try {
        const leetcodedata = await getleetcodemap()
        const codeforcesdata = await getcodeforcesmap()

        const lcarray = leetcodedata?.finalArray || Array(365).fill(0);
        const cfarray = codeforcesdata?.finalArray || Array(365).fill(0);

        const finalArray = Array(365).fill(0)

        for(let i=0;i<365;i++) finalArray[i] = lcarray[i] + cfarray[i];

        const assignmergedata : cpStats = {
            maxstreak: Math.max((leetcodedata?.maxstreak||0),(codeforcesdata?.maxstreak||0)),
            activedays: Math.max((leetcodedata?.activedays||0),(codeforcesdata?.activedays||0)),
            totalsubmissions: (leetcodedata?.totalsubmissions || 0)+ (codeforcesdata?.totalsubmissions || 0),
            lcrating: leetcodedata?.rating||0,
            cfrating: codeforcesdata?.rating||0,
            finalArray: finalArray
        }

        return assignmergedata
    } catch (error) {
        return null;   
    }
}
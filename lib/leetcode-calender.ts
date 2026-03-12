import { error } from "console";

export default async function getleetcodemap(){
    try {
        const res = await fetch("https://alfa-leetcode-api.onrender.com/DharaniTharanD/calendar",{
            next: { revalidate: 3600 },
        })

        if(!res.ok) throw new Error(`Response status : ${res.status}`);

        const data = await res.json();

        const maxstreak = data.streak;
        const activedays = data.totalActiveDays;
        const calender =JSON.parse(data.submissionCalendar);
        console.log(calender);
    } catch (error) {
        return null;
    }   
}
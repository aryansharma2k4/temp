export default async function getcodeforcesmap(){
    try {
         const res = await fetch("https://alfa-leetcode-api.onrender.com/DharaniTharanD/calendar",{
            next: { revalidate: 3600 },
        })

        if(!res.ok) throw new Error(`Response status : ${res.status}`);

        const data = res.json();

    } catch (error) {
        return {};
    }   
}
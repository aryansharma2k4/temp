export default async function getcodeforcesmap(){
    try {
         const res = await fetch("https://alfa-leetcode-api.onrender.com/DharaniTharanD/contest",{
            next: { revalidate: 3600 },
        })

        if(!res.ok) throw new Error(`Response status : ${res.status}`);

        const data = await res.json();

        console.log(data);
    } catch (error) {
        return {};
    }   
}
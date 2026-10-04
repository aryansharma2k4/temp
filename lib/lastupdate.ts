export default async function getLastCommitDate() {
  try {
    const res = await fetch("https://api.github.com/repos/DharaniTharan06/Portfolio/commits?per_page=1", {
      next: { revalidate: 3600 },
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
      }
    });
    
    if (!res.ok) throw new Error("Failed");
    
    const data = await res.json();
    const dateString = data[0].commit.committer.date;
    
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  } catch (error) {
    return null;
  }
}
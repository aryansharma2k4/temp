export type LastPlayed = { title: string; artist: string; url: string };

// Most recently played Spotify track. Needs SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET and a
// SPOTIFY_REFRESH_TOKEN with the user-read-recently-played scope; returns null if unset or failing.
export default async function getLastPlayed(): Promise<LastPlayed | null> {
  const { SPOTIFY_CLIENT_ID: id, SPOTIFY_CLIENT_SECRET: secret, SPOTIFY_REFRESH_TOKEN: refresh } = process.env;
  if (!id || !secret || !refresh) return null;
  try {
    const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${id}:${secret}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ grant_type: "refresh_token", refresh_token: refresh }),
      next: { revalidate: 300 },
    });
    if (!tokenRes.ok) throw new Error(`Token status: ${tokenRes.status}`);
    const { access_token } = await tokenRes.json();

    const res = await fetch("https://api.spotify.com/v1/me/player/recently-played?limit=1", {
      headers: { Authorization: `Bearer ${access_token}` },
      next: { revalidate: 300 },
    });
    if (!res.ok) throw new Error(`Recently played status: ${res.status}`);
    const track = (await res.json()).items?.[0]?.track;
    if (!track) return null;
    return {
      title: track.name,
      artist: track.artists.map((a: { name: string }) => a.name).join(", "),
      url: track.external_urls.spotify,
    };
  } catch {
    return null;
  }
}

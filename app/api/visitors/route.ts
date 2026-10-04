// Visitor counter stored in Upstash Redis (REST API, no client library needed).
// POST increments and returns the new count. Until the env vars are set it returns a random
// placeholder flagged demo: true, which the client never caches.
export async function POST() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  // ponytail: random placeholder until Upstash is configured; switches to the real count automatically once the env vars exist.
  if (!url || !token) return Response.json({ count: 1000 + Math.floor(Math.random() * 9000), demo: true });
  try {
    const res = await fetch(`${url}/incr/portfolio:visitors`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Upstash status: ${res.status}`);
    const { result } = await res.json();
    return Response.json({ count: Number(result) });
  } catch {
    return Response.json({ count: null });
  }
}

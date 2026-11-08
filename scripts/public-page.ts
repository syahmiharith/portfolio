/** Follow public links with origin-scoped session cookies; never log cookie values. */
export async function fetchPublicPage(
  url: string,
  request: typeof fetch = fetch,
) {
  const cookies = new Map<string, Map<string, string>>();
  let current = new URL(url);
  for (let redirects = 0; redirects <= 5; redirects++) {
    const jar = cookies.get(current.origin);
    const response = await request(current, {
      redirect: "manual",
      signal: AbortSignal.timeout(25_000),
      headers: jar?.size
        ? {
            cookie: [...jar]
              .map(([key, value]) => `${key}=${value}`)
              .join("; "),
          }
        : {},
    });
    for (const value of response.headers.getSetCookie()) {
      const pair = value.split(";", 1)[0];
      const equals = pair.indexOf("=");
      if (equals < 1) continue;
      const scoped = cookies.get(current.origin) ?? new Map<string, string>();
      scoped.set(pair.slice(0, equals), pair.slice(equals + 1));
      cookies.set(current.origin, scoped);
    }
    const location = response.headers.get("location");
    if (![301, 302, 303, 307, 308].includes(response.status) || !location)
      return response;
    await response.arrayBuffer();
    current = new URL(location, current);
    if (!["http:", "https:"].includes(current.protocol))
      throw new Error("Unsupported public-link redirect protocol");
  }
  throw new Error("Public link exceeded five redirects");
}

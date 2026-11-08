import { test } from "node:test";
import assert from "node:assert/strict";
import { fetchPublicPage } from "../scripts/public-page";
test("public demo redirects reuse their session instead of creating repeated workspaces", async () => {
  const calls: string[] = [];
  const request = async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = new URL(String(input));
    calls.push(url.pathname);
    const cookie = new Headers(init?.headers).get("cookie");
    if (url.pathname === "/start")
      return new Response(null, {
        status: 303,
        headers: {
          location: "/",
          "set-cookie": "demo=opaque; HttpOnly; Secure; Path=/",
        },
      });
    return cookie === "demo=opaque"
      ? new Response("Demo ready")
      : new Response(null, { status: 303, headers: { location: "/start" } });
  };
  const response = await fetchPublicPage(
    "https://demo.example/",
    request as typeof fetch,
  );
  assert.equal(await response.text(), "Demo ready");
  assert.deepEqual(calls, ["/", "/start", "/"]);
});
test("a redirect cannot send one origin session cookie to another origin", async () => {
  const request = async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = new URL(String(input));
    if (url.hostname === "first.example")
      return new Response(null, {
        status: 302,
        headers: {
          location: "https://second.example/",
          "set-cookie": "session=private; HttpOnly",
        },
      });
    assert.equal(new Headers(init?.headers).get("cookie"), null);
    return new Response("ok");
  };
  assert.equal(
    (await fetchPublicPage("https://first.example/", request as typeof fetch))
      .status,
    200,
  );
});

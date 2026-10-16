/* Where the app syncs to.
 *
 * These two are defaults; Settings → Sync overrides them per device, which is
 * how you point a phone at a different backend without editing code. Leave
 * both empty and the app is local-only, exactly as it was before sync existed.
 *
 * The anon key is a public, client-side key by design — Supabase intends it to
 * ship in the browser, and on its own it opens nothing here, because both sync
 * functions demand the pairing code before they touch a row. Self-hosted
 * PostgREST needs no key at all; leave it blank there.
 *
 * The pairing code IS the secret. It lives only in each device's settings —
 * never in this file, never in the repo, never in a backup.
 */
const Config = {
  url: '',
  anonKey: '',
};

// open-next.config.ts — Cloudflare Workers par Next.js chalane ki setting.
// Saare pages build ke waqt ban jate hain (koi ISR nahi), is liye cache ke liye
// Cloudflare ka free "static assets" kaafi hai — KV/R2 (paid storage) ki zaroorat nahi.
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});

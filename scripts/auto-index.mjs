import { google } from "googleapis";
import { execSync } from "child_process";
import path from "path";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mzadev.com";
const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

if (!CLIENT_EMAIL || !PRIVATE_KEY) {
  console.log("⚠️ Google Indexing credentials missing. Skipping auto-index.");
  process.exit(0);
}

// 1. Git log se content folder ki .mdx files fetch karna
function getChangedMdxFiles() {
  try {
    const gitLogOutput = execSync("git log -1 --name-only --pretty=format:''", {
      encoding: "utf8",
    });

    const files = gitLogOutput
      .split("\n")
      .map((f) => f.trim())
      .filter((f) => f.startsWith("content/") && (f.endsWith(".mdx") || f.endsWith(".md")));

    return [...new Set(files)];
  } catch (err) {
    console.log("⚠️ Git history parse error. Skipping auto-indexing.");
    return [];
  }
}

// 2. Direct Slug URL Mapping Logic
function fileToUrl(filePath) {
  // e.g., content/blog/first-post.mdx -> first-post
  // e.g., content/pages/about-us.mdx -> about-us
  const fileName = path.basename(filePath, path.extname(filePath));

  if (fileName === "index" || fileName === "home") return SITE_URL;

  // Direct root slug format: mzadev.com/slug
  return `${SITE_URL}/${fileName}`;
}

async function runAutoIndex() {
  const changedFiles = getChangedMdxFiles();

  if (changedFiles.length === 0) {
    console.log("ℹ️ No new or modified MDX content files detected in this commit.");
    return;
  }

  console.log(`🚀 Found ${changedFiles.length} changed MDX file(s). Notifying Google...`);

  const auth = new google.auth.JWT(
    CLIENT_EMAIL,
    null,
    PRIVATE_KEY,
    ["https://www.googleapis.com/auth/indexing"],
    null
  );

  await auth.authorize();
  const indexing = google.indexing({ version: "v3", auth });

  for (const file of changedFiles) {
    const url = fileToUrl(file);
    try {
      await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: "URL_UPDATED",
        },
      });
      console.log(`✅ Google Indexing API notified successfully for: ${url}`);
    } catch (error) {
      console.error(`❌ Failed indexing for ${url}:`, error?.message || error);
    }
  }
}

runAutoIndex();
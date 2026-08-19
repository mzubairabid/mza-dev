import { google } from "googleapis";
import { execSync } from "child_process";
import path from "path";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mzadev.com";
const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

if (!CLIENT_EMAIL || !PRIVATE_KEY) {
  console.log("⚠️ Google Indexing API credentials missing. Skipping auto-index.");
  process.exit(0);
}

// 1. Git commit diff se pichli push ki MDX files detect karna
function getChangedMdxFiles() {
  try {
    const output = execSync("git diff HEAD~1 HEAD --name-only", { encoding: "utf8" });
    const files = output.split("\n").filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
    return files;
  } catch (err) {
    console.log("Git diff fetch error. Continuing build process safely.");
    return [];
  }
}

// 2. File path se clean URL banana
function fileToUrl(filePath) {
  const fileName = path.basename(filePath, path.extname(filePath));
  if (fileName === "index") return SITE_URL;
  return `${SITE_URL}/${fileName}`;
}

async function runAutoIndex() {
  const changedFiles = getChangedMdxFiles();

  if (changedFiles.length === 0) {
    console.log("ℹ️ No new or modified MDX files detected in this build.");
    return;
  }

  console.log(`🚀 Found ${changedFiles.length} changed MDX file(s). Requesting Google Instant Indexing...`);

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
      console.error(`❌ Failed to send indexing request for ${url}:`, error?.message || error);
    }
  }
}

runAutoIndex();
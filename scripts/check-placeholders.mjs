// npm run check:placeholders — batata hai kaunsi "[...]" values abhi khali hain
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const files = ["lib/site.ts", ...readdirSync("content").map((f) => join("content", f))];
let total = 0;
for (const file of files) {
  readFileSync(file, "utf8")
    .split("\n")
    .forEach((line, i) => {
      if (/"[^"]*\[[A-Z][^\]]*\][^"]*"/.test(line) && !line.trim().startsWith("//")) {
        total++;
        console.log(`${file}:${i + 1}  ${line.trim()}`);
      }
    });
}
console.log(total ? `\n${total} placeholder(s) khali hain (site par chhupe hue hain).` : "Koi placeholder khali nahi.");

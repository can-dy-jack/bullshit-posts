import { writeFileSync, existsSync, mkdirSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import chalk from "chalk";
import moment from "moment";
import { generateArticle } from "./generate.js";
import { randomPick } from "./random.js";

const url = import.meta.url;
const __dirname = dirname(fileURLToPath(url));

export function saveFile(data, title, min = 1000, max = 2000) {
  if (!title) {
    title = randomPick(data.title)();
  }
  const res = generateArticle(title, data, min, max);
  const ans = `${title}\n\n    ${res.join("\n    ")}`;

  const output_path = resolve(__dirname, "article"),
    output_file = resolve(
      output_path,
      `${moment().format("YYMMDD-hhmmss-")}${title}.txt`
    );
  if (!existsSync(output_path)) {
    mkdirSync(output_path);
  }
  console.log(`文件保存在${chalk.rgb(203, 85, 97).underline(output_file)}`);
  writeFileSync(output_file, ans);
}

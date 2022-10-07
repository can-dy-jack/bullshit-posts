import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { saveFile } from "./src/save.js";
import { options } from "./src/cmd.js";

const url = import.meta.url;
const __dirname = dirname(fileURLToPath(url));
const path = resolve(__dirname, "./data/index.json");
const fileText = readFileSync(path, {
  encoding: "utf-8",
});
const data = JSON.parse(fileText);

saveFile(data, options.title, options.min, options.max);


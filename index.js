import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import chalk from "chalk";
import moment from "moment";
import commandLineArgs from 'command-line-args';
import { generateArticle } from "./src/generate.js";
import { randomPick } from "./src/random.js";

const url = import.meta.url;
const __dirname = dirname(fileURLToPath(url));
const path = resolve(__dirname, "./data/index.json");
const fileText = readFileSync(path, { 
    encoding: "utf-8"
})
const data = JSON.parse(fileText);

function saveFile(data, title, min = 1000, max = 2000) {
    if(!title) {
        title = randomPick(data.title)()
    }
    const res = generateArticle(title, data, min, max);
    const ans = `${title}\n\n    ${res.join("\n    ")}`;

    const output_path = resolve(__dirname, "article"),
        output_file = resolve(output_path, `${moment().format("YYMMDD-hhmmss-")}${title}.txt`);
    if(!existsSync(output_path)) {
        mkdirSync(output_path);
    }
    console.log(`文件保存在${chalk.rgb(203, 85, 97).underline(output_file)}`);
    writeFileSync(output_file, ans);
}

// 配置我们的命令行参数
const optionDefinitions = [
    {name: 'title', alias: 't', type: String},
    {name: 'min', type: Number},
    {name: 'max', type: Number},
];
const options = commandLineArgs(optionDefinitions); // 获取命令行的输入

saveFile(data, options.title, options.min, options.max);


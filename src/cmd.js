import commandLineArgs from "command-line-args";
import commandLineUsage from "command-line-usage";

// 配置我们的命令行参数
const sections = [
  {
    header: "狗屁不通文章生成器",
    content: ["生成随机的狗屁不通文章", "测试用途"],
  },
  {
    header: "Options",
    optionList: [
      {
        name: "title",
        typeLabel: "{underline string}",
        description: "文章的主题。",
      },
      {
        name: "min",
        typeLabel: "{underline number}",
        description: "文章最小字数。",
      },
      {
        name: "max",
        typeLabel: "{underline number}",
        description: "文章最大字数。",
      },
      {
        name: "help",
        alias: "h",
        description: "打印帮助文档。",
      },
    ],
  },
];
const usage = commandLineUsage(sections); // 生成帮助文本
const optionDefinitions = [
  { name: "title", type: String },
  { name: "min", type: Number },
  { name: "max", type: Number },
  { name: "help", alias: "h" },
];
const options = commandLineArgs(optionDefinitions); // 获取命令行的输入
if ("help" in options) {
    console.log(usage);
    process.exit();
}
export { options };

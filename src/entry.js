import { generateArticle } from "./generate.js";
import { randomPick } from "./random.js";

const data = require("../data/index.json");

function loadFile(path) {
  if (path) {
    new Promise((resolve, _) => {
      const text = fetch(path).then((res) => res.json());
      resolve(text);
    }).then((t) => {
      return t;
    });
  }
  return data;
}
window.bullshitGenerator = { generateArticle, randomPick, loadFile };

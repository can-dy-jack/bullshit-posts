import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { randomPick } from "./src/random.js";
import { sentence } from "./src/createSentence.js";

const url = import.meta.url;
const path = resolve(dirname(fileURLToPath(url)), "./data/index.json");
const fileText = readFileSync(path, { 
    encoding: "utf-8"
})
const data = JSON.parse(fileText);
const {famous, bosh_before, bosh, said, conclude, title} = data;

const [pickFamous, pickBoshBefore, pickBosh, pickSaid, pickConclude, pickTile] =  [famous, bosh_before, bosh, said, conclude, title].map(i => randomPick(i));

console.log(sentence(pickFamous, {said: pickSaid, conclude: pickConclude}));
console.log(sentence(pickBosh, {title: pickTile}));

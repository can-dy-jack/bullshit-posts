const generate = document.getElementById("generate"),
    title = document.getElementById("title"),
    textArea = document.getElementById("text-area"),
    min = document.getElementById("min"),
    min_show = document.getElementById("min-show"),
    max = document.getElementById("max"),
    max_show = document.getElementById("max-show"),
    dele = document.getElementById("delete"),
    random = document.getElementById("random");

import { generateArticle } from "../src/generate.js";
import { randomPick } from "../src/random.js";

var min_nums = min.value, max_nums = max.value;
min.addEventListener('change', () => {
    min_nums = min.value;
    min_show.textContent = min.value;
})
max.addEventListener('change', () => {
    max_nums = max.value;
    max_show.textContent = max.value;
})
new Promise((resolve, reject) => {
    const text = fetch("../data/index.json").then(res => res.json());
    resolve(text);
}).then(data => {
    generate.addEventListener('click', () => {
        const res = generateArticle(title.value, data, min_nums, max_nums);
        let ans = `<h3>${title.value}</h3>`;
        for(let i =0 ;i<res.length;i++) {
            ans += `<p style="text-indent: 2em;">${res[i]}</p>`
        }
        textArea.innerHTML = ans;
    })
    random.onclick = () => {
        title.value = randomPick(data.title)();
    }
})
dele.onclick = () => {
    textArea.innerHTML = "<h5 style='color: gray;'>点击左侧按钮生成</h5>";
}
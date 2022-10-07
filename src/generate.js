import { randomInt, randomPick } from "./random.js";
import { sentence } from "./createSentence.js";

export function generateArticle(title, json, min = 600, max = 3000) {
    const _article_len = randomInt(min, max);
    const {famous, bosh_before, bosh, said, conclude} = json;
    const [pickFamous, pickBoshBefore, pickBosh, pickSaid, pickConclude] = [famous, bosh_before, bosh, said, conclude].map(i => randomPick(i));
    
    const article = [];
    let _len = 0;
    while(_len < _article_len) {
        let section = '', section_len = randomInt(200, 500);
        while(section.length < section_len || !/[.。?？!！]$/.test(section)) {
            const _n = randomInt(0, 100);
            if(_n < 20) {
                section += sentence(pickFamous, { said: pickSaid, conclude: pickConclude });
            } else if(_n < 50) {
                section += sentence(pickBoshBefore, { title }) + sentence(pickBosh, { title });
            } else {
                section += sentence(pickBosh, { title })
            }
        }
        _len += section.length;
        article.push(section);
    }
    return article;
}
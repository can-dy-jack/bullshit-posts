export function interact(questions){
    process.stdin.setEncoding("utf8");
    return new Promise((resolve, _) => {
        const ans = [];
        let i = 0;
        process.stdout.write(`${questions[0].text}(${questions[0].value})`)
        process.stdin.on("readable", () => {
            const inp = process.stdin.read().trim();
            ans.push(inp || questions[i].value);
            i++;
            if(i < questions.length) {
                process.stdin.read();
                process.stdout.write(`${questions[i].text}(${questions[i].value})`)
            } else {
                resolve(ans);
            }
        });
    });
}
export function sentence(pick, replaces) {
    let ans = pick();
    for(const key in replaces) {
        ans = ans.replace(new RegExp(`{{${key}}}`), replaces[key]());
    }
    return ans;
}
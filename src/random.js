export function randomInt(min, max) {
    // 返回 min 和 max 之间的随机值
    const _rd = Math.random();
    return Math.floor(min*(1-_rd) + max*_rd); // [min,max)
}
// 获取数组中随机元素
export function randomPick(arr) {
    let _lastPicked = -1;
    function pickElement() {
        let _rd = randomInt(0, arr.length);
        while(_lastPicked === _rd) {
            _rd = randomInt(0, arr.length);
        }
        _lastPicked = _rd;
        return arr[_rd];
    }
    return pickElement;
}

// const pick = randomPick([1,2,3,4,5,6,7,8,9]);
// for(let i = 0;i<100;i++) {
//     console.log(pick())
// }
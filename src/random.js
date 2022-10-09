export function randomInt(min, max) {
  const _rd = Math.random();
  return Math.floor(min * (1 - _rd) + max * _rd); // [min,max)
}
export function randomPick(arr) {
  let _lastPicked = -1;
  function pickElement() {
    let _rd = randomInt(0, arr.length);
    while (_lastPicked === _rd) {
      _rd = randomInt(0, arr.length);
    }
    _lastPicked = _rd;
    return arr[_rd];
  }
  return pickElement;
}
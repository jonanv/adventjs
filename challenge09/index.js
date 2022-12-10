// score: 60
// function countTime(leds) {
//     if (!leds.includes(0)) return 0;
//     const lastIndex = leds.length - 1;
//     const nextLeds = leds.map((led, currentIndex) => {
//         let current = leds[currentIndex];
//         if (current) return current;
//         let prevIndex = currentIndex - 1;
//         return leds[prevIndex >= 0 ? prevIndex : lastIndex];
//     });
//     return 7 + countTime(nextLeds);
// }

// score 300
// function countTime(leds) {
//     const array = leds.join('').split(/1/);
//     array[0] += array.splice(-1);
//     return Math.max(...array.map((led) => led.length)) * 7;
// }

// score: 360
// function countTime(leds) {
//     const arr = leds.join('').split(1);
//     let max = 0;
//     arr.forEach((el) => {
//         const time = el.length;
//         time > max && (max = time);
//     })
//     return Math.max(max * 7, (arr[0].length + arr[arr.length - 1].length) * 7);
// }

// score: 300
function countTime(leds) {
    const ledsOff = leds.join('').split('1');
    ledsOff[0] += ledsOff.pop();
    return Math.max(...ledsOff.map((ledOff) => { return ledOff.length })) * 7;
}

module.exports = countTime;

console.log(countTime([0, 1, 1, 0, 1]));  // 7
// 7 segundos ya que en el primer cambio
// todas las luces se encendieron
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

console.log(countTime([0, 0, 0, 1])) // 21
// 21 segundos ya que necesita tres cambios:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

console.log(countTime([0, 0, 1, 0, 0])) // 28
// 28 segundos ya que necesita cuatro cambios:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]

console.log(countTime([0, 0, 0, 0, 0, 0, 1, 0])) // 49
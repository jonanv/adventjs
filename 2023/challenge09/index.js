// score: 
function adjustLights(lights) {
    let firstLight = lights[0];
    let secondLight = firstLight !== '🟢' ? '🟢' : '🔴';
    let changeLight = 0;

    for (let i = 0; i < lights.length; i+=2) {
        if (firstLight !== lights[i]) changeLight++;
    }
    for (let j = 1; j < lights.length; j+=2) {
        if (secondLight !== lights[j]) changeLight++;
    }
    return changeLight;
}

// score: 370
// function adjustLights(lights) {
//     let a = 0;
//     let b = 0;
//     let x = ["🔴", "🟢"];
//     lights.forEach((l, i) => (l == x[i & 1] ? a++ : b++));
//     return Math.min(a, b);
// }

// score: 390 Achalogy
// function adjustLights(lights) {
//     let start = "";
//     let res = 0;

//     for (let l of lights) {
//         res += +(l == start);
//         start = [l, " "][+(l == start)];
//     }
//     return res;
// }

// score: 280 hecho con bitwise operators
// function adjustLights(lights) {
//     let a = 0, b = 0;
//     const length = lights.length;
//     for (let i = 0, n = 0; i < length; i++) {
//         n = (i % 2) - +(lights[i] === "🟢");
//         a += Math.abs(n);
//     }
//     b = length - a;
//     return Math.min(a, b);
// }

// score: 370
// function adjustLights(lights) {
//     const leds = {
//         "🔴": "🟢",
//         "🟢": "🔴",
//     };

//     return lights.reduceRight(
//         (acc, light, index) => {
//             if (light === lights[index - 1]) {
//                 acc++;
//                 lights[index - 1] = leds[light];
//             }
//             return acc;
//         },
//         0
//     );
// }

// score: 390
// function adjustLights(lights) {
//     const init = lights[0];
//     let rev = false;
//     let count1 = 0;
//     let count2 = 0;
//     for (const light of lights) {
//         count1 += rev == (light == init);
//         rev = !rev;
//     }
//     rev = true;
//     for (const light of lights) {
//         count2 += rev == (light == init);
//         rev = !rev;
//     }
//     count1 = Math.min(count1, count2);
//     return count1;
// }

module.exports = adjustLights;

console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])); // 1
console.log(adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"])); // 2
console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])); // 0
console.log(adjustLights(['🟢', '🔴', '🔴', '🟢', '🔴'])); // 2
console.log(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])); // 1

// -> 1 (cambias la cuarta luz a 🔴)
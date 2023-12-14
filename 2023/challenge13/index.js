// score: 290
function calculateTime(deliveries) {
    let HH = 60 * 60;
    let MM = 60;
    let ts = -7 * HH;

    for (const delivery of deliveries) {
        let [h, m, s] = delivery.split(':').map(Number);
        ts += h * HH + m * MM + s;
    }

    const sing = '-'.repeat(ts < 0);
    ts = Math.abs(ts);
    const hh = Math.floor(ts / HH).toString();
    ts %= HH;
    const mm = Math.floor(ts / MM).toString();
    ts %= MM;
    const ss = ts.toString();

    let response = sing
    response += (hh).padStart(2, '0') + ':';
    response += (mm).padStart(2, '0') + ':';
    response += (ss).padStart(2, '0');
    return response;
}

// socre: 290
// function calculateTime(deliveries) {
//     const signo = { true: '-', false: '' }
//     let time = 7 * 3600

//     for (const delivery of deliveries) {
//         const [hours, minutes, seconds] = delivery.split(':')
//         time += - hours * 3600 - minutes * 60 - seconds
//     }
//     const bool = time > 0
//     time = Math.abs(time)

//     const seconds = time % 60
//     const minutes = Math.trunc(time / 60) % 60
//     const hours = (Math.trunc(time / 60) - minutes) / 60

//     const formated_time = `${hours}`.padStart(2, '0') + ':'
//         + `${minutes}`.padStart(2, '0') + ':'
//         + `${seconds}`.padStart(2, '0')

//     return signo[bool] + formated_time
// }

module.exports = calculateTime;

console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00'])); // '-02:20:00'
console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00'])); // '00:30:00'
console.log(calculateTime([
    '00:45:00',
    '00:45:00',
    '00:00:30',
    '00:00:30'
])); // '-05:29:00'
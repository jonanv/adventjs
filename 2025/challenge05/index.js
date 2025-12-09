/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
// Score: 8
function timeUntilTakeOff(fromTime, takeOffTime) {
    // All your code here
    function getTimeStamp(value) {
        let time = value
            .replaceAll('*', '/')
            .replaceAll('|', ':')
            .replaceAll('@', ' ')
            .split(' ');
        let ts = time[0].concat(' ', time[1]);

        const fechaObj = new Date(ts);
        const timestamp = fechaObj.getTime();
        return Math.floor(timestamp / 1000);
    }

    return getTimeStamp(takeOffTime) - getTimeStamp(fromTime);
}

// function timeUntilTakeOff(fromTime, takeOffTime) {
//     const from = parseElfDate(fromTime);
//     const takeOff = parseElfDate(takeOffTime);

//     const diff = Math.floor((takeOff - from) / 1000);
//     return diff;
// }

// function parseElfDate(elfTime) {
//     // Formato: YYYY*MM*DD@HH|mm|ss NP
//     // Eliminar ' NP'
//     elfTime = elfTime.slice(0, -3);

//     // Separar fecha y hora
//     const [date, time] = elfTime.split('@');

//     // Fecha: YYYY*MM*DD
//     const [Y, M, D] = date.split('*').map(Number);

//     // Hora: HH|mm|ss
//     const [h, m, s] = time.split('|').map(Number);

//     // Se trata como UTC (sin TZs)
//     return Date.UTC(Y, M - 1, D, h, m, s);
// }

module.exports = timeUntilTakeOff;
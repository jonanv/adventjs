// score: 130
// function countHours(year, holidays) {
//     let hours = 0;
//     let daysOfWeek = [1, 2, 3, 4, 5];

//     holidays.map(holiday => {
//         let dayOfWeek = new Date(`${year}/${holiday}`).getDay();
//         if (daysOfWeek.includes(dayOfWeek)) hours += 2;
//     });

//     return hours;
// }

// score: 131
// function countHours(year, holidays) {
//     return holidays.reduce((hours, holiday) => {
//         let dayOfWeek = new Date(`${year}/${holiday}`).getDay();
//         if (dayOfWeek > 0 && dayOfWeek < 6) hours++;
//         return hours;
//     }, 0) * 2;
// }

// score: 131
function countHours(year, holidays) {
    let hours = 0;
    holidays.map(holiday => {
        let dayOfWeek = new Date(`${year}/${holiday}`).getDay();
        hours += (dayOfWeek > 0 && dayOfWeek < 6) ? 2 : 0;
    });
    return hours;
}

module.exports = countHours;

const year = 2022;
const holidays = ['01/06', '04/01', '12/25']; // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

hours = countHours(year, holidays); // 2 días -> 4 horas extra en el año
console.log(hours);
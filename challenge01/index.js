// function wrapping(gifts) {
//     const wrapped = [];
//     for (let i = 0; i < gifts.length; i++) {
//         let gift = gifts[i];
//         let wrap = '*'.repeat(gift.length + 2);
//         wrapped.push(`${ wrap }\n*${ gift }*\n${ wrap }`);
//     }
//     return wrapped;
// }

// function wrapping(gifts) {
//     return [...gifts.map(gift => {
//         let wrap = '*'.repeat(gift.length + 2);
//         let giftWrapped = `${ wrap }\n*${ gift }*\n${ wrap }`;
//         return giftWrapped;
//     })];
// }

// acore: 132
function wrapping(gifts) {
    return [...gifts.map(gift => {
        let wrap = '*'.repeat(gift.length + 2);
        let giftWrapped = [wrap, `*${gift}*`, wrap].join('\n');
        return giftWrapped;
    })];
}

module.exports = wrapping;

const gifts = ['book', 'game', 'socks'];
const wrapper = wrapping(gifts);
console.log(wrapper);
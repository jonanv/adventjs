function wrapping(gifts) {
    return [...gifts.map(gift => {
        let wrap = '*'.repeat(gift.length + 2);
        let giftWrapper = `${ wrap }\n*${ gift }*\n${ wrap }`;
        return giftWrapper;
    })];
}

const gifts = ['book', 'game', 'socks'];
const wrapper = wrapping(gifts);
console.log(wrapper);
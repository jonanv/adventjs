// score: 290
function organizeGifts(gifts) {
    const countGifts = gifts.match(/\d+/g);
    const nameGifts = gifts.match(/[^0-9]/g);
    let response = '';
    let index = 0;

    for (let number of countGifts) {
        const gift = nameGifts[index];
        let store = '';
    
        store += `[${gift}]`.repeat(number / 50);
        number %= 50;
    
        store += `{${gift}}`.repeat(number / 10);
        number %= 10;
    
        store += `(${gift.repeat(number)})`.repeat(+!!number);
        response += store;
        index++;
    };
    return response;
}

module.exports = organizeGifts;

const response = organizeGifts('76a11b');
console.log(response);
// '[a]{a}{a}(aaaaaa){b}(b)'

/* Explicación:

  76a: 76 regalos tipo 'a' se empaquetarían en 7 cajas y sobrarían 6 regalos, resultando en 1 palé [a] (por las primeras 5 cajas), 2 cajas sueltas {a}{a} y una bolsa con 6 regalos (aaaaaa)

  11b: 11 regalos tipo 'b' se empaquetarían en 1 caja y sobraría 1 regalo, resultando en 1 caja suelta {b} y una bolsa con 1 regalo (b)
*/
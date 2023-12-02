// score: 250
function manufacture(gifts, materials) {
    let giftsManufacure = [];

    gifts.map((gift) => {
        let made = true;
        let arrayGift = gift.split('');
        arrayGift.map((material) => {
            if (!materials.includes(material)) return made = false;
        });
        if (made) giftsManufacure.push(gift);
    });
    return giftsManufacure;
}

module.exports = manufacture;

const gifts = ['tren', 'oso', 'pelota'];
const materials = 'tronesa';

const giftsManufacure = manufacture(gifts, materials);
console.log(giftsManufacure);
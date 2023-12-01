function countSheeps(sheeps) {
    const redSheeps = [];

    sheeps.map((sheep) => {
        if (sheep.color.toLowerCase() === 'rojo' && 
            sheep.name.toLowerCase().includes('n') &&
            sheep.name.toLowerCase().includes('a')) {
            redSheeps.push(sheep);
        }
    });
    return redSheeps;
}

module.exports = countSheeps;

const sheeps = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' }
];
const redSheeps = countSheeps(sheeps);
console.log(redSheeps);
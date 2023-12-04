// score: 280
function decode(message) {
    const regex = /\(([^()]+)\)/g;
    const replacer = (_, group) => [...group].reverse().join("");

    return message
        .replace(regex, replacer)
        .replace(regex, replacer);
}

module.exports = decode;

const message = decode('hola (odnum)');
console.log(message); // hola mundo
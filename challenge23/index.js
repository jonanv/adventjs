// score: 10
// function executeCommands(commands) {
//     let memory = [0, 0, 0, 0, 0, 0, 0, 0];
//     let pointer = 0;
//     let actions = {
//         MOV: (value, memoryPointer) => {
//             if (isNaN(+value)) {
//                 memoryPointer = +memoryPointer.replace(/V\d/, '');
//                 value = +value.replace(/V\d/, '');
//                 memory[memoryPointer] = memory[value];
//             } else {
//                 memoryPointer = +memoryPointer.replace(/V\d/, '');
//                 memory[memoryPointer] = +value;
//             }
//             ++pointer;
//         },
//         DEC: (memoryPointer) => {
//             memoryPointer = +memoryPointer.replace(/V\d/, '');
//             memory[memoryPointer] = memory[memoryPointer] - 1;
//             memory[memoryPointer] = ((memory[memoryPointer] % 256) + 256) % 256;
//             ++pointer;
//         },
//         INC: (memoryPointer) => {
//             memoryPointer = +memoryPointer.replace(/V\d/, '');
//             memory[memoryPointer] = memory[memoryPointer] + 1;
//             memory[memoryPointer] = memory[memoryPointer] % 256;
//             ++pointer;
//         },
//         ADD: (base, add) => {
//             base = +base.replace(/V\d/, '');
//             add = +add.replace(/V\d/, '');
//             memory[base] += memory[add];
//             memory[base] = memory[base] % 256;
//             ++pointer;
//         },
//         JMP: (index) => {
//             pointer = memory[0] != 0 ? +index : pointer + 1;
//         },
//     };

//     while (pointer < commands.length) {
//         let [command, ...args] = commands[pointer].split(' ');
//         args = args[0].split(',');
//         actions[command](...args);
//     }
//     return memory;
// }

// score: 10
// function executeCommands(commands) {
//     const memory = {
//         V00: 0, V01: 0, V02: 0, V03: 0, V04: 0, V05: 0, V06: 0, V07: 0
//     };
//     let ptr = 0;

//     const commandsCB = {
//         'MOV': (args) => {
//             memory[args[1]] = (Number.isNaN(Number(args[0])))
//                 ? memory[args[0]]
//                 : Number(args[0]);
//             ptr++;
//         },
//         'DEC': (args) => {
//             memory[args[0]]--;
//             (memory[args[0]] < 0) && (memory[args[0]] += 256);
//             ptr++;
//         },
//         'INC': (args) => {
//             memory[args[0]]++;
//             (memory[args[0]] > 255) && (memory[args[0]] %= 256);
//             ptr++;
//         },
//         'ADD': (args) => {
//             memory[args[0]] += memory[args[1]];
//             memory[args[0]] %= 256;
//             ptr++;
//         },
//         'JMP': (args) => {
//             ptr = ((memory['V00'] !== 0) ? Number(args[0]) : ptr + 1);
//         }
//     };

//     while (ptr != commands.length) {
//         const [cmd, args] = commands[ptr].split(' ');
//         commandsCB[cmd](args.split(',').map(arg => {
//             return arg.startsWith("V")
//                 ? "V0" + (+arg.replace(/V\d/, '') % 8)
//                 : arg
//         }));
//     }
//     return Object.values(memory);
// }

// score: 10
function executeCommands(commands) {
    let registers = [0, 0, 0, 0, 0, 0, 0, 0];
    let values = [];
    let comm = [];
    let i = 0;

    while (i < commands.length) {
        comm = commands[i].split(/ /g);
        values = comm[1].split(/,/g);
        switch (comm[0]) {
            case 'MOV':
                if (values[0].includes('V')) {
                    registers[parseInt(values[1][2])] = registers[parseInt(values[0][2])];
                } else {
                    registers[parseInt(values[1][2])] = parseInt(values[0]);
                }
                break;
            case 'ADD':
                registers[parseInt(values[0][2])] += registers[parseInt(values[1][2])];
                break;
            case 'DEC':
                registers[parseInt(values[0][2])]--;
                break
            case 'INC':
                registers[parseInt(values[0][2])]++;
                break;
            case 'JMP':
                if (registers[0] > 0) i = values[0] - 1;
                break;
        }
        i++;
    }
    return registers.map((register) => {
        if (register > 255) return register - 256;
        else if (register < 0) return register + 256;
        else return register;
    });
}

module.exports = executeCommands;

console.log(
    executeCommands([
        'MOV 5,V00',  // V00 es 5
        'MOV 10,V01', // V01 es 10
        'DEC V00',    // V00 ahora es 4
        'ADD V00,V01' // V00 = V00 + V01 = 14
    ])
);
// Output: [14, 10, 0, 0, 0, 0, 0]

console.log(
    executeCommands([
        'MOV 255,V00', // V00 es 255
        'INC V00',     // V00 es 256, desborda a 0
        'DEC V01',     // V01 es -1, desborda a 255
        'DEC V01'      // V01 es 254
    ])
);
// Output: [0, 254, 0, 0, 0, 0, 0]

console.log(
    executeCommands([
        'MOV 10,V00', // V00 es 10
        'DEC V00',    // decrementa V00 en 1  <---┐
        'INC V01',    // incrementa V01 en 1      |
        'JMP 1',      // bucle hasta que V00 sea 0 ----┘
        'INC V06'     // incrementa V06 en 1
    ])
);
  // Output: [ 0, 10, 0, 0, 0, 0, 1, 0 ]
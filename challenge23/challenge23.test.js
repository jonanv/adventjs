const executeCommands = require('./index.js');

test('Test #01 - return type ', () => {
    expect(
        Array.isArray(executeCommands())
    ).toStrictEqual(true);
});

test("Test #02 - executeCommands(['MOV 5,V00','MOV 10,V01','DEC V00','ADD V00,V01',])", () => {
    expect(
        executeCommands([
            'MOV 5,V00',
            'MOV 10,V01',
            'DEC V00',
            'ADD V00,V01',
        ])
    ).toStrictEqual(
        [
            14,
            10,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    );
});

test("Test #03 - executeCommands(['MOV 255,V00','INC V00','DEC V01','DEC V01'])", () => {
    expect(
        executeCommands([
            'MOV 255,V00',
            'INC V00',
            'DEC V01',
            'DEC V01'
        ])
    ).toStrictEqual(
        [
            0,
            254,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    );
});

test("Test #04 - executeCommands(['MOV 10,V00','DEC V00','INC V01','JMP 1','INC V06'])", () => {
    expect(
        executeCommands([
            'MOV 10,V00',
            'DEC V00',
            'INC V01',
            'JMP 1',
            'INC V06'
        ])
    ).toStrictEqual(
        [
            0,
            10,
            0,
            0,
            0,
            0,
            1,
            0
        ]
    );
});

test("Test #05 - executeCommands(['MOV 10,V00','MOV V00,V01','MOV V01,V02','MOV V02,V03','MOV V03,V04'])", () => {
    expect(
        executeCommands([
            'MOV 10,V00',
            'MOV V00,V01',
            'MOV V01,V02',
            'MOV V02,V03',
            'MOV V03,V04'
        ])
    ).toStrictEqual(
        [
            10,
            10,
            10,
            10,
            10,
            0,
            0,
            0
        ]
    );
});
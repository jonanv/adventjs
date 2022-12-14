const getFilesToBackup = require('./index.js');

test('Test #01 - return type array', () => {
    expect(
        Array.isArray(getFilesToBackup(1546300800, [
            [1, 1546300800],
            [2, 1546300800],
            [1, 1546300900],
            [1, 1546301000],
            [3, 1546301100]
        ]))
    ).toStrictEqual(true);
});

test('Test #02 - getFilesToBackup(1546300800, [[ 1, 1546300800 ],[ 2, 1546300800 ],[ 1, 1546300900 ],[ 1, 1546301000 ],[ 3, 1546301100 ]])', () => {
    expect(
        getFilesToBackup(1546300800, [
                [1, 1546300800],
                [2, 1546300800],
                [1, 1546300900],
                [1, 1546301000],
                [3, 1546301100]
            ])
    ).toStrictEqual(
        [
            1,
            3
        ]
      );
});

test('Test #03 - getFilesToBackup(1546300600, [[ 1, 1546300800 ],[ 2, 1546300800 ],[ 1, 1546300900 ],[ 1, 1546301000 ],[ 3, 1546301100 ]])', () => {
    expect(
        getFilesToBackup(1546300600, [
            [ 1, 1546300800 ],
            [ 2, 1546300800 ],
            [ 1, 1546300900 ],
            [ 1, 1546301000 ],
            [ 3, 1546301100 ]
          ])
    ).toStrictEqual(
        [
            1,
            2,
            3
        ]
      );
});

test('Test #04 - getFilesToBackup(1556300600, [[ 1, 1546300800 ],[ 2, 1546300800 ],[ 1, 1546300900 ],[ 1, 1546301000 ],[ 3, 1546301100 ]])', () => {
    expect(
        getFilesToBackup(1556300600, [
            [ 1, 1546300800 ],
            [ 2, 1546300800 ],
            [ 1, 1546300900 ],
            [ 1, 1546301000 ],
            [ 3, 1546301100 ]
          ])
    ).toStrictEqual([]);
});

test('Test #05 - getFilesToBackup(1556300600, [])', () => {
    expect(
        getFilesToBackup(1556300600, [])
    ).toStrictEqual([]);
});
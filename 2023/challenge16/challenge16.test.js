const transformTree = require("./index");

test('Test #1 - Return un objeto', () => {
    expect(
        typeof(
            transformTree([])
        )
    ).toStrictEqual('object');
});

test('Test #2 - transformTree([])', () => {
    expect(
        transformTree([])
    ).toStrictEqual(null);
});

test('Test #3 - transformTree([1])', () => {
    expect(
        transformTree([1])
    ).toStrictEqual(
        {
            "value": 1,
            "left": null,
            "right": null
        }
    );
});

test('Test #4 - transformTree([1, 2, 3])', () => {
    expect(
        transformTree([1, 2, 3])
    ).toStrictEqual(
        {
            "value": 1,
            "left": {
                "value": 2,
                "left": null,
                "right": null
            },
            "right": {
                "value": 3,
                "left": null,
                "right": null
            }
        }
    );
});

test('Test #5 - transformTree([1, 2, 3, 4, 5])', () => {
    expect(
        transformTree([1, 2, 3, 4, 5])
    ).toStrictEqual(
        {
            "value": 1,
            "left": {
                "value": 2,
                "left": {
                    "value": 4,
                    "left": null,
                    "right": null
                },
                "right": {
                    "value": 5,
                    "left": null,
                    "right": null
                }
            },
            "right": {
                "value": 3,
                "left": null,
                "right": null
            }
        }
    );
});

test('Test #6 - transformTree([1, 2, 3, 4, 5, 6, 7])', () => {
    expect(
        transformTree([1, 2, 3, 4, 5, 6, 7])
    ).toStrictEqual(
        {
            "value": 1,
            "left": {
                "value": 2,
                "left": {
                    "value": 4,
                    "left": null,
                    "right": null
                },
                "right": {
                    "value": 5,
                    "left": null,
                    "right": null
                }
            },
            "right": {
                "value": 3,
                "left": {
                    "value": 6,
                    "left": null,
                    "right": null
                },
                "right": {
                    "value": 7,
                    "left": null,
                    "right": null
                }
            }
        }
    );
});

test('Test #7 - transformTree([17, 0, null, null, 1])', () => {
    expect(
        transformTree([17, 0, null, null, 1])
    ).toStrictEqual(
        {
            "value": 17,
            "left": {
                "value": 0,
                "left": null,
                "right": {
                    "value": 1,
                    "left": null,
                    "right": null
                }
            },
            "right": null
        }
    );
});

test('Test #8 - transformTree([3, 1, 0, 8, 12, null, 1])', () => {
    expect(
        transformTree([3, 1, 0, 8, 12, null, 1])
    ).toStrictEqual(
        {
            "value": 3,
            "left": {
                "value": 1,
                "left": {
                    "value": 8,
                    "left": null,
                    "right": null
                },
                "right": {
                    "value": 12,
                    "left": null,
                    "right": null
                }
            },
            "right": {
                "value": 0,
                "left": null,
                "right": {
                    "value": 1,
                    "left": null,
                    "right": null
                }
            }
        }
    );
});

test('Test #9 - transformTree([2, 7, 5, null, 6, null, 9, null, null, 1, 11, null, null, null, 10])', () => {
    expect(
        transformTree([2, 7, 5, null, 6, null, 9, null, null, 1, 11, null, null, null, 10])
    ).toStrictEqual(
        {
            "value": 2,
            "left": {
                "value": 7,
                "left": null,
                "right": {
                    "value": 6,
                    "left": {
                        "value": 1,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": 11,
                        "left": null,
                        "right": null
                    }
                }
            },
            "right": {
                "value": 5,
                "left": null,
                "right": {
                    "value": 9,
                    "left": null,
                    "right": {
                        "value": 10,
                        "left": null,
                        "right": null
                    }
                }
            }
        }
    );
});
const drawGift = require("./index");

test('Test #1 - Retorna un string', () => {
    expect(
        typeof(
            drawGift(4, '+')
        )
    ).toStrictEqual('string');
});

test('Test #2 - drawGift(4, "+")', () => {
    expect(
        drawGift(4, '+')
    ).toStrictEqual(
        "   ####\n  #++##\n #++#+#\n####++#\n#++#+#\n#++##\n####\n"
    );
});

test('Test #3 - drawGift(5, "*")', () => {
    expect(
        drawGift(5, "*")
    ).toStrictEqual(
        "    #####\n   #***##\n  #***#*#\n #***#**#\n#####***#\n#***#**#\n#***#*#\n#***##\n#####\n"
    );
});

test('Test #4 - drawGift(1, "^")', () => {
    expect(
        drawGift(1, "^")
    ).toStrictEqual(
        "#\n"
    );
});

test('Test #5 - drawGift(2, "&")', () => {
    expect(
        drawGift(2, "&")
    ).toStrictEqual(
        " ##\n###\n##\n"
    );
});

test('Test #6 - drawGift(10, "%")', () => {
    expect(
        drawGift(10, "%")
    ).toStrictEqual(
        "         ##########\n        #%%%%%%%%##\n       #%%%%%%%%#%#\n      #%%%%%%%%#%%#\n     #%%%%%%%%#%%%#\n    #%%%%%%%%#%%%%#\n   #%%%%%%%%#%%%%%#\n  #%%%%%%%%#%%%%%%#\n #%%%%%%%%#%%%%%%%#\n##########%%%%%%%%#\n#%%%%%%%%#%%%%%%%#\n#%%%%%%%%#%%%%%%#\n#%%%%%%%%#%%%%%#\n#%%%%%%%%#%%%%#\n#%%%%%%%%#%%%#\n#%%%%%%%%#%%#\n#%%%%%%%%#%#\n#%%%%%%%%##\n##########\n"
    );
});
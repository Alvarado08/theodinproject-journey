const calculator = require('./calculator');

test("addition of 5 + 2 should be 7", () => {
    expect(new calculator(5,2).add()).toBe(7);
});

test("subtraction of 10 - 5 should be 5", () => {
    expect(new calculator(10,5).subtract()).toBe(5);
});

test("division of 16 / 2 should be 8", () => {
    expect(new calculator(16,2).div()).toBe(8);
});

test("division of 8 / 0 should be false", () => {
    expect(new calculator(8,0).div()).toBe(false);
});

test("multiplication of 10 * 10 should be 100", () => {
    expect(new calculator(10,10).mul()).toBe(100);
})
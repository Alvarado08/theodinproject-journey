const reverseString = require('./reverseString');

test('world is reversed to dlrow', () => {
    expect(reverseString('world')).toBe('dlrow');
});
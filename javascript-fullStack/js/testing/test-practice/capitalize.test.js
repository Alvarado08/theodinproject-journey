const capitalize = require('./capitalize');

test('hello is capitalized', () => {
    expect(capitalize('hello')).toBe('Hello');
});
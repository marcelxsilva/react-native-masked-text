import { OnlyNumbersMask } from '../lib/masks';

test('getType results only-numbers', () => {
    var expected = 'only-numbers';
    var received = OnlyNumbersMask.getType();

    expect(received).toBe(expected);
});

test('abc123 results 123', () => {
    var mask = new OnlyNumbersMask();
    var expected = '123';
    var received = mask.getValue('abc123');

    expect(received).toBe(expected);
});

test('1 results 1', () => {
    var mask = new OnlyNumbersMask();
    var expected = '1';
    var received = mask.getValue('1');

    expect(received).toBe(expected);
});

test('abc results ', () => {
    var mask = new OnlyNumbersMask();
    var expected = '';
    var received = mask.getValue('abc');

    expect(received).toBe(expected);
});
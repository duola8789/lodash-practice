/**
 * Created by zh on 2019/12/25.
 */
const { castArray } = require('../dist/lang');

describe('Test Lang Methods', () => {
  it('castArray', () => {
    expect(castArray(1)).toEqual([1]);
    expect(castArray({ a: 1 })).toEqual([{ a: 1 }]);
    expect(castArray('abc')).toEqual(['abc']);
    expect(castArray(null)).toEqual([null]);
    expect(castArray(undefined)).toEqual([undefined]);
    expect(castArray(true)).toEqual([true]);
    expect(castArray()).toEqual([]);
    const arr = [1, 2, 3];
    expect(castArray(arr) === arr).toBeTruthy();
  });
});

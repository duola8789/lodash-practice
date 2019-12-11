/**
 * Created by zh on 2019/12/11.
 */
const sum = require('../src/demo');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
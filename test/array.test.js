/**
 * Created by zh on 2019/12/11.
 */
const _  = require('lodash');
const { chunk, compact, concat, difference } = require('../src/array');

test('test function of chunk ', () => {
  const target = ['a', 'b', 'c', 'd'];
  expect(chunk(target, 2)).toEqual(_.chunk(target, 2));
  expect(chunk(target, 3)).toEqual(_.chunk(target, 3));
});

test('test function of compact ', () => {
  expect(compact(['a', 'b', 'c', 'd'])).toEqual(_.compact(['a', 'b', 'c', 'd']));
  expect(compact([0, 1, false, 2, '', 3],)).toEqual(_.compact([0, 1, false, 2, '', 3]));
});

test('test function of concat ', () => {
  const array = [1];
  const other1 = concat(array, 2, [3], [[4]]);
  const other2 = _.concat(array, 2, [3], [[4]]);

  expect(other1).toEqual(other2);
  expect(array).toEqual([1]);
});

test('test function of difference ', () => {
 expect(difference([2, 1], [2, 3])).toEqual([1]);
 expect(difference([2, 1, 2, 3], [3, 4], [3, 2])).toEqual([1]);
 expect(difference([-0, 0], [-0, 0])).toEqual([]);
 expect(difference([1, NaN, 3], [NaN, 5, NaN])).toEqual([1, 3]);
});
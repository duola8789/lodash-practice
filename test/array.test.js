/**
 * Created by zh on 2019/12/11.
 */
const _  = require('lodash');
const { chunk, compact } = require('../src/array');

test('test function of chunk ', () => {
  const target = ['a', 'b', 'c', 'd'];
  expect(chunk(target, 2)).toEqual(_.chunk(target, 2));
  expect(chunk(target, 3)).toEqual(_.chunk(target, 3));
});

test('test function of compact ', () => {
  expect(compact(['a', 'b', 'c', 'd'])).toEqual(_.compact(['a', 'b', 'c', 'd']));
  expect(compact([0, 1, false, 2, '', 3],)).toEqual(_.compact([0, 1, false, 2, '', 3]));
});
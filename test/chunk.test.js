/**
 * Created by zh on 2019/12/11.
 */
const _  = require('lodash');
const chunk = require('../src/chunk');

const target = ['a', 'b', 'c', 'd'];

test('test function of chunk ', () => {
  expect(chunk(target, 2)).toEqual(_.chunk(target, 2));
  expect(chunk(target, 3)).toEqual(_.chunk(target, 3));
});
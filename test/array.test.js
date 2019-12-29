/**
 * Created by zh on 2019/12/11.
 */
const _ = require('lodash');
const {
  chunk,
  compact,
  concat,
  difference,
  differenceBy,
  differenceWith,
  drop,
  dropRight,
  dropWhile
} = require('../dist/array');

test('chunk ', () => {
  const target = ['a', 'b', 'c', 'd'];
  expect(chunk(target, 2)).toEqual(_.chunk(target, 2));
  expect(chunk(target, 3)).toEqual(_.chunk(target, 3));
});

test('compact ', () => {
  expect(compact(['a', 'b', 'c', 'd'])).toEqual(_.compact(['a', 'b', 'c', 'd']));
  expect(compact([0, 1, false, 2, '', 3])).toEqual(_.compact([0, 1, false, 2, '', 3]));
});

test('concat ', () => {
  const array = [1];
  const other1 = concat(array, 2, [3], [[4]]);
  const other2 = _.concat(array, 2, [3], [[4]]);

  expect(other1).toEqual(other2);
  expect(array).toEqual([1]);
});

test('difference ', () => {
  expect(difference([2, 1], [2, 3])).toEqual([1]);
  expect(difference([2, 1, 2, 3], [3, 4], [3, 2])).toEqual([1]);
  expect(difference([-0, 0], [-0, 0])).toEqual([]);
  expect(difference([1, NaN, 3], [NaN, 5, NaN])).toEqual([1, 3]);
});

test('differenceBy ', () => {
  expect(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([1.2]);
  expect(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x')).toEqual([{ x: 2 }]);
});

test('differenceWith ', () => {
  const base = [
    { x: 1, y: 2 },
    { x: 2, y: 1 }
  ];
  const compared = [{ x: 1, y: 2 }];
  const comparator = _.isEqual;
  expect(differenceWith(base, compared, comparator)).toEqual([base[1]]);
});

test('drop ', () => {
  const array = [1, 2, 3];
  expect(drop(array)).toEqual([2, 3]);
  expect(drop(array, 2)).toEqual([3]);
  expect(drop(array, false)).toEqual([1, 2, 3]);
  expect(drop(array, 0)).toEqual([1, 2, 3]);
  expect(drop(array, -5)).toEqual([1, 2, 3]);
  expect(drop(array, 44)).toEqual([]);
});

test('dropRight ', () => {
  const array = [1, 2, 3];
  expect(dropRight(array)).toEqual([1, 2]);
  expect(dropRight(array, 2)).toEqual([1]);
  expect(dropRight(array, false)).toEqual([1, 2, 3]);
  expect(dropRight(array, 0)).toEqual([1, 2, 3]);
  expect(dropRight(array, -5)).toEqual([1, 2, 3]);
  expect(dropRight(array, 5)).toEqual([]);
});

test('dropWhile ', () => {
  const users = [
    { user: 'barney', active: false },
    { user: 'fred', active: false },
    { user: 'pebbles', active: true }
  ];
  expect(
    dropWhile(users, function(o) {
      return !o.active;
    })
  ).toEqual([{ user: 'pebbles', active: true }]);
  expect(dropWhile(users, { user: 'barney', active: false })).toEqual([
    { user: 'fred', active: false },
    { user: 'pebbles', active: true }
  ]);
  expect(dropWhile(users, ['active', false])).toEqual([{ user: 'pebbles', active: true }]);
  expect(dropWhile(users, 'active')).toEqual([
    { user: 'barney', active: false },
    { user: 'fred', active: false },
    { user: 'pebbles', active: true }
  ]);
});

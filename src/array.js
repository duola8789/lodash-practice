/**
 * Created by zh on 2019/12/11.
 */
function chunk(array, size = 1) {
  let result = [];
  let i = 0;
  while (i < array.length) {
    result.push(array.slice(i, i + size));
    i += size;
  }
  return result;
}

function compact(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}

function concat(array, ...values) {
  return [].concat(array, ...values);
}

const flat = array => array.reduce((total, current) => total.concat(...current), []);

function difference(array, ...values) {
  let result = [];
  let targets = [...new Set(flat(values))];

  for (let i = 0; i < array.length; i++) {
    let exist = false;
    for (let j = 0; j < targets.length; j++) {
      // eslint-disable-next-line no-self-compare
      if ((array[i] !== array[i] && targets[j] !== targets[j]) || array[i] === targets[j]) {
        exist = true;
        break;
      }
    }
    if (!exist) {
      result.push(array[i]);
    }
  }
  return result;
}

module.exports = {
  chunk,
  compact,
  concat,
  difference,
};
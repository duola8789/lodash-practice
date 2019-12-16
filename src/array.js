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

module.exports = {
  chunk,
  compact,
  concat,
};
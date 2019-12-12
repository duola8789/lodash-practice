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

module.exports = chunk;
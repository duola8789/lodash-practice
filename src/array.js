/**
 * Created by zh on 2019/12/11.
 */
const _flat = array => array.reduce((total, current) => total.concat(...current), []);

const _unique = array => [...new Set(_flat(array))];

const _isFunction = val => Object.prototype.toString.call(val) === '[object Function]';
const _isString = val => Object.prototype.toString.call(val) === '[object String]';

const _baseDifference = (array, values, iteratee) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let exist = false;
    for (let j = 0; j < values.length; j++) {
      const base = _isFunction(iteratee) ? iteratee(array[i]) : array[i];
      const compared = _isFunction(iteratee) ? iteratee(values[j]) : values[j];
      // eslint-disable-next-line no-self-compare
      if ((base !== base && compared !== compared) || base === compared) {
        exist = true;
        break;
      }
    }
    if (!exist) {
      result.push(array[i]);
    }
  }
  return result;
};

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

function difference(array, ...values) {
  return _baseDifference(array, _unique(values));
}

function differenceBy(array, ...rest) {
  let values;
  let iteratee = null;
  
  if (rest.length > 1) {
    const lastArg = rest[rest.length - 1];
    values = rest.slice(0, -1);
    if(_isString(lastArg)) {
      iteratee = item => item[lastArg];
    } else if(_isFunction(lastArg)) {
      iteratee = lastArg;
    } else {
      iteratee = null;
    }
  } else {
    values = rest;
  }
  return _baseDifference(array, _unique(values), iteratee);
}

module.exports = {
  chunk,
  compact,
  concat,
  difference,
  differenceBy,
};
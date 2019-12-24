/**
 * Created by zh on 2019/12/11.
 */
const _ = require('lodash');

const _flat = array => array.reduce((total, current) => total.concat(...current), []);
const _unique = array => [...new Set(_flat(array))];

const _isFunction = val => Object.prototype.toString.call(val) === '[object Function]';
const _isString = val => Object.prototype.toString.call(val) === '[object String]';
const _isObject = val => Object.prototype.toString.call(val) === '[object Object]';
const _isArray = val => Object.prototype.toString.call(val) === '[object Array]';

const _getLastArg = args => ([args[args.length - 1], args.slice(0, -1)]);


const _arrayIncludesWith = (array, value, comparator) => {
  for (let i = 0; i < array.length; i++) {
    if (comparator(array[i], value)) {
      return true;
    }
  }
  return false;
};

// eslint-disable-next-line max-params
const _baseDifference = (array, values, iteratee, comparator) => {
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
      if (_isFunction(comparator)) {
        if (!_arrayIncludesWith(values, array[i], comparator)) {
          result.push(array[i]);
        }
      } else {
        result.push(array[i]);
      }

    }
  }
  return result;
};

// TODO
function isEqual(a, b) {
  return _.isEqual(a, b);
}

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
    const lastArg = _getLastArg(rest)[0];
    values = _getLastArg(rest)[1];
    if (_isString(lastArg)) {
      iteratee = item => item[lastArg];
    } else if (_isFunction(lastArg)) {
      iteratee = lastArg;
    } else {
      iteratee = null;
    }
  } else {
    values = rest;
  }
  return _baseDifference(array, _unique(values), iteratee);
}

function differenceWith(array, ...rest) {
  let values;
  let comparator = null;

  if (rest.length > 1) {
    const lastArg = _getLastArg(rest)[0];
    values = _getLastArg(rest)[1];
    if (_isFunction(lastArg)) {
      comparator = lastArg;
    }
  } else {
    values = rest;
  }
  return _baseDifference(array, _unique(values), null, comparator);
}


function drop(array, n = 1) {
  return array.slice(Number(n) ? n : 0);
}

function dropRight(array, n = 1) {
  // return drop([...array].reverse(), n).reverse();
  return array.slice(0, Number(-n) ? -n : array.length);
}

function dropWhile(array, identity) {
  let n = -1;
  let i = 0;
  while (i < array.length) {
    if (_isFunction(identity)) {
      if (!identity(array[i], i, array)) {
        n = i;
        break;
      }
    } else if (_isObject(identity)) {
      if (!isEqual(identity, array[i])) {
        n = i;
        break;
      }
    } else if (_isArray(identity)) {
      const [key, value] = identity;
      if (array[i][key] !== value) {
        n = i;
        break;
      }
    } else if (_isString(identity)) {
      if (!array[i][identity]) {
        n = i;
        break;
      }
    }
    i++;
  }
  return drop(array, n);
}

module.exports = {
  chunk,
  compact,
  concat,
  difference,
  differenceBy,
  differenceWith,
  drop,
  dropRight,
  dropWhile,
};
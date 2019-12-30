/**
 * Created by zh on 2019/12/25.
 */

const castArray = <T>(...rest: T[]): T[] => {
  if (rest.length > 0) {
    const target: T = rest[0];
    return Array.isArray(target) ? target : [target];
  }
  return [];
};

const clone = <T>(value: T): T => {
  let result: any = {};

  if (Array.isArray(value)) {
    result = <any[]>value.slice(0);
  } else if (typeof value === 'object') {
    for (const i in value) {
      result[i] = value[i];
    }
    console.log(Array.isArray(result));
    return result;
  }

  return result;
};

module.exports = {
  castArray,
  clone
};

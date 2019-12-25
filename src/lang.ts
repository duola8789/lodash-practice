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

module.exports = {
  castArray
};

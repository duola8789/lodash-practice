/**
 * Created by zh on 2019/12/25.
 */
const castArray = (...rest) => {
    if (rest.length > 0) {
        const target = rest[0];
        return Array.isArray(target) ? target : [target];
    }
    return [];
};
const clone = (value) => {
    let result = {};
    if (Array.isArray(value)) {
        result = value.slice(0);
    }
    else if (typeof value === 'object') {
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
//# sourceMappingURL=lang.js.map
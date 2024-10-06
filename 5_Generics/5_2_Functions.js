"use strict";
// Функции
function double(array) {
    return array.concat(array);
}
function fill(array, value) {
    return array.fill(value);
}
const res1 = double(['a', 'b', 'c']);
const res2 = double([1, 2, 3]);
res1.map(item => item.concat('s'));
res2.map(item => item.toFixed());
const res3 = fill(['a', 'b', 'c'], 1);
const res4 = fill([1, 2, 3], false);
function merge(a, b) {
    return Object.assign({}, a, b);
}
const res5 = merge({ a: 1 }, { b: 2, c: { d: 3 } });

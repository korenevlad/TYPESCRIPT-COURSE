"use strict";
// Оператор keyof
const obj = { a: 1, b: 2, c: 'a' };
function getValue(obj, key) {
    return obj[key];
}
const resss1 = getValue(obj, 'b');

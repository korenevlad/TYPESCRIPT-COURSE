"use strict";
//  9. Подробнее о типизации функций
function logg(data) {
    console.log(data);
}
function summ(a, b, callback) {
    const result = a + b;
    callback(result);
    return a + b;
}
let fn;
fn = summ;
logg(fn(1, 2, logg));

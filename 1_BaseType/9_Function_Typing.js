"use strict";
function logg(data) {
    console.log(data);
}
function summ(a, b) {
    return a + b;
}
let fn;
fn = summ;
logg(fn(1, 2));

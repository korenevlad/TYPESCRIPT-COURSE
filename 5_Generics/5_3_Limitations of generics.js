"use strict";
//  Ограничения дженериков
function log5(data) {
    console.log(data);
    return data;
}
let ress1 = log5('i am string');
let ress2 = log5(42);
//let ress3 = log5(true) // error

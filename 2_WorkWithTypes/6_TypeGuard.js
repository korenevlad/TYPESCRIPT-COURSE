"use strict";
//  6.Защитники типа (Type Guard)
function isBoolean(val) {
    return typeof val === 'boolean';
}
function isString(val) {
    return typeof val === 'string';
}
function logFlag(flag) {
    if (isBoolean(flag)) {
        console.log('dfdfdfdffd');
    }
    else if (isString(flag)) {
        console.log('222222');
    }
}
logFlag(true);
logFlag('test');

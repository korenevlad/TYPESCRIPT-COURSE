"use strict";
//  Введение
const array = ['a', 'b', 'c'];
const array2 = [1, 5];
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('promise has been resolved');
    });
});
promise.then(value => console.log(value));

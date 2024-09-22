"use strict";
//  2.Литералы (Literal Types)
function convert(data, type) {
    if (type == 'text') {
        return JSON.stringify(data);
    }
    else if (type == 'json') {
        return { ...data };
    }
}
console.log(convert({ a: 1 }, 'text'));
console.log(convert({ b: 2 }, 'json'));

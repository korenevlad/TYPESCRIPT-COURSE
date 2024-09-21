"use strict";
//  2. Строки. Логический тип. Базовая типизация функций
const string = 'Hello TypeScript';
function transform(str, uppercase) {
    if (uppercase) {
        return str.toUpperCase();
    }
    return str.toLowerCase();
}
const arrowTransform = (str, uppercase) => {
    if (uppercase) {
        return str.toUpperCase();
    }
    return str.toLowerCase();
};
console.log(transform(string));

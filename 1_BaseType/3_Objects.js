"use strict";
// 3.Объекты
const person = {
    name: 'Vladilen',
    surname: 'Minin',
    age: 29,
    address: {
        city: 'moscow',
        street: 'lenina',
    },
};
function fullname(obj) {
    return obj.name + ' ' + obj.surname;
}
console.log(fullname(person));

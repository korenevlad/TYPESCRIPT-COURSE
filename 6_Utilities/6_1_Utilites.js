"use strict";
const key = 'name'; // и присваиваем один из двух (name или age)
//  Typeof
const str1 = 'hello';
const user = { age: 21, name: "Vlad" };
function createAndValidate(name, age) {
    const newUser = {};
    if (name.length !== 0) {
        newUser.name = name;
    }
    if (age > 18) {
        newUser.age = age;
    }
    return newUser;
}
// Readonly
const user2 = { age: 18, name: "Elena" };
const userrr2 = {
    age: 20,
    name: 'Roman'
};
// ReturnType, Parameters 
function log6(data, num) {
    console.log(data, num);
    return false;
}
class Userrr4 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

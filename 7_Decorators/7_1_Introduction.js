"use strict";
//  1.Введение
class User7 {
    name;
    isProgrammer;
    constructor(name) {
        this.name = name;
    }
    sayMyName() {
        console.log(this.name);
    }
}
function makeProgrammer(user) {
    user.isProgrammer = true;
    return user;
}
const user7 = makeProgrammer(new User7("Vlad"));
console.log(user7.isProgrammer);
user7.sayMyName();

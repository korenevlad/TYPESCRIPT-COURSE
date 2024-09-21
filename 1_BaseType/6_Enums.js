"use strict";
//  6.Enums
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 0] = "admin";
    Roles[Roles["user"] = 1] = "user";
})(Roles || (Roles = {}));
const person1 = {
    role: Roles.admin
};
const person2 = {
    role: Roles.user
};
function check(person) {
    if (person.role == Roles.admin) {
        console.log('эта админ');
    }
    else {
        console.log('эта юзер');
    }
}
check(person1);
check(person2);

"use strict";
//  Классы (синтаксис, методы, геттеры, сеттеры, наследование)
class Human {
    _date;
    constructor(date) {
        this._date = date ?? new Date();
    }
    isProgrammer() {
        return false;
    }
}
class User1 extends Human {
    _name;
    _hobbies = [];
    constructor(name, date) {
        super(date); // инициализация конструктора базового класса
        this._name = name;
    }
    get hobbies() {
        return this._hobbies;
    }
    set name(name) {
        this._name = name;
    }
    addHobbies(hobby) {
        this._hobbies.push(hobby);
    }
    isProgrammer() {
        console.log(super.isProgrammer()); // вызов метода базового класса
        return true;
    }
}
const user1 = new User1('Vladislav', new Date);

"use strict";
// Классы (модификаторы доступа,
//         Статические методы и свойства. Модификатор readonly)
class Figure {
    static BASE_TYPE = "FIGURE";
    _size = 10;
    _color = 'red';
    _id;
    constructor() {
        this._id = Math.random();
    }
    getId() {
        return this._id;
    }
}
class Box extends Figure {
    static TYPE = "Box";
    static logId() {
        console.log(Math.random());
    }
    #weigth = 30; // так же новый модификатор доступа private
    getInfo() {
        return {
            size: this._size,
            color: this._color,
            id: this.getId(),
            weigth: this.#weigth
        };
    }
}
const box = new Box();
console.log(box.getInfo());

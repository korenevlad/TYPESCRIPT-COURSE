"use strict";
// Классы (модификаторы доступа)
class Figure {
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

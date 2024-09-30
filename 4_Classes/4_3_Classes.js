"use strict";
// Классы (свойства)
// Суть такая, что можно не прописывать поля и присваивать их в конструкторе.
// Можно просто добавить модификаторы доступа параметрам конс-ра
class Car {
    model;
    color;
    constructor(model, color) {
        this.model = model;
        this.color = color;
    }
}
const ford = new Car('ford', 'red');
ford.model;

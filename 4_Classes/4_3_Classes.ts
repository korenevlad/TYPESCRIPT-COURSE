// Классы (свойства)

// Суть такая, что можно не прописывать поля и присваивать их в конструкторе.
// Можно просто добавить модификаторы доступа параметрам конс-ра
class Car {
    constructor(public model: string, private color: string) {}
}

const ford = new Car('ford', 'red')
ford.model
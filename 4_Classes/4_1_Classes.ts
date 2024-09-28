//  Классы (синтаксис, методы, геттеры, сеттеры, наследование)

class Human {
    _date: Date

    constructor(date: Date){
        this._date = date ?? new Date()
    }

    isProgrammer(): boolean{
        return false;
    }
}


class User1 extends Human{
    _name: string
    _hobbies: string[] = []

    constructor(name: string, date: Date){
        super(date) // инициализация конструктора базового класса
        this._name = name
    }

    get hobbies(): string[]{
        return this._hobbies
    }

    set name(name: string){
        this._name = name
    }

    addHobbies(hobby: string): void{
        this._hobbies.push(hobby)
    }

    override isProgrammer(): boolean {
        console.log(super.isProgrammer()) // вызов метода базового класса
        return true
    }
}

const user1 = new User1('Vladislav', new Date)
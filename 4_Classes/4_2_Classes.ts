// Классы (модификаторы доступа,
//         Статические методы и свойства. Модификатор readonly)

class Figure {
static readonly BASE_TYPE = "FIGURE"

    _size: number = 10
    _color: string = 'red'
    private _id: number

    constructor (){
        this._id = Math.random()
    }
    protected getId(): number{
        return this._id
    }
}

class Box extends Figure {
    static readonly TYPE: string = "Box"

    static logId() {
        console.log(Math.random())
    }

    #weigth: number = 30 // так же новый модификатор доступа private

    getInfo(){
        return{
            size: this._size,
            color: this._color,
            id: this.getId(),
            weigth: this.#weigth
        }
    }
}

const box = new Box()
console.log(box.getInfo())

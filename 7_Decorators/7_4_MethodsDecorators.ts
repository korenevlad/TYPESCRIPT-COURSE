//  Декораторы методов

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor){
     const newDescriptor: PropertyDescriptor = {
        enumerable: false,
        configurable: true,
        get() {
            return descriptor.value.bind(this) // байндим тут 
        }
     }
     return newDescriptor
}

class User75{
    constructor(public name: string){}

    @Autobind
    sayMyName() {
        console.log(this.name)
    }
}

const user75 = new User75('Vladislav')

function nameSayer(fn: Function) {
    fn()
}

//nameSayer(user75.sayMyName.bind(user75)) // можно решить вычисление контекста так, но мы можем создать декоратор
nameSayer(user75.sayMyName)
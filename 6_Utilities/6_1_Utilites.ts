//  Keyof
interface Userrr {
    name: string
    age: number
}
type UserKey = keyof Userrr // забираем из интерфейса его свойства
const key: UserKey = 'name' // и присваиваем один из двух (name или age)


//  Typeof
const str1: string = 'hello'
type MyString = typeof str1 // забираем из объекта его свойства (MyString хранит string)
const user: Userrr = {age: 21, name:"Vlad"}
type UserKey2 = keyof typeof user


//  Rartial
interface Userrr2{
    age: number
    name: string
}
function createAndValidate(name: string, age: number): Userrr2{
    const newUser: Partial<Userrr2> = {}
    if(name.length !== 0){
        newUser.name = name
    }
    if(age > 18){
        newUser.age = age
    }
    return newUser as Userrr2
}


// Readonly
const user2: Readonly<Userrr2> = {age: 18, name: "Elena"}


//  Required
type RequiredUser = Required<Userrr2>
const userrr2: RequiredUser = {
    age: 20,
    name: 'Roman'
}


//  Pick, Omit
interface Userrr3{
    age: number
    name: string
    hobbies: string[]
}
type UserData = Omit<Userrr3, 'hobbies'>
type UserData2 = Pick<Userrr3, 'hobbies'>


// Extract, Exclude
type UserStringFields = Extract<'age' | 'some' | Userrr3, string>
type User2 = Exclude<'a' | 'b' | Userrr3, string>


// ReturnType, Parameters 
function log6(data: string[], num: number): boolean {
    console.log(data, num)
    return false
}
type LogReturn = ReturnType<typeof log6>
type LogParams = Parameters<typeof log6>[1]

class Userrr4 {
    constructor(public name: string, public age?: number){}
}
type UserParams = ConstructorParameters<typeof Userrr4>[0]
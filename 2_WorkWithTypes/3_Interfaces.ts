//  3.Интерфейсы

// type User = {
//     name: string,
//     age: number,
//     hobbies: string[]
// }

interface User {
    name: string,
    age: number,
    hobbies?: string[]
}

interface Address {
    city: string,
    street: string
}

interface FullUser extends User, Address {
    date: Date
}

const person3: FullUser = {
    name: 'Vladislav',
    age: 29,
    hobbies: ['a', 'b', 'c'],
    city: "Moscow",
    street: "ddfdf",
    date: new Date()
}

interface UserMap {
    [id: number]: FullUser
}

const userMap: UserMap = {
    1: person3,
    2: person3,
    3: person3
}
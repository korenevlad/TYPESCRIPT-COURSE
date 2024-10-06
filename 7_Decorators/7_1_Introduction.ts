//  1.Введение

class User7 {
    isProgrammer?: boolean
    constructor(public name: string){}
    sayMyName(){
        console.log(this.name)
    }
}

function makeProgrammer(user: User7){
    user.isProgrammer = true
    return user
}

const user7 = makeProgrammer(new User7("Vlad"))
console.log(user7.isProgrammer)
user7.sayMyName()

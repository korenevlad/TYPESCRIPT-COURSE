//  6.Enums

enum Roles {
    admin,
    user
}

const person1 = {
    role: Roles.admin
}

const person2 = {
    role: Roles.user
}

function check(person: {role: Roles}){
    if(person.role == Roles.admin){
        console.log('эта админ')
    }
    else{
        console.log('эта юзер')
    }
}

check(person1)
check(person2)
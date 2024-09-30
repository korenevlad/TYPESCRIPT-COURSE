// Оператор keyof

const obj = {a:1, b: 2, c: 'a'}

function getValue<T extends object, R extends keyof T>(obj: T, key: R){
    return obj[key]
}

const resss1 = getValue(obj, 'b')
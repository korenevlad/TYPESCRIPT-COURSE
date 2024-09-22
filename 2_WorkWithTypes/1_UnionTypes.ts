//  1.Объединения (Union Types)

function compute(p1: number | string, p2: number | string) {
    if(typeof p1 == 'number' && typeof p2 == 'number'){
        return p1 + p2
    }
    return p1.toString() + ' ' + p2.toString()
}

console.log(compute(4,5))
console.log(compute('hello','world'))

function logError(err: string | string[]) {
    if(Array.isArray(err)){
        return err.reduce((acc, cur) => acc += ' ' + cur, '')
    }
    else{
        console.log(err)
    }
}

console.log(logError(['e','44fs','erer']))
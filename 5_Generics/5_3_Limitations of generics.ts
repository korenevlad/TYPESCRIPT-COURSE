//  Ограничения дженериков

function log5<T extends string | number>(data: T): T{
    console.log(data)
    return data
}

let ress1 = <string>log5('i am string')
let ress2 = log5(42) as number
//let ress3 = log5(true) // error
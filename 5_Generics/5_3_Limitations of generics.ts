//  Ограничения дженериков

function logg<T extends string | number>(data: T): T{
    console.log(data)
    return data
}

let ress1 = <string>logg('i am string')
let ress2 = logg(42) as number
let ress3 = logg(true) // error
//  9. Подробнее о типизации функций

function logg(data: any): void{
    console.log(data)
}

function summ(a: number
    , b: number
    , callback: (d: any) => void): number 
{
    const result = a + b
    callback(result)
    return a + b 
}

let fn: (n1: number, n2: number, cb: (d: any) => void ) => number

fn = summ

logg(fn(1,2, logg))
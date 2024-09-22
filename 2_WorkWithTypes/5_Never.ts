// 5.Never

function throwError(message: string): never{
    throw new Error(message)
}

function loop(): never {
    while(true){}
}

function rec(): never{
    return rec()
}
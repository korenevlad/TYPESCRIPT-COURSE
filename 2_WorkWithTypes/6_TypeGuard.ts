//  6.Защитники типа (Type Guard)

function isBoolean(val: string | boolean): val is boolean {
    return typeof val === 'boolean'
}

function isString(val: string | boolean): val is string
{
    return typeof val === 'string'
}

function logFlag(flag: string | boolean) {
    if(isBoolean(flag)){
        console.log('dfdfdfdffd')
    }
    else if(isString(flag)){
        console.log('222222')
    }
}

logFlag(true)
logFlag('test')
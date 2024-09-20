// 2. Строки. Логический тип. Базовая типизация функций

const string = 'Hello TypeScript'

function transform(str: string, uppercase?: boolean): string {
    if (uppercase) {
        return str.toUpperCase()
    }
    return str.toLowerCase()
}

const arrowTransform = (str: string, uppercase?: boolean): string => {
    if (uppercase) {
        return str.toUpperCase()
    }
    return str.toLowerCase()
}

console.log(transform(string))
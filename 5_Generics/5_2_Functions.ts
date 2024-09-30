// Функции

function double<T>(array: T[]): T[] {
    return array.concat(array)
}

function fill<T>(array: any[], value: T): T[]{
    return array.fill(value)
}

const res1 = double<string>(['a', 'b', 'c'])
const res2 = double<number>([1,2,3])

res1.map(item => item.concat('s'))
res2.map(item => item.toFixed())

const res3 = fill(['a', 'b', 'c'], 1)
const res4 = fill([1,2,3], false)

function merge<T, R>(a: T, b: R): T & R{
    return Object.assign({}, a, b)
}

const res5 = merge({a:1}, {b:2, c: {d: 3}})
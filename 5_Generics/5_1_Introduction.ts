//  Введение

const array:Array<string> = ['a', 'b', 'c']
const array2: Array<number> = [1, 5]

const promise = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve('promise has been resolved')
    })
})

promise.then(value => console.log(value))
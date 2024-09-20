// 4.Массивы

const names: string[] = ['vladilen', 'igor', 'elena']
names.push('eva')
// names.push(42)

for (let name of names) {
    console.log(name.toUpperCase())
}

const lengths = names
    .filter((n) => n !== 'igor')
    .map((n) => n.length)
    .reduce((acc, cur) => (acc += cur), 0)

console.log(lengths)
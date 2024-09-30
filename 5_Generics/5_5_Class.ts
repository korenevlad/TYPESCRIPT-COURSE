// 5.Классы

class Collection<T extends number | string >{
    constructor(private _items: T[]){}

    add(value: T){
        this._items.push(value)
    }

    get items(): T[]{
        return this._items
    }
}

const col1 = new Collection<number>([1, 2, 3])
col1.add(4)

const col2 = new Collection<string>(['a','b'])
col2.add('c')

class List<R> extends Collection<string>{
    constructor(public type: R) {
        super(['a'])
    }
}

const list1 = new List('frfr')
const list2 = new List (100)
"use strict";
// 5.Классы
class Collection {
    _items;
    constructor(_items) {
        this._items = _items;
    }
    add(value) {
        this._items.push(value);
    }
    get items() {
        return this._items;
    }
}
const col1 = new Collection([1, 2, 3]);
col1.add(4);
const col2 = new Collection(['a', 'b']);
col2.add('c');
class List extends Collection {
    type;
    constructor(type) {
        super(['a']);
        this.type = type;
    }
}
const list1 = new List('frfr');
const list2 = new List(100);

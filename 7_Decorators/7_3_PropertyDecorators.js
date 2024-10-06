"use strict";
//  7.4 Декораторы свойства
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function MaxChildren(limit) {
    return function (target, key) {
        let value;
        const get = () => value;
        const set = (newValue) => {
            if (newValue > limit) {
                value = limit;
                console.warn("Вы превысиди лимит детей. Опа");
            }
            else {
                value = newValue;
            }
        };
        Object.defineProperty(target, key, {
            get,
            set,
        });
    };
}
class User74 {
    children;
    constructor(children) {
        this.children = children;
    }
}
__decorate([
    MaxChildren(10)
], User74.prototype, "children", void 0);
const user74 = new User74(100);
const user742 = new User74(5);

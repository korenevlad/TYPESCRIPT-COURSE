"use strict";
//  Декораторы методов
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Autobind(_, _2, descriptor) {
    const newDescriptor = {
        enumerable: false,
        configurable: true,
        get() {
            return descriptor.value.bind(this); // байндим тут 
        }
    };
    return newDescriptor;
}
class User75 {
    name;
    constructor(name) {
        this.name = name;
    }
    sayMyName() {
        console.log(this.name);
    }
}
__decorate([
    Autobind
], User75.prototype, "sayMyName", null);
const user75 = new User75('Vladislav');
function nameSayer(fn) {
    fn();
}
//nameSayer(user75.sayMyName.bind(user75)) // можно решить вычисление контекста так, но мы можем создать декоратор
nameSayer(user75.sayMyName);

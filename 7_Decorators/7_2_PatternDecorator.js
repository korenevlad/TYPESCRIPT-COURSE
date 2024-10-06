"use strict";
//  2,3. Паттерн “Декоратор”. Декораторы класса 
//  ! Для работы добавить .html файл
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component7(props) {
    return function (constructor) {
        const node = document.querySelector(props.selector);
        const instance = new constructor("Vladislav");
        if (node) {
            node.insertAdjacentHTML('afterbegin', props.template);
            node.querySelector('span').textContent = instance.name;
        }
    };
}
let UserComponent7 = class UserComponent7 {
    name;
    constructor(name) {
        this.name = name;
        console.log('Constructor');
    }
};
UserComponent7 = __decorate([
    Component7({
        selector: '#app',
        template: `<h1>This is User Component</h1>
    <h2>User name is <span></span>></h2>`
    })
], UserComponent7);

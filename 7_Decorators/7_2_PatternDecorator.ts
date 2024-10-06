//  2,3. Паттерн “Декоратор”. Декораторы класса 
//  ! Для работы добавить .html файл

interface ComponentProps7 { // Это параметры, которые передаём в функцию обёртку - компонент
    template: string
    selector: string
}

function Component7(props: ComponentProps7){    // Функция, которая выполняет обёртку над функцией декоратором
    return function(constructor: any){  // Функция декоратор - используем замыкание (можем юзать параметры из функции-обёртки)
        const node = document.querySelector(props.selector)
        const instance = new constructor("Vladislav")

        if(node){
            node.insertAdjacentHTML('afterbegin', props.template)
            node.querySelector('span')!.textContent = instance.name
        }
    }
}

@Component7({   // Передайм параметры в компонент
    selector: '#app',
    template: `<h1>This is User Component</h1>
    <h2>User name is <span></span>></h2>`
})
class UserComponent7 {  // Класс, в котором храним нужные данные по конструктору
    constructor(public name: string){ 
        console.log('Constructor')
    }
}
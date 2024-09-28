//  Классы (Реализация интерфейсов классами)

interface Lifecycle {
    onInit(): void
    onDestroy?(abort: boolean): void // укзава "?" можно не реализовывать интерфейс
}

interface ComponentOnChange {
    hasChanged: boolean
    onChange(data: number): boolean
}

class Component implements Lifecycle, ComponentOnChange{
    onInit(): void {
        console.log("Component on init")
    }

    // onDestroy(abort: boolean): void {
    //     if(abort) {
    //         console.log("Component on destroy")
    //     }
    // }

    hasChanged: boolean = true

    onChange(data: number): boolean {
        if(data > 1){
            return true
        }
        return false
    }
}
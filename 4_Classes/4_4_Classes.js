"use strict";
//  Классы (Реализация интерфейсов классами)
class Component {
    onInit() {
        console.log("Component on init");
    }
    // onDestroy(abort: boolean): void {
    //     if(abort) {
    //         console.log("Component on destroy")
    //     }
    // }
    hasChanged = true;
    onChange(data) {
        if (data > 1) {
            return true;
        }
        return false;
    }
}

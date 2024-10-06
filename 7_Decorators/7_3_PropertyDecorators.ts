//  7.4 Декораторы свойства

function MaxChildren(limit: number){
    return function(target: Object, key: string | symbol){
        let value: number

        const get = () => value
        
        const set = (newValue: number) => {
            if (newValue > limit){
                value = limit
                console.warn("Вы превысиди лимит детей. Опа")
            }
            else{
                value = newValue
            }
        }
  
        Object.defineProperty(target, key, {
            get,
            set,
        })
    }
}

class User74 {

    @MaxChildren(10)
    children: number

    constructor(children: number){
        this.children = children
    }
}
  
const user74 = new User74(100)
const user742 = new User74(5)
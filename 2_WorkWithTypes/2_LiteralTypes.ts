//  2.Литералы (Literal Types)

type OutputType = 'text' | 'json' | 'data'

function convert(data: object, type: OutputType){
    if(type == 'text'){
        return JSON.stringify(data)
    }
    else if (type == 'json'){   
        return { ...data}
    }
}

console.log(convert({a: 1}, 'text'))
console.log(convert({b: 2}, 'json'))
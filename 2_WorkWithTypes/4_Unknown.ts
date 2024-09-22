//  4.Unknown

let r: unknown = 42

let w = r === 10

//let h = r + 10 // errror

if(typeof r === 'number'){
    let h = r + 10
}
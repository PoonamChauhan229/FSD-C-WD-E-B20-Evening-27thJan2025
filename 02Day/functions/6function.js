// arrow functions
// es6 >> advanced feature 
// =>

function compute(a,b){
    console.log(a+b)
}
// compute(2,3)

// aanoymous 
let compute1=function(a,b){
     console.log(a+b)
 }
//  compute1(2,3)

// 3 lines to writes + 1line >> invoking >> 4ines

//2 lines

// single line functions
// function + functionName + {} +return not be there
// let varaiableName=()=>//block of code
// varaiableName()
let test=()=>console.log(2+2)
test()

let multilpy=(a,b)=>console.log(a*b)
multilpy(6,7)
multilpy(16,7)

let subtract=(a,b)=>a-b
console.log(subtract(10,5))
console.log(subtract(100,5))

// multiline functions
// function + functionName >>not needed
// need >> {} || return 


let test1=()=>{
    console.log("Hello")
    console.log("Guvi")
    console.log("Geek")
}
test1()

let test2=()=>{
    return"Hello"
}
console.log(test2())


// arr=[12,23,45]
// 12+23+45 =80